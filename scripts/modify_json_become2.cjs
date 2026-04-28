const fs = require('fs');

const updateKeys = {
  en: {
    "become_ar_ben_4_title": "Build Reputation",
    "become_ar_ben_4_desc": "Collect verified reviews and become the top-rated pro in your city.",
    "become_ar_ben_5_title": "Mobile Tools",
    "become_ar_ben_5_desc": "Manage bookings, chat with clients, and track earnings on the go.",
    "become_ar_ben_6_title": "Professional Growth",
    "become_ar_ben_6_desc": "Access training, certification programs, and exclusive tool discounts.",
    "become_ar_join_title": "How to",
    "become_ar_join_accent": "Join.",
    "become_ar_step_1_title": "Create Profile",
    "become_ar_step_1_desc": "Sign up and tell us about your skills, experience, and location.",
    "become_ar_step_2_title": "Get Verified",
    "become_ar_step_2_desc": "Upload your ID and certifications. We verify every pro for trust.",
    "become_ar_step_3_title": "Start Earning",
    "become_ar_step_3_desc": "Receive booking requests and start growing your business.",
    "become_ar_faq_title": "Frequently Asked",
    "become_ar_faq_accent": "Questions.",
    "become_ar_faq_1_q": "Is there a registration fee?",
    "become_ar_faq_1_a": "No, joining M3allem En Click is completely free. We only take a small commission on successful bookings.",
    "become_ar_faq_2_q": "How do I get paid?",
    "become_ar_faq_2_a": "Payments are processed through our secure system and transferred directly to your bank account or wallet.",
    "become_ar_faq_3_q": "What documents do I need?",
    "become_ar_faq_3_a": "You will need a valid National ID (CIN) and any professional certifications or licenses you have.",
    "become_ar_faq_4_q": "Can I work part-time?",
    "become_ar_faq_4_a": "Yes! You have full control over your availability. You can work as much or as little as you want."
  },
  ar: {
    "become_ar_ben_4_title": "بناء سمعتك",
    "become_ar_ben_4_desc": "اجمع تقييمات موثقة وكن المحترف الأعلى تقييمًا في مدينتك.",
    "become_ar_ben_5_title": "أدوات مخصصة",
    "become_ar_ben_5_desc": "أدر الحجوزات، تحدث مع العملاء، وتتبع أرباحك من هاتفك.",
    "become_ar_ben_6_title": "تطور مهني",
    "become_ar_ben_6_desc": "احصل على تدريب، شهادات، وخصومات حصرية على المعدات.",
    "become_ar_join_title": "كيف",
    "become_ar_join_accent": "تنضم إلينا.",
    "become_ar_step_1_title": "أنشئ حسابك",
    "become_ar_step_1_desc": "قم بالتسجيل وأخبرنا عن مهاراتك، خبراتك، وموقعك.",
    "become_ar_step_2_title": "توثيق الهوية",
    "become_ar_step_2_desc": "ارفع أوراقك الرسمية ليتم التحقق منها لبناء الثقة.",
    "become_ar_step_3_title": "ابدأ في العمل",
    "become_ar_step_3_desc": "استقبل طلبات الحجز وابدأ في زيادة مدخولك اليوم.",
    "become_ar_faq_title": "أسئلة",
    "become_ar_faq_accent": "شائعة.",
    "become_ar_faq_1_q": "هل هناك رسوم للتسجيل؟",
    "become_ar_faq_1_a": "لا، الانضمام لمنصة معلم بضغطة زر مجاني تماماً. نحن نأخذ عمولة بسيطة فقط على الحجوزات الناجحة.",
    "become_ar_faq_2_q": "كيف أستلم أرباحي؟",
    "become_ar_faq_2_a": "تتم معالجة المدفوعات عبر نظامنا الآمن وتحويلها مباشرة إلى حسابك البنكي.",
    "become_ar_faq_3_q": "ما هي المستندات المطلوبة؟",
    "become_ar_faq_3_a": "ستحتاج إلى بطاقة تعريف وطنية سارية المفعول (CIN) وأي شهادات مهنية تمتلكها.",
    "become_ar_faq_4_q": "هل يمكنني العمل بدوام جزئي؟",
    "become_ar_faq_4_a": "نعم! لديك التحكم الكامل في أوقات فراغك. يمكنك العمل قدر ما تشاء."
  },
  fr: {
    "become_ar_ben_4_title": "Bâtir votre réputation",
    "become_ar_ben_4_desc": "Récoltez des avis certifiés et devenez le meilleur de votre ville.",
    "become_ar_ben_5_title": "Outils sur mobile",
    "become_ar_ben_5_desc": "Gérez vos réservations, vos clients et vos revenus facilement.",
    "become_ar_ben_6_title": "Croissance professionnelle",
    "become_ar_ben_6_desc": "Accès à des formations, des certifications et des remises sur le matériel.",
    "become_ar_join_title": "Comment",
    "become_ar_join_accent": "Rejoindre.",
    "become_ar_step_1_title": "Créer son Profil",
    "become_ar_step_1_desc": "Inscrivez-vous et décrivez vos compétences, votre expérience et votre emplacement.",
    "become_ar_step_2_title": "Se faire Vérifier",
    "become_ar_step_2_desc": "Téléchargez vos pièces d'identité et certificats pour renforcer la confiance.",
    "become_ar_step_3_title": "Générer des Revenus",
    "become_ar_step_3_desc": "Recevez des demandes de réservation et commencez à développer votre activité.",
    "become_ar_faq_title": "Questions",
    "become_ar_faq_accent": "Fréquentes.",
    "become_ar_faq_1_q": "Y a-t-il des frais d'inscription ?",
    "become_ar_faq_1_a": "Non, l'inscription est gratuite. Nous prélevons seulement une petite commission sur les réservations réussies.",
    "become_ar_faq_2_q": "Comment suis-je payé ?",
    "become_ar_faq_2_a": "Les paiements sont traités de manière sécurisée et virés directement sur votre compte bancaire.",
    "become_ar_faq_3_q": "Quels documents sont nécessaires ?",
    "become_ar_faq_3_a": "Vous aurez besoin d'une Carte d'Identité Nationale (CIN) et de tous vos certificats professionnels.",
    "become_ar_faq_4_q": "Puis-je travailler à temps partiel ?",
    "become_ar_faq_4_a": "Oui ! Vous avez le contrôle total sur votre disponibilité."
  }
};

['en', 'fr', 'ar'].forEach(lng => {
  const path = `public/locales/${lng}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  Object.assign(data, updateKeys[lng]);
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${path}`);
});
