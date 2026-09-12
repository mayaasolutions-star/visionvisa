import React from 'react';
import { getCountryData } from '../../lib/get-country-data';
import CountryDetailView from '../../components/CountryDetailView';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || 'argentina';
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
