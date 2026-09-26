'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';
import { Banknote, CalendarDays, Clock3, Languages } from 'lucide-react';

const POPULAR_COUNTRIES = [
  { name: 'United Arab Emirates', visa: 'UAE Visa', slug: 'united-arab-emirates', flag: '🇦🇪' },
  { name: 'United Kingdom', visa: 'UK Visa', slug: 'united-kingdom', flag: '🇬🇧' },
  { name: 'United States', visa: 'USA Visa', slug: 'united-states', flag: '🇺🇸' },
  { name: 'Canada', visa: 'Canada Visa', slug: 'canada', flag: '🇨🇦' },
  { name: 'France', visa: 'Schengen Visa', slug: 'france', flag: '🇫🇷' },
  { name: 'Japan', visa: 'Japan Visa', slug: 'japan', flag: '🇯🇵' },
  { name: 'Thailand', visa: 'Thailand Visa', slug: 'thailand', flag: '🇹🇭' },
  { name: 'Vietnam', visa: 'Vietnam Visa', slug: 'vietnam', flag: '🇻🇳' },
];

export default function CountryDetailView({ data }) {
  if (!data) return null;

  // Visa categories array
  const visaTypes = data.visaTypes && data.visaTypes.length > 0
    ? data.visaTypes
    : [
        {
          id: 'tourist',
          name: data.visaType || 'Tourist Visa',
          shortDescription: `Suitable for Indian travellers visiting ${data.name} for tourism, sightseeing, vacations or to meet family and friends.`,
          processingTime: data.processingTime || '20–25 days',
          validity: data.validity || 'Up to 1 year',
          stayDuration: data.stayDuration || 'Up to 90 days',
          entryType: data.entryType || 'Single / Multiple entry',
          purpose: 'Tourism, Holidays, Leisure & Family Visit',
          requirements: Array.isArray(data.documents?.mandatory) && data.documents.mandatory.length > 0
            ? data.documents.mandatory
            : [
                'Valid passport with at least 6 months validity and minimum 2 blank pages',
                'Completed and signed visa application form',
                'Recent passport-size photographs matching official specifications',
                'Personal covering letter detailing travel purpose and itinerary',
                'Financial proof, including recent stamped bank statements and Income Tax Returns (ITR)',
                'Employment or business proof (leave letter for employees / registration for self-employed)',
                'Confirmed flight booking and accommodation details',
                'Overseas travel medical insurance covering full stay duration'
              ]
        }
      ];

  const [activeVisaId, setActiveVisaId] = useState(visaTypes[0].id);
  const [showAllReqs, setShowAllReqs] = useState(false);

  const activeVisa = visaTypes.find(v => v.id === activeVisaId) || visaTypes[0];

  // Purpose text helper
  const getVisaPurpose = (v) => {
    if (v.purpose) return v.purpose;
    const nameLower = (v.name || '').toLowerCase();
    const idLower = (v.id || '').toLowerCase();
    if (idLower.includes('biz') || nameLower.includes('business')) return 'Business Meetings, Trade & Consultations';
    if (idLower.includes('student') || idLower.includes('study') || nameLower.includes('student') || nameLower.includes('study')) return 'Full-time Academic Studies & Courses';
    if (idLower.includes('work') || idLower.includes('employ') || nameLower.includes('work') || nameLower.includes('employment')) return 'Employment, Jobs & Skilled Work';
    if (idLower.includes('transit') || nameLower.includes('transit')) return 'Airport Transit & Short Stopovers';
    if (idLower.includes('family') || nameLower.includes('family')) return 'Visit Family, Friends & Relatives';
    return 'Tourism, Holidays, Leisure & Family Visit';
  };

  const activePurpose = getVisaPurpose(activeVisa);

  // Requirements list (dynamically updates when activeVisa changes)
  const hasCategoryRequirements = Array.isArray(activeVisa.requirements) && activeVisa.requirements.length > 0;
  const requirementsList = hasCategoryRequirements
    ? activeVisa.requirements
    : (Array.isArray(data.documents?.mandatory) && data.documents.mandatory.length > 0
        ? data.documents.mandatory
        : null);

  const totalReqCount = requirementsList ? requirementsList.length : 0;

  const displayedRequirements = (requirementsList && !showAllReqs && totalReqCount > 6)
    ? requirementsList.slice(0, 6)
    : requirementsList;

  // WhatsApp Chat URL with prefilled message
  const whatsappUrl = `https://wa.me/918010152621?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(data.name)}%20${encodeURIComponent(activeVisa.name)}`;

  // Related countries filter
  const filteredPopularCountries = POPULAR_COUNTRIES.filter(
    (c) => c.slug !== data.slug
  ).slice(0, 6);

  return (
    <main className="vv-editorial-page master-country-page">
      <div className="vv-editorial-container">

        {/* =========================================================================
            1. HERO ROW: CINEMATIC COUNTRY IMAGE (LEFT 68%) + EDITORIAL PANEL (RIGHT 32%)
           ========================================================================= */}
        <section className="vv-editorial-hero-row">
          <div className="vv-hero-layout-grid">

            {/* LEFT (68%): CINEMATIC DESTINATION IMAGE */}
            <div className="vv-hero-cinema-card">
              <img
                src={getAssetPath(data.heroImage || '/images/Australia.webp')}
                alt={`${data.name} ${activeVisa.name}`}
                className="vv-hero-cinema-img"
              />
              <div className="vv-hero-cinema-gradient"></div>

              <div className="vv-hero-cinema-content">
                <div className="vv-hero-meta-badge">
                  {data.flagImage ? (
                    <img
                      src={getAssetPath(data.flagImage)}
                      alt={`${data.name} Flag`}
                      className="vv-flag-icon"
                    />
                  ) : (
                    <span>📍</span>
                  )}
                  <span>{data.name.toUpperCase()}</span>
                  <span className="dot">•</span>
                  <span>TOURISM • HOLIDAYS • FAMILY VISITS</span>
                </div>

                <h1 className="vv-hero-main-heading">
                  {data.name} {activeVisa.name}
                </h1>

                <p className="vv-hero-sub-text">
                  {activeVisa.shortDescription || `Suitable for Indian travellers visiting ${data.name} for tourism, sightseeing, holidays and short visits.`}
                </p>
              </div>
            </div>

            {/* RIGHT (32%): ELEGANT VISA INFORMATION PANEL */}
            <div className="vv-hero-editorial-panel">
              <div>
                <div className="vv-panel-top-label">VISA INFORMATION</div>
                <h3 className="vv-panel-main-title">{data.name} • {activeVisa.name}</h3>

                <div className="vv-editorial-params">
                  <div className="vv-param-row-item">
                    <span className="lbl">STAY</span>
                    <strong className="val">{activeVisa.stayDuration || data.stayDuration || 'Up to 90 days'}</strong>
                  </div>

                  <div className="vv-param-row-item">
                    <span className="lbl">PROCESSING</span>
                    <strong className="val">{activeVisa.processingTime || data.processingTime || '20–25 days'}</strong>
                  </div>

                  <div className="vv-param-row-item">
                    <span className="lbl">ENTRY</span>
                    <strong className="val">{activeVisa.entryType || data.entryType || 'Single / Multiple'}</strong>
                  </div>

                  <div className="vv-param-row-item">
                    <span className="lbl">PURPOSE</span>
                    <strong className="val">{activePurpose}</strong>
                  </div>
                </div>
              </div>

              {/* BRANDED SOCIAL & WHATSAPP CTAS */}
              <div className="vv-panel-action-stack">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vv-action-btn vv-action-whatsapp"
                >
                  <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" focusable="false" style={{ margin: '-2px 0' }}>
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 80.1 56.1 129.6c0 101.8-84.8 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9s-19.4 19-19.4 46.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4-5-3.7-10.6-6.5z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/visionvisa.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vv-action-btn vv-action-insta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Visas We've Processed</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. VISA TYPE NAVIGATION (SOPHISTICATED SEGMENTED BAR DIRECTLY BELOW HERO)
           ========================================================================= */}
        {visaTypes.length > 0 && (
          <section className="vv-nav-segmented-row">
            <div className="vv-segmented-track" role="tablist" aria-label="Visa Categories">
              {visaTypes.map((vType) => {
                const isActive = vType.id === activeVisaId;
                return (
                  <button
                    key={vType.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveVisaId(vType.id);
                      setShowAllReqs(false);
                    }}
                    className={`vv-segmented-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="item-label">{vType.name}</span>
                    {isActive && <span className="active-underline"></span>}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================================
            3. KEY REQUIREMENTS (EDITORIAL CHECKLIST LEFT 68% + MINI SUMMARY RIGHT 32%)
           ========================================================================= */}
        <section className="vv-requirements-editorial-row">
          <div className="vv-req-editorial-grid">

            {/* LEFT (68%): CHECKLIST */}
            <div className="vv-req-content-box">
              <div className="vv-section-tag-row">
                <span className="vv-tag-badge">KEY REQUIREMENTS</span>
                {totalReqCount > 0 && (
                  <span className="vv-tag-count">{totalReqCount} Documents</span>
                )}
              </div>

              <h2 className="vv-section-heading">
                {data.name} {activeVisa.name} Requirements
              </h2>
              <p className="vv-section-subheading">
                Everything you should have ready before starting your official application.
              </p>

              <div className="vv-numbered-checklist">
                {displayedRequirements && displayedRequirements.length > 0 ? (
                  <>
                    {displayedRequirements.map((req, idx) => {
                      const numStr = String(idx + 1).padStart(2, '0');
                      return (
                        <div key={idx} className="vv-check-row">
                          <span className="num-col">{numStr}</span>
                          <span className="text-col">{req}</span>
                        </div>
                      );
                    })}

                    {totalReqCount > 6 && (
                      <div className="vv-expand-trigger-row">
                        <button
                          type="button"
                          onClick={() => setShowAllReqs(!showAllReqs)}
                          className="vv-expand-btn"
                        >
                          <span>
                            {showAllReqs
                              ? 'Show fewer requirements ↑'
                              : `View all ${totalReqCount} requirements ↓`}
                          </span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="vv-req-fallback-text">
                    Document requirements will be confirmed based on your profile and visa category.
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT (32%): MINI SUMMARY CARD */}
            <aside className="vv-req-summary-aside">
              <div className="vv-summary-hero-card">
                <div className="summary-number-badge">{totalReqCount}</div>
                <div className="summary-title">DOCUMENTS TO PREPARE</div>

                <div className="summary-checklist-mini">
                  <div className="mini-item">✓ Passport with 6-month validity</div>
                  <div className="mini-item">✓ Visa application form</div>
                  <div className="mini-item">✓ Recent passport photographs</div>
                  <div className="mini-item">✓ Financial & bank statements</div>
                  <div className="mini-item">✓ Flight & hotel bookings</div>
                  <div className="mini-item">✓ Travel medical insurance</div>
                </div>

                <Link
                  href={`/contact/?country=${data.slug}&visa=${activeVisa?.id || 'tourist'}`}
                  className="vv-summary-wa-btn"
                >
                  Need Assistance? Contact Us
                </Link>
              </div>
            </aside>

          </div>
        </section>

        {/* =========================================================================
            4. VISA DETAILS & DESTINATION SNAPSHOT
           ========================================================================= */}
        <section className="vv-info-spread-section">
          <div className="vv-info-spread-grid">
            <div className="visa-details-panel">
              <header className="visa-panel-heading">
                <span className="visa-panel-kicker">APPLICATION</span>
                <h3 className="visa-panel-title">VISA DETAILS</h3>
              </header>

              <div className="visa-detail-list">
                <article className="visa-detail-item">
                  <span className="visa-detail-label">VISA VALIDITY</span>
                  <strong className="visa-detail-value">{activeVisa.validity || data.validity || 'Up to 1 year'}</strong>
                </article>
                <article className="visa-detail-item">
                  <span className="visa-detail-label">SUBMISSION</span>
                  <strong className="visa-detail-value">{data.applyThrough || 'Australian High Commission / VFS'}</strong>
                </article>
                <article className="visa-detail-item">
                  <span className="visa-detail-label">TRAVEL INSURANCE</span>
                  <strong className="visa-detail-value">{data.insuranceRequirement || 'Required'}</strong>
                </article>
              </div>

            </div>

            <div className="australia-glance-panel">
              <header className="visa-panel-heading">
                <span className="visa-panel-kicker">DESTINATION SNAPSHOT</span>
                <h3 className="visa-panel-title">{data.name.toUpperCase()} AT A GLANCE</h3>
              </header>

              <div className="glance-grid">
                <article className="glance-card">
                  <span className="glance-icon" aria-hidden="true"><CalendarDays size={20} strokeWidth={1.8} /></span>
                  <div className="glance-card-copy">
                    <span className="glance-label">BEST TIME TO VISIT</span>
                    <strong className="glance-value">{data.travelInfo?.bestSeason || 'March–May & Sept–Nov'}</strong>
                  </div>
                </article>
                <article className="glance-card">
                  <span className="glance-icon" aria-hidden="true"><Banknote size={20} strokeWidth={1.8} /></span>
                  <div className="glance-card-copy">
                    <span className="glance-label">CURRENCY</span>
                    <strong className="glance-value">{data.travelInfo?.currency || 'Australian Dollar (AUD)'}</strong>
                  </div>
                </article>
                <article className="glance-card">
                  <span className="glance-icon" aria-hidden="true"><Languages size={20} strokeWidth={1.8} /></span>
                  <div className="glance-card-copy">
                    <span className="glance-label">LANGUAGE</span>
                    <strong className="glance-value">{data.travelInfo?.language || 'English'}</strong>
                  </div>
                </article>
                <article className="glance-card">
                  <span className="glance-icon" aria-hidden="true"><Clock3 size={20} strokeWidth={1.8} /></span>
                  <div className="glance-card-copy">
                    <span className="glance-label">TIME ZONE</span>
                    <strong className="glance-value">{data.travelInfo?.timeZone || 'GMT+8 to GMT+11'}</strong>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FINAL CONVERSION CTA
           ========================================================================= */}
        <section className="master-cta-section">
          <div className="container">
            <div className="cta-master-card">
              <span className="section-label-tag text-orange">{data.ctaEyebrow || 'READY TO TRAVEL?'}</span>
              <h2>{data.ctaHeading || `Apply for Your ${data.name} Tourist Visa`}</h2>
              <p>{data.ctaDescription || 'Get verified document guidance, hassle-free file preparation, and dedicated specialist assistance.'}</p>
              <div className="cta-action-btns">
                <Link className="btn btn-primary" href={`/contact/?country=${data.slug}&visa=${activeVisa?.id || 'tourist'}`}>
                  {data.ctaPrimaryText || 'Start Visa Application'}
                </Link>
                <Link className="btn btn-secondary" href="/contact/">
                  {data.ctaSecondaryText || 'Talk to Specialist'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. FREQUENTLY ASKED QUESTIONS
           ========================================================================= */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="master-section faq-section" id="countryFaqs">
            <div className="container">
              <div className="section-header">
                <span className="section-label-tag">{data.faqEyebrow || 'FREQUENTLY ASKED QUESTIONS'}</span>
                <h2 className="section-title">{data.faqHeading || `${data.name} Visa FAQs`}</h2>
                <p className="section-subtitle">
                  {data.faqSubtitle || `Clear answers to common questions about ${data.name} visas, processing timelines, and requirements.`}
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

      </div>
    </main>
  );
}
