import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const output = 'qa/evidence/motion';
mkdirSync(output, { recursive: true });
const checks = [];
try {
  for (const reducedMotion of ['no-preference', 'reduce']) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:4174', { waitUntil: 'networkidle' });
    await page.locator('.service').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
    const initial = await page.locator('.service-icon').first().evaluate(element => [...element.querySelectorAll('path')].map(path => ({offset:getComputedStyle(path).strokeDashoffset,animation:getComputedStyle(path).animationName})));
    await page.waitForTimeout(2400);
    const final = await page.locator('.service-icon').first().evaluate(element => [...element.querySelectorAll('path')].map(path => ({offset:getComputedStyle(path).strokeDashoffset,animation:getComputedStyle(path).animationName})));
    if (reducedMotion === 'reduce' && initial.some(path => path.animation !== 'none')) errors.push('Reduced motion still animates');
    if (reducedMotion === 'no-preference' && !initial.some(path => path.animation === 'assemble-piece' && Number.parseFloat(path.offset) > 0)) errors.push('Assembly not observed');
    if (final.some(path => Number.parseFloat(path.offset) !== 0)) errors.push('Assembly did not complete');
    await page.getByRole('link',{name:'Contact',exact:true}).click();
    if (!page.url().endsWith('#contact')) errors.push('Contact anchor');
    await page.emulateMedia({reducedMotion:'reduce'});
    if (await page.locator('.service-icon path').first().evaluate(element=>getComputedStyle(element).animationName) !== 'none') errors.push('Live preference change');
    checks.push({reducedMotion,initial,final,errors});
    await context.close();
  }
  const context = await browser.newContext({ viewport:{width:1440,height:900},reducedMotion:'no-preference' });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4174',{waitUntil:'networkidle'});
  await page.waitForTimeout(2200);
  await page.screenshot({path:output+'/hero-desktop.png'});
  await page.locator('#details').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2400);
  await page.screenshot({path:output+'/details-desktop.png'});
  await context.close();
  const noJs = await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:900}});
  const fallback = await noJs.newPage();
  await fallback.goto('http://127.0.0.1:4174');
  checks.push({javascript:false,errors:await fallback.locator('h1').isVisible()?[]:['No-JS content missing']});
  await noJs.close();
} finally { await browser.close(); }
const passed = checks.every(check=>check.errors.length===0);
writeFileSync(output+'/animation-report.json',JSON.stringify({passed,checks},null,2));
console.log(JSON.stringify({passed,checks}));
if(!passed)process.exitCode=1;
