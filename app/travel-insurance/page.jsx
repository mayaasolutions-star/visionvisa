import React from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';

export const metadata = {
  title: 'Travel Insurance | International Travel Cover | Vision Visa',
  description:
    'Vision Visa helps you choose and arrange the right travel insurance for your international journey, with access to established insurance providers.',
  keywords: [
    'Vision Visa travel insurance',
    'international travel insurance',
    'travel insurance for visa',
    'Schengen visa travel insurance',
    'student travel insurance',
    'business travel insurance',
    'family travel insurance',
    'Tata AIG travel insurance',
    'Care Health Insurance travel',
    'Bajaj Allianz travel insurance',
    'IndusInd General Insurance travel cover'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  alternates: {
    canonical: 'https://www.visionvisa.in/travel-insurance'
  },
  openGraph: {
    title: 'Travel Insurance | International Travel Cover | Vision Visa',
    description:
      'Vision Visa helps you choose and arrange the right travel insurance for your international journey, with access to established insurance providers.',
    type: 'website',
    siteName: 'Vision Visa',
    url: 'https://www.visionvisa.in/travel-insurance',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Insurance | International Travel Cover | Vision Visa',
    description:
      'Explore international travel insurance options from established partners with Vision Visa guidance.'
  }
};

export default function TravelInsurancePage() {
  return (
    <main className="ti-page">
      {/* =========================================================
          SECTION 1: HERO SECTION
          ========================================================= */}
      <section className="ti-hero-section">
        <div className="ti-hero-bg-pattern" aria-hidden="true" />
        <div className="container">
          <div className="ti-hero-grid">
            {/* Left Content Column */}
            <div className="ti-hero-content reveal">
              <div className="ti-eyebrow">
                <span className="ti-eyebrow-dot" />
                <span>Travel Insurance</span>
              </div>

              <h1 className="ti-hero-title">
                Travel with confidence.{' '}
                <span className="text-orange">
                  We&apos;ve got the unexpected covered.
                </span>
              </h1>

              <p className="ti-hero-desc">
                Travel insurance suited to your destination, itinerary and travel needs.
              </p>

              <div className="ti-hero-actions">
                <Link href="/contact" className="btn btn-primary magnetic">
                  <span>Get a Travel Insurance Quote</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a href="tel:08010152621" className="btn btn-secondary magnetic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Talk to Our Team</span>
                </a>
              </div>

            </div>

            {/* Right Visual Column: Travel Protection Showcase */}
            <div className="ti-hero-visual reveal reveal-delay-1">
              <div className="ti-passport-card">
                <div className="ti-passport-header">
                  <div className="ti-passport-brand">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="ti-passport-brand-name">Vision Visa Protection</span>
                  </div>
                  <div className="ti-passport-badge">
                    <span className="ti-status-dot-green" />
                    <span>Protected Journey</span>
                  </div>
                </div>

                {/* Simulated Transit Route */}
                <div className="ti-passport-route">
                  <div className="ti-route-airports">
                    <div className="ti-airport-node">
                      <span className="ti-airport-code">DEL</span>
                      <span className="ti-airport-city">Departure</span>
                    </div>

                    <div className="ti-route-arc">
                      <svg className="ti-route-plane-svg" viewBox="0 0 140 22" fill="none">
                        <path d="M 5,16 Q 70,-3 135,16" stroke="#1E73DC" strokeWidth="1.8" strokeDasharray="4 4" />
                        <g transform="translate(68, 4)">
                          <circle cx="0" cy="0" r="8" fill="rgba(30, 115, 220, 0.2)" />
                          <circle cx="0" cy="0" r="3.5" fill="#F47B20" />
                        </g>
                      </svg>
                    </div>

                    <div className="ti-airport-node" style={{ textAlign: 'right' }}>
                      <span className="ti-airport-code">GLOBAL</span>
                      <span className="ti-airport-city">Destination</span>
                    </div>
                  </div>
                </div>

                {/* Protection Highlights Deck */}
                <div className="ti-passport-perks">
                  <div className="ti-perk-item">
                    <div className="ti-perk-icon medical">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div className="ti-perk-text">
                      <span className="ti-perk-title">Emergency Medical & Hospitalisation</span>
                      <span className="ti-perk-sub">Compliant with Schengen and international criteria</span>
                    </div>
                  </div>

                  <div className="ti-perk-item">
                    <div className="ti-perk-icon baggage">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div className="ti-perk-text">
                      <span className="ti-perk-title">Baggage & Personal Safeguard</span>
                      <span className="ti-perk-sub">Protection for loss, theft or transit delay</span>
                    </div>
                  </div>

                  <div className="ti-perk-item">
                    <div className="ti-perk-icon support">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    </div>
                    <div className="ti-perk-text">
                      <span className="ti-perk-title">24x7 Global Assistance</span>
                      <span className="ti-perk-sub">Worldwide emergency coordination helpline</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="ti-passport-footer">
                  <div className="ti-seal-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Associated IRDAI Partners</span>
                  </div>
                  <span>Single or Multi-Trip</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: WHY TRAVEL INSURANCE (PROTECTION)
          ========================================================= */}
      <section className="ti-why-section">
        <div className="container">
          <div className="ti-section-header reveal">
            <span className="ti-eyebrow">Why Travel Insurance</span>
            <h2 className="ti-section-title">
              TRAVEL PLANS CHANGE.{' '}
              <span className="text-orange">STAY PREPARED.</span>
            </h2>
            <p className="ti-section-subtitle">
              Four essential safeguards designed to protect you from departure to safe return.
            </p>
          </div>

          <div className="ti-why-grid reveal reveal-delay-1">
            {/* Item 1: Medical Emergencies */}
            <div className="ti-why-card card-medical">
              <div className="ti-why-top">
                <div className="ti-why-icon-box medical">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span className="ti-why-num">01</span>
              </div>
              <h3 className="ti-why-title">MEDICAL EMERGENCIES</h3>
              <p className="ti-why-desc">
                Support for eligible emergency medical expenses.
              </p>
            </div>

            {/* Item 2: Baggage */}
            <div className="ti-why-card card-baggage">
              <div className="ti-why-top">
                <div className="ti-why-icon-box baggage">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <span className="ti-why-num">02</span>
              </div>
              <h3 className="ti-why-title">BAGGAGE</h3>
              <p className="ti-why-desc">
                Protection for eligible baggage loss or delay.
              </p>
            </div>

            {/* Item 3: Travel Disruptions */}
            <div className="ti-why-card card-disruptions">
              <div className="ti-why-top">
                <div className="ti-why-icon-box disruptions">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="ti-why-num">03</span>
              </div>
              <h3 className="ti-why-title">TRAVEL DISRUPTIONS</h3>
              <p className="ti-why-desc">
                Cover for certain covered delays and disruptions.
              </p>
            </div>

            {/* Item 4: Emergency Assistance */}
            <div className="ti-why-card card-assistance">
              <div className="ti-why-top">
                <div className="ti-why-icon-box assistance">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <span className="ti-why-num">04</span>
              </div>
              <h3 className="ti-why-title">EMERGENCY ASSISTANCE</h3>
              <p className="ti-why-desc">
                Help when you need support during your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: CHOOSE COVERAGE FOR YOUR TRIP
          ========================================================= */}
      <section className="ti-coverage-section">
        <div className="container">
          <div className="ti-section-header reveal">
            <span className="ti-eyebrow">Trip-Specific Coverage</span>
            <h2 className="ti-section-title">ONE TRIP. DIFFERENT NEEDS.</h2>
            <p className="ti-section-subtitle">
              Select the right protection tier tailored to your purpose of travel.
            </p>
          </div>

          <div className="ti-coverage-grid reveal reveal-delay-1">
            {/* Card 1: Holiday */}
            <div className="ti-coverage-card">
              <div className="ti-coverage-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="ti-coverage-title">HOLIDAY</h3>
              <p className="ti-coverage-desc">
                For international leisure travel.
              </p>
            </div>

            {/* Card 2: Student */}
            <div className="ti-coverage-card">
              <div className="ti-coverage-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="ti-coverage-title">STUDENT</h3>
              <p className="ti-coverage-desc">
                For study and education abroad.
              </p>
            </div>

            {/* Card 3: Business */}
            <div className="ti-coverage-card">
              <div className="ti-coverage-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="ti-coverage-title">BUSINESS</h3>
              <p className="ti-coverage-desc">
                For work and corporate travel.
              </p>
            </div>

            {/* Card 4: Family */}
            <div className="ti-coverage-card">
              <div className="ti-coverage-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="ti-coverage-title">FAMILY</h3>
              <p className="ti-coverage-desc">
                For families and groups travelling together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: ASSOCIATED INSURANCE PARTNERS (FEATURED SHOWCASE)
          ========================================================= */}
      <section className="ti-partners-section">
        <div className="container">
          <div className="ti-section-header reveal">
            <span className="ti-eyebrow">Associated Providers</span>
            <h2 className="ti-section-title">
              OUR INSURANCE PARTNERS
            </h2>
            <p className="ti-section-subtitle">
              Travel insurance options from established providers.
            </p>
          </div>

          <div className="ti-partners-grid reveal reveal-delay-1">
            {/* Provider 1: IndusInd */}
            <div className="ti-partner-card">
              <div className="ti-partner-logo-box">
                <img
                  src={getAssetPath('/images/partners/indusind.svg')}
                  alt="IndusInd General Insurance Logo"
                  className="ti-partner-logo-img"
                  loading="lazy"
                />
              </div>
              <h3 className="ti-partner-name-text">INDUSIND</h3>
              <span className="ti-partner-sub-text">General Insurance</span>
              <span className="ti-partner-tag">International Travel</span>
            </div>

            {/* Provider 2: Tata AIG */}
            <div className="ti-partner-card">
              <div className="ti-partner-logo-box">
                <img
                  src={getAssetPath('/images/partners/tata-aig.svg')}
                  alt="Tata AIG General Insurance Logo"
                  className="ti-partner-logo-img"
                  loading="lazy"
                />
              </div>
              <h3 className="ti-partner-name-text">TATA AIG</h3>
              <span className="ti-partner-sub-text">General Insurance</span>
              <span className="ti-partner-tag">Travel & Assistance</span>
            </div>

            {/* Provider 3: Care Health Insurance */}
            <div className="ti-partner-card">
              <div className="ti-partner-logo-box">
                <img
                  src={getAssetPath('/images/partners/care-health.png')}
                  alt="Care Health Insurance Logo"
                  className="ti-partner-logo-img"
                  loading="lazy"
                />
              </div>
              <h3 className="ti-partner-name-text">CARE HEALTH INSURANCE</h3>
              <span className="ti-partner-sub-text">Health Insurance</span>
              <span className="ti-partner-tag">Health & Travel</span>
            </div>

            {/* Provider 4: Bajaj Allianz */}
            <div className="ti-partner-card">
              <div className="ti-partner-logo-box">
                <img
                  src={getAssetPath('/images/partners/bajaj-allianz.svg')}
                  alt="Bajaj Allianz General Insurance Logo"
                  className="ti-partner-logo-img"
                  loading="lazy"
                />
              </div>
              <h3 className="ti-partner-name-text">BAJAJ ALLIANZ</h3>
              <span className="ti-partner-sub-text">General Insurance</span>
              <span className="ti-partner-tag">Travel Protection</span>
            </div>
          </div>

          <div className="ti-partners-trust-wrap reveal">
            <div className="ti-partners-trust-bar">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span>
                Policies are issued through our associated IRDAI-registered insurance partners.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: HOW IT WORKS (3 SIMPLE STEPS - NUMBER ONLY)
          ========================================================= */}
      <section className="ti-how-section">
        <div className="container">
          <div className="ti-section-header reveal">
            <span className="ti-eyebrow">Seamless Process</span>
            <h2 className="ti-section-title">GET COVERED IN 3 SIMPLE STEPS.</h2>
            <p className="ti-section-subtitle">
              Secure your travel insurance quickly with complete guidance from our team.
            </p>
          </div>

          <div className="ti-journey-container reveal reveal-delay-1">
            {/* Step 1 */}
            <div className="ti-journey-step">
              <div className="ti-journey-num">01</div>
              <h3 className="ti-journey-title">SHARE YOUR TRIP</h3>
              <p className="ti-journey-desc">
                Destination, dates and traveller details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="ti-journey-step">
              <div className="ti-journey-num">02</div>
              <h3 className="ti-journey-title">CHOOSE YOUR COVER</h3>
              <p className="ti-journey-desc">
                We help you understand suitable options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="ti-journey-step">
              <div className="ti-journey-num">03</div>
              <h3 className="ti-journey-title">GET YOUR POLICY</h3>
              <p className="ti-journey-desc">
                Receive your insurance documents before you travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA: READY FOR THE JOURNEY? LET'S PROTECT IT TOO.
          ========================================================= */}
      <section className="ti-cta-section">
        <div className="container">
          <div className="ti-cta-card reveal">
            <div className="ti-cta-content">
              <span className="ti-cta-eyebrow">Start Your Journey</span>
              <h2 className="ti-cta-title">
                READY FOR THE JOURNEY?{' '}
                <span className="text-orange">LET&apos;S PROTECT IT TOO.</span>
              </h2>
              <p className="ti-cta-desc">
                Tell us about your trip and we&apos;ll help you understand your insurance options.
              </p>
              <div className="ti-cta-actions">
                <Link href="/contact" className="btn btn-primary magnetic">
                  <span>Get a Travel Insurance Quote</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a href="tel:08010152621" className="btn btn-secondary magnetic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Talk to Our Team</span>
                </a>
              </div>
              <div className="ti-cta-reassurance">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Fast guidance for upcoming travel dates and visa appointments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
