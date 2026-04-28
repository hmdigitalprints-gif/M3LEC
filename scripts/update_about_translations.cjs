const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  about_title_1: { en: "OUR", fr: "NOTRE", ar: "قصتنا" },
  about_title_2: { en: "STORY.", fr: "HISTOIRE.", ar: "." },
  about_subtitle: { en: "M3allem En Click was born from a simple idea: connecting homeowners with the best professional artisans in Morocco through a trusted, digital platform.", fr: "M3allem En Click est né d'une idée simple : mettre en relation les propriétaires avec les meilleurs artisans professionnels au Maroc grâce à une plateforme numérique de confiance.", ar: "وُلدت مؤسسة 'مُعلم في نقرة' من فكرة بسيطة: ربط أصحاب المنازل بأفضل الحرفيين المحترفين في المغرب من خلال منصة رقمية موثوقة." },
  about_mission_1: { en: "Our", fr: "Notre", ar: "مهمتنا" },
  about_mission_2: { en: "Mission.", fr: "Mission.", ar: "." },
  about_mission_desc_1: { en: "We aim to empower local artisans by giving them the tools to grow their business while providing homeowners with a safe, reliable, and convenient way to get quality work done.", fr: "Nous visons à autonomiser les artisans locaux en leur donnant les outils nécessaires pour développer leur activité, tout en offrant aux propriétaires un moyen sûr, fiable et pratique de faire réaliser des travaux de qualité.", ar: "نهدف إلى تمكين الحرفيين المحليين من خلال تزويدهم بالأدوات اللازمة لتنمية أعمالهم مع تزويد أصحاب المنازل بطريقة آمنة وموثوقة ومريحة لإنجاز عمل عالي الجودة." },
  about_mission_desc_2: { en: "By combining traditional craftsmanship with modern technology, we're building a more transparent and efficient home services ecosystem in Morocco.", fr: "En combinant le savoir-faire traditionnel avec la technologie moderne, nous construisons un écosystème de services à domicile plus transparent et plus efficace au Maroc.", ar: "من خلال الجمع بين الحرفية التقليدية والتكنولوجيا الحديثة، نقوم ببناء نظام بيئي للخدمات المنزلية أكثر شفافية وكفاءة في المغرب." },
  about_stats_verified: { en: "Verified Artisans", fr: "Artisans Vérifiés", ar: "حرفيون موثقون" },
  about_values_trust: { en: "Trust First", fr: "La Confiance d'Abord", ar: "الثقة أولاً" },
  about_values_trust_desc: { en: "We verify every artisan and homeowner to ensure a safe environment for everyone.", fr: "Nous vérifions chaque artisan et propriétaire pour garantir un environnement sûr pour tous.", ar: "نقوم بالتحقق من كل حرفي وصاحب منزل لضمان بيئة آمنة للجميع." },
  about_values_quality: { en: "Quality Work", fr: "Travail de Qualité", ar: "عمل عالي الجودة" },
  about_values_quality_desc: { en: "We stand behind the quality of work provided by our professional network.", fr: "Nous garantissons la qualité du travail fourni par notre réseau de professionnels.", ar: "نحن ندعم جودة العمل الذي تقدمه شبكتنا المهنية." },
  about_values_innovation: { en: "Innovation", fr: "Innovation", ar: "الابتكار" },
  about_values_innovation_desc: { en: "We use technology to simplify complex processes and improve user experience.", fr: "Nous utilisons la technologie pour simplifier les processus complexes et améliorer l'expérience utilisateur.", ar: "نستخدم التكنولوجيا لتبسيط العمليات المعقدة وتحسين تجربة المستخدم." },
  about_values_community: { en: "Community", fr: "Communauté", ar: "المجتمع" },
  about_values_community_desc: { en: "We support local talent and help build stronger professional communities.", fr: "Nous soutenons les talents locaux et aidons à bâtir des communautés professionnelles plus fortes.", ar: "نحن ندعم المواهب المحلية ونساعد في بناء مجتمعات مهنية أقوى." },
  about_values_transparency: { en: "Transparency", fr: "Transparence", ar: "الشفافية" },
  about_values_transparency_desc: { en: "Clear pricing, honest reviews, and open communication are our core.", fr: "Des prix clairs, des avis honnêtes et une communication ouverte sont au cœur de nos préoccupations.", ar: "التسعير الواضح، المراجعات الصادقة، والتواصل المفتوح هي جوهر عملنا." },
  about_values_customer: { en: "Customer Love", fr: "Amour du Client", ar: "إرضاء العملاء" },
  about_values_customer_desc: { en: "Our users are at the heart of everything we do. We're here to help.", fr: "Nos utilisateurs sont au cœur de tout ce que nous faisons. Nous sommes là pour vous aider.", ar: "مستخدمونا في قلب كل ما نقوم به. نحن هنا للمساعدة." },
  about_join_1: { en: "Join Our", fr: "Rejoignez", ar: "انضم إلى" },
  about_join_2: { en: "Journey.", fr: "Notre Aventure.", ar: "رحلتنا." },
  about_btn_careers: { en: "View Careers", fr: "Voir les Carrières", ar: "عرض الوظائف" },
  about_btn_contact: { en: "Contact Us", fr: "Contactez-nous", ar: "اتصل بنا" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("About translations added successfully.");
