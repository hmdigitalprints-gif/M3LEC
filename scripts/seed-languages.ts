import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', isRtl: false, isActive: true },
    { code: 'fr', name: 'French', nativeName: 'Français', isRtl: false, isActive: true },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', isRtl: true, isActive: true }
  ];

  for (const lang of languages) {
    await prisma.language.upsert({
      where: { code: lang.code },
      update: lang,
      create: lang,
    });
  }
  
  // Comprehensive translations
  const translations = [
    { key: 'lang_switcher', en: 'English', fr: 'Français', ar: 'العربية' },
    { key: 'nav_home', en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
    { key: 'nav_categories', en: 'Categories', fr: 'Catégories', ar: 'الأصناف' },
    { key: 'nav_how_it_works', en: 'How it works', fr: 'Comment ça marche', ar: 'كيف يعمل' },
    { key: 'nav_login', en: 'Login', fr: 'Connexion', ar: 'تسجيل الدخول' },
    { key: 'nav_register', en: 'Register', fr: "S'inscrire", ar: 'إنشاء حساب' },
    { key: 'nav_find', en: 'Find', fr: 'Trouver', ar: 'بحث' },
    { key: 'nav_creative', en: 'Creative', fr: 'Créatif', ar: 'استوديو الإبداع' },
    { key: 'nav_store', en: 'Store', fr: 'Boutique', ar: 'المتجر' },
    { key: 'nav_bookings', en: 'Bookings', fr: 'Réservations', ar: 'طلباتي' },
    { key: 'nav_account', en: 'Account', fr: 'Compte', ar: 'حسابي' },
    { key: 'nav_features', en: 'Features', fr: 'المميزات', ar: 'المميزات' },
    { key: 'nav_store_materials', en: 'Materials Store', fr: 'Boutique de Matériaux', ar: 'متجر المعدات' },
    
    // Hero Section
    { key: 'hero_badge', en: 'Powered by pros that never sleep', fr: 'Propulsé par des pros qui ne dorment jamais', ar: 'بإشراف محترفين لا ينامون' },
    { key: 'hero_title_1', en: 'Your Home Needs Fixes.', fr: 'Votre Maison a Besoin de Réparations.', ar: 'منزلك يحتاج للإصلاح.' },
    { key: 'hero_title_2', en: 'Your Search Is Finished.', fr: 'Votre Recherche est Terminée.', ar: 'تم العثور على طلبك.' },
    { key: 'hero_desc', en: 'M3allem En Click instantly connects you with verified professional artisans across Morocco. From plumbing to painting, get quality work done today.', fr: 'M3allem En Click vous connecte instantanément avec des artisans professionnels vérifiés partout au Maroc. Plomberie, peinture... un travail de qualité, aujourd’hui.', ar: 'معلم بضغطة زر يوصلك فوراً بأفضل الحرفيين المحترفين الموثقين في جميع أنحاء المغرب. من السباكة إلى الصباغة، احصل على جودة عالية اليوم.' },
    { key: 'hero_btn_book', en: 'Book a Pro', fr: 'Réserver un Pro', ar: 'احجز معلم الآن' },
    { key: 'hero_btn_demo', en: 'Watch Demo', fr: 'Voir la Démo', ar: 'مشاهدة تجريبية' },
    
    // Stats
    { key: 'stat_artisans', en: 'Active Artisans', fr: 'Artisans Actifs', ar: 'حرفي نشط' },
    { key: 'stat_completed', en: 'Services Completed', fr: 'Services Terminés', ar: 'خدمة مكتملة' },
    { key: 'stat_rating', en: 'Customer Rating', fr: 'Note Client', ar: 'تقييم العملاء' },
    { key: 'stat_cities', en: 'Cities Covered', fr: 'Villes Couvertes', ar: 'مدينة مغطاة' },

    // Categories
    { key: 'cat_title', en: 'Popular', fr: 'Populaires', ar: 'أكثر' },
    { key: 'cat_title_accent', en: 'Services', fr: 'Services', ar: 'الخدمات طلباً' },
    { key: 'cat_desc', en: 'The most requested professional services at your fingertips.', fr: 'Les services professionnels les plus demandés à portée de main.', ar: 'أكثر الخدمات المهنية طلباً بين يديك الآن.' },
    { key: 'cat_view_all', en: 'View All Categories', fr: 'Voir Toutes les Catégories', ar: 'عرض جميع الأصناف' },
    { key: 'cat_explore', en: 'Explore', fr: 'Explorer', ar: 'استكشف' },

    // Features
    { key: 'feat_verified_title', en: 'Verified Pros', fr: 'Pros Vérifiés', ar: 'حرفيون موثقون' },
    { key: 'feat_verified_desc', en: 'Every artisan undergoes a strict background check.', fr: 'Chaque artisan subit une vérification rigoureuse.', ar: 'كل حرفي يخضع لفحص دقيق ومراجعة خلفية صارمة.' },
    { key: 'feat_secure_title', en: 'Secure Payments', fr: 'Paiements Sécurisés', ar: 'دفع آمن' },
    { key: 'feat_secure_desc', en: 'Your money is safe with our escrow payment system.', fr: 'Votre argent est en sécurité avec notre système de séquestre.', ar: 'أموالك في أمان تام مع نظام الأمان والضمان الخاص بنا.' },
    { key: 'feat_instant_title', en: 'Instant Booking', fr: 'Réservation Instantanée', ar: 'حجز فوري' },
    { key: 'feat_instant_desc', en: 'Book a service in seconds, not hours.', fr: 'Réservez un service en quelques secondes, pas des heures.', ar: 'احجز خدمتك في ثوانٍ معدودة، وليس ساعات.' },
    { key: 'feat_support_title', en: 'Support 24/7', fr: 'Support 24/7', ar: 'دعم على مدار الساعة' },
    { key: 'feat_support_desc', en: 'Our team is here to help you anytime.', fr: 'Notre équipe est là pour vous aider à tout moment.', ar: 'فريقنا متاح دائماً لمساعدتك في أي وقت.' },

    // Nav Auth
    { key: 'auth_sign_in', en: 'Sign In', fr: 'Connexion', ar: 'تسجيل الدخول' },
    { key: 'auth_sign_in_account', en: 'Sign In to Account', fr: 'Se connecter au compte', ar: 'الدخول إلى الحساب' },

    // Features Section
    { key: 'feat_why_title', en: 'Why M3allem En Click', fr: 'Pourquoi M3allem En Click', ar: 'لماذا معلم بضغطة زر' },
    { key: 'feat_main_title', en: 'The Standard for Home Services.', fr: 'Le Standard des Services à Domicile.', ar: 'المعيار الأول للخدمات المنزلية.' },
    { key: 'feat_main_desc', en: "We've built a platform that prioritizes trust, quality, and speed. No more searching through classifieds.", fr: 'Nous avons construit une plateforme qui priorise la confiance, la qualité et la rapidité. Plus besoin de chercher dans les petites annonces.', ar: 'لقد نبنينا منصة تضع الثقة والجودة والسرعة كأولوية قصوى. لا مزيد من البحث المتعب في الإعلانات المبوبة.' },
    { key: 'feat_list_pricing', en: 'Transparent Pricing', fr: 'Prix Transparents', ar: 'تسعير شفاف' },
    { key: 'feat_list_quality', en: 'Quality Guarantee', fr: 'Garantie de Qualité', ar: 'ضمان الجودة' },
    { key: 'feat_list_comm', en: 'Easy Communication', fr: 'Communication Facile', ar: 'تواصل سهل' },

    // CTA Section
    { key: 'cta_title', en: 'Ready to get your work done?', fr: 'Prêt à accomplir votre travail ?', ar: 'هل أنت جاهز لإتمام عملك؟' },
    { key: 'cta_desc', en: 'Join thousands of satisfied customers and professional artisans today.', fr: 'Rejoignez des milliers de clients satisfaits et d\'artisans professionnels dès aujourd\'hui.', ar: 'انضم إلى آلاف العملاء الراضين والحرفيين المحترفين اليوم.' },
    { key: 'cta_btn_find_pro', en: 'Find a Pro', fr: 'Trouver un Pro', ar: 'ابحث عن حرفي' },
    { key: 'cta_btn_become_artisan', en: 'Join as Artisan', fr: 'Devenir Artisan', ar: 'انضم كحرفي' },

    // Categories Data (IDs)
    { key: 'cat_1', en: 'Plumbing', fr: 'Plomberie', ar: 'السباكة' },
    { key: 'cat_1_desc', en: 'Expert leak repairs and pipe installations.', fr: 'Réparations expertes de fuites et installations de tuyauterie.', ar: 'إصلاح الخروقات وتركيب الأنابيب باحترافية.' },
    { key: 'cat_2', en: 'Electricity', fr: 'Électricité', ar: 'الكهرباء' },
    { key: 'cat_2_desc', en: 'Safe electrical wiring and fixture repairs.', fr: 'Câblage électrique sécurisé et réparations de luminaires.', ar: 'توصيلات كهربائية آمنة وإصلاح الأعطال.' },
    { key: 'cat_3', en: 'Painting', fr: 'Peinture', ar: 'الصباغة' },
    { key: 'cat_3_desc', en: 'Professional interior and exterior painting.', fr: 'Peinture professionnelle intérieure et extérieure.', ar: 'صباغة احترافية داخلية وخارجية.' },
    { key: 'cat_4', en: 'Cleaning', fr: 'Nettoyage', ar: 'التنظيف' },
    { key: 'cat_4_desc', en: 'Deep cleaning for homes and offices.', fr: 'Nettoyage en profondeur pour maisons et bureaux.', ar: 'تنظيف عميق للمنازل والمكاتب.' },
    { key: 'cat_5', en: 'AC Repair', fr: 'Froid et Climatisation', ar: 'إصلاح المكيفات' },
    { key: 'cat_5_desc', en: 'Cooling system maintenance and repair.', fr: 'Entretien et réparation de systèmes de refroidissement.', ar: 'صيانة وإصلاح أنظمة التبريد والمكيفات.' },
    { key: 'cat_6', en: 'Construction', fr: 'Bâtiment et Travaux', ar: 'البناء والأشغال' },
    { key: 'cat_6_desc', en: 'Quality building and renovation work.', fr: 'Travaux de construction et de rénovation de qualité.', ar: 'أعمال بناء وترميم بجودة عالية.' },

    // Footer
    { key: 'footer_desc', en: 'The most trusted marketplace for professional artisans in Morocco. Quality work, guaranteed.', fr: 'La plateforme la plus fiable pour les artisans professionnels au Maroc. Travail de qualité garanti.', ar: 'السوق الأكثر ثقة للحرفيين المحترفين في المغرب. عمل متقن ومحترف بضمان الجودة.' },
    { key: 'footer_copyright', en: '© 2026 M3allem En Click. All rights reserved.', fr: '© 2026 M3allem En Click. Tous droits réservés.', ar: '© 2026 معلم بضغطة زر. جميع الحقوق محفوظة.' },

    // Home Section - Customer View
    { key: 'verified_pros_only', en: 'Verified Professionals Only', fr: 'Professionnels Vérifiés Uniquement', ar: 'محترفون موثوقون فقط' },
    { key: 'home_care_title_1', en: 'THE ART OF', fr: "L'ART DU", ar: 'فن العناية' },
    { key: 'home_care_title_2', en: 'HOME CARE.', fr: 'SOIN À DOMICILE.', ar: 'بالمنزل.' },
    { key: 'search_placeholder', en: 'What do you need help with?', fr: 'De quoi avez-vous besoin ?', ar: 'كيف يمكننا مساعدتك اليوم؟' },
    { key: 'smart_match_btn', en: 'Smart Match Nearby', fr: 'Match Intelligent Proche', ar: 'مطابقة ذكية قريبة' },
    { key: 'smart_match_loading', en: 'Finding Best Match...', fr: 'Recherche du Meilleur Match...', ar: 'جاري البحث عن أفضل مطابقة...' },
    { key: 'ai_problem_solver_btn', en: 'AI Problem Solver', fr: 'Solutionneur IA', ar: 'حل المشكلات بالذكاء الاصطناعي' },
    { key: 'ai_problem_solver_label', en: 'AI POWERED ASSISTANT', fr: 'ASSISTANT PROPULSÉ PAR l\'IA', ar: 'مساعد مدعوم بالذكاء الاصطناعي' },
    { key: 'ai_problem_solver_title', en: "Don't know what you need?", fr: 'Vous ne savez pas quoi choisir ?', ar: 'لا تعرف ماذا تحتاج بالضبط؟' },
    { key: 'ai_problem_solver_desc', en: 'Describe your problem in plain words, and our AI will find the right expert and estimate the cost for you.', fr: 'Décrivez votre problème simplement, et notre IA trouvera l\'expert idéal et estimera le coût pour vous.', ar: 'صف مشكلتك بكلماتك الخاصة، وسيقوم ذكاؤنا الاصطناعي بالعثور على الخبير المناسب وتقدير التكلفة لك.' },
    { key: 'ai_problem_solver_placeholder', en: "Example: My kitchen sink is leaking and there's water everywhere...", fr: "Exemple: Mon évier de cuisine fuit et il y a de l'eau partout...", ar: 'مثال: حوض المطبخ يسرب والماء في كل مكان...' },
    { key: 'analyze_problem_btn', en: 'Analyze Problem', fr: 'Analyser le Problème', ar: 'تحليل المشكلة' },
    { key: 'analyzing_loading', en: 'Analyzing...', fr: 'Analyse en cours...', ar: 'جاري التحليل...' },
    { key: 'deep_reasoning_loading', en: 'Deep Reasoning...', fr: 'Raisonnement Profond...', ar: 'تفكير معمق...' },
    { key: 'recommended_for_you_title', en: 'Recommended for', fr: 'Recommandé pour', ar: 'مقترح خصيصاً' },
    { key: 'recommended_for_you_accent', en: 'You', fr: 'Vous', ar: 'لك' },
    { key: 'expert_categories_title', en: 'Expert', fr: 'Catégories', ar: 'أصناف' },
    { key: 'expert_categories_accent', en: 'Categories', fr: "d'Experts", ar: 'الخبراء' },
    { key: 'top_rated_nearby_title', en: 'Top Rated', fr: 'Les Mieux Notés', ar: 'الأفضل تقييماً' },
    { key: 'top_rated_nearby_accent', en: 'Nearby', fr: 'À Proximité', ar: 'بالقرب منك' },
    { key: 'view_all', en: 'View All', fr: 'Tout Voir', ar: 'عرض الكل' },
    { key: 'btn_book', en: 'Book Now', fr: 'Réserver Maintenant', ar: 'احجز الآن' },
    { key: 'starting_from', en: 'From', fr: 'À partir de', ar: 'ابتداءً من' },

    // Bookings Section
    { key: 'your_bookings_title', en: 'Your', fr: 'Vos', ar: 'حجوزاتي' },
    { key: 'your_bookings_accent', en: 'Bookings', fr: 'Réservations', ar: 'السابقة' },
    { key: 'your_bookings_desc', en: 'Track and manage your service requests.', fr: 'Suivez et gérez vos demandes de service.', ar: 'تتبع وإدارة طلبات الخدمات الخاصة بك.' },
    { key: 'no_bookings_title', en: 'No bookings yet', fr: 'Aucune réservation pour le moment', ar: 'لا توجد حجوزات بعد' },
    { key: 'no_bookings_desc', en: "You haven't requested any services yet.", fr: "Vous n'avez pas encore demandé de services.", ar: 'لم تقم بطلب أي خدمات حتى الآن.' },
    { key: 'artisan_at_location', en: 'Artisan at Location', fr: 'Artisan sur place', ar: 'الحرفي في الموقع' },
    { key: 'artisan_en_route', en: 'Artisan En Route', fr: 'Artisan en route', ar: 'الحرفي في الطريق' },
    { key: 'service_time', en: 'Service Time', fr: 'Temps de service', ar: 'وقت الخدمة' },
    { key: 'total_service_time', en: 'Total Service Time', fr: 'Temps de service total', ar: 'إجمالي وقت الخدمة' },
    { key: 'pay_now', en: 'Pay Now', fr: 'Payer Maintenant', ar: 'ادفع الآن' },
    { key: 'rate_review', en: 'Rate & Review', fr: 'Noter & Commenter', ar: 'تقييم وتعليق' },
    { key: 'invoice_pdf', en: 'Invoice PDF', fr: 'Facture PDF', ar: 'فاتورة PDF' },
    { key: 'track_artisan', en: 'Track Artisan', fr: 'Suivre l\'artisan', ar: 'تتبع الحرفي' },
    { key: 'cancel', en: 'Cancel', fr: 'Annuler', ar: 'إلغاء' },
    { key: 'details', en: 'Details', fr: 'Détails', ar: 'التفاصيل' },
    { key: 'status_pending', en: 'Pending', fr: 'En attente', ar: 'قيد الانتظار' },
    { key: 'status_completed', en: 'Completed', fr: 'Terminé', ar: 'مكتمل' },
    { key: 'status_cancelled', en: 'Cancelled', fr: 'Annulé', ar: 'ملغى' },
    { key: 'proposals_received', en: 'Proposals Received', fr: 'Propositions Reçues', ar: 'عروض مستلمة' },
    { key: 'accept_bid', en: 'Accept Bid', fr: 'Accepter l\'offre', ar: 'قبول العرض' },

    // Find Section & Filters
    { key: 'discovery_label', en: 'Discovery', fr: 'Découverte', ar: 'اكتشاف' },
    { key: 'find_pro_title', en: 'Find a', fr: 'Trouver un', ar: 'ابحث عن' },
    { key: 'find_pro_accent', en: 'Pro', fr: 'Pro', ar: 'محترف' },
    { key: 'find_pro_desc', en: 'Browse our network of certified professionals.', fr: 'Explorez notre réseau de professionnels certifiés.', ar: 'تصفح شبكتنا من المحترفين المعتمدين.' },
    { key: 'filters_title', en: 'Filters', fr: 'Filtres', ar: 'الفلاتر' },
    { key: 'filter_all_services', en: 'All Services', fr: 'Tous les Services', ar: 'جميع الخدمات' },
    { key: 'filter_all_cities', en: 'All Cities', fr: 'Toutes les Villes', ar: 'جميع المدن' },
    { key: 'filter_distance', en: 'Distance', fr: 'Distance', ar: 'المسافة' },
    { key: 'filter_min_rating', en: 'Minimum Rating', fr: 'Note Minimale', ar: 'أقل تقييم' },
    { key: 'filter_min', en: 'Min', fr: 'Min', ar: 'الأدنى' },
    { key: 'filter_max', en: 'Max', fr: 'Max', ar: 'الأقصى' },
    { key: 'filter_experience', en: 'Years of Experience', fr: 'Années d\'expérience', ar: 'سنوات الخبرة' },
    { key: 'filter_availability_trust', en: 'Availability & Trust', fr: 'Disponibilité & Confiance', ar: 'التوفر والموثوقية' },
    { key: 'available_today', en: 'Available Today', fr: 'Disponible Aujourd\'hui', ar: 'متوفر اليوم' },
    { key: 'available_week', en: 'Available This Week', fr: 'Disponible cette semaine', ar: 'متوفر هذا الأسبوع' },
    { key: 'online_now', en: 'Online Now', fr: 'En Ligne Maintenant', ar: 'متصل الآن' },
    { key: 'verified_artisan', en: 'Verified Artisan', fr: 'Artisan Vérifié', ar: 'حرفي موثق' },
    { key: 'search_placeholder_artisans', en: 'Search by name, skill or location...', fr: 'Rechercher par nom, compétence ou ville...', ar: 'ابحث بالاسم، المهارة أو المدينة...' },
    { key: 'show_filters', en: 'Show Filters', fr: 'Afficher les Filtres', ar: 'إظهار الفلاتر' },
    { key: 'hide_filters', en: 'Hide Filters', fr: 'Masquer les Filtres', ar: 'إخفاء الفلاتر' },

    // Account & Wallet
    { key: 'account_title', en: 'My', fr: 'Mon', ar: 'حسابي' },
    { key: 'account_accent', en: 'Account', fr: 'Compte', ar: 'الشخصي' },
    { key: 'account_desc', en: 'Manage your profile and preferences.', fr: 'Gérez votre profil et vos préférences.', ar: 'إدارة ملفك الشخصي وتفضيلاتك.' },
    { key: 'back_to_profile', en: 'Back to Profile', fr: 'Retour au Profil', ar: 'العودة للملف الشخصي' },
    { key: 'profile_settings', en: 'Profile Settings', fr: 'Paramètres du Profil', ar: 'إعدادات الملف الشخصي' },
    { key: 'full_name', en: 'Full Name', fr: 'Nom Complet', ar: 'الاسم الكامل' },
    { key: 'phone_number', en: 'Phone Number', fr: 'Numéro de Téléphone', ar: 'رقم الهاتف' },
    { key: 'default_address', en: 'Default Address', fr: 'Adresse par Défaut', ar: 'العنوان الافتراضي' },
    { key: 'address_placeholder', en: 'Enter your home address...', fr: 'Saisissez votre adresse...', ar: 'أدخل عنوانك...' },
    { key: 'save_changes', en: 'Save Changes', fr: 'Enregistrer les modifications', ar: 'حفظ التغييرات' },
    { key: 'my_favorites', en: 'My Favorites', fr: 'Mes Favoris', ar: 'المفضلات' },
    { key: 'verified_role', en: 'Verified', fr: 'Vérifié', ar: 'موثق' },
    { key: 'wallet_title', en: 'Wallet', fr: 'Portefeuille', ar: 'المحفظة' },
    { key: 'current_balance', en: 'Current Balance', fr: 'Solde Actuel', ar: 'الرصيد الحالي' },
    { key: 'add_funds', en: 'Add Funds', fr: 'Ajouter des fonds', ar: 'إضافة رصيد' },
    { key: 'transaction_history', en: 'Transaction History', fr: 'Historique des transactions', ar: 'سجل العمليات' }
  ];

  for (const t of translations) {
    for (const code of ['en', 'fr', 'ar']) {
      await prisma.translation.upsert({
        where: { key_languageCode: { key: t.key, languageCode: code } },
        update: { value: (t as any)[code] },
        create: { key: t.key, languageCode: code, value: (t as any)[code] },
      });
    }
  }

  console.log("Languages and basic translations seeded.");
}

seed()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
