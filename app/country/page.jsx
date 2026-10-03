import React from 'react';
import { getCountryData } from '../../lib/get-country-data';
import CountryDetailView from '../../components/CountryDetailView';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || 'argentina';
  const data = getCountryData(slug) || getCountryData('argentina');

  const primaryVisa = data.visaTypes?.[0]?.name || data.visaType || 'Tourist Visa';

  return {
    title: `Country Visas & Destinations | Vision Visa`,
    description: `Explore country visa requirements, document checklists, and application guidance for over 50 destinations worldwide.`,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://www.visionvisa.in/visas`,
    },
  };
}

export default async function CountryPage({ params }) {
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
