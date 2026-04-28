const fs = require('fs');

const enData = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const frData = JSON.parse(fs.readFileSync('public/locales/fr.json', 'utf8'));
const arData = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

const newKeys = {
  auth_err_name: { en: "Name must be at least 3 characters", fr: "Le nom doit comporter au moins 3 caractères", ar: "يجب أن يتكون الاسم من 3 أحرف على الأقل" },
  auth_err_phone: { en: "Invalid phone format (e.g., 0612345678)", fr: "Format de téléphone invalide (ex: 0612345678)", ar: "تنسيق الهاتف غير صالح (مثال: 0612345678)" },
  auth_err_email: { en: "Invalid email address", fr: "Adresse e-mail invalide", ar: "البريد الإلكتروني غير صالح" },
  auth_err_missing: { en: "Required fields are missing", fr: "Des champs obligatoires sont manquants", ar: "الحقول الإلزامية مفقودة" },
  auth_welcome_back: { en: "Welcome Back", fr: "Bon retour", ar: "مرحباً بعودتك" },
  auth_login_desc: { en: "Sign in to your account", fr: "Connectez-vous à votre compte", ar: "سجل الدخول إلى حسابك" },
  auth_email_or_phone: { en: "Phone Number or Email", fr: "Numéro de téléphone ou e-mail", ar: "رقم الهاتف أو البريد الإلكتروني" },
  auth_password: { en: "Password", fr: "Mot de passe", ar: "كلمة المرور" },
  auth_forgot_pwd: { en: "Forgot password?", fr: "Mot de passe oublié ?", ar: "نسيت كلمة المرور؟" },
  auth_btn_login: { en: "Sign In", fr: "Se Connecter", ar: "تسجيل الدخول" },
  auth_no_account: { en: "Don't have an account?", fr: "Vous n'avez pas de compte ?", ar: "ليس لديك حساب؟" },
  auth_btn_create: { en: "Create one", fr: "Créez-en un", ar: "إنشاء حساب" },
  auth_create_account: { en: "Create Account", fr: "Créer un compte", ar: "إنشاء حساب" },
  auth_register_desc: { en: "Join us and start exploring", fr: "Rejoignez-nous et commencez à explorer", ar: "انضم إلينا وابدأ الاستكشاف" },
  auth_full_name: { en: "Full Name", fr: "Nom complet", ar: "الاسم الكامل" },
  auth_email: { en: "Email Address", fr: "Adresse E-mail", ar: "البريد الإلكتروني" },
  auth_phone: { en: "Phone Number", fr: "Numéro de téléphone", ar: "رقم الهاتف" },
  auth_btn_register: { en: "Create Account", fr: "Créer le compte", ar: "إنشاء الحساب" },
  auth_has_account: { en: "Already have an account?", fr: "Vous avez déjà un compte ?", ar: "لديك حساب بالفعل؟" },
  auth_choose_role: { en: "Choose Your Role", fr: "Choisissez votre rôle", ar: "اختر دورك" },
  auth_role_desc: { en: "How would you like to use the platform?", fr: "Comment souhaitez-vous utiliser la plateforme ?", ar: "كيف ترغب في استخدام المنصة؟" },
  auth_role_client: { en: "Client", fr: "Client", ar: "عميل" },
  auth_role_artisan: { en: "Artisan", fr: "Artisan", ar: "حرفي" },
  auth_role_seller: { en: "Material Seller", fr: "Vendeur de matériaux", ar: "بائع مواد" },
  auth_role_company: { en: "Company", fr: "Entreprise", ar: "شركة" },
  auth_btn_continue: { en: "Continue", fr: "Continuer", ar: "متابعة" },
  auth_verify_title: { en: "Verify Identity", fr: "Vérifier l'identité", ar: "تحقق من الهوية" },
  auth_verify_desc: { en: "Choose how to receive your verification code", fr: "Choisissez comment recevoir votre code", ar: "اختر كيفية استلام رمز التحقق الخاص بك" },
  auth_verify_sms: { en: "Send via SMS", fr: "Envoyer par SMS", ar: "إرسال عبر رسالة نصية قصيرة" },
  auth_verify_email: { en: "Send via Email", fr: "Envoyer par E-mail", ar: "إرسال عبر البريد الإلكتروني" },
  auth_enter_code: { en: "Enter Code", fr: "Entrer le code", ar: "أدخل الرمز" },
  auth_code_desc: { en: "A 6-digit code has been sent to your device", fr: "Un code à 6 chiffres a été envoyé", ar: "تم إرسال رمز من 6 أرقام إلى جهازك" },
  auth_btn_verify: { en: "Verify Code", fr: "Vérifier le code", ar: "تأكيد الرمز" },
  auth_resend_code: { en: "Didn't receive the code?", fr: "Vous n'avez pas reçu le code ?", ar: "لم تستلم الرمز؟" },
  auth_btn_resend: { en: "Resend", fr: "Renvoyer", ar: "إعادة الإرسال" }
};

for (const [key, translations] of Object.entries(newKeys)) {
  enData[key] = translations.en;
  frData[key] = translations.fr;
  arData[key] = translations.ar;
}

fs.writeFileSync('public/locales/en.json', JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync('public/locales/fr.json', JSON.stringify(frData, null, 2), 'utf8');
fs.writeFileSync('public/locales/ar.json', JSON.stringify(arData, null, 2), 'utf8');
console.log("Auth translations added successfully.");
