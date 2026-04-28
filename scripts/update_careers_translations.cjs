const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  careers_title_1: { en: "JOIN THE", fr: "REJOINDRE", ar: "انضم إلى" },
  careers_title_2: { en: "TEAM.", fr: "L'ÉQUIPE.", ar: "الفريق." },
  careers_subtitle: { en: "Help us build the future of home services in Morocco. We're looking for passionate individuals to join our mission.", fr: "Aidez-nous à construire l'avenir des services à domicile au Maroc. Nous recherchons des personnes passionnées pour rejoindre notre mission.", ar: "ساعدنا في بناء مستقبل الخدمات المنزلية في المغرب. نحن نبحث عن أفراد شغوفين للانضمام إلى مهمتنا." },
  careers_culture_inn: { en: "Innovation", fr: "Innovation", ar: "الابتكار" },
  careers_culture_inn_desc: { en: "We solve complex problems with creative solutions and modern technology.", fr: "Nous résolvons des problèmes complexes avec des solutions créatives et des technologies modernes.", ar: "نحل المشاكل المعقدة بحلول إبداعية وتكنولوجيا حديثة." },
  careers_culture_com: { en: "Community", fr: "Communauté", ar: "المجتمع" },
  careers_culture_com_desc: { en: "We're building more than just an app; we're building a community.", fr: "Nous construisons plus qu'une simple application ; nous construisons une communauté.", ar: "نحن نبني أكثر من مجرد تطبيق؛ نحن نبني مجتمعاً." },
  careers_culture_exc: { en: "Excellence", fr: "Excellence", ar: "التميز" },
  careers_culture_exc_desc: { en: "We strive for excellence in everything we do, from code to customer support.", fr: "Nous visons l'excellence dans tout ce que nous faisons, du code au support client.", ar: "نسعى جاهدين للتميز في كل ما نقوم به، من التعليمات البرمجية إلى دعم العملاء." },
  careers_positions_1: { en: "Open", fr: "Postes", ar: "الوظائف" },
  careers_positions_2: { en: "Positions.", fr: "Ouverts.", ar: "المفتوحة." },
  careers_btn_apply: { en: "Apply Now", fr: "Postuler Maintenant", ar: "قدم الآن" },
  careers_no_jobs_1: { en: "Don't see a", fr: "Vous ne voyez pas de", ar: "لا ترى" },
  careers_no_jobs_2: { en: "Fit?", fr: "Correspondance ?", ar: "ما يناسبك؟" },
  careers_no_jobs_desc: { en: "We're always looking for talented people. Send us your resume and we'll reach out when a suitable position opens up.", fr: "Nous sommes toujours à la recherche de personnes talentueuses. Envoyez-nous votre CV et nous vous contacterons lorsqu'un poste approprié sera disponible.", ar: "نحن دائماً نبحث عن المواهب. أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر وظيفة مناسبة." },
  careers_btn_email: { en: "Email Resume", fr: "Envoyer le CV", ar: "إرسال السيرة الذاتية" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Careers translations added successfully.");
