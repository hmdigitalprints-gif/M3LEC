const fs = require('fs');
const http = require('http');

['en', 'fr', 'ar'].forEach(lng => {
  http.get(`http://0.0.0.0:3000/api/translations/${lng}`, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      fs.mkdirSync('public/locales', { recursive: true });
      fs.writeFileSync(`public/locales/${lng}.json`, JSON.stringify(JSON.parse(data), null, 2));
      console.log(`Saved ${lng}.json`);
    });
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
});
