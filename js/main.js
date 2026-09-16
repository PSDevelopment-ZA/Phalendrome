(function () {
  'use strict';

 
  var CONTACT_EMAIL = 'info@phalendrome.co.za';

  function setYearTargets() {
    document.querySelectorAll('[id^="year"]').forEach(function (element) {
      if (element) {
        element.textContent = new Date().getFullYear();
      }
    });
  }

  function revealOnIntersect() {
    var revealItems = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach(function (item) {
        item.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var overlay = document.querySelector('.mobile-overlay');
    var closeButton = document.querySelector('.drawer-close');
    var drawerLinks = document.querySelectorAll('.drawer-nav a');

    if (!toggle || !overlay) {
      return;
    }

    function setNavState(isOpen) {
      overlay.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
      overlay.setAttribute('aria-hidden', String(!isOpen));
    }

    toggle.addEventListener('click', function () {
      var isOpen = overlay.classList.contains('is-open');
      setNavState(!isOpen);
    });

    if (closeButton) {
      closeButton.addEventListener('click', function () {
        setNavState(false);
      });
    }

    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setNavState(false);
      });
    });

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        setNavState(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setNavState(false);
      }
    });
  }

  function initWalkthroughTabs() {
    document.querySelectorAll('.walkthrough-tab').forEach(function (button) {
      button.addEventListener('click', function () {
        var targetId = button.getAttribute('data-target');
        var target = targetId ? document.getElementById(targetId) : null;

        document.querySelectorAll('.walkthrough-tab').forEach(function (tab) {
          tab.classList.toggle('active', tab === button);
        });

        document.querySelectorAll('.walkthrough-panel').forEach(function (panel) {
          panel.classList.toggle('active', panel === target);
        });
      });
    });
  }

  function initCtaText() {
    document.querySelectorAll('.cta-card').forEach(function (card) {
      var preset = card.getAttribute('data-preset') || 'classic';
      var title = card.querySelector('.cta-title');
      var button = card.querySelector('.btn');
      var tag = card.querySelector('.cta-tag');

      if (title) {
        var nextTitle = title.getAttribute('data-title-' + preset);
        if (nextTitle) {
          title.textContent = nextTitle;
        }
      }

      if (button) {
        var nextButton = button.getAttribute('data-button-' + preset);
        if (nextButton) {
          button.textContent = nextButton;
        }
      }

      if (tag) {
        var nextLabel = tag.getAttribute('data-label-' + preset) || tag.getAttribute('data-label');
        if (nextLabel) {
          tag.setAttribute('data-label', nextLabel);
        }
      }
    });
  }

  function showFieldError(field, message) {
    if (!field) {
      return;
    }

    var errorNode = document.getElementById(field.id + 'Error');
    if (errorNode) {
      errorNode.textContent = message || '';
    }

    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function initContactForm() {
    var form = document.getElementById('contactForm');
    var result = document.getElementById('result');

    if (!form) {
      return;
    }

    function clearFieldError(field) {
      showFieldError(field, '');
    }

    function validateForm() {
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var phone = form.querySelector('#phone');
      var message = form.querySelector('#message');
      var consent = form.querySelector('#consent');
      var valid = true;

      clearFieldError(name);
      clearFieldError(email);
      clearFieldError(phone);
      clearFieldError(message);
      if (consent) {
        clearFieldError(consent);
      }

      if (result) {
        result.textContent = '';
        result.classList.remove('is-error');
      }

      if (!name || !name.value.trim()) {
        showFieldError(name, 'Please enter your name.');
        valid = false;
      }

      if (!email || !email.value.trim()) {
        showFieldError(email, 'Please enter your email address.');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        showFieldError(email, 'Please enter a valid email address.');
        valid = false;
      }

      if (phone && phone.value.trim() && !/^\+?[0-9][0-9\s-]{7,}$/.test(phone.value.trim())) {
        showFieldError(phone, 'Please enter a valid phone number or leave this blank.');
        valid = false;
      }

      if (!message || !message.value.trim() || message.value.trim().length < 10) {
        showFieldError(message, 'Tell us a bit more about the project.');
        valid = false;
      }

      if (consent && !consent.checked) {
        showFieldError(consent, 'Please confirm the privacy statement before sending.');
        valid = false;
      }

      return valid;
    }

    form.addEventListener('input', function (event) {
      var target = event.target;
      if (!target || !target.id) {
        return;
      }

      var field = form.querySelector('#' + target.id);
      clearFieldError(field);
      if (result) {
        result.textContent = '';
        result.classList.remove('is-error');
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var phone = form.querySelector('#phone');
      var message = form.querySelector('#message');

      var subject = 'New enquiry from ' + name.value.trim();

      var bodyLines = [
        'Name: ' + name.value.trim(),
        'Email: ' + email.value.trim(),
        'Phone: ' + (phone && phone.value.trim() ? phone.value.trim() : 'Not provided'),
        '',
        'Message:',
        message.value.trim()
      ];

      var mailtoLink =
        'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      if (result) {
        result.textContent = 'Opening your email app to send this message...';
        result.classList.remove('is-error');
      }

      window.location.href = mailtoLink;

      form.reset();
    });
  }

  setYearTargets();
  revealOnIntersect();
  initMobileNav();
  initWalkthroughTabs();
  initCtaText();
  initContactForm();
})();