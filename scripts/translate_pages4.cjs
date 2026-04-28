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
    filePath: 'src/pages/Profile.tsx',
    componentName: 'Profile',
    replacements: [
      { search: "Your <span", replace: "{t('profile_title_1', 'Your ')} <span" },
      { search: ">Profile.</span>", replace: ">{t('profile_title_2', 'Profile.')}</span>" },
      { search: "Manage your account and preferences.", replace: "{t('profile_subtitle', 'Manage your account and preferences.')}" },
      { search: "Change Avatar", replace: "{t('profile_btn_change_avatar', 'Change Avatar')}" },
      { search: ">Full Name<", replace: ">{t('profile_lbl_fullname', 'Full Name')}<" },
      { search: "Enter your full name", replace: "{t('profile_placeholder_name', 'Enter your full name')}" },
      { search: ">City<", replace: ">{t('profile_lbl_city', 'City')}<" },
      { search: ">Address<", replace: ">{t('profile_lbl_address', 'Address')}<" },
      { search: "Save Changes", replace: "{t('profile_btn_save', 'Save Changes')}" },
      { search: "Edit Profile", replace: "{t('profile_btn_edit', 'Edit Profile')}" },
      { search: ">Language<", replace: ">{t('profile_lbl_language', 'Language')}<" },
      { search: ">Security<", replace: ">{t('profile_lbl_security', 'Security')}<" },
      { search: "Update password and authentication.", replace: "{t('profile_desc_security', 'Update password and authentication.')}" },
      { search: ">Payment Methods<", replace: ">{t('profile_lbl_payments', 'Payment Methods')}<" },
      { search: "Manage your cards and billing info.", replace: "{t('profile_desc_payments', 'Manage your cards and billing info.')}" },
      { search: "Log Out", replace: "{t('profile_btn_logout', 'Log Out')}" }
    ]
  },
  {
    filePath: 'src/pages/Messages.tsx',
    componentName: 'Messages',
    replacements: [
      { search: "Your <span", replace: "{t('messages_title_1', 'Your ')} <span" },
      { search: ">Messages.</span>", replace: ">{t('messages_title_2', 'Messages.')}</span>" },
      { search: "Communicate directly with your artisans.", replace: "{t('messages_subtitle', 'Communicate directly with your artisans.')}" },
      { search: "Search conversations...", replace: "{t('messages_placeholder_search', 'Search conversations...')}" },
      { search: "Artisan Name", replace: "{t('messages_artisan_name', 'Artisan Name')}" },
      { search: "Hello, I will arrive in 30 minutes.", replace: "{t('messages_sample_msg', 'Hello, I will arrive in 30 minutes.')}" },
      { search: "Select a conversation", replace: "{t('messages_select_title', 'Select a conversation')}" },
      { search: "Choose a message from the list to view the conversation details.", replace: "{t('messages_select_desc', 'Choose a message from the list to view the conversation details.')}" }
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
