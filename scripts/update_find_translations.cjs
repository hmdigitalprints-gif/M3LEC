const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

// FindM3allem keys
const newKeys = {
  find_ar_back: { en: "Back", fr: "Retour", ar: "رجوع" },
  find_ar_title_1: { en: "Find your", fr: "Trouvez votre", ar: "ابحث عن" },
  find_ar_title_2: { en: "Pro.", fr: "Pro.", ar: "محترف." },
  find_ar_desc: { en: "Browse through our network of verified professionals and book the best talent for your home needs.", fr: "Parcourez notre réseau de professionnels vérifiés et réservez les meilleurs talents pour votre maison.", ar: "تصفح شبكتنا من المحترفين الموثقين واحجز أفضل الكفاءات لاحتياجات منزلك." },
  find_ar_btn_post: { en: "Post a Job Request", fr: "Publier une demande", ar: "نشر طلب عمل" },
  find_ar_online_now: { en: "Online", fr: "En ligne", ar: "متصل" },
  find_ar_search: { en: "Search by name or service...", fr: "Rechercher par nom ou service...", ar: "ابحث بالاسم أو الخدمة..." },
  find_ar_rating_any: { en: "Any Rating", fr: "Toutes les notes", ar: "أي تقييم" },
  find_ar_rating_3: { en: "3+ Stars", fr: "3+ Étoiles", ar: "3+ نجوم" },
  find_ar_rating_4: { en: "4+ Stars", fr: "4+ Étoiles", ar: "4+ نجوم" },
  find_ar_rating_45: { en: "4.5+ Stars", fr: "4.5+ Étoiles", ar: "4.5+ نجوم" },
  find_ar_min_price: { en: "Min Price (MAD)", fr: "Prix Min (MAD)", ar: "أقل سعر (درهم)" },
  find_ar_max_price: { en: "Max Price (MAD)", fr: "Prix Max (MAD)", ar: "أعلى سعر (درهم)" },
  find_ar_online_only: { en: "Online Now", fr: "En ligne maintenant", ar: "متصل الآن" },
  find_ar_verified: { en: "Verified", fr: "Vérifié", ar: "موثق" },
  find_ar_per_hour: { en: "Per Hour", fr: "Par Heure", ar: "في الساعة" },
  find_ar_book_now: { en: "Book Now", fr: "Réserver", ar: "احجز الآن" },
  find_ar_no_pros: { en: "No Pros found", fr: "Aucun Pro trouvé", ar: "لم يتم العثور على محترفين" },
  find_ar_no_pros_desc: { en: "Try adjusting your filters or search query.", fr: "Essayez de modifier vos filtres ou votre recherche.", ar: "حاول تعديل فلاتر البحث أو الاستعلام." },
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Translation keys added successfully.");
