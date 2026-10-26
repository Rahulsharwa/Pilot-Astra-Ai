import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
const theme = readFileSync(new URL('../components/SiteTheme.css', import.meta.url), 'utf8');
const blocks = [...theme.matchAll(/(?:\.site-theme, \.site-dark, \.pa-footer, \.site-nav-posthero|html\[data-site-theme="light"\] :is\([^\n]+\)) \{([^}]+)\}/g)].map(m => Object.fromEntries([...m[1].matchAll(/--([\w-]+):\s*(#[\da-f]+)/g)].map(v => [v[1], v[2]]))).filter(b=>b['page-bg']);
function lum(hex) {return [1,3,5].map(i=>Number.parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);}
function contrast(a,b) {const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
test('both complete palettes keep text and controls readable across all base surfaces',()=>{
  assert.equal(blocks.length,2);
  for(const palette of blocks) for(const surface of ['page-bg','surface','surface-elevated']) {
    for(const text of ['text-primary','text-secondary','link','accent-text']) assert.ok(contrast(palette[text],palette[surface])>=4.5,`${text} on ${surface}: ${contrast(palette[text],palette[surface])}`);
    assert.ok(contrast(palette.border,palette[surface])>=3,'meaningful boundaries');
  }
  for(const p of blocks) for(const fill of ['accent','accent-hover']) assert.ok(contrast(p['on-accent'],p[fill])>=4.5,'button label');
});
test('themeable content has no unresolved color tokens or broad black #top rule',()=>{
  const paths=['Homepage.css','GrowthSections.css','SitePages.css','SiteTheme.css'];
  const css=paths.map(file=>readFileSync(new URL('../components/'+file,import.meta.url),'utf8')).join('\n');
  const definitions=new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map(m=>m[1]));
  for(const reference of css.matchAll(/var\((--[\w-]+)/g)) assert.ok(definitions.has(reference[1]),reference[1]);
  assert.doesNotMatch(css,/#top\s*\{\s*background/);
  assert.doesNotMatch(css,/--tone-/);
});
test('theme transitions animate colors, exclude geometry, and have a reduced-motion fallback',()=>{
  assert.match(theme,/600ms ease-in-out/);
  assert.match(theme,/@media\(prefers-reduced-motion:reduce\)/);
  for(const declaration of theme.matchAll(/transition:([^;}]+)/g)) assert.doesNotMatch(declaration[1],/\b(width|height|margin|padding|transform|all)\b/);
});
