const next = require('next');
const http = require('http');
const { chromium } = require('playwright');

const port = 3456;

(async () => {
  const app = next({ dev: true, dir: '.' });
  const handle = app.getRequestHandler();

  await app.prepare();

  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    handle(req, res, parsedUrl);
  });

  await new Promise(resolve => server.listen(port, resolve));
  console.log(`Next.js dev server listening on http://localhost:${port}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle' });

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
  await new Promise(resolve => server.close(resolve));
})();
