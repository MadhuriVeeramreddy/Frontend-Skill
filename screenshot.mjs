// Full-page screenshot. Usage: node screenshot.mjs <url> [label] [--width=N]
// Saves to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
import puppeteer from 'puppeteer-core';
import { mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const CHROME_CANDIDATES = [
  join(homedir(), '.cache/puppeteer/chrome-headless-shell/mac_arm-121.0.6167.85/chrome-headless-shell-mac-arm64/chrome-headless-shell'),
  join(homedir(), '.cache/puppeteer/chrome/mac_arm-121.0.6167.85/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];

const OUT_DIR = 'temporary screenshots';

const args = process.argv.slice(2);
const url = args.find((a) => !a.startsWith('--')) ?? 'http://localhost:3000';
const label = args.filter((a) => !a.startsWith('--'))[1];
const width = Number(args.find((a) => a.startsWith('--width='))?.split('=')[1]) || 1440;

const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error('No Chrome found. Checked:\n' + CHROME_CANDIDATES.join('\n'));
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

// Never overwrite: continue from the highest screenshot-N already on disk.
const existing = await readdir(OUT_DIR);
const next = existing.reduce((max, f) => {
  const n = Number(f.match(/^screenshot-(\d+)/)?.[1]);
  return Number.isFinite(n) && n > max ? n : max;
}, 0) + 1;

const file = join(OUT_DIR, `screenshot-${next}${label ? `-${label}` : ''}.png`);

const browser = await puppeteer.launch({
  executablePath,
  args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 1000, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60_000 });
await page.evaluate(() => document.fonts.ready);
// Let scroll-triggered reveals settle so the capture isn't of a mid-animation state.
// smooth scrolling would make scrollTo lag behind and starve the observer, so force auto.
await page.evaluate(async () => {
  const prev = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  const step = Math.round(window.innerHeight * 0.6);
  for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 120)));
  }
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = prev;
});
// Fail loudly rather than silently capturing a half-revealed page.
const unrevealed = await page.$$eval('.rise:not(.seen), .rise-far:not(.seen)', (els) => els.length);
if (unrevealed) console.warn(`WARNING: ${unrevealed} .rise element(s) never revealed`);
await new Promise((r) => setTimeout(r, 700));
await page.screenshot({ path: file, fullPage: true });
await browser.close();

console.log(`Saved ${file}  (${width}px wide)`);
