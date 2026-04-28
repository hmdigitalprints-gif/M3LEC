const fs = require('fs');

const updateKeys = {
  en: {
    "feat_secure_desc": "Your money is safe with our escrow payment system.",
    "feat_main_title_part1": "The",
    "feat_main_title_accent": "Standard",
    "feat_main_title_part2": "for Home Services."
  },
  ar: {
    "feat_secure_desc": "أموالك في أمان تام مع نظام الدفع المضمون الخاص بنا.",
    "feat_main_title_part1": "المعيار",
    "feat_main_title_accent": "الأول",
    "feat_main_title_part2": "للخدمات المنزلية."
  },
  fr: {
    "feat_secure_desc": "Votre argent est en sécurité grâce à notre système de paiement séquestre.",
    "feat_main_title_part1": "La",
    "feat_main_title_accent": "Référence",
    "feat_main_title_part2": "des Services à Domicile."
  }
};

['en', 'fr', 'ar'].forEach(lng => {
  const path = `public/locales/${lng}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  Object.assign(data, updateKeys[lng]);
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${path}`);
});
