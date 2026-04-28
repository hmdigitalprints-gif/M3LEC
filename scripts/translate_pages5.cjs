const fs = require('fs');
const path = require('path');

const applyTranslation = (filePath, componentName, replacements) => {
  let code = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Add import if missing
  if (!code.includes("useTranslation")) {
    const importRegex = /(import React.*?;\n)/;
    code = code.replace(importRegex, "$1import { useTranslation } from 'react-i18next';\n");
    changed = true;
  }

  // Add translation hook if missing
  const hookRegex = new RegExp(`(export default function ${componentName}\\(\\)\\s*\\{\\s*)`);
  if (!code.includes("const { t } = useTranslation();")) {
    code = code.replace(hookRegex, "$1const { t } = useTranslation();\n  ");
    changed = true;
  }

  // Apply string replacements
  replacements.forEach(({ search, replace }) => {
    if(code.includes(search)) {
      code = code.split(search).join(replace);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, code);
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`No changes made to ${filePath}`);
  }
};

const pages = [
  {
    filePath: 'src/pages/PhoneDashboard.tsx',
    componentName: 'PhoneDashboard',
    replacements: [
      { search: "Welcome Back", replace: "{t('dashboard_welcome', 'Welcome Back')}" },
      { search: "User <span", replace: "{t('dashboard_user_title', 'User ')} <span" },
      { search: ">Dashboard</span>", replace: ">{t('dashboard_title_2', 'Dashboard')}</span>" },
      { search: ">Authenticated as</p>", replace: ">{t('dashboard_auth_as', 'Authenticated as')}</p>" },
      { search: ">Active Bookings<", replace: ">{t('dashboard_lbl_active', 'Active Bookings')}<" },
      { search: ">Pending Reviews<", replace: ">{t('dashboard_lbl_pending', 'Pending Reviews')}<" },
      { search: ">Saved Artisans<", replace: ">{t('dashboard_lbl_saved', 'Saved Artisans')}<" }
    ]
  },
  {
    filePath: 'src/pages/Auth.tsx',
    componentName: 'PhoneAuth',
    replacements: [
      { search: "Enter your phone number", replace: "{t('auth_phone_placeholder', 'Enter your phone number')}" },
      { search: "Send Verification Code", replace: "{t('auth_btn_send_code', 'Send Verification Code')}" },
      { search: "Verify Code", replace: "{t('auth_btn_verify_code', 'Verify Code')}" }
    ]
  }
];

pages.forEach(p => {
  try {
    applyTranslation(path.resolve(__dirname, p.filePath), p.componentName, p.replacements);
  } catch (err) {
    console.error(`Failed on ${p.filePath}`, err);
  }
});
