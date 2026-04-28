const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  services_verified_pros: { en: "Verified Professionals", fr: "Professionnels Vérifiés", ar: "محترفون موثوقون" },
  services_title: { en: "Our", fr: "Nos", ar: "خدماتنا" },
  services_title_accent: { en: "Services.", fr: "Services.", ar: "." },
  services_desc: { en: "Everything you need to build, maintain, and improve your home. Book trusted professionals in minutes.", fr: "Tout ce dont vous avez besoin pour construire, entretenir et améliorer votre maison. Réservez des professionnels de confiance en quelques minutes.", ar: "كل ما تحتاجه لبناء، صيانة، وتحسين منزلك. احجز محترفين موثوقين في دقائق." },
  services_plumbing_desc: { en: "Leak repairs, pipe installations, bathroom fittings, and emergency plumbing services.", fr: "Réparations de fuites, installations de tuyaux, raccords de salle de bain et services de plomberie d'urgence.", ar: "إصلاح التسربات، تركيب الأنابيب، تجهيزات الحمامات، وخدمات السباكة الطارئة." },
  services_electricity_desc: { en: "Wiring, lighting installation, panel upgrades, and electrical safety inspections.", fr: "Câblage, installation d'éclairage, mises à niveau de panneaux et inspections de sécurité électrique.", ar: "التمديدات الكهربائية، تركيب الإضاءة، تحديث اللوحات، وفحوصات السلامة الكهربائية." },
  services_painting_desc: { en: "Interior and exterior painting, wallpaper removal, and decorative finishes.", fr: "Peinture intérieure et extérieure, enlèvement de papier peint et finitions décoratives.", ar: "صباغة داخلية وخارجية، إزالة ورق الجدران، وتشطيبات ديكورية." },
  services_cleaning_desc: { en: "Deep cleaning, post-construction cleanup, and regular home maintenance.", fr: "Nettoyage en profondeur, nettoyage après construction et entretien régulier de la maison.", ar: "تنظيف عميق، تنظيف بعد البناء، وصيانة دورية للمنزل." },
  services_ac_desc: { en: "AC installation, maintenance, gas refilling, and cooling system repairs.", fr: "Installation de climatisation, entretien, remplissage de gaz et réparations de systèmes de refroidissement.", ar: "تركيب المكيفات، صيانة، تعبئة الغاز، وإصلاح أنظمة التبريد." },
  services_construction_desc: { en: "Masonry, tiling, renovation work, and small-scale construction projects.", fr: "Maçonnerie, carrelage, travaux de rénovation et petits projets de construction.", ar: "بناء، تبليط، أعمال التجديد، ومشاريع البناء الصغيرة." },
  services_carpentry_desc: { en: "Furniture repair, custom cabinets, door installations, and woodwork.", fr: "Réparation de meubles, armoires sur mesure, installations de portes et menuiserie.", ar: "إصلاح الأثاث، دواليب مفصلة، تركيب الأبواب، وأعمال النجارة." },
  services_gardening_desc: { en: "Landscaping, lawn maintenance, plant care, and garden design.", fr: "Aménagement paysager, entretien de la pelouse, soin des plantes et conception de jardins.", ar: "تنسيق الحدائق، صيانة العشب، العناية بالنباتات، وتصميم الحدائق." },
  services_pros_available: { en: "Pros Available", fr: "Pros Disponibles", ar: "محترف متاح" },
  services_explore: { en: "Explore Artisans", fr: "Explorer les Artisans", ar: "استكشف المحترفين" },
  services_cta_title: { en: "Ready to get started?", fr: "Prêt à commencer ?", ar: "مستعد للبدء؟" },
  services_cta_desc: { en: "Find the perfect professional for your next project today.", fr: "Trouvez le professionnel parfait pour votre prochain projet aujourd'hui.", ar: "ابحث عن المحترف المثالي لمشروعك القادم اليوم." },
  services_cta_btn: { en: "Search Artisans", fr: "Rechercher des Artisans", ar: "ابحث عن حرفيين" }
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
