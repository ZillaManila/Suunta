// Quiet scroll reveals. Elements with [data-reveal] fade up once when they enter view.
// Elements with [data-draw] get .is-in too, which starts their SVG line drawing.

const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-draw]');

if (!('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
}
