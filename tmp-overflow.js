const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('https://mana-ai-oc9n.vercel.app', { waitUntil: 'networkidle' });
  const result = await page.evaluate(() => {
    const doc = document.documentElement;
    const offenders = Array.from(document.querySelectorAll('*'))
      .map(el => {
        const rect = el.getBoundingClientRect();
        return {
          rect,
          overflowRight: rect.right - window.innerWidth,
          overflowLeft: rect.left,
          el,
        };
      })
      .filter(({ overflowRight, overflowLeft }) => overflowRight > 1 || overflowLeft < -1)
      .map(({ el, rect, overflowRight, overflowLeft }) => ({
        tag: el.tagName,
        className: el.className,
        rect: { left: rect.left, right: rect.right, width: rect.width },
        overflowRight,
        overflowLeft,
        outerHTML: el.outerHTML.slice(0, 200)
      }));
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflow: doc.scrollWidth - doc.clientWidth,
      offenderCount: offenders.length,
      offenders,
    };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
