/* No frameworks or API keys required. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Theme: initial choice respects browser preference, and persists when selected manually.
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const storedTheme = (() => { try { return localStorage.getItem('academic-site-theme'); } catch (_) { return null; } })();
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  function setTheme(theme) {
    root.dataset.theme = theme;
    if (themeButton) {
      themeButton.querySelector('.theme-symbol').textContent = theme === 'dark' ? '☼' : '☾';
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }
  setTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemDark ? 'dark' : 'light');
  themeButton?.addEventListener('click', () => {
    const choice = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(choice);
    try { localStorage.setItem('academic-site-theme', choice); } catch (_) { /* private browsing */ }
  });

  // Responsive navigation.
  const mobileToggle = document.getElementById('mobile-toggle');
  const primaryNav = document.getElementById('primary-nav');
  mobileToggle?.addEventListener('click', () => {
    const open = primaryNav?.classList.toggle('open') || false;
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  primaryNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.setAttribute('aria-label', 'Open menu');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && primaryNav?.classList.contains('open')) {
      primaryNav.classList.remove('open');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      mobileToggle?.focus();
    }
  });

  // Publication filtering, accessible via aria-pressed and semantic hidden attribute.
  const filters = document.querySelectorAll('.filter-chip');
  const papers = document.querySelectorAll('.publication[data-category]');
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    papers.forEach(paper => { paper.hidden = selected !== 'all' && paper.dataset.category !== selected; });
  }));

  // Active navigation follows the user's scroll position.
  if ('IntersectionObserver' in window) {
    const activeLinks = Array.from(document.querySelectorAll('.site-nav a[data-nav]'));
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === entry.target.id));
        }
      });
    }, { rootMargin: '-20% 0px -65% 0px' });
    document.querySelectorAll('main section[id]:not(#home)').forEach(section => navObserver.observe(section));

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: .06 });
    reveals.forEach(item => revealObserver.observe(item));
  } else {
    document.querySelectorAll('.reveal').forEach(item => item.classList.add('visible'));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
