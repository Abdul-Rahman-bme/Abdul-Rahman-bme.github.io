(() => {
  const root = document.documentElement;
  const body = document.body;
  const siteHeader = document.getElementById('siteHeader');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollTop = document.getElementById('scrollTop');
  const year = document.getElementById('year');

  // Theme: respect saved preference first, then system preference.
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
  root.dataset.theme = initialTheme;

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });

  // Mobile navigation.
  const closeMenu = () => {
    navLinks?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  };

  menuToggle?.addEventListener('click', () => {
    const opening = !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', opening);
    menuToggle.setAttribute('aria-expanded', String(opening));
    body.classList.toggle('menu-open', opening);
  });

  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  // Reveal elements once; keeps motion subtle rather than decorative.
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('visible'));
  }

  // Active navigation section.
  const sections = [...document.querySelectorAll('main section[id]')];
  const primaryLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      primaryLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.4] });
    sections.forEach(section => navObserver.observe(section));
  }

  const onScroll = () => {
    const y = window.scrollY;
    siteHeader?.classList.toggle('scrolled', y > 20);
    scrollTop?.classList.toggle('visible', y > 700);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  if (year) year.textContent = String(new Date().getFullYear());
})();
