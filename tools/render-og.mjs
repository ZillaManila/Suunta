// Renders public/images/og.png (1200×630 social share image) from the site's fonts.
// Run: node tools/render-og.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { writeFileSync, rmSync } from 'node:fs';

const root = fileURLToPath(new URL('..', import.meta.url));
const font = (p) => `file://${root}node_modules/${p}`;

const html = `<!doctype html><html><head><style>
@font-face{font-family:N;src:url(${font('@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2')});font-weight:200 800}
@font-face{font-family:N;font-style:italic;src:url(${font('@fontsource-variable/newsreader/files/newsreader-latin-opsz-italic.woff2')});font-weight:200 800}
@font-face{font-family:G;src:url(${font('@fontsource-variable/geist/files/geist-latin-wght-normal.woff2')});font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#f5f4f0;color:#14213a;font-family:G;position:relative;overflow:hidden}
.logo{position:absolute;left:80px;top:72px;display:flex;align-items:center;gap:14px;font-weight:600;letter-spacing:.2em;font-size:20px}
h1{position:absolute;left:80px;top:170px;width:760px;margin:0;font-family:N;font-weight:380;font-size:68px;line-height:1.04;letter-spacing:-.02em}
em{color:#0b5d74;font-weight:340}
.tag{position:absolute;left:80px;bottom:70px;font-size:20px;color:#0e7490;letter-spacing:.02em}
svg.d{position:absolute;right:40px;top:90px;width:340px}
</style></head><body>
<div class="logo"><svg width="24" viewBox="0 0 225 270"><path fill="#0f2650" d="M106 2 L224 267 L96 180 L0 236 Z"/></svg>SUUNTA LABS</div>
<h1>Turn Underperforming AI Adoption Into <em>Measurable Time and Cost Savings</em></h1>
<div class="tag">Direction for Better Work</div>
<svg class="d" viewBox="0 0 520 560"><circle cx="430" cy="112" r="74" fill="none" stroke="#0e7490" opacity=".22"/>
<path d="M214 430 C 240 396, 246 366, 262 336 S 316 262, 336 238 S 398 162, 430 112 L 468 54" fill="none" stroke="#0e7490" stroke-width="2.4" stroke-linecap="round"/>
<path fill="#0e7490" d="M472.4 47.3 L469.7 62.3 L466.9 55.7 L459.7 55.7 Z"/>
${[[214,430],[262,336],[336,238],[430,112]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#f5f4f0" stroke="#0e7490" stroke-width="2"/>`).join('')}
</svg></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
// Load from a file URL so the local font files are allowed.
const tmp = `${root}tools/.og.html`;
writeFileSync(tmp, html);
await page.goto(`file://${tmp}`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${root}public/images/og.png` });
await browser.close();
rmSync(tmp);
