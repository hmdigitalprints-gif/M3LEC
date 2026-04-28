const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  home_new_title_1: { en: "Premium", fr: "Artisans", ar: "محترفون" },
  home_new_title_2: { en: "Artisans.", fr: "Premium.", ar: "متميزون." },
  home_new_desc: { en: "Connect with certified professionals for your home improvement needs.", fr: "Connectez-vous avec des professionnels certifiés pour vos besoins.", ar: "تواصل مع محترفين معتمدين لتلبية احتياجات منزلك." },
  home_new_feat1_title: { en: "Verified Experts", fr: "Experts Vérifiés", ar: "خبراء موثقون" },
  home_new_feat1_desc: { en: "Every artisan is thoroughly vetted for quality and reliability.", fr: "Chaque artisan est soigneusement vérifié.", ar: "يتم التحقق من كل حرفي لضمان الجودة والموثوقية." },
  home_new_feat2_title: { en: "Instant Booking", fr: "Réservation Instantanée", ar: "حجز فوري" },
  home_new_feat2_desc: { en: "Schedule services immediately with real-time availability.", fr: "Planifiez des services immédiatement.", ar: "جدولة الخدمات فوراً عبر معرفة الأوقات المتاحة." },
  home_new_feat3_title: { en: "Premium Quality", fr: "Qualité Premium", ar: "جودة ممتازة" },
  home_new_feat3_desc: { en: "Experience top-tier craftsmanship and exceptional service.", fr: "Profitez d'un savoir-faire de haut niveau.", ar: "استمتع بخدمات وإتقان بمستوى رفيع." },
  home_new_btn_find: { en: "Find an Artisan", fr: "Trouver un Artisan", ar: "البحث عن حرفي" },
  home_new_btn_quote: { en: "Get AI Quote", fr: "Devis IA", ar: "احصل على تسعير فوري" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Translation keys added successfully.");
