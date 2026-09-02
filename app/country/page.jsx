import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import { getCountryData } from '../../lib/get-country-data';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || 'argentina';
  const data = getCountryData(slug) || getCountryData('argentina');

  return {
    title: `${data.name} Visa Application, Requirements & Fees | Vision Visa`,
    description: `Apply for your ${data.name} ${data.visaType} with complete document verification, eligibility checks, and expert visa guidance at Vision Visa.`,
  };
}

export default async function CountrySlugPage({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || 'argentina';
  const slug = String(rawSlug).toLowerCase().trim();
  const data = getCountryData(slug) || getCountryData('argentina');

  // Extract short overview paragraphs (max 2)
  let overviewParas = [];
  if (data.overviewDescription) {
    const raw = data.overviewDescription.split('\n\n').map(p => p.trim()).filter(Boolean);
    overviewParas = raw.map(p => p.replace(/^(Do Indians Need|Argentina Visa|Australia Visa|Austria Visa|Azerbaijan Visa|Bahrain Visa|Bangladesh Visa).*/i, '').trim()).filter(Boolean).slice(0, 2);
  }
  if (overviewParas.length === 0) {
    overviewParas = [
      `Indian passport holders generally require a valid visa before travelling to ${data.name}. Vision Visa provides end-to-end document verification, form filling, and embassy submission support.`,
      `Whether travelling for tourism, business meetings, higher studies, or visiting family, our specialists ensure your application meets all official consulate requirements.`
    ];
  }

  // Categorize documents into 4 distinct groups
  const mandatoryList = data.documents?.mandatory || [];
  const supportingList = data.documents?.supporting || [];

  const identityDocs = mandatoryList.filter(d => /passport|photo|application|form/i.test(d));
  const financialDocs = [...mandatoryList, ...supportingList].filter(d => /bank|financial|fund|income|tax|itr|salary|asset/i.test(d));
  const travelDocs = mandatoryList.filter(d => /flight|hotel|accommodation|itinerary|ticket|reservation/i.test(d));
  const additionalDocs = supportingList.filter(d => !/bank|financial|fund|income|tax|itr|salary|asset/i.test(d));

  if (identityDocs.length === 0) identityDocs.push("Valid Passport (6+ months validity)", "Completed Visa Application Form", "Recent Passport Photographs");
  if (financialDocs.length === 0) financialDocs.push("Bank Statements (Last 6 Months)", "Income Tax Returns (ITR)", "Salary Slips / Proof of Income");
  if (travelDocs.length === 0) travelDocs.push("Confirmed Flight Reservation", "Hotel Accommodation Proof", "Detailed Travel Itinerary");
  if (additionalDocs.length === 0) additionalDocs.push("Employment NOC / Business License", "Travel Medical Insurance", "Sponsor / Cover Letter");

  return (
    <main className="master-country-page">
      {/* 1. HERO SECTION (Compact Master Hero) */}
      <section className="master-hero">
        <div className="hero-bg-frame">
          <img id="heroBgImg" src={getAssetPath(data.heroImage)} alt={data.name} className="hero-cover-img" />
          <div className="hero-dark-gradient"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-body-content">
            <h1 id="heroTitle" className="hero-heading">{data.name} Visa</h1>
            <p id="heroDesc" className="hero-lead">
              Apply for your {data.name} visa with expert document verification, hassle-free processing, and dedicated embassy support.
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


      {/* 4. PROCESSING TIME & VALIDITY DETAILS */}
      <section className="master-section proc-val-section">
        <div className="container">
          <div className="proc-val-block-grid">
            <div className="pv-info-card">
              <div className="pv-icon-wrap">⏱️</div>
              <div className="pv-content">
                <h3>Processing Time</h3>
                <p>Standard processing takes <strong>{data.processingTime}</strong> depending on embassy volume.</p>
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
          </div>
          <div className="visa-types-grid">
            <div className="visa-category-card">
              <div className="cat-icon">🏖️</div>
              <h3>Tourist Visa</h3>
              <p>For holidays, leisure travel, and cultural sightseeing.</p>
            </div>
            <div className="visa-category-card">
              <div className="cat-icon">💼</div>
              <h3>Business Visa</h3>
              <p>For corporate meetings, trade events, and business consultations.</p>
            </div>
            <div className="visa-category-card">
              <div className="cat-icon">🎓</div>
              <h3>Student Visa</h3>
              <p>For university degrees, academic courses, and educational stays.</p>
            </div>
            <div className="visa-category-card">
              <div className="cat-icon">🏢</div>
              <h3>Work Visa</h3>
              <p>For official employment and skilled job contracts.</p>
            </div>
            <div className="visa-category-card">
              <div className="cat-icon">👨‍👩‍👧</div>
              <h3>Visitor Visa</h3>
              <p>For visiting family members, relatives, or personal hosts.</p>
            </div>
            <div className="visa-category-card">
              <div className="cat-icon">✈️</div>
              <h3>Transit Visa</h3>
              <p>For airport layovers and flight connections through {data.name}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY VISION VISA (REMAINING EXISTING CONTENT) */}
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

      {/* 8. FAQs */}
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

      {/* 9. FINAL CONVERSION CTA */}
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
