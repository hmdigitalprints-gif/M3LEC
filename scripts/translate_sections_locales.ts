import fs from 'fs';

const translations = {
  section_main: { en: 'Main', fr: 'Principal', ar: 'الرئيسي' },
  section_management: { en: 'Management', fr: 'Gestion', ar: 'إدارة' },
  section_operations: { en: 'Operations', fr: 'Opérations', ar: 'عمليات' },
  section_finance: { en: 'Finance', fr: 'Finances', ar: 'المالية' },
  section_system: { en: 'System', fr: 'Système', ar: 'النظام' },
  section_features: { en: 'Features', fr: 'Fonctionnalités', ar: 'الميزات' },
  section_tools: { en: 'Tools', fr: 'Outils', ar: 'أدوات' }
};

const locales = ['en', 'fr', 'ar'];

locales.forEach(lang => {
  const file = `public/locales/${lang}.json`;
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const [k, v] of Object.entries(translations)) {
      data[k] = v[lang];
    }
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  }
});
