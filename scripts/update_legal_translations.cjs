const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  terms_title_1: { en: "TERMS OF", fr: "CONDITIONS", ar: "شروط" },
  terms_title_2: { en: "SERVICE.", fr: "D'UTILISATION.", ar: "الخدمة." },
  privacy_title_1: { en: "PRIVACY", fr: "POLITIQUE DE", ar: "سياسة" },
  privacy_title_2: { en: "POLICY.", fr: "CONFIDENTIALITÉ.", ar: "الخصوصية." },
  cookies_title_1: { en: "COOKIE", fr: "POLITIQUE DES", ar: "سياسة ملفات" },
  cookies_title_2: { en: "POLICY.", fr: "COOKIES.", ar: "الارتباط." }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Legal titles translations added successfully.");
