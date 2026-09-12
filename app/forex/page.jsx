import React from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';

export const metadata = {
  title: 'Forex Services with Splendid Forex | Foreign Currency & Travel Money | Vision Visa',
  description:
    'Vision Visa connects international travellers with Splendid Forex for foreign currency exchange, multi-currency travel cards, remittance and travel money services.',
  keywords: [
    'Vision Visa forex',
    'Splendid Forex',
    'forex services',
    'foreign currency exchange',
    'forex card',
    'multi currency card',
    'international money transfer',
    'international remittance',
    'travel money',
    'forex for students',
    'business travel forex',
    'RBI authorized FFMC'
  ],
  alternates: {
    canonical: 'https://www.visionvisa.in/forex'
  },
  openGraph: {
    title: 'Forex Services with Splendid Forex | Vision Visa',
    description:
      'Vision Visa connects travellers with Splendid Forex for foreign currency, prepaid travel cards and permitted international remittances.',
    type: 'website',
    siteName: 'Vision Visa',
    url: 'https://www.visionvisa.in/forex',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.visionvisa.in/images/vision-visa-logo-symbol.webp',
        width: 800,
        height: 600,
        alt: 'Vision Visa Forex Services with Splendid Forex'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forex Services with Splendid Forex | Vision Visa',
    description:
      'Arrange foreign currency, multi-currency cards and international remittance through Splendid Forex with Vision Visa guidance.',
    images: ['https://www.visionvisa.in/images/vision-visa-logo-symbol.webp']
  }
};

