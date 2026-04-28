const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  careers_ben_title_1: { en: "Why Join", fr: "Pourquoi Nous", ar: "لماذا" },
  careers_ben_title_2: { en: "Us?", fr: "Rejoindre ?", ar: "تنضم إلينا؟" },
  careers_ben_1: { en: "Competitive Salary", fr: "Salaire Compétitif", ar: "راتب تنافسي" },
  careers_ben_2: { en: "Health Insurance", fr: "Assurance Maladie", ar: "تأمين صحي" },
  careers_ben_3: { en: "Remote Work", fr: "Télétravail", ar: "العمل عن بعد" },
  careers_ben_4: { en: "Learning Budget", fr: "Budget de Formation", ar: "ميزانية التعلم" },
  careers_ben_5: { en: "Equity Options", fr: "Options sur Titres", ar: "خيارات الأسهم" },
  careers_ben_6: { en: "Flexible Hours", fr: "Horaires Flexibles", ar: "ساعات مرنة" },
  careers_ben_7: { en: "Modern Tools", fr: "Outils Modernes", ar: "أدوات حديثة" },
  careers_ben_8: { en: "Great Culture", fr: "Excellente Culture", ar: "ثقافة رائعة" },
  careers_posted_ago: { en: "Posted 2 days ago", fr: "Publié il y a 2 jours", ar: "نُشر منذ يومين" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Careers part 2 translations added successfully.");
