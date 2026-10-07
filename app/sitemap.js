import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://www.visionvisa.in';

  // Base static routes
  const staticRoutes = [
    '',
    '/visas',
    '/tourist-visa',
    '/business-visa',
    '/study-visa',
    '/visitor-visa',
    '/family-visa',
    '/travel-insurance',
    '/forex',
    '/air-tickets',
    '/about',
    '/contact',
    '/apply-now',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Parse country slugs dynamically from countries-data.js
  let countryRoutes = [];
  try {
    const filePath = path.join(process.cwd(), 'public', 'js', 'countries-data.js');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const jsonStart = fileContent.indexOf('{');
    const jsonEnd = fileContent.lastIndexOf('}');

    if (jsonStart !== -1 && jsonEnd !== -1) {
      const countriesData = JSON.parse(fileContent.substring(jsonStart, jsonEnd + 1));
      const slugs = new Set(Object.keys(countriesData));
      slugs.add('united-states');
      slugs.add('united-arab-emirates');
      slugs.add('dubai');
      slugs.add('uae');
      slugs.add('indonesia');

      countryRoutes = Array.from(slugs).map((slug) => ({
        url: `${baseUrl}/country/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error('Error parsing countries data for sitemap:', err);
  }

  return [...staticRoutes, ...countryRoutes];
}
