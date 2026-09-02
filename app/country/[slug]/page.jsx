import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { getCountryData } from '../../../lib/get-country-data';

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

  return {
    title: `${data.name} Visa Application, Requirements & Checklist | Vision Visa`,
    description: `Apply for your ${data.name} ${data.visaType} with verified document checklists, processing time insights, and expert visa guidance at Vision Visa.`,
  };
}

export default async function CountrySlugPage({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || 'argentina';
  const slug = String(rawSlug).toLowerCase().trim();
  const data = getCountryData(slug) || getCountryData('argentina');

  // Extract concise overview paragraphs (2-3 paragraphs)
  let overviewParas = [];
  if (data.overviewDescription) {
    const raw = data.overviewDescription.split('\n\n').map(p => p.trim()).filter(Boolean);
    overviewParas = raw.map(p => p.replace(/^(Do Indians Need|Argentina Visa|Australia Visa|Austria Visa|Azerbaijan Visa|Bahrain Visa|Bangladesh Visa).*/i, '').trim()).filter(Boolean).slice(0, 2);
  }
  if (overviewParas.length === 0) {
    overviewParas = [
      `Indian passport holders travelling to ${data.name} require a valid visa tailored to their travel purpose. Vision Visa provides end-to-end document verification, application assistance, and consular guidance.`,
      `Whether you are travelling for leisure holidays, corporate meetings, academic study, or visiting family, our specialists ensure your file meets official immigration standards.`
    ];
  }

  // Structured Checklist Extraction
  const checklistData = data.checklist || {};
  const mandatoryList = data.documents?.mandatory || [];
  const supportingList = data.documents?.supporting || [];

  const fallbackEssential = checklistData.essential?.length
    ? checklistData.essential
    : mandatoryList.filter(d => /passport|photo|application|form|fee|appointment/i.test(d));

  const fallbackFinancial = checklistData.financial?.length
    ? checklistData.financial
    : [...mandatoryList, ...supportingList].filter(d => /bank|financial|fund|income|tax|itr|salary|asset|employment|noc/i.test(d));

  const fallbackTravel = checklistData.travel?.length
    ? checklistData.travel
    : mandatoryList.filter(d => /flight|hotel|accommodation|itinerary|ticket|reservation|insurance/i.test(d));

  const fallbackAdditional = checklistData.additional?.length
    ? checklistData.additional
    : supportingList.filter(d => !/bank|financial|fund|income|tax|itr|salary|asset/i.test(d));

  const checklistCategories = [
    {
      key: 'essential',
      title: 'Essential Documents',
      icon: '📄',
      themeClass: 'doc-essential',
      items: fallbackEssential.length ? fallbackEssential : [
        "Valid passport with at least 6 months validity",
        "Recent passport-size photographs",
        "Completed visa application form"
      ]
    },
    {
      key: 'financial',
      title: 'Financial & Employment Documents',
      icon: '💼',
      themeClass: 'doc-financial',
      items: fallbackFinancial
    },
    {
      key: 'travel',
      title: 'Travel Documents',
      icon: '✈️',
      themeClass: 'doc-travel',
      items: fallbackTravel
    },
    {
      key: 'additional',
      title: 'Additional Documents',
      icon: '📋',
      themeClass: 'doc-additional',
      items: fallbackAdditional
    }
  ].filter(cat => cat.items && cat.items.length > 0);

  // Default Categories if not specified
  const defaultCategories = [
    { name: "Tourist Visa", description: `For holidays, leisure travel, and cultural sightseeing in ${data.name}.`, icon: "🏖️" },
    { name: "Business Visa", description: `For corporate meetings, trade events, and business consultations.`, icon: "💼" },
    { name: "Visitor Visa", description: `For visiting family members, relatives, or personal hosts in ${data.name}.`, icon: "👨‍👩‍👧" },
    { name: "Student Visa", description: `For university degrees, academic courses, and educational stays.`, icon: "🎓" },
    { name: "Work Visa", description: `For official employment and skilled professional job contracts.`, icon: "🏢" },
    { name: "Transit Visa", description: `For airport layovers and flight connections through ${data.name}.`, icon: "✈️" }
  ];

  const visaCategories = (data.visaCategories && data.visaCategories.length > 0)
    ? data.visaCategories
    : defaultCategories;

  // Default Application Process Steps
  const defaultSteps = [
    {
      num: "01",
      title: "Share Your Requirements",
      desc: `Tell us your destination, travel purpose, and planned travel dates for ${data.name}.`
    },
    {
      num: "02",
      title: "Document Review & Verification",
      desc: `Our visa specialists review your documents against ${data.name} consulate checklists to eliminate errors.`
    },
    {
      num: "03",
      title: "Application Preparation",
      desc: `We prepare your application file, assist with fee payment, and handle appointment booking or online portal submission.`
    },
    {
      num: "04",
      title: "Processing",
      desc: `The application is processed by the relevant embassy, consulate, or immigration authority.`
    },
    {
      num: "05",
      title: "Visa Outcome",
      desc: `Receive your visa / application outcome and travel with complete documentation.`
    }
  ];

  const processSteps = (data.processSteps && data.processSteps.length > 0)
    ? data.processSteps
    : defaultSteps;

  return (
    <main className="master-country-page">
      {/* 1. HERO SECTION */}
      <section className="master-hero">
        <div className="hero-bg-frame">
          <img id="heroBgImg" src={getAssetPath(data.heroImage)} alt={data.name} className="hero-cover-img" />
          <div className="hero-dark-gradient"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-body-content">
            <h1 id="heroTitle" className="hero-heading">{data.name} Visa</h1>
            <p id="heroDesc" className="hero-lead">
              Apply for your {data.name} visa with expert document verification, hassle-free processing, and dedicated visa specialist support.
            </p>
            <div className="hero-actions">
              <Link id="heroApplyBtn" href={`/contact?country=${data.slug}`} className="btn btn-primary">Apply Now</Link>
              <Link href="/contact" className="btn btn-secondary">Talk to Visa Specialist</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFORMATION CARDS ROW (6 Equal Dashboard Cards) */}
      <section className="master-quick-facts-bar">
        <div className="container">
          <div className="dashboard-cards-grid">
            <div className="dashboard-card">
              <span className="dash-label">Processing Time</span>
              <strong id="metaProcessing">{data.processingTime}</strong>
            </div>
            <div className="dashboard-card">
              <span className="dash-label">Visa Type</span>
              <strong id="ovType">{data.visaType}</strong>
            </div>
            <div className="dashboard-card">
              <span className="dash-label">Maximum Stay</span>
              <strong id="metaStay">{data.stayDuration}</strong>
            </div>
            <div className="dashboard-card">
              <span className="dash-label">Entry Type</span>
              <strong id="metaEntry">{data.entryType}</strong>
            </div>
            <div className="dashboard-card">
              <span className="dash-label">Apply Through</span>
              <strong id="ovApplyThrough">{data.applyThrough}</strong>
            </div>
            <div className="dashboard-card">
              <span className="dash-label">Travel Insurance</span>
              <strong id="ovInsurance">{data.insuranceRequirement}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESSING TIME & VALIDITY DETAILS */}
      <section className="master-section proc-val-section">
        <div className="container">
          <div className="proc-val-block-grid">
            <div className="pv-info-card">
              <div className="pv-icon-wrap">⏱️</div>
              <div className="pv-content">
                <h3>Processing Time</h3>
                <p>Standard processing takes <strong>{data.processingTime}</strong> depending on consular workload.</p>
              </div>
            </div>
            <div className="pv-info-card">
              <div className="pv-icon-wrap">📅</div>
              <div className="pv-content">
                <h3>Visa Validity & Stay</h3>
                <p>Grants stay up to <strong>{data.stayDuration}</strong> with <strong>{data.entryType}</strong> entry access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISA CHECKLIST (PLACED BEFORE OVERVIEW) */}
      <section className="master-section checklist-section" id="visaChecklist">
        <div className="container">
          <div className="section-header">
            <span className="section-label-tag">Visa Checklist</span>
            <h2 className="section-title">Required Documents for {data.name} Visa</h2>
            <p className="section-subtitle">
              Prepare the right documents before you apply. Requirements vary by destination, visa type and applicant profile.
            </p>
          </div>
          <div className="doc-4cards-grid">
            {checklistCategories.map((category) => (
              <div key={category.key} className={`doc-type-card ${category.themeClass}`}>
                <div className="doc-header">
                  <span className="doc-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <ul className="doc-list">
                  {category.items.map((doc, i) => (
                    <li key={i}>
                      <span className="check-mark" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="doc-text">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="doc-note-box">
            <div className="note-icon">ℹ️</div>
            <p>
              <strong>Important Note:</strong> {data.alertText || "Document requirements can vary based on visa category, nationality, travel purpose and applicant profile. Additional documents may be requested by the relevant embassy or visa authority."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. COUNTRY OVERVIEW */}
      <section className="master-section about-section">
        <div className="container">
          <div className="section-header">
            <span id="overviewLabel" className="section-label-tag">{data.name} Overview</span>
            <h2 id="overviewTitle" className="section-title">{data.overviewTitle || `About ${data.name} Visa`}</h2>
          </div>
          <div className="about-text-grid">
            {overviewParas.map((para, idx) => (
              <div key={idx} className="about-card-block">
                <span className="block-num">0{idx + 1}</span>
                <p>{para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISA CATEGORIES */}
      <section className="master-section visa-types-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label-tag">Visa Categories</span>
            <h2 className="section-title">Available {data.name} Visa Types</h2>
            <p className="section-subtitle">Select the visa category tailored to your purpose of travel.</p>
          </div>
          <div className="visa-types-grid">
            {visaCategories.map((cat, idx) => (
              <div key={idx} className="visa-category-card">
                <div className="cat-icon">{cat.icon || "📄"}</div>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPLICATION PROCESS */}
      <section className="master-section process-section" id="applicationProcess">
        <div className="container">
          <div className="section-header">
            <span className="section-label-tag">Application Roadmap</span>
            <h2 className="section-title">How to Apply for {data.name} Visa</h2>
            <p className="section-subtitle">
              A transparent, guided step-by-step process from document verification to visa outcome.
            </p>
          </div>
          <div className="process-timeline-cards">
            {processSteps.map((step, idx) => (
              <div key={idx} className="timeline-step-item">
                <div className="step-num-badge">{step.num || `0${idx + 1}`}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY VISION VISA */}
      <section className="master-section why-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label-tag">Trust & Expertise</span>
            <h2 className="section-title">Why Apply With Vision Visa</h2>
          </div>
          <div className="why-features-grid">
            <div className="why-feature-card">
              <span className="feat-icon">🎯</span>
              <h3>Expert Guidance</h3>
              <p>Personalized consultation tailored to your profile.</p>
            </div>
            <div className="why-feature-card">
              <span className="feat-icon">🔍</span>
              <h3>Document Verification</h3>
              <p>Pre-audit of files to eliminate rejection risks.</p>
            </div>
            <div className="why-feature-card">
              <span className="feat-icon">📅</span>
              <h3>Appointment Support</h3>
              <p>Biometric and appointment slot booking assistance.</p>
            </div>
            <div className="why-feature-card">
              <span className="feat-icon">📲</span>
              <h3>Application Tracking</h3>
              <p>Real-time progress updates until passport collection.</p>
            </div>
            <div className="why-feature-card">
              <span className="feat-icon">👨‍💼</span>
              <h3>Dedicated Support</h3>
              <p>Direct assistance from senior visa specialists.</p>
            </div>
            <div className="why-feature-card">
              <span className="feat-icon">⚡</span>
              <h3>Quick Updates</h3>
              <p>Instant notification upon visa approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="master-section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label-tag">Got Questions?</span>
            <h2 id="faqHeading" className="section-title">{data.name} Visa FAQs</h2>
          </div>
          <div id="faqWrapper" className="faq-accordion-wrapper">
            {data.faqs?.map((faq, idx) => (
              <details key={idx} className="faq-accordion-item" open={idx === 0}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="master-cta-section">
        <div className="container">
          <div className="cta-master-card">
            <span className="section-label-tag text-orange">Ready to Travel?</span>
            <h2 id="ctaTitle">Apply for Your {data.name} Visa Today</h2>
            <p>Let Vision Visa experts handle your application from document review to approval.</p>
            <div className="cta-action-btns">
              <Link id="ctaApplyBtn" href={`/contact?country=${data.slug}`} className="btn btn-primary">Start Visa Application</Link>
              <Link href="/contact" className="btn btn-secondary">Talk to Visa Specialist</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
