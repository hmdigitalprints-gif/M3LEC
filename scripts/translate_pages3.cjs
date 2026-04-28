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
    filePath: 'src/pages/Devis.tsx',
    componentName: 'Devis',
    replacements: [
      { search: "Your <span", replace: "{t('devis_title_1', 'Your ')} <span" },
      { search: ">Estimates.</span>", replace: ">{t('devis_title_2', 'Estimates.')}</span>" },
      { search: "Manage and review your project quotes.", replace: "{t('devis_desc', 'Manage and review your project quotes.')}" },
      { search: "AI Automatic Quote", replace: "{t('devis_btn_ai', 'AI Automatic Quote')}" },
      { search: "Request New Estimate", replace: "{t('devis_btn_new', 'Request New Estimate')}" },
      { search: ">ID<", replace: ">{t('devis_tbl_id', 'ID')}<" },
      { search: ">Project<", replace: ">{t('devis_tbl_project', 'Project')}<" },
      { search: ">Artisan<", replace: ">{t('devis_tbl_artisan', 'Artisan')}<" },
      { search: ">Date<", replace: ">{t('devis_tbl_date', 'Date')}<" },
      { search: ">Amount<", replace: ">{t('devis_tbl_amount', 'Amount')}<" },
      { search: ">Status<", replace: ">{t('devis_tbl_status', 'Status')}<" },
      { search: ">Actions<", replace: ">{t('devis_tbl_actions', 'Actions')}<" },
      { search: "Complete Bathroom Renovation", replace: "{t('devis_sample_proj', 'Complete Bathroom Renovation')}" },
      { search: "Master Plumber", replace: "{t('devis_sample_artisan', 'Master Plumber')}" },
      { search: "Pending", replace: "{t('devis_status_pending', 'Pending')}" },
      { search: "Accepted", replace: "{t('devis_status_accepted', 'Accepted')}" }
    ]
  },
  {
    filePath: 'src/pages/AutoDevis.tsx',
    componentName: 'AutoDevis',
    replacements: [
      { search: "Powered by Gemini AI", replace: "{t('auto_devis_badge', 'Powered by Gemini AI')}" },
      { search: "Get an instant price estimate for your project.", replace: "{t('auto_devis_title', 'Get an instant price estimate for your project.')}" },
      { search: "Our AI analyzes market data across Morocco to give you the most accurate pricing range.", replace: "{t('auto_devis_desc', 'Our AI analyzes market data across Morocco to give you the most accurate pricing range.')}" },
      { search: "Service Category", replace: "{t('auto_devis_lbl_service', 'Service Category')}" },
      { search: "e.g. Plumbing, Electrical, Painting...", replace: "{t('auto_devis_placeholder_service', 'e.g. Plumbing, Electrical, Painting...')}" },
      { search: ">City<", replace: ">{t('auto_devis_lbl_city', 'City')}<" },
      { search: ">Project Details<", replace: ">{t('auto_devis_lbl_details', 'Project Details')}<" },
      { search: "Describe what needs to be done...", replace: "{t('auto_devis_placeholder_details', 'Describe what needs to be done...')}" },
      { search: ">Urgency<", replace: ">{t('auto_devis_lbl_urgency', 'Urgency')}<" },
      { search: "Generate AI Estimate", replace: "{t('auto_devis_btn_generate', 'Generate AI Estimate')}" },
      { search: "Estimated Cost Range", replace: "{t('auto_devis_est_title', 'Estimated Cost Range')}" },
      { search: "MAD", replace: "{t('currency_mad', 'MAD')}" }
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
