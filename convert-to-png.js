import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Ajusta el tamaño del viewport al de tu folleto
  await page.setViewport({ width: 1080, height: 1080 });
  // Apunta a tu servidor local
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  // Toma la captura y guárdala como PNG
  await page.screenshot({ path: 'folleto.png', fullPage: true, type: 'png' });
  await browser.close();
})();