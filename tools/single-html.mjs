// Bundles the built site (dist/) into one self-contained HTML file: CSS, scripts, fonts and
// images are all embedded, so the page opens by double-clicking with no server or internet.
// Run: npm run build:single   -> suunta-labs-website.html
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const out = join(root, 'suunta-labs-website.html');

const types = { jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', woff2: 'font/woff2' };
const cache = new Map();
const dataUri = (path) => {
  if (!cache.has(path)) {
    const ext = path.split('.').pop();
    cache.set(path, `data:${types[ext]};base64,${readFileSync(join(dist, path)).toString('base64')}`);
  }
  return cache.get(path);
};

let html = readFileSync(join(dist, 'index.html'), 'utf8');

// Stylesheets: inline, keeping only the Latin font subsets (the copy is English).
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (_, href) => {
  let css = readFileSync(join(dist, href), 'utf8');
  css = css.replace(/@font-face\{[^}]*\}/g, (block) => {
    const url = block.match(/url\(([^)]+)\)/)?.[1] || '';
    if (!/-latin-(wght|opsz)/.test(url)) return '';
    return block.replace(url, dataUri(url));
  });
  return `<style>${css}</style>`;
});

// Responsive srcsets would embed every size; the single file keeps just the main src.
html = html.replace(/\s(srcset|sizes)="[^"]*"/g, '');

// Images and favicon.
html = html.replace(/(["'(])(\/(?:images\/[^"')\s]+\.(?:jpg|png)|favicon\.svg))/g, (_, q, path) => q + dataUri(path));

// The hero preload/priority hint and canonical link point at the live domain, which is fine to keep.
writeFileSync(out, html);
console.log(`Wrote ${out} (${(statSync(out).size / 1024 / 1024).toFixed(1)} MB)`);
