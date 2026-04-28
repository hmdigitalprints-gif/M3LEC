const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  hiw_title_1: { en: "HOW IT", fr: "COMMENT ÇA", ar: "كيف" },
  hiw_title_2: { en: "WORKS.", fr: "MARCHE.", ar: "تعمل المنصة." },
  hiw_subtitle: { en: "M3allem En Click makes it easy to find, book, and pay for professional home services in Morocco. Here's how our platform works for you.", fr: "M3allem En Click facilite la recherche, la réservation et le paiement de services à domicile professionnels au Maroc. Voici comment notre plateforme fonctionne pour vous.", ar: "تجعل منصة 'مُعلم في نقرة' من السهل العثور على الخدمات المنزلية الاحترافية وحجزها ودفع ثمنها في المغرب. إليك كيف تعمل منصتنا من أجلك." },
  hiw_homeowners_1: { en: "For", fr: "Pour", ar: "لأصحاب" },
  hiw_homeowners_2: { en: "Homeowners.", fr: "Les Propriétaires.", ar: "المنازل." },
  hiw_ho_s1_title: { en: "Search & Filter", fr: "Rechercher et Filtrer", ar: "ابحث وصفي" },
  hiw_ho_s1_desc: { en: "Browse through verified artisans by category, location, and rating.", fr: "Parcourez les artisans vérifiés par catégorie, lieu et évaluation.", ar: "تصفح الحرفيين الموثوقين حسب الفئة والموقع والتقييم." },
  hiw_ho_s2_title: { en: "Book & Schedule", fr: "Réserver et Planifier", ar: "احجز وجدول" },
  hiw_ho_s2_desc: { en: "Select a professional and book a time that works for you.", fr: "Sélectionnez un professionnel et réservez une heure qui vous convient.", ar: "حدد محترفًا واحجز وقتًا يناسبك." },
  hiw_ho_s3_title: { en: "Get Work Done", fr: "Faire le Travail", ar: "إنجاز العمل" },
  hiw_ho_s3_desc: { en: "The artisan arrives and completes the job to your satisfaction.", fr: "L'artisan arrive et termine le travail à votre satisfaction.", ar: "يصل الحرفي ويكمل العمل بما يرضيك." },
  hiw_ho_s4_title: { en: "Pay & Review", fr: "Payer et Évaluer", ar: "الدفع والتقييم" },
  hiw_ho_s4_desc: { en: "Pay securely through the app and leave a review for the artisan.", fr: "Payez en toute sécurité via l'application et laissez un avis pour l'artisan.", ar: "ادفع بأمان من خلال التطبيق واترك تقييمًا للحرفي." },
  hiw_artisans_1: { en: "For", fr: "Pour", ar: "للحرفيين" },
  hiw_artisans_2: { en: "Artisans.", fr: "Les Artisans.", ar: "." },
  hiw_ar_s1_title: { en: "Create Profile", fr: "Créer un Profil", ar: "إنشاء ملف تعريف" },
  hiw_ar_s1_desc: { en: "Sign up and create a professional profile showcasing your skills and experience.", fr: "Inscrivez-vous et créez un profil professionnel mettant en valeur vos compétences et votre expérience.", ar: "اشترك وأنشئ ملفًا شخصيًا احترافيًا يعرض مهاراتك وخبراتك." },
  hiw_ar_s2_title: { en: "Get Verified", fr: "Être Vérifié", ar: "الحصول على التوثيق" },
  hiw_ar_s2_desc: { en: "Submit your documents and pass our quality check to become a verified artisan.", fr: "Soumettez vos documents et passez notre contrôle qualité pour devenir un artisan vérifié.", ar: "أرسل مستنداتك واجتز فحص الجودة لدينا لتصبح حرفيًا موثقًا." },
  hiw_ar_s3_title: { en: "Receive Jobs", fr: "Recevoir des Offres", ar: "استلام الوظائف" },
  hiw_ar_s3_desc: { en: "Get booking requests directly from clients in your area.", fr: "Recevez des demandes de réservation directement des clients de votre région.", ar: "احصل على طلبات الحجز مباشرة من العملاء في منطقتك." },
  hiw_ar_s4_title: { en: "Earn & Grow", fr: "Gagner et Grandir", ar: "اكسب وانمو" },
  hiw_ar_s4_desc: { en: "Complete jobs, receive secure payments, and build your reputation.", fr: "Terminez des travaux, recevez des paiements sécurisés et bâtissez votre réputation.", ar: "أنجز الأعمال، وتلقى مدفوعات آمنة، وابْنِ سمعتك." },
  hiw_features_1: { en: "Platform", fr: "Fonctionnalités", ar: "ميزات" },
  hiw_features_2: { en: "Features.", fr: "de la Plateforme.", ar: "المنصة." },
  hiw_f1_title: { en: "Secure Payments", fr: "Paiements Sécurisés", ar: "مدفوعات آمنة" },
  hiw_f1_desc: { en: "All transactions are protected. Money is held securely until the job is done.", fr: "Toutes les transactions sont protégées. L'argent est conservé en toute sécurité jusqu'à la fin de la mission.", ar: "جميع المعاملات محمية. يتم الاحتفاظ بالأموال بأمان حتى يتم إنجاز المهمة." },
  hiw_f2_title: { en: "Verified Professionals", fr: "Professionnels Vérifiés", ar: "محترفون موثوقون" },
  hiw_f2_desc: { en: "Every artisan on our platform goes through a strict background check.", fr: "Chaque artisan sur notre plateforme passe par une vérification stricte des antécédents.", ar: "يخضع كل حرفي على منصتنا لفحص صارم للخلفية." },
  hiw_f3_title: { en: "In-App Messaging", fr: "Messagerie Intégrée", ar: "المراسلة داخل التطبيق" },
  hiw_f3_desc: { en: "Communicate directly with your artisan or client through our secure chat.", fr: "Communiquez directement avec votre artisan ou client via notre chat sécurisé.", ar: "تواصل مباشرة مع الحرفي أو العميل من خلال الدردشة الآمنة لدينا." },
  hiw_f4_title: { en: "Real-time Tracking", fr: "Suivi en Temps Réel", ar: "التتبع في الوقت الفعلي" },
  hiw_f4_desc: { en: "Track the status of your booking and the artisan's arrival time.", fr: "Suivez l'état de votre réservation et l'heure d'arrivée de l'artisan.", ar: "تتبع حالة الحجز الخاص بك ووقت وصول الحرفي." },
  hiw_cta_1: { en: "Ready to get", fr: "Prêt à", ar: "هل أنت مستعد" },
  hiw_cta_2: { en: "Started?", fr: "Commencer ?", ar: "للبدء؟" },
  hiw_btn_find: { en: "Find a Pro", fr: "Trouver un Pro", ar: "ابحث عن محترف" },
  hiw_btn_become: { en: "Become an Artisan", fr: "Devenir Artisan", ar: "كن حرفياً" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("HowItWorks translations added successfully.");
