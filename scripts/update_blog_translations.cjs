const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  blog_title_1: { en: "OUR", fr: "NOTRE", ar: "لدينا" },
  blog_title_2: { en: "BLOG.", fr: "BLOG.", ar: "المدونة." },
  blog_subtitle: { en: "Insights, tips, and stories from the world of home services and professional craftsmanship.", fr: "Aperçus, conseils et histoires du monde des services à domicile et de l'artisanat professionnel.", ar: "رؤى ونصائح وقصص من عالم الخدمات المنزلية والحرفية المهنية." },
  post_1_title: { en: "How to Choose the Right Artisan for Your Home Renovation", fr: "Comment choisir le bon artisan pour la rénovation de votre maison", ar: "كيف تختار الحرفي المناسب لتجديد منزلك" },
  post_1_excerpt: { en: "Renovating your home can be stressful. Here are 5 tips to help you find the perfect professional for your project.", fr: "Rénover votre maison peut être stressant. Voici 5 conseils pour vous aider à trouver le professionnel parfait pour votre projet.", ar: "يمكن أن يكون تجديد منزلك مرهقًا. إليك 5 نصائح لمساعدتك في العثور على المحترف المثالي لمشروعك." },
  post_1_cat: { en: "Renovation", fr: "Rénovation", ar: "تجديد" },
  post_2_title: { en: "Common Plumbing Issues and How to Prevent Them", fr: "Problèmes de plomberie courants et comment les prévenir", ar: "مشاكل السباكة الشائعة وكيفية الوقاية منها" },
  post_2_excerpt: { en: "Don't wait for a leak to happen. Learn how to maintain your plumbing system and save money on repairs.", fr: "N'attendez pas qu'une fuite se produise. Apprenez à entretenir votre système de plomberie et économisez sur les réparations.", ar: "لا تنتظر حدوث تسرب. تعرف على كيفية صيانة نظام السباكة الخاص بك وتوفير المال على الإصلاحات." },
  post_2_cat: { en: "Maintenance", fr: "Entretien", ar: "صيانة" },
  post_3_title: { en: "The Future of Home Services in Morocco", fr: "L'avenir des services à domicile au Maroc", ar: "مستقبل الخدمات المنزلية في المغرب" },
  post_3_excerpt: { en: "How technology is transforming the way we connect with professional artisans and get quality work done.", fr: "Comment la technologie transforme la façon dont nous nous connectons avec les artisans professionnels et obtenons un travail de qualité.", ar: "كيف تعمل التكنولوجيا على إحداث تحول في الطريقة التي نتواصل بها مع الحرفيين المحترفين وإنجاز عمل عالي الجودة." },
  post_3_cat: { en: "Technology", fr: "Technologie", ar: "تكنولوجيا" },
  blog_read_more: { en: "Read Article", fr: "Lire l'article", ar: "اقرأ المقال" },
  blog_sub_1: { en: "Subscribe to our", fr: "Abonnez-vous à notre", ar: "اشترك في" },
  blog_sub_2: { en: "Newsletter.", fr: "Newsletter.", ar: "النشرة الإخبارية." },
  blog_sub_desc: { en: "Get the latest updates, tips, and insights delivered straight to your inbox.", fr: "Recevez les dernières mises à jour, conseils et aperçus directement dans votre boîte de réception.", ar: "احصل على أحدث التحديثات والنصائح والرؤى التي يتم تسليمها مباشرة إلى صندوق الوارد الخاص بك." },
  blog_sub_placeholder: { en: "Enter your email address", fr: "Entrez votre adresse email", ar: "أدخل عنوان بريدك الإلكتروني" },
  blog_sub_btn: { en: "Subscribe", fr: "S'abonner", ar: "اشتراك" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Blog translations added successfully.");
