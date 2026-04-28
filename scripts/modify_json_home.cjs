const fs = require('fs');

const addKeys = {
  en: {
    "verified_pros_only": "Verified Pros Only",
    "home_care_title_1": "Your Home Needs Fixes.",
    "home_care_title_2": "Your Search Is Finished.",
    "search_placeholder": "What do you need help with? (e.g. Broken pipe in bathroom)",
    "smart_match_btn": "Smart Match",
    "smart_match_loading": "Finding best match...",
    "ai_problem_solver_btn": "AI Problem Solver",
    "ai_solver_title": "Describe Your Problem",
    "ai_solver_desc": "Not sure what service you need? Describe the problem in your own words, and our AI will figure it out.",
    "ai_solver_placeholder": "e.g., The sink in my kitchen is draining very slowly and making weird noises...",
    "ai_solver_analyze_btn": "Analyze Problem",
    "ai_solver_analyzing": "Deep Thinking...",
    "ai_deep_think_btn": "Use Deep Reasoning",
    "close": "Close",
    "ai_recommendation": "AI Recommendation",
    "suggested_category": "Suggested Category",
    "recommended_service": "Recommended Service",
    "ai_book_best_pro": "Book the best pro for this",
    "category_plumbing": "Plumbing",
    "category_electrical": "Electrical",
    "category_cleaning": "Cleaning",
    "category_painting": "Painting",
    "category_carpentry": "Carpentry",
    "category_hvac": "HVAC",
    "btn_book": "Book a Pro",
    "lang_switcher": "Language"
  },
  fr: {
    "verified_pros_only": "Uniquement des pros vérifiés",
    "home_care_title_1": "Votre maison a besoin de soins.",
    "home_care_title_2": "Votre recherche s'arrête ici.",
    "search_placeholder": "De quelle aide avez-vous besoin ? (ex: Fuite d'eau dans la salle de bain)",
    "smart_match_btn": "Recherche Intelligente",
    "smart_match_loading": "Recherche en cours...",
    "ai_problem_solver_btn": "Résolution par l'IA",
    "ai_solver_title": "Décrivez votre problème",
    "ai_solver_desc": "Pas sûr du service dont vous avez besoin ? Décrivez le problème avec vos propres mots et notre IA l'identifiera.",
    "ai_solver_placeholder": "ex : L'évier de ma cuisine s'écoule très lentement et fait un bruit bizarre...",
    "ai_solver_analyze_btn": "Analyser le problème",
    "ai_solver_analyzing": "Analyse en profondeur...",
    "ai_deep_think_btn": "Utiliser le raisonnement profond",
    "close": "Fermer",
    "ai_recommendation": "Recommandation de l'IA",
    "suggested_category": "Catégorie suggérée",
    "recommended_service": "Service recommandé",
    "ai_book_best_pro": "Réserver le meilleur pro",
    "category_plumbing": "Plomberie",
    "category_electrical": "Électricité",
    "category_cleaning": "Ménage",
    "category_painting": "Peinture",
    "category_carpentry": "Menuiserie",
    "category_hvac": "Climatisation",
    "btn_book": "Réserver",
    "lang_switcher": "Langue"
  },
  ar: {
    "verified_pros_only": "محترفون معتمدون فقط",
    "home_care_title_1": "منزلك بحاجة إلى إصلاح؟",
    "home_care_title_2": "بحثك ينتهي هنا.",
    "search_placeholder": "بم يمكننا مساعدتك؟ (مثال: تسرب مياه في الحمام)",
    "smart_match_btn": "المطابقة الذكية",
    "smart_match_loading": "جاري البحث عن الأفضل...",
    "ai_problem_solver_btn": "مساعد الذكاء الاصطناعي",
    "ai_solver_title": "صف المشكلة التي تواجهك",
    "ai_solver_desc": "لست متأكداً من الخدمة المطلوبة؟ اشرح المشكلة وسيقوم الذكاء الاصطناعي بتحديد أفضل الفنيين لها.",
    "ai_solver_placeholder": "مثال: حوض المطبخ يسرب الماء ويصدر أصواتاً غريبة...",
    "ai_solver_analyze_btn": "تحليل المشكلة",
    "ai_solver_analyzing": "جاري التحليل المعمق...",
    "ai_deep_think_btn": "استخدام التحليل المعمق",
    "close": "إغلاق",
    "ai_recommendation": "توصية الذكاء الاصطناعي",
    "suggested_category": "الفئة المقترحة",
    "recommended_service": "الخدمة الموصى بها",
    "ai_book_best_pro": "احجز أفضل فني لهذه الخدمة",
    "category_plumbing": "سباكة",
    "category_electrical": "كهرباء",
    "category_cleaning": "تنظيف",
    "category_painting": "صباغة",
    "category_carpentry": "نجارة",
    "category_hvac": "تكييف وتبريد",
    "btn_book": "احجز فنياً",
    "lang_switcher": "اللغة"
  }
};

['en', 'fr', 'ar'].forEach(lng => {
  const path = `public/locales/${lng}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  Object.assign(data, addKeys[lng]);
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${path}`);
});
