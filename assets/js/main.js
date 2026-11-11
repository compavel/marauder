/* Marauder — interaksi. Tanpa dependency. Semua fitur punya perilaku tanpa JS. */

(function () {
  'use strict';

  /* ---------- Header: state setelah digulir ---------- */
  var scrollQueued = false;
  function syncHeader() {
    document.body.classList.toggle('is-scrolled', window.scrollY > 200);
    scrollQueued = false;
  }
  window.addEventListener(
    'scroll',
    function () {
      if (scrollQueued) return;
      scrollQueued = true;
      window.requestAnimationFrame(syncHeader);
    },
    { passive: true }
  );
  syncHeader();

  /* ---------- Menu mobile ---------- */
  var menu = document.querySelector('[data-menu]');
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var menuClose = document.querySelector('[data-menu-close]');
  var lastFocus = null;

  function focusables() {
    if (!menu) return [];
    return Array.prototype.slice
      .call(menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter(function (el) {
        return el.offsetParent !== null;
      });
  }

  function openMenu() {
    if (!menu || !menuToggle) return;
    lastFocus = document.activeElement;
    menu.hidden = false;
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    var first = focusables()[0];
    if (first) first.focus();
  }

  function closeMenu(returnFocus) {
    if (!menu || !menuToggle) return;
    menu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (returnFocus !== false && lastFocus) lastFocus.focus();
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (menu.hidden) openMenu();
      else closeMenu();
    });
  }
  if (menuClose) {
    menuClose.addEventListener('click', function () {
      closeMenu();
    });
  }
  if (menu) {
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a[href]')) closeMenu(false);
    });
    menu.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== 'Tab') return;
      var items = focusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- Accordion: satu terbuka per grup ---------- */
  document.querySelectorAll('[data-accordion]').forEach(function (group) {
    group.addEventListener('toggle', function (event) {
      var opened = event.target;
      if (!opened.open) return;
      group.querySelectorAll('details[open]').forEach(function (other) {
        if (other !== opened) other.open = false;
      });
    }, true);
  });

  /* ---------- PDP: sticky buy bar ---------- */
  var buyBar = document.querySelector('[data-buy-bar]');
  var inlineBuy = document.querySelector('[data-buy-inline]');

  if (buyBar && inlineBuy) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            /* Bar only after the inline CTA has scrolled past above, never while it is still below the fold. */
            buyBar.hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
          });
        },
        { threshold: 0 }
      ).observe(inlineBuy);
    } else {
      buyBar.hidden = true;
    }
  }

  /* ---------- PDP: demo checkout note ---------- */
  var buyNote = document.getElementById('buy-note');
  document.querySelectorAll('[data-add-to-cart]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!buyNote) return;
      buyNote.hidden = false;
      buyNote.textContent =
        'Demo catalogue: checkout is not connected. Write to us and we will reserve the piece for you.';
      buyNote.focus();
    });
  });

  /* ---------- PDP: varian mengubah harga ---------- */
  var priceEls = document.querySelectorAll('[data-price]');
  document.querySelectorAll('[data-variant]').forEach(function (input) {
    input.addEventListener('change', function () {
      var next = input.getAttribute('data-price');
      if (!next) return;
      priceEls.forEach(function (el) {
        el.textContent = next;
      });
    });
  });

  /* ---------- Contact: validasi dan state ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var summary = document.getElementById('form-errors');
    var counter = document.querySelector('[data-counter]');
    var message = document.getElementById('message');
    var success = document.getElementById('form-success');

    function baseDescribedBy(field) {
      if (field.dataset.baseDescribedBy !== undefined) return field.dataset.baseDescribedBy;
      var wrapper = field.closest('.field') || field.closest('.check');
      var box = wrapper ? wrapper.querySelector('.field__error') : null;
      var ids = (field.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
      if (box && box.id) ids = ids.filter(function (id) { return id !== box.id; });
      field.dataset.baseDescribedBy = ids.join(' ');
      return field.dataset.baseDescribedBy;
    }

    function setError(field, text) {
      var wrapper = field.closest('.field') || field.closest('.check');
      if (!wrapper) return;
      var box = wrapper.querySelector('.field__error');
      wrapper.classList.add('has-error');
      field.setAttribute('aria-invalid', 'true');
      if (!box) return;
      box.textContent = text;
      if (!box.id) box.id = field.id + '-error';
      var base = baseDescribedBy(field);
      field.setAttribute('aria-describedby', (base + ' ' + box.id).trim());
    }

    function clearError(field) {
      var wrapper = field.closest('.field') || field.closest('.check');
      if (!wrapper) return;
      wrapper.classList.remove('has-error');
      field.removeAttribute('aria-invalid');
      var box = wrapper.querySelector('.field__error');
      if (box) {
        box.textContent = box.dataset.default || '';
        field.setAttribute('aria-describedby', baseDescribedBy(field));
      }
    }

    function validate() {
      var errors = [];
      var name = form.elements.name;
      if (name.value.trim().length < 2 || name.value.trim().length > 80) {
        errors.push([name, 'Enter your name using 2 to 80 characters.']);
      }

      var email = form.elements.email;
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
      if (!emailOk || email.value.trim().length > 254) {
        errors.push([email, 'Enter a valid email address, for example name@example.com.']);
      }

      var topic = form.elements.topic;
      if (!topic.value) errors.push([topic, 'Choose a topic so the message reaches the right person.']);

      var order = form.elements.order_ref;
      if (order.value.trim().length > 40) {
        errors.push([order, 'Order number can be at most 40 characters.']);
      }

      var msg = message.value.trim();
      if (msg.length < 20) {
        errors.push([message, 'Write at least 20 characters. ' + msg.length + ' so far.']);
      } else if (msg.length > 2000) {
        errors.push([message, 'Message can be at most 2000 characters.']);
      }

      var consent = form.elements.consent;
      if (!consent.checked) {
        errors.push([consent, 'Please confirm we may reply to your message.']);
      }

      return errors;
    }

    function showSummary(errors) {
      if (!summary) return;
      summary.replaceChildren();

      var heading = document.createElement('p');
      var strong = document.createElement('strong');
      strong.textContent =
        'Check ' + errors.length + ' field' + (errors.length > 1 ? 's' : '') + ' before sending.';
      heading.append(strong);

      var list = document.createElement('ul');
      errors.forEach(function (pair) {
        var field = pair[0];
        var label = form.querySelector('label[for="' + CSS.escape(field.id) + '"]');
        var item = document.createElement('li');
        var link = document.createElement('a');

        link.href = '#' + field.id;
        link.textContent = label
          ? label.textContent.replace(/\s*\(optional\)/i, '').trim()
          : field.name;
        item.append(link, document.createTextNode(': ' + pair[1]));
        list.append(item);
      });

      summary.append(heading, list);
      summary.hidden = false;
    }

    if (counter) {
      var syncCounter = function () {
        counter.textContent = message.value.length + ' / 2000';
        if (message.value.length > 2000) counter.style.color = 'var(--danger)';
        else counter.style.color = '';
      };
      message.addEventListener('input', syncCounter);
      syncCounter();
    }

    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      var box = field.closest('.field, .check');
      if (box) {
        var existing = box.querySelector('.field__error');
        if (existing) existing.dataset.default = existing.textContent;
      }
      field.addEventListener('blur', function () {
        if (field.type === 'checkbox' || !field.value) return;
        var single = validate().filter(function (pair) {
          return pair[0] === field;
        });
        if (single.length) setError(field, single[0][1]);
        else clearError(field);
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (form.elements.website && form.elements.website.value) return;

      form.querySelectorAll('[aria-invalid]').forEach(function (field) {
        field.removeAttribute('aria-invalid');
      });
      form.querySelectorAll('.has-error').forEach(function (el) {
        el.classList.remove('has-error');
      });
      if (summary) {
        summary.hidden = true;
        summary.replaceChildren();
      }

      var errors = validate();
      if (errors.length) {
        errors.forEach(function (pair) {
          setError(pair[0], pair[1]);
        });
        showSummary(errors);
        errors[0][0].focus();
        return;
      }

      form.hidden = true;
      if (success) {
        success.hidden = false;
        var heading = success.querySelector('h2');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus();
        }
      }
    });
  }

  /* ---------- Terms: scrollspy + fokus heading ---------- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('[data-toc] a[href^="#"]'));
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var headings = tocLinks
      .map(function (link) {
        var id = link.getAttribute('href').slice(1);
        var heading = document.getElementById(id);
        return heading ? { link: link, heading: heading } : null;
      })
      .filter(Boolean);

    var current = null;
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = headings.filter(function (item) {
            return item.heading === entry.target;
          })[0];
          if (!match || match.link === current) return;
          if (current) current.removeAttribute('aria-current');
          current = match.link;
          current.setAttribute('aria-current', 'true');
        });
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );
    headings.forEach(function (item) {
      spy.observe(item.heading);
    });

    tocLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var heading = document.getElementById(link.getAttribute('href').slice(1));
        if (!heading) return;
        heading.setAttribute('tabindex', '-1');
        window.setTimeout(function () {
          heading.focus({ preventScroll: true });
        }, 80);
        var mobileToc = link.closest('details');
        if (mobileToc) mobileToc.open = false;
      });
    });
  }

  /* ---------- Tahun copyright ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
