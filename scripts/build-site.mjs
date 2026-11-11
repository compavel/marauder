#!/usr/bin/env node
/*
  Assemble the deployable site into _dist using an allowlist.
  Internal documents stay in the repository but never reach the published site.
*/

import { rmSync, mkdirSync, cpSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, '_dist');
const entries = ['index.html', 'contact.html', 'terms.html', '404.html', 'product', 'assets'];
const toPosix = (p) => p.split(sep).join('/');

for (const entry of entries) {
  if (!existsSync(join(root, entry))) {
    console.error(`Missing required entry: ${entry}`);
    process.exit(1);
  }
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const entry of entries) {
  cpSync(join(root, entry), join(out, entry), { recursive: true });
}

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else files.push(full);
  }
})(out);

const forbidden = files.filter((file) => {
  const rel = toPosix(relative(out, file));
  return rel.endsWith('.md') || rel.endsWith('.yml') || rel.endsWith('.yaml') || rel.startsWith('_');
});

if (forbidden.length) {
  console.error('Internal files leaked into _dist:');
  for (const file of forbidden) console.error(`  ${toPosix(relative(out, file))}`);
  process.exit(1);
}

const bytes = files.reduce((sum, file) => sum + statSync(file).size, 0);
console.log(`Assembled ${files.length} files, ${(bytes / 1024 / 1024).toFixed(2)} MB`);
console.log(files.map((file) => '  ' + toPosix(relative(out, file))).join('\n'));
