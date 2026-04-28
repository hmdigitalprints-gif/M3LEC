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
    filePath: 'src/pages/Booking.tsx',
    componentName: 'Booking',
    replacements: [
      { search: "['All', 'Upcoming', 'Completed', 'Cancelled']", replace: "[t('booking_tab_all', 'All'), t('booking_tab_upcoming', 'Upcoming'), t('booking_tab_completed', 'Completed'), t('booking_tab_cancelled', 'Cancelled')]" },
      { search: "activeTab === 'All'", replace: "activeTab === t('booking_tab_all', 'All')" },
      { search: "activeTab === 'Upcoming'", replace: "activeTab === t('booking_tab_upcoming', 'Upcoming')" },
      { search: "activeTab === 'Completed'", replace: "activeTab === t('booking_tab_completed', 'Completed')" },
      { search: "activeTab === 'Cancelled'", replace: "activeTab === t('booking_tab_cancelled', 'Cancelled')" },
      { search: "Your <span", replace: "{t('booking_title_1', 'Your ')} <span" },
      { search: ">Bookings.</span>", replace: ">{t('booking_title_2', 'Bookings.')}</span>" },
      { search: "Track and manage your service requests.", replace: "{t('booking_desc', 'Track and manage your service requests.')}" },
      { search: "No bookings found in this category.", replace: "{t('booking_empty', 'No bookings found in this category.')}" },
      { search: "Assigned Artisan", replace: "{t('booking_assigned_artisan', 'Assigned Artisan')}" },
      { search: ">Date</p>", replace: ">{t('booking_date_lbl', 'Date')}</p>" },
      { search: ">Time</p>", replace: ">{t('booking_time_lbl', 'Time')}</p>" },
      { search: ">City</p>", replace: ">{t('booking_city_lbl', 'City')}</p>" },
      { search: "Leave a Review", replace: "{t('booking_btn_review', 'Leave a Review')}" },
      { search: "Reschedule", replace: "{t('booking_btn_reschedule', 'Reschedule')}" },
      { search: "Message", replace: "{t('booking_btn_msg', 'Message')}" }
    ]
  },
  {
    filePath: 'src/pages/Terms.tsx',
    componentName: 'Terms',
    replacements: [
      { search: ">1. Agreement to Terms<", replace: ">{t('terms_sec1_title', '1. Agreement to Terms')}<" },
      { search: ">2. Use of the Platform<", replace: ">{t('terms_sec2_title', '2. Use of the Platform')}<" },
      { search: ">3. User Responsibilities<", replace: ">{t('terms_sec3_title', '3. User Responsibilities')}<" },
      { search: ">4. Payments & Commissions<", replace: ">{t('terms_sec4_title', '4. Payments & Commissions')}<" },
      { search: ">5. Limitation of Liability<", replace: ">{t('terms_sec5_title', '5. Limitation of Liability')}<" },
      { search: "By accessing or using M3allem", replace: "{t('terms_sec1_desc', 'By accessing or using M3allem')}" },
      { search: "M3allem En Click provides a marketplace", replace: "{t('terms_sec2_desc', 'M3allem En Click provides a marketplace')}" },
      { search: "Users are responsible for maintaining", replace: "{t('terms_sec3_desc', 'Users are responsible for maintaining')}" },
      { search: "Payments are processed through our secure", replace: "{t('terms_sec4_desc', 'Payments are processed through our secure')}" },
      { search: "M3allem En Click shall not be liable", replace: "{t('terms_sec5_desc', 'M3allem En Click shall not be liable')}" }
    ]
  },
  {
    filePath: 'src/pages/Cookies.tsx',
    componentName: 'Cookies',
    replacements: [
      { search: ">1. What are Cookies?<", replace: ">{t('cookie_sec1_title', '1. What are Cookies?')}<" },
      { search: ">2. How We Use Cookies<", replace: ">{t('cookie_sec2_title', '2. How We Use Cookies')}<" },
      { search: ">3. Types of Cookies We Use<", replace: ">{t('cookie_sec3_title', '3. Types of Cookies We Use')}<" },
      { search: ">4. Managing Cookies<", replace: ">{t('cookie_sec4_title', '4. Managing Cookies')}<" },
      { search: "Cookies are small text files", replace: "{t('cookie_sec1_desc', 'Cookies are small text files')}" },
      { search: "We use cookies for several reasons", replace: "{t('cookie_sec2_desc', 'We use cookies for several reasons')}" },
      { search: "Essential Cookies:", replace: "{t('cookie_sec3_type1', 'Essential Cookies:')}" },
      { search: "These cookies are strictly necessary", replace: "{t('cookie_sec3_desc1', 'These cookies are strictly necessary')}" },
      { search: "Performance and Functionality Cookies:", replace: "{t('cookie_sec3_type2', 'Performance and Functionality Cookies:')}" },
      { search: "These cookies are used to enhance the performance", replace: "{t('cookie_sec3_desc2', 'These cookies are used to enhance the performance')}" },
      { search: "Analytics and Customization Cookies:", replace: "{t('cookie_sec3_type3', 'Analytics and Customization Cookies:')}" },
      { search: "These cookies collect information that is used either", replace: "{t('cookie_sec3_desc3', 'These cookies collect information that is used either')}" },
      { search: "You have the right to decide whether to accept or reject cookies.", replace: "{t('cookie_sec4_desc', 'You have the right to decide whether to accept or reject cookies.')}" }
    ]
  },
  {
    filePath: 'src/pages/Careers.tsx',
    componentName: 'Careers',
    replacements: [
      { search: "Senior Frontend Engineer", replace: "{t('careers_job1_title', 'Senior Frontend Engineer')}" },
      { search: "Product Designer (UX/UI)", replace: "{t('careers_job2_title', 'Product Designer (UX/UI)')}" },
      { search: "Operations Manager", replace: "{t('careers_job3_title', 'Operations Manager')}" },
      { search: "Customer Success Specialist", replace: "{t('careers_job4_title', 'Customer Success Specialist')}" },
      { search: "Engineering", replace: "{t('careers_dept_engineering', 'Engineering')}" },
      { search: "Product", replace: "{t('careers_dept_product', 'Product')}" },
      { search: "Operations", replace: "{t('careers_dept_operations', 'Operations')}" },
      { search: "Support", replace: "{t('careers_dept_support', 'Support')}" },
      { search: "Full-time", replace: "{t('careers_type_fulltime', 'Full-time')}" },
      { search: "Casablanca / Remote", replace: "{t('careers_loc_casa_remote', 'Casablanca / Remote')}" },
      { search: "Remote", replace: "{t('careers_loc_remote', 'Remote')}" },
      { search: "Rabat", replace: "{t('careers_loc_rabat', 'Rabat')}" },
      { search: ">Apply Now<", replace: ">{t('careers_btn_apply', 'Apply Now')}<" }
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
