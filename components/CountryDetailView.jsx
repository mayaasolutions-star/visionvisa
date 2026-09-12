'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';

export default function CountryDetailView({ data }) {
  if (!data) return null;

  const visaTypes = data.visaTypes && data.visaTypes.length > 0
    ? data.visaTypes
    : [
        {
          id: 'tourist',
          name: data.visaType || 'Tourist Visa',
          shortDescription: `Suitable for tourism, sightseeing, and short visits.`,
          processingTime: data.processingTime || '10–15 working days',
          validity: data.validity || 'As granted',
          stayDuration: data.stayDuration || 'Up to 90 days',
          entryType: data.entryType || 'Single / Multiple entry',
          requirements: [
            'Valid passport with at least 6 months validity and minimum 2 blank pages',
            'Completed and signed visa application form',
            'Recent passport-size photographs matching official specifications',
            'Personal covering letter outlining planned travel itinerary and dates',
            'Financial proof, including recent stamped bank statements and Income Tax Returns (ITR)',
            'Employment or business proof (leave approval letter for employees / registration for self-employed)',
            'Confirmed round-trip flight booking and hotel accommodation details',
            'Overseas travel medical insurance covering the full duration of stay'
          ],
          applicationSteps: [
            { num: "01", title: "Choose Visa Type", desc: `Select the visa category matching your travel purpose for ${data.name}.` },
            { num: "02", title: "Prepare Documents", desc: "Organize required personal, financial, and travel documents." },
            { num: "03", title: "Submit Application", desc: "Complete consular forms and verify file completeness." },
            { num: "04", title: "Biometrics / Interview", desc: "Attend appointment or biometric verification, if required." },
            { num: "05", title: "Receive Decision", desc: "Receive your approved visa grant or stamped passport." }
          ]
        }
      ];

  const [activeVisaId, setActiveVisaId] = useState(visaTypes[0].id);
  const activeVisa = visaTypes.find(v => v.id === activeVisaId) || visaTypes[0];

  // Requirements list (6-10 concise bullets)
  const requirementsList = Array.isArray(activeVisa.requirements) && activeVisa.requirements.length > 0
    ? activeVisa.requirements
    : [
        'Valid passport with at least 6 months validity and minimum 2 blank pages',
        'Completed and signed visa application form',
        'Recent passport-size photographs matching official specifications',
        'Personal covering letter outlining planned travel itinerary and dates',
        'Financial proof, including recent stamped bank statements and Income Tax Returns (ITR)',
        'Employment or business proof (leave approval letter for employees / registration for self-employed)',
        'Confirmed round-trip flight booking and hotel accommodation details',
        'Overseas travel medical insurance covering the full duration of stay'
      ];

  // Application steps (4-5 concise steps)
  const stepsList = Array.isArray(activeVisa.applicationSteps) && activeVisa.applicationSteps.length > 0
    ? activeVisa.applicationSteps
    : [
        { num: "01", title: "Choose Visa Type", desc: `Select the visa category matching your travel purpose for ${data.name}.` },
        { num: "02", title: "Prepare Documents", desc: "Organize required personal, financial, and travel documents." },
        { num: "03", title: "Submit Application", desc: "Complete consular forms and verify file completeness." },
        { num: "04", title: "Biometrics / Interview", desc: "Attend appointment or biometric verification, if required." },
        { num: "05", title: "Receive Decision", desc: "Receive your approved visa grant or stamped passport." }
      ];

  // Important notes (only if genuinely present)
  const importantNote = activeVisa.notes || data.consularNotes || data.alertText;

  const hasMultipleCategories = visaTypes.length > 1;

  return (
    <main className="master-country-page">
      {/* 1. SHORT HERO (~280-320px desktop, ~220-250px mobile) */}
      <section className="master-hero">
        <div className="hero-bg-frame">
          <img
            src={getAssetPath(data.heroImage || '/images/Argentina.webp')}
            alt={`${data.name} Visa`}
            className="hero-cover-img"
          />
          <div className="hero-dark-gradient"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-body-content">
            <div className="hero-flag-badge">
              {data.flagImage && (
                <img src={data.flagImage} alt={`${data.name} Flag`} className="flag-img" />
              )}
              <span>{data.name}</span>
            </div>

            <h1 className="hero-heading">{data.name} Visa</h1>
            <p className="hero-lead">
              Visa requirements and application guidance for Indian travellers.
            </p>

            <div className="hero-actions">
              <Link
                href={`/contact?country=${data.slug}&visa=${activeVisa.id}`}
                className="btn btn-primary"
              >
                Apply for {activeVisa.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISA CATEGORY SELECTOR (IMMEDIATELY AFTER HERO) */}
      {hasMultipleCategories && (
        <section className="visa-selector-section" aria-label="Visa Category Selection">
          <div className="container">
            <div className="visa-selector-inner">
              <span className="visa-selector-eyebrow">Visa Categories</span>
              <h2 className="visa-selector-heading">Choose your visa type</h2>
              <p className="visa-selector-sub">
                Select a category to view its requirements and visa details.
              </p>

              <div className="visa-tabs-container" role="tablist" aria-label="Visa Categories">
                {visaTypes.map((vType) => {
                  const isActive = vType.id === activeVisaId;
                  const icon = vType.id.includes('biz') || vType.id.includes('business')
                    ? '💼'
                    : vType.id.includes('student') || vType.id.includes('study')
                    ? '🎓'
                    : vType.id.includes('work') || vType.id.includes('employment')
                    ? '🏢'
                    : vType.id.includes('transit')
                    ? '✈️'
                    : vType.id.includes('family')
                    ? '👨‍👩‍👧'
                    : '✈️';

                  return (
                    <button
                      key={vType.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveVisaId(vType.id)}
                      className={`visa-type-tab-btn ${isActive ? 'active' : ''}`}
                    >
                      <span className="tab-icon">{icon}</span>
                      <span className="tab-label">{vType.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SELECTED VISA TYPE + QUICK FACTS */}
      <section className="master-section selected-visa-section" id="visaDetails">
        <div className="container">
          <div className="selected-visa-header">
            <div className="visa-title-wrap">
              <span className="section-label-tag">{data.name} Visa Guidance</span>
              <h2 className="visa-main-title">{data.name} {activeVisa.name}</h2>
              <p className="visa-short-desc">
                {activeVisa.shortDescription || `Suitable for ${activeVisa.name.toLowerCase()} travel to ${data.name}.`}
              </p>
            </div>
          </div>

          {/* VISA QUICK FACTS (COMPACT 4-CARD ROW — NO FEES) */}
          <div className="visa-quick-facts-row">
            <div className="fact-card">
              <span className="fact-label">Processing</span>
              <strong className="fact-val">{activeVisa.processingTime || '10–15 working days'}</strong>
            </div>
            <div className="fact-card">
              <span className="fact-label">Validity</span>
              <strong className="fact-val">{activeVisa.validity || 'As granted'}</strong>
            </div>
            <div className="fact-card">
              <span className="fact-label">Stay</span>
              <strong className="fact-val">{activeVisa.stayDuration || 'Up to 90 days'}</strong>
            </div>
            <div className="fact-card">
              <span className="fact-label">Entry</span>
              <strong className="fact-val">{activeVisa.entryType || 'Multiple entry'}</strong>
            </div>
          </div>

          {/* 4. KEY REQUIREMENTS (ONE CLEAN COMPACT SECTION) */}
          <div className="key-requirements-section">
            <div className="requirements-header">
              <h3 className="section-subheading">Key Requirements</h3>
              <span className="req-count-badge">{requirementsList.length} Items</span>
            </div>

            <div className="requirements-card">
              <ul className="requirements-list">
                {requirementsList.map((req, idx) => (
                  <li key={idx} className="requirement-item">
                    <span className="req-check" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="req-text">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. HOW TO APPLY (CONCISE 4-5 STEPS) */}
          <div className="how-to-apply-section" id="howToApply">
            <h3 className="section-subheading">How to Apply</h3>
            <div className="compact-steps-grid">
              {stepsList.map((step, idx) => (
                <div key={idx} className="step-card">
                  <div className="step-badge">{step.num || `0${idx + 1}`}</div>
                  <div className="step-body">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. IMPORTANT TO KNOW (OPTIONAL — ONLY IF IMPORTANT NOTE EXISTS) */}
          {importantNote && (
            <div className="important-to-know-box">
              <div className="box-icon">ℹ️</div>
              <div className="box-body">
                <h4 className="box-title">Important to Know</h4>
                <p className="box-text">{importantNote}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. FAQs AT THE BOTTOM */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="master-section faq-section" id="countryFaqs">
          <div className="container">
            <div className="section-header">
              <span className="section-label-tag">Frequently Asked Questions</span>
              <h2 className="section-title">{data.name} Visa FAQs</h2>
              <p className="section-subtitle">
                Clear answers to common questions about {data.name} visas, processing timelines, and requirements.
              </p>
            </div>

            <div className="faq-accordion-wrapper">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="faq-accordion-item" open={idx === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. APPLICATION CTA BANNER */}
      <section className="master-cta-section">
        <div className="container">
          <div className="cta-master-card">
            <span className="section-label-tag text-orange">Ready to Travel?</span>
            <h2>Apply for Your {data.name} {activeVisa.name}</h2>
            <p>
              Get verified document guidance, hassle-free file preparation, and dedicated specialist assistance.
            </p>
            <div className="cta-action-btns">
              <Link
                href={`/contact?country=${data.slug}&visa=${activeVisa.id}`}
                className="btn btn-primary"
              >
                Start Visa Application
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Talk to Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
