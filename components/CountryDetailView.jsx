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
          requirements: Array.isArray(data.documents?.mandatory) && data.documents.mandatory.length > 0
            ? data.documents.mandatory
            : [
                'Valid passport with at least 6 months validity and minimum 2 blank pages',
                'Completed and signed visa application form',
                'Recent passport-size photographs matching official specifications',
                'Personal covering letter outlining planned travel itinerary and dates',
                'Financial proof, including recent stamped bank statements and Income Tax Returns (ITR)',
                'Employment or business proof (leave approval letter for employees / registration for self-employed)',
                'Confirmed round-trip flight booking and hotel accommodation details',
                'Overseas travel medical insurance covering the full duration of stay'
              ]
        }
      ];

  const [activeVisaId, setActiveVisaId] = useState(visaTypes[0].id);
  const activeVisa = visaTypes.find(v => v.id === activeVisaId) || visaTypes[0];

  // Requirements list (from active visa or fallback)
  const requirementsList = Array.isArray(activeVisa.requirements) && activeVisa.requirements.length > 0
    ? activeVisa.requirements
    : (Array.isArray(data.documents?.mandatory) && data.documents.mandatory.length > 0
        ? data.documents.mandatory
        : [
            'Valid passport with at least 6 months validity and minimum 2 blank pages',
            'Completed and signed visa application form',
            'Recent passport-size photographs matching official specifications',
            'Personal covering letter outlining planned travel itinerary and dates',
            'Financial proof, including recent stamped bank statements and Income Tax Returns (ITR)',
            'Employment or business proof (leave approval letter for employees / registration for self-employed)',
            'Confirmed round-trip flight booking and hotel accommodation details',
            'Overseas travel medical insurance covering the full duration of stay'
          ]);

  // Important notes (only if present)
  const importantNote = activeVisa.notes || data.consularNotes || data.alertText || data.documents?.alertText;

  const showSelector = visaTypes.length > 1;

  return (
    <main className="master-country-page">
      {/* 1. HERO SECTION */}
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

      {/* 2. VISA TYPE SELECTOR (IMMEDIATELY AFTER HERO) */}
      {showSelector && (
        <section className="visa-selector-section" aria-label="Visa Category Selection">
          <div className="container">
            <div className="visa-selector-inner">
              <div className="visa-cards-grid" role="tablist" aria-label="Visa Categories">
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
                      className={`visa-type-card-btn ${isActive ? 'active' : ''}`}
                    >
                      <div className="visa-card-icon-wrap">
                        <span className="card-icon">{icon}</span>
                      </div>
                      <div className="visa-card-content">
                        <span className="card-title">{vType.name}</span>
                        <span className="card-badge">{vType.stayDuration || vType.validity || 'Available'}</span>
                      </div>
                      <div className="card-select-indicator" aria-hidden="true">
                        {isActive ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. MAIN CONTENT AREA: LEFT (PRIMARY KEY REQUIREMENTS) | RIGHT (VISA INFORMATION SIDEBAR & INSTAGRAM CTA) */}
      <section className="master-section country-content-section" id="visaDetails">
        <div className="container">
          <div className="country-main-layout-grid">
            {/* PRIMARY CONTENT: KEY REQUIREMENTS CARD (LEFT COLUMN - SINGLE CONTINUOUS VERTICAL LIST - NO COUNT BADGE) */}
            <div className="primary-content-col">
              <div className="key-requirements-card-left">
                <div className="requirements-header">
                  <div className="req-title-wrap">
                    <div className="req-passport-icon-badge">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                        <circle cx="12" cy="10" r="3.5"></circle>
                        <path d="M7 18c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"></path>
                        <line x1="16" y1="6" x2="18" y2="6"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="section-subheading mb-0">Key Requirements</h3>
                      <p className="req-sub-label">Mandatory document checklist for Indian passport holders</p>
                    </div>
                  </div>
                </div>

                <div className="requirements-body">
                  <ul className="requirements-list-single-col">
                    {requirementsList.map((req, idx) => (
                      <li key={idx} className="requirement-item-row">
                        <span className="req-check-icon" aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="req-text-content">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SECONDARY SIDEBAR: VISA INFORMATION CARD (RIGHT COLUMN) */}
            <div className="secondary-sidebar-col">
              <div className="visa-sidebar-card">
                <div className="sidebar-header">
                  <div className="sidebar-flag-badge">
                    {data.flagImage && (
                      <img src={data.flagImage} alt={`${data.name} Flag`} className="flag-img" />
                    )}
                    <span className="country-name-tag">{data.name}</span>
                  </div>
                  <h3 className="sidebar-title">Visa Information</h3>
                  <span className="sidebar-subtitle">Key application parameters</span>
                </div>

                <div className="sidebar-param-list">
                  <div className="sidebar-param-row">
                    <div className="param-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="param-data">
                      <span className="param-label">Processing Time</span>
                      <strong className="param-value">{activeVisa.processingTime || data.processingTime || '10–15 working days'}</strong>
                    </div>
                  </div>

                  <div className="sidebar-param-row">
                    <div className="param-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div className="param-data">
                      <span className="param-label">Validity</span>
                      <strong className="param-value">{activeVisa.validity || data.validity || 'As granted'}</strong>
                    </div>
                  </div>

                  <div className="sidebar-param-row">
                    <div className="param-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="param-data">
                      <span className="param-label">Stay Duration</span>
                      <strong className="param-value">{activeVisa.stayDuration || data.stayDuration || 'Up to 90 days'}</strong>
                    </div>
                  </div>

                  <div className="sidebar-param-row">
                    <div className="param-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </div>
                    <div className="param-data">
                      <span className="param-label">Entry Type</span>
                      <strong className="param-value">{activeVisa.entryType || data.entryType || 'Single / Multiple entry'}</strong>
                    </div>
                  </div>
                </div>

                <div className="sidebar-action-wrap">
                  <Link
                    href={`/contact?country=${data.slug}&visa=${activeVisa.id}`}
                    className="btn btn-primary btn-block"
                  >
                    Apply for {activeVisa.name}
                  </Link>

                  {/* PROMINENT INSTAGRAM CTA BUTTON */}
                  <a
                    href="https://www.instagram.com/visionvisa.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-sidebar-btn"
                    aria-label="Visit Vision Visa on Instagram"
                  >
                    <div className="insta-btn-left">
                      <div className="insta-icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                      <span className="insta-btn-text">Visas We've Processed</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="insta-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>

                {/* SMALL SUBTLE NOTE AT VERY BOTTOM OF SIDEBAR CARD */}
                {importantNote && (
                  <div className="sidebar-note-block">
                    <span className="sidebar-note-title">Important to Know</span>
                    <p className="sidebar-note-text">{importantNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs SECTION */}
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

      {/* 5. APPLICATION CTA BANNER */}
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
