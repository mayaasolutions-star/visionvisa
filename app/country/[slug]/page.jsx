import React from 'react';
import fs from 'fs';
import path from 'path';
import { getCountryData } from '../../../lib/get-country-data';
import CountryDetailView from '../../../components/CountryDetailView';

export function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    'public',
    'js',
    'countries-data.js'
  );

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const jsonStart = fileContent.indexOf('{');
  const jsonEnd = fileContent.lastIndexOf('}');

  if (jsonStart === -1 || jsonEnd === -1) {
    return [];
  }

  const countriesData = JSON.parse(
    fileContent.substring(jsonStart, jsonEnd + 1)
  );

  const slugs = new Set(Object.keys(countriesData));
  slugs.add('united-states');
  slugs.add('united-arab-emirates');
  slugs.add('indonesia');

  return Array.from(slugs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || 'argentina';
  const slug = String(rawSlug).toLowerCase().trim();
  const data = getCountryData(slug) || getCountryData('argentina');

  const primaryVisa = data.visaTypes?.[0]?.name || data.visaType || 'Tourist Visa';

  return {
    title: `${data.name} Visa Application, Requirements & Checklist | Vision Visa`,
    description: `Apply for your ${data.name} ${primaryVisa} with verified document checklists, processing time insights, and expert visa guidance at Vision Visa.`,
    alternates: {
      canonical: `https://www.visionvisa.in/country/${data.slug}/`,
    },
    openGraph: {
      title: `${data.name} Visa Application & Requirements | Vision Visa`,
      description: `Official requirements, document checklist, processing time, and visa assistance for ${data.name}.`,
      images: [data.heroImage || '/images/Argentina.webp'],
    },
  };
}

export default async function CountrySlugPage({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || 'argentina';
  const slug = String(rawSlug).toLowerCase().trim();
  const data = getCountryData(slug) || getCountryData('argentina');

  // Structured JSON-LD Schema
  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <CountryDetailView data={data} />
    </>
  );
}
