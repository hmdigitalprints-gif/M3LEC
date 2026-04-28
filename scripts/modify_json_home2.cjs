const fs = require('fs');

const addKeys = {
  en: {
    "personalized_selection": "Personalized Selection",
    "recommended_for_you_title": "Recommended",
    "recommended_for_you_accent": "For You",
    "recommended_desc": "AI-powered suggestions based on your preferences.",
    "starting_from": "Starting from",
    "specialized_expertise": "Specialized Expertise",
    "expert_categories_title": "Expert",
    "expert_categories_accent": "Categories",
    "categories_desc": "Select a service to see available professionals near you.",
    "elite_professionals": "Elite Professionals",
    "top_rated_nearby_title": "Top Rated",
    "top_rated_nearby_accent": "Nearby",
    "top_rated_desc": "Highly recommended professionals in your area.",
    "view_all": "View All"
  },
  fr: {
    "personalized_selection": "Sélection personnalisée",
    "recommended_for_you_title": "Recommandé",
    "recommended_for_you_accent": "Pour Vous",
    "recommended_desc": "Suggestions basées sur l'IA selon vos préférences.",
    "starting_from": "À partir de",
    "specialized_expertise": "Expertise Spécialisée",
    "expert_categories_title": "Catégories",
    "expert_categories_accent": "d'Experts",
    "categories_desc": "Sélectionnez un service pour voir les pros disponibles près de chez vous.",
    "elite_professionals": "Professionnels d'Élite",
    "top_rated_nearby_title": "Les Mieux",
    "top_rated_nearby_accent": "Notés",
    "top_rated_desc": "Professionnels hautement recommandés dans votre région.",
    "view_all": "Voir tout"
  },
  ar: {
    "personalized_selection": "تشكيلة مخصصة لك",
    "recommended_for_you_title": "موصى به",
    "recommended_for_you_accent": "لك",
    "recommended_desc": "توصيات متطورة بناءً على تفضيلاتك.",
    "starting_from": "ابتداءً من",
    "specialized_expertise": "خبرات متخصصة",
    "expert_categories_title": "فئات",
    "expert_categories_accent": "الخبراء",
    "categories_desc": "اختر خدمة لرؤية المحترفين المتاحين بالقرب منك.",
    "elite_professionals": "نخبة المحترفين",
    "top_rated_nearby_title": "الأعلى تقييمًا",
    "top_rated_nearby_accent": "بالقرب منك",
    "top_rated_desc": "موصى بهم بشدة في منطقتك.",
    "view_all": "عرض الكل"
  }
};

['en', 'fr', 'ar'].forEach(lng => {
  const path = `public/locales/${lng}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  Object.assign(data, addKeys[lng]);
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${path}`);
});
