import fs from 'fs';

const files = [
  'src/components/admin/AdminDashboard.tsx',
  'src/components/artisan/ArtisanDashboard.tsx',
  'src/components/company/CompanyDashboard.tsx',
  'src/components/seller/SellerDashboard.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes("useTranslation")) {
    content = content.replace(
      "import { useAuth",
      "import { useTranslation } from 'react-i18next';\nimport { useAuth"
    );
  }

  content = content.replace(
    /export default function (\w+)Dashboard\(\) \{/,
    "export default function $1Dashboard() {\n  const { t } = useTranslation();"
  );
  
  content = content.replace(
    /const {\s*user,\s*token(\w*)\s*} = useAuth\(\);/,
    "const { user, token$1 } = useAuth();"
  );

  // Replace labels in navItems
  // e.g. label: 'Overview' => label: t('nav_overview', 'Overview')
  content = content.replace(/label:\s*'([^']+)'/g, (match, p1) => {
    const key = `nav_${p1.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`;
    return `label: t('${key}', '${p1}')`;
  });

  // Replace any <span className="font-bold">Overview</span> or similar tabs contextually? Let's not overwite blindly, only label:

  // There are other places that might need translation, like titles inside components:
  // e.g., <h1>Dashboard</h1> => <h1>{t('nav_dashboard', 'Dashboard')}</h1>
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
