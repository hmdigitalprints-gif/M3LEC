import fs from 'fs';
import path from 'path';

const searchPaths = [
  'src/components/admin/AdminDashboard.tsx',
  'src/components/artisan/ArtisanDashboard.tsx',
  'src/components/company/CompanyDashboard.tsx',
  'src/components/seller/SellerDashboard.tsx',
  'src/components/layout/Layout.tsx'
];

const keys = {};

searchPaths.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // matches t('nav_key', 'Default Value')
  const regex = /t\('([^']+)',\s*'([^']+)'\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys[match[1]] = match[2];
  }
});

const locales = ['ar', 'en', 'fr'];
locales.forEach(lang => {
  const file = `public/locales/${lang}.json`;
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const [k, v] of Object.entries(keys)) {
      if (!data[k]) {
        // Just keep the English default, translating manually later if needed
        data[k] = v;
      }
    }
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
});

console.log(keys);
