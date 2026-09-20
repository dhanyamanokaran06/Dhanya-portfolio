/* ===== NAV ACTIVE STATE (works on scroll AND on click) ===== */
const links     = document.querySelectorAll('.nav-links a');
const sections  = [...document.querySelectorAll('section[id]')];

const setActive = id =>
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));

/* Update active link as user scrolls */
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) setActive(e.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(sec => navObserver.observe(sec));

/* Instantly highlight on click for a snappier feel */
links.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href').slice(1);
    if (document.getElementById(id)) setActive(id);
  });
});

/* ===== SCROLL REVEAL ===== */
const revObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 70);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
