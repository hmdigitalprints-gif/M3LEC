const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  demo_title: { en: "Platform Demo", fr: "Démo de la plateforme", ar: "عرض المنصة" },
  demo_subtitle: { en: "Experience the future of home services", fr: "Découvrez l'avenir des services à domicile", ar: "جرب مستقبل الخدمات المنزلية" },
  demo_init: { en: "Initializing video generation...", fr: "Initialisation de la génération vidéo...", ar: "تهيئة إنشاء الفيديو..." },
  demo_gen_wait: { en: "Generating video... This may take a minute.", fr: "Génération de la vidéo... Cela peut prendre une minute.", ar: "جاري إنشاء الفيديو... قد يستغرق هذا دقيقة." },
  demo_gen_prog: { en: "Generating video... ", fr: "Génération de la vidéo... ", ar: "جاري إنشاء الفيديو... " },
  demo_err_invalid: { en: "API Key invalid or expired. Please select a valid key.", fr: "Clé API invalide ou expirée. Veuillez sélectionner une clé valide.", ar: "مفتاح API غير صالح أو منتهي الصلاحية. يرجى تحديد مفتاح صالح." },
  demo_err_failed: { en: "Failed to generate video", fr: "Échec de la génération de la vidéo", ar: "فشل إنشاء الفيديو" },
  demo_err_nourl: { en: "No video URL returned", fr: "Aucune URL de vidéo retournée", ar: "لم يتم إرجاع عنوان URL للفيديو" },
  demo_err_unexp: { en: "An unexpected error occurred", fr: "Une erreur inattendue est survenue", ar: "حدث خطأ غير متوقع" },
  demo_ui_crafting: { en: "Our AI is crafting a custom demo video for you...", fr: "Notre IA crée une vidéo de démonstration personnalisée pour vous...", ar: "يقوم الذكاء الاصطناعي لدينا بصياغة فيديو عرض توضيحي مخصص لك..." },
  demo_ui_fail: { en: "Generation Failed", fr: "Échec de la génération", ar: "فشل الإنشاء" },
  demo_btn_try: { en: "Try Again", fr: "Réessayer", ar: "حاول مرة أخرى" },
  demo_ui_keyreq: { en: "API Key Required", fr: "Clé API requise", ar: "مطلوب مفتاح API" },
  demo_ui_keydesc: { en: "To generate high-quality AI demo videos, you need to select a paid Gemini API key.", fr: "Pour générer des vidéos de démonstration d'IA de haute qualité, vous devez sélectionner une clé API Gemini payante.", ar: "لإنشاء مقاطع فيديو توضيحية عالية الجودة بتقنية الذكاء الاصطناعي، يجب عليك تحديد مفتاح Gemini API مدفوع." },
  demo_ui_billing: { en: "Learn about billing", fr: "En savoir plus sur la facturation", ar: "تعرف على الفواتير" },
  demo_btn_selkey: { en: "Select API Key", fr: "Sélectionner la clé API", ar: "حدد مفتاح API" },
  demo_ui_clickgen: { en: "Click to generate AI demo video", fr: "Cliquez pour générer une vidéo de démonstration d'IA", ar: "انقر لإنشاء فيديو توضيحي للذكاء الاصطناعي" },
  demo_ui_powered: { en: "Powered by Veo 3 Video Generation", fr: "Propulsé par la génération vidéo Veo 3", ar: "مدعوم من Veo 3 لتوليد الفيديو" },
  demo_ui_join: { en: "Join", fr: "Rejoignez", ar: "انضم إلى" },
  demo_ui_viewers: { en: "viewers who watched the demo", fr: "spectateurs qui ont regardé la démo", ar: "مشاهد الذين شاهدوا العرض التوضيحي" },
  demo_ui_live: { en: "Live AI Generation", fr: "Génération IA en direct", ar: "توليد الذكاء الاصطناعي المباشر" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("DemoModal translations added successfully.");
