// Site motion. Everything is progressive: without JS (or with reduced motion) content is simply shown.
//  [data-reveal]  fades up once in view
//  [data-draw]    gets .is-in in view (SVG drawing, image wipes)
//  [data-split]   heading split into words that rise in sequence
//  [data-count]   number counts up to its final value
//  [data-magnetic] element leans toward the pointer

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Split headings into words ---------- */
document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  let index = 0;
  const walk = (node: Node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.append(document.createTextNode(part));
            return;
          }
          const outer = document.createElement('span');
          outer.className = 'w';
          const inner = document.createElement('span');
          inner.className = 'w__i';
          inner.style.setProperty('--wi', String(index++));
          inner.textContent = part;
          outer.append(inner);
          frag.append(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
  el.classList.add('is-split');
});

/* ---------- Count up ---------- */
const countUp = (el: HTMLElement) => {
  const target = parseFloat(el.dataset.count || '0');
  const suffix = el.dataset.suffix || '';
  if (reduced) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 1600;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

/* ---------- In-view observer ---------- */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-draw], [data-split], [data-count]');
const enter = (el: HTMLElement) => {
  el.classList.add('is-in');
  if (el.dataset.count !== undefined) countUp(el);
};

if (!('IntersectionObserver' in window)) {
  targets.forEach(enter);
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        enter(entry.target as HTMLElement);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---------- Magnetic buttons (fine pointers only) ---------- */
if (!reduced && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    let frame = 0;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.22;
      const y = (e.clientY - r.top - r.height / 2) * 0.32;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    });
  });
}