export default function ForexPage() {
  return (
    <main>
      {/* =========================================================
          SECTION 1: HERO SECTION
          Balanced two-column: Left = message + CTA, Right = visual
          ========================================================= */}
      <section className="forex-hero-section">
        <div className="container">
          <div className="forex-hero-grid">
            {/* Left Content Column */}
            <div className="forex-hero-content reveal">
              <div className="forex-hero-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
                <span>Forex Services</span>
              </div>

              <h1 className="forex-hero-title">
                Get your foreign currency sorted before you travel.
              </h1>

              <p className="forex-hero-sub">
                Need foreign currency, a forex card or international money transfer? Vision Visa can connect you with Splendid Forex for your forex requirements.
              </p>

              <div className="forex-hero-actions">
                <a
                  href="https://splendidforex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary magnetic"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Explore Splendid Forex</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <Link href="/contact" className="btn btn-secondary magnetic">
                  Talk to Vision Visa
                </Link>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="forex-hero-visual reveal reveal-delay-1">
              <div className="forex-hero-img-wrap">
                <img
                  src={getAssetPath('/images/forex-currencyexchange.webp')}
                  alt="Foreign currency exchange for overseas travel"
                />
              </div>

              {/* Floating Pill Badge */}
              <div className="forex-floating-badge">
                <div className="forex-badge-dot"></div>
                <div>
                  <div className="forex-badge-title">Forex Services with Splendid Forex</div>
                  <div className="forex-badge-sub">Foreign currency made simple for your trip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: SPLENDID FOREX INTRODUCTION & TRUST SECTION
          Factual connection, RBI Authorized FFMC, Prominent handoff CTA
          ========================================================= */}
      <section className="forex-intro-section">
        <div className="container">
          <div className="forex-intro-layout">
            {/* Left Narrative */}
            <div className="reveal">
              <span className="eyebrow" style={{ color: 'var(--primary-blue)' }}>
                SPLENDID FOREX
              </span>

              <h2 className="mb-24" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)', fontWeight: 700, color: 'var(--primary-navy)' }}>
                Forex support for your international journey.
              </h2>

              <p className="body-base mb-24" style={{ color: 'var(--slate-600)', fontSize: '1rem', lineHeight: 1.7 }}>
                When you are travelling abroad, having the right currency and payment option ready can make your trip much easier. Vision Visa connects travellers with Splendid Forex for foreign exchange and related travel money services.
              </p>

              <p className="body-base" style={{ color: 'var(--slate-600)', fontSize: '1rem', lineHeight: 1.7 }}>
                Whether you need cash for local markets, a prepaid card for hotel check-ins, or permitted overseas remittances, we help you understand what is required and connect you with Splendid Forex to complete your transaction.
              </p>
            </div>

            {/* Right Trust Card */}
            <div className="forex-trust-card reveal reveal-delay-1">
              <div className="forex-trust-card-header">
                <div className="forex-trust-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="forex-trust-tag">RBI Authorized FFMC</div>
                  <div className="forex-trust-sub">Foreign exchange services for international travellers</div>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--slate-600)' }}>
                Splendid Forex operates as an RBI Authorized Full Fledge Money Changing Dealer, facilitating foreign exchange transactions in compliance with regulatory guidelines.
              </p>

              <a
                href="https://splendidforex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="forex-trust-btn"
              >
                <span>Visit Splendid Forex →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: SERVICES SECTION
          4 clean cards: Currency Exchange, Multi-Currency Cards,
          International Remittance, Travel Insurance
          ========================================================= */}
      <section className="bg-off-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-heading reveal" style={{ maxWidth: '700px', margin: '0 auto 16px', textAlign: 'center' }}>
            <span className="eyebrow">FOREX SERVICES</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.35rem)', fontWeight: 700, color: 'var(--primary-navy)' }}>
              Choose the forex service you need.
            </h2>
            <p className="body-base" style={{ color: 'var(--slate-600)', marginTop: '12px' }}>
              Select the service that fits your travel requirements and explore the available options through Splendid Forex.
            </p>
          </div>

          <div className="forex-services-grid">
            {/* CARD 1: Currency Exchange */}
            <div className="forex-service-card reveal">
              <div>
                <div className="forex-service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                </div>

                <h3 className="forex-service-title">Currency Exchange</h3>

                <p className="forex-service-desc">
                  Get foreign currency for your international travel, with guidance on the exchange process and required documents.
                </p>
              </div>

              <a
                href="https://splendidforex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="forex-service-link"
              >
                <span>Explore Currency Exchange</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* CARD 2: Multi-Currency Cards */}
            <div className="forex-service-card reveal reveal-delay-1">
              <div>
                <div className="forex-service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>

                <h3 className="forex-service-title">Multi-Currency Cards</h3>

                <p className="forex-service-desc">
                  Carry multiple currencies on one prepaid travel card for convenient international payments and access to cash.
                </p>
              </div>

              <a
                href="https://splendidforex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="forex-service-link"
              >
                <span>Explore Forex Cards</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* CARD 3: International Remittance */}
            <div className="forex-service-card reveal reveal-delay-2">
              <div>
                <div className="forex-service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 3v10" />
                    <path d="m13 7 4-4 4 4" />
                    <path d="M7 21V11" />
                    <path d="m3 17 4 4 4-4" />
                  </svg>
                </div>

                <h3 className="forex-service-title">International Remittance</h3>

                <p className="forex-service-desc">
                  Send money abroad for permitted purposes such as education, family support and other eligible transfers.
                </p>
              </div>

              <a
                href="https://splendidforex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="forex-service-link"
              >
                <span>Explore Remittance</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* CARD 4: Travel Insurance */}
            <div className="forex-service-card reveal reveal-delay-3">
              <div>
                <div className="forex-service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                <h3 className="forex-service-title">Travel Insurance</h3>

                <p className="forex-service-desc">
                  Explore travel insurance options alongside your foreign exchange and international travel arrangements.
                </p>
              </div>

              <a
                href="https://splendidforex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="forex-service-link"
              >
                <span>Explore Travel Insurance</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: TRAVELLER USE CASES
          3 clean cards: International Holidays, Study Abroad, Business Travel
          ========================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-heading reveal" style={{ maxWidth: '700px', margin: '0 auto 16px', textAlign: 'center' }}>
            <span className="eyebrow">FOR INTERNATIONAL TRAVEL</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.35rem)', fontWeight: 700, color: 'var(--primary-navy)' }}>
              Forex support for different kinds of travellers.
            </h2>
            <p className="body-base" style={{ color: 'var(--slate-600)', marginTop: '12px' }}>
              Whatever the purpose of your trip, prepare your currency requirements ahead of time.
            </p>
          </div>

          <div className="forex-usecases-grid">
            {/* USE CASE 1: International Holidays */}
            <div className="forex-usecase-card reveal">
              <div className="forex-usecase-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>
              </div>
              <h3 className="forex-usecase-title">International Holidays</h3>
              <p className="forex-usecase-desc">
                Get the foreign currency you need before travelling abroad.
              </p>
            </div>

            {/* USE CASE 2: Study Abroad */}
            <div className="forex-usecase-card reveal reveal-delay-1">
              <div className="forex-usecase-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="forex-usecase-title">Study Abroad</h3>
              <p className="forex-usecase-desc">
                Prepare your currency and permitted international payment requirements before you leave.
              </p>
            </div>

            {/* USE CASE 3: Business Travel */}
            <div className="forex-usecase-card reveal reveal-delay-2">
              <div className="forex-usecase-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="forex-usecase-title">Business Travel</h3>
              <p className="forex-usecase-desc">
                Arrange foreign currency and travel money options for meetings, business trips and international travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: SIMPLE PROCESS
          Clean 3-step section clearly establishing the handoff
          ========================================================= */}
      <section className="bg-off-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-heading reveal" style={{ maxWidth: '700px', margin: '0 auto 16px', textAlign: 'center' }}>
            <span className="eyebrow">HOW IT WORKS</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.35rem)', fontWeight: 700, color: 'var(--primary-navy)' }}>
              Getting started is simple.
            </h2>
            <p className="body-base" style={{ color: 'var(--slate-600)', marginTop: '12px' }}>
              Three straightforward steps from travel planning to forex fulfillment.
            </p>
          </div>

          <div className="forex-process-grid">
            {/* STEP 01 */}
            <div className="forex-process-card reveal">
              <span className="forex-process-num">STEP 01</span>
              <h3 className="forex-process-title">Tell us what you need</h3>
              <p className="forex-process-desc">
                Share your destination, travel plans and forex requirement with our team.
              </p>
            </div>

            {/* STEP 02 */}
            <div className="forex-process-card reveal reveal-delay-1">
              <span className="forex-process-num">STEP 02</span>
              <h3 className="forex-process-title">Choose the right option</h3>
              <p className="forex-process-desc">
                We&apos;ll help you understand the relevant forex service and next steps.
              </p>
            </div>

            {/* STEP 03 */}
            <div className="forex-process-card reveal reveal-delay-2">
              <span className="forex-process-num">STEP 03</span>
              <h3 className="forex-process-title">Continue with Splendid Forex</h3>
              <p className="forex-process-desc">
                Proceed to Splendid Forex for the applicable forex service and transaction process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: SMALL FAQ
          Short, maximum 4 questions with clean accessible disclosure
          ========================================================= */}
      <section className="bg-off-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-heading reveal" style={{ maxWidth: '700px', margin: '0 auto 16px', textAlign: 'center' }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.35rem)', fontWeight: 700, color: 'var(--primary-navy)' }}>
              Common questions about forex.
            </h2>
            <p className="body-base" style={{ color: 'var(--slate-600)', marginTop: '12px' }}>
              Quick answers to help you prepare your travel money.
            </p>
          </div>

          <div className="forex-faq-list reveal">
            {/* FAQ 1 */}
            <details className="forex-faq-item" open>
              <summary className="forex-faq-question">
                <span>What forex services are available?</span>
                <svg className="forex-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="forex-faq-answer">
                Splendid Forex currently offers currency exchange, multi-currency cards, remittance and travel insurance services.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="forex-faq-item">
              <summary className="forex-faq-question">
                <span>Can I get foreign currency before travelling?</span>
                <svg className="forex-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="forex-faq-answer">
                Yes. Foreign currency exchange is available for international travel. Requirements depend on the transaction and applicable regulations.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="forex-faq-item">
              <summary className="forex-faq-question">
                <span>What is a multi-currency card?</span>
                <svg className="forex-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="forex-faq-answer">
                It is a prepaid travel card that can hold multiple supported currencies and can be used for eligible international transactions.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="forex-faq-item">
              <summary className="forex-faq-question">
                <span>How do I get started?</span>
                <svg className="forex-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="forex-faq-answer">
                Tell Vision Visa what you need, or visit Splendid Forex directly to explore the available forex services.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: CREATIVE + PREMIUM TRAVEL FOREX FINAL CTA
          Wide horizontal card with travel/forex visual composition
          ========================================================= */}
      <section className="forex-cta-section">
        <div className="container">
          <div className="forex-cta-card reveal">
            {/* Subtle Ambient Glows & Flight Route Backdrop */}
            <div className="forex-cta-ambient" aria-hidden="true">
              <div className="forex-cta-glow-blue"></div>
              <div className="forex-cta-glow-orange"></div>

              {/* Faint Flight Path SVG Arc */}
              <svg className="forex-cta-route-svg" viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M-40,300 C180,100 480,340 760,110 C820,60 880,80 940,50"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
                <path
                  d="M40,360 C260,200 520,120 860,180"
                  stroke="rgba(244, 123, 32, 0.22)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              </svg>
            </div>

            {/* Left Content Column */}
            <div className="forex-cta-content">
              <div className="forex-cta-eyebrow">
                <span className="forex-cta-dot"></span>
                <span>READY FOR YOUR TRIP?</span>
              </div>

              <h2 className="forex-cta-title">
                Sort your forex before you take off.
              </h2>

              <p className="forex-cta-desc">
                Get the right travel money option for your journey through Splendid Forex.
              </p>

              <div className="forex-cta-actions">
                <a
                  href="https://splendidforex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-forex-primary magnetic"
                >
                  <span>Visit Splendid Forex ↗</span>
                </a>

                <Link href="/contact" className="btn-forex-secondary magnetic">
                  <span>Talk to Vision Visa</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Composition Column */}
            <div className="forex-cta-visual" aria-hidden="true">
              <div className="forex-visual-stage">
                {/* 1. Angled Departure / Boarding Ticket */}
                <div className="forex-ticket-mock">
                  <div className="forex-ticket-header">
                    <span>INTERNATIONAL TRAVEL</span>
                    <span>FLIGHT READY</span>
                  </div>
                  <div className="forex-ticket-route">
                    <span>DEL</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                    </svg>
                    <span>OVERSEAS</span>
                  </div>
                  <span className="forex-ticket-badge">Travel Ready</span>
                </div>

                {/* 2. Overlapping Multi-Currency Card */}
                <div className="forex-card-mock">
                  <div className="forex-card-top">
                    <div className="forex-card-chip"></div>
                    <div className="forex-card-contactless">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-2.5"/>
                        <path d="M5.5 17.5A6.5 6.5 0 0 0 12 11c0-2.5-1.5-4-3.5-5"/>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="forex-card-currencies">
                      <span className="forex-card-currency-pill">$ USD</span>
                      <span className="forex-card-currency-pill">€ EUR</span>
                      <span className="forex-card-currency-pill">£ GBP</span>
                    </div>
                  </div>

                  <div className="forex-card-footer">
                    <div>
                      <div className="forex-card-label">TRAVEL FOREX</div>
                      <div className="forex-card-brand">MULTI-CURRENCY</div>
                    </div>
                    <svg width="28" height="20" viewBox="0 0 36 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#EB001B" fillOpacity="0.8"/>
                      <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.8"/>
                    </svg>
                  </div>
                </div>

                {/* 3. Floating Location / Status Pin */}
                <div className="forex-floating-pin">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#F47B20" stroke="#FFFFFF" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3" fill="#FFFFFF"></circle>
                  </svg>
                  <span>Ready to Fly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
