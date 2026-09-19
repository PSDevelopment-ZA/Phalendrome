// Lint static HTML: verify every page links only pages that exist,
// every page references a canonical, favicon, stylesheet, and script.
// Mirrors the CI checks so failures are caught locally too.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const files = (await readdir(root)).filter((f) => f.endsWith('.html'));
const existing = new Set(files);

let failed = false;
for (const file of files) {
  const html = await readFile(join(root, file), 'utf8');

  const links = html.match(/href="([^"#][^"]*?\.html)"/g) || [];
  for (const link of links) {
    const target = link.replace(/^href="|"$/g, '').split('?')[0].replace(/^\//, '');
    if (target.startsWith('http')) continue;
    if (!existing.has(target)) {
      console.error(`Broken link in ${file}: ${target}`);
      failed = true;
    }
  }

  for (const [label, pattern] of [
    ['canonical', /rel="canonical" href="https:\/\/www\.phalendrome\.co\.za\//],
    ['favicon', /rel="icon" type="image\/svg\+xml" href="assets\/favicon\.svg"/],
    ['stylesheet', /css\/style\.css/],
    ['script', /<script src="js\/main\.js"><\/script>/],
  ]) {
    if (!pattern.test(html)) {
      console.error(`Missing ${label} in ${file}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log(`HTML check OK: ${files.length} pages, no broken internal links, standard head present.`);