const https = require('https');

https.get('https://www.bajajallianz.com', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const matches = data.match(/["'](\/[^"'<>\s]+\.(?:svg|png|webp|jpg))["']/gi) || [];
    console.log('Relative paths:', matches.length);
    const logoPaths = matches.filter(m => /logo|header|brand|bagic/i.test(m));
    console.log('Logo paths:', logoPaths);
  });
});
