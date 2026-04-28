const fs = require('fs');

const addKeys = {
  en: {
    "login_welcome_back": "Welcome Back",
    "login_subtitle": "Enter your credentials to access your account",
    "login_email": "Email Address",
    "login_password": "Password",
    "login_forgot_password": "Forgot Password?",
    "login_forgot_password_msg": "Password reset functionality coming soon!",
    "login_sign_in": "Sign In to Account",
    "login_loading": "Loading...",
    "login_or_continue": "Or continue with",
    "login_google_coming": "Google login coming soon!",
    "login_github_coming": "GitHub login coming soon!",
    "login_no_account": "Don't have an account?",
    "login_create_account": "Create one",
    "login_brand_subtitle": "Premium Home Services"
  },
  fr: {
    "login_welcome_back": "Ravi de vous revoir",
    "login_subtitle": "Entrez vos identifiants pour accéder à votre compte",
    "login_email": "Adresse de courriel",
    "login_password": "Mot de passe",
    "login_forgot_password": "Mot de passe oublié ?",
    "login_forgot_password_msg": "Fonctionnalité de réinitialisation à venir !",
    "login_sign_in": "Se connecter au compte",
    "login_loading": "Chargement...",
    "login_or_continue": "Ou continuer avec",
    "login_google_coming": "Connexion Google à venir !",
    "login_github_coming": "Connexion GitHub à venir !",
    "login_no_account": "Vous n'avez pas de compte ?",
    "login_create_account": "Créer un compte",
    "login_brand_subtitle": "Services à domicile premium"
  },
  ar: {
    "login_welcome_back": "مرحباً بعودتك",
    "login_subtitle": "أدخل بياناتك للوصول إلى حسابك",
    "login_email": "البريد الإلكتروني",
    "login_password": "كلمة المرور",
    "login_forgot_password": "نسيت كلمة المرور؟",
    "login_forgot_password_msg": "ميزة إعادة التعيين قريباً!",
    "login_sign_in": "الدخول إلى الحساب",
    "login_loading": "جاري التحميل...",
    "login_or_continue": "أو المتابعة باستخدام",
    "login_google_coming": "تسجيل الدخول بجوجل قريباً!",
    "login_github_coming": "تسجيل الدخول بـ GitHub قريباً!",
    "login_no_account": "ليس لديك حساب؟",
    "login_create_account": "إنشاء واحد",
    "login_brand_subtitle": "خدمات منزلية متميزة"
  }
};

['en', 'fr', 'ar'].forEach(lng => {
  const path = `public/locales/${lng}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  Object.assign(data, addKeys[lng]);
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${path}`);
});
