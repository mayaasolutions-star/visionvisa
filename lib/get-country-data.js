const fs = require('fs');
const path = require('path');

let cachedData = null;

export function getCountryData(slug) {
  if (!cachedData) {
    try {
      let filePath = path.join(process.cwd(), 'public', 'js', 'countries-data.js');
      if (!fs.existsSync(filePath)) {
        filePath = path.join(process.cwd(), 'js', 'countries-data.js');
      }
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      const jsonStart = fileContent.indexOf('{');
      let jsonEnd = fileContent.lastIndexOf('};');
      if (jsonEnd === -1) jsonEnd = fileContent.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const jsonStr = fileContent.substring(jsonStart, jsonEnd + 1);
        cachedData = JSON.parse(jsonStr);
      }
    } catch (err) {
      console.error('Error parsing countries-data.js:', err);
    }
  }

  const normalizedSlug = (slug || 'argentina').toLowerCase().trim();
  if (cachedData && cachedData[normalizedSlug]) {
    return cachedData[normalizedSlug];
  }

  if (normalizedSlug === 'united-states' && cachedData['usa']) return cachedData['usa'];
  if (normalizedSlug === 'united-arab-emirates' && cachedData['uae']) return cachedData['uae'];
  if (normalizedSlug === 'indonesia' && cachedData['indonesia-bali']) return cachedData['indonesia-bali'];

  return cachedData ? Object.values(cachedData)[0] : null;
}
