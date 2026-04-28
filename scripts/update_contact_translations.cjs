const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  contact_title_1: { en: "GET IN", fr: "NOUS", ar: "تواصل" },
  contact_title_2: { en: "TOUCH.", fr: "CONTACTER.", ar: "معنا." },
  contact_subtitle: { en: "Have questions or need assistance? Our team is here to help you with anything you need.", fr: "Vous avez des questions ou besoin d'aide ? Notre équipe est là pour vous aider avec tout ce dont vous avez besoin.", ar: "هل لديك أسئلة أو تحتاج إلى مساعدة؟ فريقنا هنا لمساعدتك في أي شيء تحتاجه." },
  contact_email_us: { en: "Email Us", fr: "Envoyez-nous un E-mail", ar: "راسلنا عبر البريد الإلكتروني" },
  contact_call_us: { en: "Call Us", fr: "Appelez-nous", ar: "اتصل بنا" },
  contact_visit_us: { en: "Visit Us", fr: "Rendez-nous Visite", ar: "قم بزيارتنا" },
  contact_business_hours: { en: "Business Hours", fr: "Heures d'ouverture", ar: "ساعات العمل" },
  contact_mon_fri: { en: "Monday - Friday", fr: "Lundi - Vendredi", ar: "الإثنين - الجمعة" },
  contact_sat: { en: "Saturday", fr: "Samedi", ar: "السبت" },
  contact_sun: { en: "Sunday", fr: "Dimanche", ar: "الأحد" },
  contact_closed: { en: "Closed", fr: "Fermé", ar: "مغلق" },
  contact_send_msg_title: { en: "Send us a Message", fr: "Envoyez-nous un message", ar: "أرسل لنا رسالة" },
  contact_lbl_name: { en: "Full Name", fr: "Nom Complet", ar: "الاسم الكامل" },
  contact_lbl_email: { en: "Email Address", fr: "Adresse E-mail", ar: "البريد الإلكتروني" },
  contact_lbl_subject: { en: "Subject", fr: "Sujet", ar: "الموضوع" },
  contact_lbl_msg: { en: "Message", fr: "Message", ar: "الرسالة" },
  contact_btn_send: { en: "Send Message", fr: "Envoyer le Message", ar: "إرسال الرسالة" },
  contact_faq_title: { en: "Frequently Asked Questions", fr: "Foire Aux Questions", ar: "أسئلة مكررة" },
  contact_faq_1_q: { en: "How do I become an artisan?", fr: "Comment devenir artisan ?", ar: "كيف أصبح حرفياً؟" },
  contact_faq_1_a: { en: "You can apply through our 'Become an Artisan' page. We'll review your application and documents to verify your expertise.", fr: "Vous pouvez postuler via notre page 'Devenir Artisan'. Nous examinerons votre candidature et vos documents pour vérifier votre expertise.", ar: "يمكنك التقديم عبر صفحة 'كن حرفياً'. سنقوم بمراجعة طلبك ومستنداتك للتحقق من خبرتك." },
  contact_faq_2_q: { en: "Is the platform free for clients?", fr: "La plateforme est-elle gratuite pour les clients ?", ar: "هل المنصة مجانية للعملاء؟" },
  contact_faq_2_a: { en: "Yes, joining and browsing is completely free. You only pay for the services you book.", fr: "Oui, l'inscription et la navigation sont totalement gratuites. Vous ne payez que pour les services que vous réservez.", ar: "نعم، الانضمام والتصفح مجاني تمامًا. تدفع فقط مقابل الخدمات التي تحجزها." },
  contact_faq_3_q: { en: "What if I have an issue with a service?", fr: "Que faire si j'ai un problème avec un service ?", ar: "ماذا لو كانت لدي مشكلة في إحدى الخدمات؟" },
  contact_faq_3_a: { en: "Our support team is available to help resolve any disputes. We ensure all issues are handled fairly and promptly.", fr: "Notre équipe d'assistance est disponible pour aider à résoudre tout litige. Nous veillons à ce que tous les problèmes soient traités équitablement et rapidement.", ar: "فريق الدعم لدينا متاح للمساعدة في حل أي نزاعات. نحن نضمن التعامل مع جميع القضايا بإنصاف وسرعة." },
  contact_faq_more: { en: "Have more questions?", fr: "Vous avez d'autres questions ?", ar: "هل لديك المزيد من الأسئلة؟" },
  contact_faq_chat: { en: "Chat with us via email or phone.", fr: "Discutez avec nous par e-mail ou téléphone.", ar: "تحدث معنا عبر البريد الإلكتروني أو الهاتف." }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Contact translations added successfully.");
