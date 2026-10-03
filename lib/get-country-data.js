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
  let result = cachedData ? cachedData[normalizedSlug] : null;

  if (!result) {
    if (normalizedSlug === 'united-states' && cachedData['usa']) result = cachedData['usa'];
    else if ((normalizedSlug === 'united-arab-emirates' || normalizedSlug === 'dubai' || normalizedSlug === 'uae')) {
      result = cachedData['united-arab-emirates'] || cachedData['uae'] || cachedData['dubai'];
    }
    else if (normalizedSlug === 'indonesia' && cachedData['indonesia-bali']) result = cachedData['indonesia-bali'];
  }

  if (!result && cachedData) result = Object.values(cachedData)[0];

  if (result && (normalizedSlug === 'united-arab-emirates' || normalizedSlug === 'dubai' || normalizedSlug === 'uae' || result.slug === 'uae' || result.slug === 'united-arab-emirates')) {
    return { ...result, name: 'Dubai (UAE)' };
  }

  return result;
}
