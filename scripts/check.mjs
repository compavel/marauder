#!/usr/bin/env node
/*
  Static checks for the Marauder site. No dependencies, runs locally and in CI.
  Exits 1 when any page breaks a rule.
*/

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skipDirs = new Set(['.git', '_dist', '_arsip', 'docs', 'scripts', '.github', 'assets', 'node_modules']);
const toPosix = (p) => p.split(sep).join('/');

function collectPages(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (skipDirs.has(name)) continue;
      collectPages(full, out);
    } else if (name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

const pages = collectPages(root).sort();
const errors = [];
const warnings = [];
const cspValues = new Map();
const idCache = new Map();

function fail(page, message) {
  errors.push(`${page}: ${message}`);
}

function idsOf(file) {
  if (!idCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
}

for (const file of pages) {
  const page = toPosix(relative(root, file));
  const html = readFileSync(file, 'utf8');

  const title = html.match(/<title>([^<]*)<\/title>/);
  if (!title || !title[1].trim()) fail(page, 'missing or empty <title>');

  const description = html.match(/<meta name="description" content="([^"]*)">/);
  if (!description || !description[1].trim()) fail(page, 'missing or empty meta description');

  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  if (h1Count !== 1) fail(page, `expected exactly one <h1>, found ${h1Count}`);

  const csp = html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)">/);
  if (!csp) fail(page, 'missing CSP meta');
  else {
    if (!csp[1].includes("script-src 'self'")) fail(page, "CSP does not restrict script-src to 'self'");
    if (!csp[1].includes("object-src 'none'")) fail(page, "CSP is missing object-src 'none'");
    cspValues.set(page, csp[1]);
  }

  if (!/<meta name="referrer" content="strict-origin-when-cross-origin">/.test(html)) {
    fail(page, 'missing strict-origin-when-cross-origin referrer meta');
  }

  for (const [img] of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt\s*=/.test(img)) fail(page, `image without alt: ${img.slice(0, 60)}`);
  }

  if (/\sstyle\s*=\s*"/.test(html)) fail(page, 'inline style attribute found');

  for (const [handler] of html.matchAll(/\son[a-z]+\s*=/gi)) {
    fail(page, `inline event handler found: ${handler.trim()}`);
  }

  for (const [, jsonLd] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(jsonLd);
    } catch (error) {
      fail(page, `invalid JSON-LD: ${error.message}`);
    }
  }

  for (const [, attr, rawValue] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const value = rawValue.trim();
    if (!value) continue;

    if (/^javascript:/i.test(value)) {
      fail(page, `${attr}="${value}" uses javascript:`);
      continue;
    }
    if (/^(mailto:|tel:|data:)/i.test(value)) continue;

    if (/^https?:/i.test(value) || value.startsWith('//')) {
      if (attr === 'src') fail(page, `external ${attr}: ${value}`);
      else warnings.push(`${page}: external link ${value}`);
      continue;
    }

    if (value.startsWith('/')) {
      fail(page, `${attr}="${value}" is root-absolute and will break under a subpath`);
      continue;
    }

    const [pathPart, hash] = value.split('#');
    const [cleanPath] = pathPart.split('?');
    const target = cleanPath ? resolve(dirname(file), cleanPath) : file;
    const resolved = cleanPath && cleanPath.endsWith('/') ? join(target, 'index.html') : target;

    if (!existsSync(resolved)) {
      fail(page, `${attr}="${value}" points to a missing file`);
      continue;
    }

    if (hash && resolved.endsWith('.html') && !idsOf(resolved).has(hash)) {
      fail(page, `${attr}="${value}" points to a missing id "${hash}"`);
    }
  }
}

const cspSet = new Set(cspValues.values());
if (cspSet.size > 1) errors.push('CSP meta differs between pages');

const contact = pages.find((p) => p.endsWith('contact.html'));
if (contact) {
  const html = readFileSync(contact, 'utf8');
  if (!/<form[^>]*\bmethod="post"/.test(html)) {
    errors.push('contact.html: form is missing method="post"');
  }
}

const script = join(root, 'assets', 'js', 'main.js');
if (existsSync(script)) {
  const source = readFileSync(script, 'utf8');
  for (const pattern of ['innerHTML', 'outerHTML', 'insertAdjacentHTML', 'document.write', 'eval(', 'new Function']) {
    if (source.includes(pattern)) errors.push(`assets/js/main.js: forbidden pattern "${pattern}"`);
  }
}

console.log(`Checked ${pages.length} pages`);
for (const warning of warnings) console.log(`  warn  ${warning}`);
for (const error of errors) console.log(`  FAIL  ${error}`);

if (errors.length) {
  console.error(`\n${errors.length} problem(s) found`);
  process.exit(1);
}

console.log('\nAll checks passed');
