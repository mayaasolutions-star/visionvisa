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
  slugs.add('dubai');
  slugs.add('uae');
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
  const pageTitle = `${data.name} Visa Application, Requirements & Checklist | Vision Visa`;
  const pageDesc = `Apply for your ${data.name} ${primaryVisa} with verified document checklists, processing time insights, and expert visa guidance at Vision Visa.`;
  const canonicalUrl = `https://www.visionvisa.in/country/${data.slug}`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      `${data.name} visa`,
      `${data.name} ${primaryVisa}`,
      `${data.name} visa requirements`,
      `${data.name} visa application`,
      `${data.name} visa processing time`,
      "Vision Visa"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: "Vision Visa",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `https://www.visionvisa.in${data.heroImage || '/images/Argentina.webp'}`,
          width: 1200,
          height: 630,
          alt: `${data.name} Visa Assistance & Guidance`
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [`https://www.visionvisa.in${data.heroImage || '/images/Argentina.webp'}`],
    },
  };
}

export default async function CountrySlugPage({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || 'argentina';
  const slug = String(rawSlug).toLowerCase().trim();
  const data = getCountryData(slug) || getCountryData('argentina');

  // 1. Breadcrumb JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.visionvisa.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Visas",
        "item": "https://www.visionvisa.in/visas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${data.name} Visa`,
        "item": `https://www.visionvisa.in/country/${data.slug}`
      }
    ]
  };

  // 2. Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.name} Visa Assistance`,
    "provider": {
      "@type": "TravelAgency",
      "name": "Vision Visa",
      "url": "https://www.visionvisa.in"
    },
    "areaServed": "India",
    "description": `Comprehensive guidance and document verification for ${data.name} visa applications.`
  };

  // 3. FAQ JSON-LD Schema
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
