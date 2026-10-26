/* global document, getComputedStyle, innerWidth, scrollY, Node, location */
/** Read-only browser regression probe. Run through the internal browser evaluate API. */
export function auditThemePage() {
  const parse = value => {
    if (value.trim().startsWith('#')) {
      let hex=value.trim().slice(1);if(hex.length===3||hex.length===4)hex=[...hex].map(c=>c+c).join('');
      return [0,2,4].map(i=>Number.parseInt(hex.slice(i,i+2),16)).concat(hex.length===8?Number.parseInt(hex.slice(6),16)/255:1);
    }
    const match = value.match(/^rgba?\(([^)]+)\)/);
    if (!match) return [0, 0, 0, 0];
    const parts = match[1].replaceAll(',', ' ').replace('/', ' ').split(/\s+/).filter(Boolean).map(Number);
    return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1];
  };
  const over = (a, b) => [...a.slice(0, 3).map((v, i) => v * a[3] + b[i] * (1 - a[3])), 1];
  const luminance = c => c.slice(0, 3).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((s, v, i) => s + v * [.2126, .7152, .0722][i], 0);
  const contrast = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
  const describe = e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.classList.length ? '.' + [...e.classList].join('.') : '');
  const rows = [];
  const roots = [...document.querySelectorAll('.site-theme,.site-main,.pa-footer,.dreamframe-nav')];
  const elements = new Set(roots.flatMap(root => [root, ...root.querySelectorAll('*')]));
  for (const el of elements) {
    if (el.closest('script,style,noscript,[aria-hidden="true"]') || !el.getClientRects().length) continue;
    const style = getComputedStyle(el);
    if (style.visibility !== 'visible' || style.display === 'none') continue;
    const text = [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent.trim()).join(' ').trim();
    const value = el.matches('input,textarea,select') ? (el.value || el.getAttribute('placeholder') || '') : '';
    if (!text && !value) continue;
    const chain = []; for (let parent = el; parent; parent = parent.parentElement) chain.unshift(parent);
    let backgrounds = [[255, 255, 255, 1]], opacity = 1, gradient = false;
    for (const ancestor of chain) {
      const s = getComputedStyle(ancestor); opacity *= Number(s.opacity);
      // A fixed header paints over the current content, not the scrolled-away hero ancestor.
      if (ancestor.matches('.dreamframe-nav')) {
        const surface=parse(s.getPropertyValue(ancestor.matches('.site-nav-posthero')||ancestor.closest('.site-dark')?'--page-bg':'--hero-surface'));
        if(surface[3]) backgrounds=[surface];
      }
      const bg = parse(s.backgroundColor);
      if (bg[3] && s.backgroundClip !== "text") backgrounds = backgrounds.map(b => over(bg, b));
      if (s.backgroundImage.includes('gradient') && s.backgroundClip !== 'text') {
        gradient = true;
        let stops = (s.backgroundImage.match(/rgba?\([^)]+\)/g) || []).map(parse);
        // The explicit handoff ends before the ecosystem text begins. Evaluate its local surface, not the black stop above it.
        if (ancestor.matches(".astra-ecosystem") && s.backgroundImage.includes("95px") && stops.length >= 2) {
          const start = stops[0], end = stops.at(-1), y = el.getBoundingClientRect().top - ancestor.getBoundingClientRect().top;
          stops = [y, y + el.getBoundingClientRect().height].map(position => {const progress = Math.min(1, Math.max(0, position / 95));return start.map((value, i) => value + (end[i] - value) * progress);});
        }
        if (stops.length) backgrounds = backgrounds.flatMap(b => stops.map(c => over(c, b))).slice(0, 24);
      }
    }
    const foreground = parse(style.color); foreground[3] *= opacity;
    let foregrounds = [foreground];
    if (style.backgroundClip === 'text' && style.backgroundImage.includes('gradient')) {
      foregrounds = (style.backgroundImage.match(/rgba?\([^)]+\)/g) || []).map(parse);
      if (!foregrounds.length) foregrounds = [foreground];
    }
    const ratio = Math.min(...backgrounds.flatMap(bg => foregrounds.map(fg => contrast(over(fg, bg), bg))));
    const large = Number.parseFloat(style.fontSize) >= 24 || (Number(style.fontWeight) >= 700 && Number.parseFloat(style.fontSize) >= 18.66);
    rows.push({selector:describe(el), text:(text || value).slice(0, 100), ratio:Number(ratio.toFixed(2)), minimum:large ? 3 : 4.5, gradient, color:style.color, background:backgrounds.map(b => b.slice(0,3).map(Math.round)), opacity});
  }
  return {
    path:location.pathname, theme:document.documentElement.dataset.siteTheme || 'dark', width:innerWidth,
    h1:document.querySelectorAll('h1').length, main:document.querySelectorAll('main').length,
    overflow:document.documentElement.scrollWidth > innerWidth, height:document.documentElement.scrollHeight,
    textCount:rows.length, failures:rows.filter(row => row.ratio + .005 < row.minimum), rows,
    sections:[...document.querySelectorAll('section,.pa-footer,.site-strategy')].map(el => ({class:el.className,rect:{x:el.getBoundingClientRect().x,y:el.getBoundingClientRect().y+scrollY,width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height}})),
    images:[...document.images].filter(img=>!img.closest('[aria-hidden="true"]')).map(img=>({src:img.getAttribute('src'),loaded:img.complete&&img.naturalWidth>0})),
    header:[...document.querySelectorAll('.dreamframe-nav > *')].map(el=>({class:el.className,rect:el.getBoundingClientRect().toJSON()}))
  };
}
