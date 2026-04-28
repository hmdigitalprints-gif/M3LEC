const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  hiw_ar_s1_desc: { en: "Set up your professional profile and showcase your skills.", fr: "Configurez votre profil professionnel et mettez en valeur vos compétences.", ar: "قم بإعداد ملفك الشخصي الاحترافي واعرض مهاراتك." },
  hiw_ar_s2_desc: { en: "Complete our verification process to build trust with clients.", fr: "Complétez notre processus de vérification pour instaurer la confiance avec les clients.", ar: "أكمل عملية التحقق الخاصة بنا لبناء الثقة مع العملاء." },
  hiw_ar_s3_title: { en: "Accept Bookings", fr: "Accepter des réservations", ar: "قبول الحجوزات" },
  hiw_ar_s3_desc: { en: "Receive and manage booking requests directly on your phone.", fr: "Recevez et gérez les demandes de réservation directement sur votre téléphone.", ar: "تلقي وإدارة طلبات الحجز مباشرة على هاتفك." },
  hiw_ar_s4_title: { en: "Grow Business", fr: "Développer l'activité", ar: "تنمية الأعمال" },
  hiw_ar_s4_desc: { en: "Build your reputation and increase your earnings over time.", fr: "Bâtissez votre réputation et augmentez vos revenus au fil du temps.", ar: "ابنِ سمعتك وزد أرباحك بمرور الوقت." },
  hiw_trust_1: { en: "Trust &", fr: "Confiance &", ar: "الثقة" },
  hiw_trust_2: { en: "Safety", fr: "Sécurité", ar: "والأمان" },
  hiw_trust_3: { en: "is our Priority.", fr: "est notre priorité.", ar: "هي أولويتنا." },
  hiw_trust_desc: { en: "We've built several layers of protection to ensure every interaction on M3allem En Click is safe and reliable.", fr: "Nous avons mis en place plusieurs couches de protection pour garantir que chaque interaction sur M3allem En Click est sûre et fiable.", ar: "لقد بنينا عدة طبقات من الحماية لضمان أن كل تفاعل على 'مُعلم في نقرة' آمن وموثوق." },
  hiw_t_id_verif: { en: "Identity Verification", fr: "Vérification d'identité", ar: "التحقق من الهوية" },
  hiw_t_id_verif_desc: { en: "Every artisan must provide a valid ID and certifications.", fr: "Chaque artisan doit fournir une pièce d'identité valide et des certifications.", ar: "يجب على كل حرفي تقديم هوية صالحة وشهادات." },
  hiw_t_escrow: { en: "Secure Escrow", fr: "Séquestre Sécurisé", ar: "ضمان آمن" },
  hiw_t_escrow_desc: { en: "Payments are held securely until the work is completed.", fr: "Les paiements sont conservés en toute sécurité jusqu'à ce que le travail soit terminé.", ar: "يتم الاحتفاظ بالمدفوعات بأمان حتى يتم الانتهاء من العمل." },
  hiw_t_reviews: { en: "Verified Reviews", fr: "Avis Vérifiés", ar: "مراجعات موثقة" },
  hiw_t_reviews_desc: { en: "Only customers who have booked can leave reviews.", fr: "Seuls les clients ayant réservé peuvent laisser des avis.", ar: "فقط العملاء الذين حجزوا يمكنهم ترك مراجعات." },
  hiw_t_mediation: { en: "Mediation Support", fr: "Support de Médiation", ar: "دعم الوساطة" },
  hiw_t_mediation_desc: { en: "Our team is here to help resolve any disputes.", fr: "Notre équipe est là pour aider à résoudre tout litige.", ar: "فريقنا هنا للمساعدة في حل أي نزاعات." },
  hiw_ready_1: { en: "Ready to", fr: "Prêt à", ar: "هل أنت مستعد" },
  hiw_ready_2: { en: "Start?", fr: "Commencer ?", ar: "للبدء؟" },
  hiw_btn_join: { en: "Join as Artisan", fr: "Rejoindre en tant qu'artisan", ar: "انضم كحرفي" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("HowItWorks translations Part 2 added successfully.");
