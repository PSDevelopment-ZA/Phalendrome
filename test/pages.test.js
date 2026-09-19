import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const pages = ['index.html', 'about.html', 'services.html', 'contact.html', 'privacy.html', 'terms.html', '404.html'];

const read = (p) => readFile(join(root, p), 'utf8');

test('every page has the footer year hook', async () => {
  for (const page of pages) {
    const html = await read(page);
    assert.match(html, /id="year\d+"/, `${page} should include a footer year hook`);
  }
});

test('every page links the stylesheet, script, favicon, and canonical', async () => {
  for (const page of pages) {
    const html = await read(page);
    assert.match(html, /css\/style\.css/, `${page} should link the stylesheet`);
    assert.match(html, /<script src="js\/main\.js"><\/script>/, `${page} should link main.js`);
    assert.match(html, /rel="icon" type="image\/svg\+xml" href="assets\/favicon\.svg"/, `${page} should link the favicon`);
    assert.match(html, /rel="canonical" href="https:\/\/www\.phalendrome\.co\.za\/[^"]*"/, `${page} should have a canonical URL`);
  }
});

test('every page links the shared header and footer navigation', async () => {
  const reflected = [
    'index.html', 'about.html', 'services.html',
    'contact.html', 'privacy.html', 'terms.html',
  ];
  for (const page of pages) {
    const html = await read(page);
    for (const target of reflected) {
      assert.ok(html.includes(`href="${target}"`), `${page} should link to ${target}`);
    }
  }
});

test('contact page has the form and consent wiring hooks', async () => {
  const html = await read('contact.html');
  assert.match(html, /id="contactForm"/);
  assert.match(html, /name="consent"/);
  assert.match(html, /id="result"/);
});

test('sitemap lists every page', async () => {
  const sitemap = await read('sitemap.xml');
  for (const page of pages) {
    const url = page === 'index.html' ? 'https://www.phalendrome.co.za/' : `https://www.phalendrome.co.za/${page}`;
    assert.ok(sitemap.includes(`<loc>${url}</loc>`), `sitemap should list ${url}`);
  }
});

test('robots.txt points at the sitemap', async () => {
  const robots = await read('robots.txt');
  assert.match(robots, /Sitemap: https:\/\/www\.phalendrome\.co\.za\/sitemap\.xml/);
});