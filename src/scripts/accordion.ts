// Accessible accordions.
//   [data-accordion]            container; add data-single to keep only one item open
//   [data-acc-item]             item; starts open when it has .is-open
//   [data-acc-trigger]          button that toggles its item
//   [data-acc-panel]            collapsible region (animated with grid-template-rows in CSS)
// Fires "acc:change" on the container with detail { index, open } so sections can react
// (e.g. swap an image to match the open item).

document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((root) => {
  const items = [...root.querySelectorAll<HTMLElement>('[data-acc-item]')];
  const single = root.hasAttribute('data-single');

  const set = (item: HTMLElement, open: boolean) => {
    item.classList.toggle('is-open', open);
    item.querySelector('[data-acc-trigger]')?.setAttribute('aria-expanded', String(open));
    item.querySelector('[data-acc-panel]')?.toggleAttribute('inert', !open);
  };

  items.forEach((item, index) => {
    set(item, item.classList.contains('is-open'));
    item.querySelector('[data-acc-trigger]')?.addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      if (single && open) items.forEach((other) => other !== item && set(other, false));
      set(item, open);
      root.dispatchEvent(new CustomEvent('acc:change', { detail: { index, open } }));
    });
  });
});
