import fs from 'fs';

const translations = {
  nav_overview: { en: 'Overview', fr: 'Aperçu', ar: 'نظرة عامة' },
  nav_analytics: { en: 'Analytics', fr: 'Analytique', ar: 'تحليلات' },
  nav_users: { en: 'Users', fr: 'Utilisateurs', ar: 'المستخدمون' },
  nav_artisans: { en: 'Artisans', fr: 'Artisans', ar: 'الحرفيون' },
  nav_companies: { en: 'Companies', fr: 'Entreprises', ar: 'الشركات' },
  nav_sellers: { en: 'Sellers', fr: 'Vendeurs', ar: 'البائعون' },
  nav_orders: { en: 'Orders', fr: 'Commandes', ar: 'الطلبات' },
  nav_payments: { en: 'Payments', fr: 'Paiements', ar: 'المدفوعات' },
  nav_wallets: { en: 'Wallets', fr: 'Portefeuilles', ar: 'المحافظ' },
  nav_cash_collections: { en: 'Cash Collections', fr: 'Encaissements', ar: 'التحصيلات النقدية' },
  nav_disputes: { en: 'Disputes', fr: 'Litiges', ar: 'النزاعات' },
  nav_categories: { en: 'Categories', fr: 'Catégories', ar: 'الفئات' },
  nav_cities: { en: 'Cities', fr: 'Villes', ar: 'المدن' },
  nav_commission: { en: 'Commission', fr: 'Commission', ar: 'العمولة' },
  nav_subscriptions: { en: 'Subscriptions', fr: 'Abonnements', ar: 'الاشتراكات' },
  nav_ai_insights: { en: 'AI Insights', fr: 'Aperçus IA', ar: 'رؤى الذكاء الاصطناعي' },
  nav_languages: { en: 'Languages', fr: 'Langues', ar: 'اللغات' },
  nav_translations: { en: 'Translations', fr: 'Traductions', ar: 'الترجمات' },
  nav_audit_logs: { en: 'Audit Logs', fr: "Journaux d'audit", ar: 'سجلات التدقيق' },
  nav_settings: { en: 'Settings', fr: 'Paramètres', ar: 'الإعدادات' },
  nav_dashboard: { en: 'Dashboard', fr: 'Tableau de bord', ar: 'لوحة القيادة' },
  nav_requests: { en: 'Requests', fr: 'Demandes', ar: 'الطلبات' },
  nav_nearby_jobs: { en: 'Nearby Jobs', fr: 'Emplois à proximité', ar: 'الوظائف القريبة' },
  nav_my_services: { en: 'My Services', fr: 'Mes Services', ar: 'خدماتي' },
  nav_portfolio: { en: 'Portfolio', fr: 'Portfolio', ar: 'معرض الأعمال' },
  nav_reviews: { en: 'Reviews', fr: 'Avis', ar: 'المراجعات' },
  nav_messages: { en: 'Messages', fr: 'Messages', ar: 'الرسائل' },
  nav_wallet: { en: 'Wallet', fr: 'Portefeuille', ar: 'المحفظة' },
  nav_profile: { en: 'Profile', fr: 'Profil', ar: 'الملف الشخصي' },
  nav_projects: { en: 'Projects', fr: 'Projets', ar: 'المشاريع' },
  nav_team: { en: 'Team', fr: 'Équipe', ar: 'الفريق' },
  nav_invoices: { en: 'Invoices', fr: 'Factures', ar: 'الفواتير' },
  nav_inventory: { en: 'Inventory', fr: 'Inventaire', ar: 'المخزون' },
  nav_home: { en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
  nav_find_pro: { en: 'Find', fr: 'Trouver', ar: 'بحث' },
  nav_store_short: { en: 'Store', fr: 'Boutique', ar: 'المتجر' }
};

const locales = ['en', 'fr', 'ar'];

locales.forEach(lang => {
  const file = `public/locales/${lang}.json`;
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const [k, v] of Object.entries(translations)) {
      data[k] = v[lang];
    }
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  }
});
