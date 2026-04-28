const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  nav_back_home: { en: "Back to Home", fr: "Retour à l'accueil", ar: "العودة للرئيسية" },
  nav_home_short: { en: "Home", fr: "Accueil", ar: "الرئيسية" },
  nav_services: { en: "Services", fr: "Services", ar: "الخدمات" },
  nav_become_artisan: { en: "Become an Artisan", fr: "Devenir Artisan", ar: "كن حرفياً" },
  nav_store: { en: "Materials Store", fr: "Magasin de Matériaux", ar: "متجر المواد" },
  nav_pricing: { en: "Pricing", fr: "Tarifs", ar: "الأسعار" },
  nav_sign_in: { en: "Sign In", fr: "Se Connecter", ar: "تسجيل الدخول" },
  footer_slogan: { en: "The most trusted marketplace for professional artisans in Morocco. Quality work, guaranteed.", fr: "Le marché le plus fiable pour les artisans professionnels au Maroc. Travail de qualité, garanti.", ar: "السوق الأكثر موثوقية للحرفيين المحترفين في المغرب. عمل عالي الجودة ومضمون." },
  footer_platform: { en: "Platform", fr: "Plateforme", ar: "المنصة" },
  footer_find_pro: { en: "Find a Pro", fr: "Trouver un Pro", ar: "ابحث عن محترف" },
  footer_how_it_works: { en: "How it Works", fr: "Comment ça marche", ar: "كيف تعمل" },
  footer_company: { en: "Company", fr: "Entreprise", ar: "الشركة" },
  footer_about: { en: "About Us", fr: "À propos de nous", ar: "من نحن" },
  footer_careers: { en: "Careers", fr: "Carrières", ar: "الوظائف" },
  footer_contact: { en: "Contact", fr: "Contact", ar: "اتصل بنا" },
  footer_blog: { en: "Blog", fr: "Blog", ar: "المدونة" },
  footer_legal: { en: "Legal", fr: "Légal", ar: "قانوني" },
  footer_privacy: { en: "Privacy Policy", fr: "Politique de confidentialité", ar: "سياسة الخصوصية" },
  footer_terms: { en: "Terms of Service", fr: "Conditions d'utilisation", ar: "شروط الخدمة" },
  footer_cookies: { en: "Cookie Policy", fr: "Politique des cookies", ar: "سياسة ملفات تعريف الارتباط" },
  footer_admin: { en: "Admin Panel", fr: "Panneau d'administration", ar: "لوحة الإدارة" },
  footer_rights: { en: "© 2026 M3allem En Click. All rights reserved.", fr: "© 2026 M3allem En Click. Tous droits réservés.", ar: "© 2026 M3allem En Click. جميع الحقوق محفوظة." }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Public layout translations added successfully.");
