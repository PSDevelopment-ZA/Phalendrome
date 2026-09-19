// "Build" for a plain static site: validate the deployment surface is complete.
// No bundler needed; GitHub Pages serves the repository root directly.
import { access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const required = [
  'index.html',
  'css/style.css',
  'js/main.js',
  'assets/favicon.svg',
  'assets/logo-mark.svg',
  'assets/logo.svg',
  'CNAME',
  'robots.txt',
  'sitemap.xml',
  '404.html',
];

const missing = [];
for (const file of required) {
  try {
    await access(join(root, file));
  } catch {
    missing.push(file);
  }
}

if (missing.length) {
  console.error(`Build failed: missing files: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`Build OK: ${required.length} required files present.`);