import fs from 'node:fs';
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const base = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'brand');
fs.mkdirSync(base, { recursive: true });
async function run() {
  for (const theme of ['light', 'dark']) {
    const ink = theme === 'light' ? '#050B18' : '#F4F8FF';
    const symbol = theme === 'light' ? '#126BFF' : 'url(#orbit)';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="250" viewBox="0 0 500 250" role="img" aria-label="Pilot Astra AI">
<title>Pilot Astra AI — ${theme} theme</title>
<defs><linearGradient id="orbit" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#126BFF"/><stop offset="1" stop-color="#00D9FF"/></linearGradient></defs>
<g fill="${symbol}">
<path d="M112 85C215 24 296 13 379 33L351 44C271 37 195 54 112 85Z"/>
<path d="M461 62C525 101 485 151 395 205C466 145 482 109 439 72Z"/>
<path d="M409 0L420 42L458 55L420 67L409 110L397 67L360 55L397 42Z"/>
</g>
<g fill="${ink}" font-family="Arial,Helvetica,sans-serif"><text x="16" y="201" font-size="146" font-weight="400" letter-spacing="-4" textLength="350" lengthAdjust="spacingAndGlyphs">Pilot</text><text x="54" y="239" font-size="24" font-weight="300" letter-spacing="13" textLength="300" lengthAdjust="spacing">ASTRA AI</text></g>
</svg>`;
    fs.writeFileSync(`${base}/pilot-astra-${theme}.svg`, svg);
    await sharp(Buffer.from(svg), { density: 288 }).resize(2000, 1000).png().toFile(`${base}/pilot-astra-${theme}.png`);
  }
}
run().catch(e => { console.error(e); process.exitCode=1; });
