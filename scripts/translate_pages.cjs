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
    // If we're replacing literal strings, it might be safer to replace globally
    // We'll just simple split/join for global replacement that are safe
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
    filePath: 'src/pages/Facture.tsx',
    componentName: 'Facture',
    replacements: [
      { search: "Your <span", replace: "{t('facture_title_1', 'Your')} <span" },
      { search: ">Invoices.</span>", replace: ">{t('facture_title_2', 'Invoices.')}</span>" },
      { search: "View and download your billing history.", replace: "{t('facture_desc', 'View and download your billing history.')}" },
      { search: ">Total Spent</p>", replace: ">{t('facture_total_spent', 'Total Spent')}</p>" },
      { search: "Invoice #", replace: "{t('facture_invoice_num', 'Invoice #')}" },
      { search: ">Service<", replace: ">{t('facture_service', 'Service')}<" },
      { search: ">Date<", replace: ">{t('facture_date', 'Date')}<" },
      { search: ">Amount<", replace: ">{t('facture_amount', 'Amount')}<" },
      { search: ">Status<", replace: ">{t('facture_status', 'Status')}<" },
      { search: ">Actions<", replace: ">{t('facture_actions', 'Actions')}<" },
      { search: "Paid", replace: "{t('facture_paid', 'Paid')}" }
    ]
  },
  {
    filePath: 'src/pages/Store.tsx',
    componentName: 'Store',
    replacements: [
      { search: ">Official M3allem En Click Supplies<", replace: ">{t('store_badge', 'Official M3allem En Click Supplies')}<" },
      { search: "EQUIP YOUR <br />", replace: "{t('store_title_1', 'EQUIP YOUR')} <br />" },
      { search: ">CRAFT.</span>", replace: ">{t('store_title_2', 'CRAFT.')}</span>" },
      { search: ">Get the best tools and materials used by our top-rated artisans, delivered to your doorstep.</p>", replace: ">{t('store_desc', 'Get the best tools and materials used by our top-rated artisans, delivered to your doorstep.')}</p>" },
      { search: '"All", "Tools", "Materials", "Smart Home", "Safety Gear"', replace: "t('store_cat_all', 'All'), t('store_cat_tools', 'Tools'), t('store_cat_materials', 'Materials'), t('store_cat_smarthome', 'Smart Home'), t('store_cat_safety', 'Safety Gear')" }
    ]
  },
  {
    filePath: 'src/pages/MarketplaceExtras.tsx',
    componentName: 'MarketplaceExtras',
    replacements: [
      { search: ">Marketplace Extras<", replace: ">{t('extras_title', 'Marketplace Extras')}<" },
      { search: ">Discover multi-service bundles and join group requests to save money and get more done.</p>", replace: ">{t('extras_desc', 'Discover multi-service bundles and join group requests to save money and get more done.')}</p>" },
      { search: ">Bundles<", replace: ">{t('extras_tab_bundles', 'Bundles')}<" },
      { search: ">Group Requests<", replace: ">{t('extras_tab_groups', 'Group Requests')}<" }
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
