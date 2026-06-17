import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtml = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtml)) {
  console.error('Error: dist/index.html not found! Run build first.');
  process.exit(1);
}

const routes = [
  'process',
  'requirements',
  'planning',
  'locations',
  'verify',
  'contact',
  'contactUs',
  'contact-us',
  'about',
  // Dynamic location routes
  'locations/mexico',
  'locations/north-cyprus',
  // 'locations/japan',
  'locations/malaysia',
  // 'locations/cambodia',
  // 'locations/thailand',
  // 'locations/nigeria',
];

routes.forEach((route) => {
  const targetDir = path.join(distDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.copyFileSync(indexHtml, path.join(targetDir, 'index.html'));
  console.log(`Prerender fallback created: ${route}/index.html`);
});

console.log('Static routing fallbacks generated successfully!');
