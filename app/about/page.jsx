import React from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/asset-path';
import AboutJourneyCarousel from '@/components/AboutJourneyCarousel';

export const metadata = {
  title: 'About Vision Visa | Built Around the Way People Travel',
  description:
    'Vision Visa brings together experienced travel guidance and essential pre-departure services to help make international travel easier to navigate.',
  keywords: [
    'About Vision Visa',
    'Vision Visa story',
    'visa consultants India',
    'travel assistance',
    'visa guidance',
    'travel insurance',
    'air tickets',
    'Splendid Forex',
    'Mayaa Industries'
  ],
  alternates: {
    canonical: 'https://www.visionvisa.in/about'
  },
  openGraph: {
    title: 'About Vision Visa | Built Around the Way People Travel',
    description:
      'Vision Visa brings together experienced travel guidance and essential pre-departure services to help make international travel easier to navigate.',
    type: 'website',
    siteName: 'Vision Visa',
    url: 'https://www.visionvisa.in/about',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.visionvisa.in/images/vision-visa-logo-symbol.webp',
        width: 800,
        height: 600,
        alt: 'About Vision Visa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vision Visa | Built Around the Way People Travel',
    description:
      'Vision Visa brings together experienced travel guidance and essential pre-departure services to help make international travel easier to navigate.',
    images: ['https://www.visionvisa.in/images/vision-visa-logo-symbol.webp']
  }
};

export default function AboutPage() {
  return (
    <main>
      {/* =========================================================
          1. HERO / INTRODUCTION
          ========================================================= */}
      <section className="about-hero-clean">
        <div className="about-hero-decor" aria-hidden="true"></div>
        <div className="about-hero-glow" aria-hidden="true"></div>

        <div className="container">
          <div className="about-hero-grid">
            {/* Left Content Column */}
            <div className="reveal">
              <div className="about-hero-badge">
                <span className="about-hero-badge-dot"></span>
                <span>ABOUT VISION VISA</span>
              </div>

              <h1 className="about-hero-heading">
                Every journey starts <span>with a plan.</span>
              </h1>

              <p className="about-hero-subtext">
                Vision Visa brings together experienced travel guidance and essential pre-departure services to help make international travel easier to navigate.
              </p>

              {/* Understated Travel Route Line */}
              <div className="about-hero-route-tag" aria-label="Flight trajectory from India to global destinations">
                <span className="route-dot"></span>
                <span>INDIA</span>
                <span className="route-dash-line">
                  <svg className="route-airplane-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </span>
                <span className="route-dot dest"></span>
                <span>YOUR DESTINATION</span>
              </div>

              <div className="about-hero-actions">
                <a href="#about-story" className="btn btn-primary magnetic">
                  <span>Discover Our Story</span>
                </a>

                <Link href="/visas" className="btn btn-secondary magnetic">
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right Visual Column: Framed Travel Image */}
            <div className="about-hero-visual reveal reveal-delay-1">
              <div className="about-hero-image-frame">
                <img
                  src={getAssetPath('/images/about-hero.webp')}
                  alt="International traveller map, passport, and voyage planning essentials"
                />

                <div className="about-hero-floating-card">
                  <div className="floating-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="floating-title">International Travel Guidance</div>
                    <div className="floating-sub">Clarity &bull; Planning &bull; Preparation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. VISION VISA STORY AND APPROACH (50/50 BALANCED SECTION)
          ========================================================= */}
      <section id="about-story" className="about-experience-section">
        <div className="container">
          <div className="about-exp-grid">
            {/* Left 50% Image Column */}
            <div className="about-exp-visual reveal">
              <div className="about-exp-img-wrap">
                <img
                  src={getAssetPath('/images/visas-choosewithconfidence.webp')}
                  alt="World map representing international destinations"
                />
              </div>

              <div className="about-exp-badge-bottom">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#071A3D' }}>Travel Industry Foundation</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Rooted in Mayaa Industries</div>
                </div>
              </div>
            </div>

            {/* Right 50% Editorial Content */}
            <div className="about-exp-content reveal reveal-delay-1">
              <span className="eyebrow">ABOUT VISION VISA</span>
              <h2>Built around experience. Focused on people.</h2>

              <p>
                Vision Visa brings together practical travel experience and a clear understanding of what travellers need when planning international trips.
              </p>

              <p>
                Vision Visa is built on the travel industry experience of Mayaa Industries, bringing that foundation into a more focused and traveller-friendly visa and travel assistance service.
              </p>

              <p>
                That experience has taught us that good travel assistance is not simply about completing forms or collecting documents. It is about understanding the requirements, explaining them clearly and helping people make the right decisions for their trip.
              </p>

              <p>
                We keep the process straightforward, transparent and personal, so travellers know what is required, what to expect and where they can get help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. EXISTING 3D TRAVEL PROCESS CAROUSEL
          ========================================================= */}
      <section className="about-carousel-section">
        <div className="container">
          <div className="about-carousel-header reveal">
            <span className="eyebrow">OUR TRAVEL APPROACH</span>
            <h2>From the first question to take-off.</h2>
            <p>
              Every journey has its own practical details. Our approach is to bring clarity to what needs to happen along the way.
            </p>
          </div>

          {/* 3D Stacked Card Carousel Component */}
          <div className="reveal reveal-delay-1">
            <AboutJourneyCarousel />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHAT VISION VISA STANDS FOR (CONCISE TYPOGRAPHIC PILLARS)
          ========================================================= */}
      <section className="about-approach-clean">
        <div className="container">
          <div className="about-approach-clean-header reveal">
            <span className="eyebrow">WHAT WE STAND FOR</span>
            <h2>Good travel guidance should make things clearer.</h2>
          </div>

          <div className="about-typo-stack reveal reveal-delay-1">
            {/* 01 CLARITY */}
            <div className="about-typo-row">
              <div className="about-typo-num">01</div>
              <div className="about-typo-word">CLARITY</div>
              <div className="about-typo-meaning">
                &ldquo;Information should be understandable before decisions are made.&rdquo;
              </div>
            </div>

            {/* 02 HONESTY */}
            <div className="about-typo-row">
              <div className="about-typo-num">02</div>
              <div className="about-typo-word">HONESTY</div>
              <div className="about-typo-meaning">
                &ldquo;Requirements can change. We believe in practical guidance without unrealistic promises.&rdquo;
              </div>
            </div>

            {/* 03 PERSONAL ATTENTION */}
            <div className="about-typo-row">
              <div className="about-typo-num">03</div>
              <div className="about-typo-word">PERSONAL ATTENTION</div>
              <div className="about-typo-meaning">
                &ldquo;No two travellers have exactly the same circumstances. Good guidance starts by understanding the person.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FINAL CTA
          ========================================================= */}
      <section className="about-final-cta-section">
        <div className="container">
          <div className="about-cta-card-editorial reveal">
            <div className="about-cta-accent-panel" aria-hidden="true"></div>

            <div className="about-cta-grid">
              {/* Left Action Content */}
              <div>
                <span className="eyebrow">WHERE YOU ARE HEADED NEXT</span>
                <h2 className="about-cta-title">Where are you headed next?</h2>
                <p className="about-cta-sub">
                  Start with the right guidance for your journey.
                </p>

                <div className="about-cta-buttons">
                  <Link href="/visas" className="btn btn-primary magnetic">
                    <span>Explore Visas</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <Link href="/contact" className="btn btn-secondary magnetic">
                    Talk to Vision Visa
                  </Link>
                </div>
              </div>

              {/* Right Flight Route Display */}
              <div className="about-cta-flight-stage" aria-label="Route animation indicator">
                <div className="about-flight-route-display">
                  <span className="flight-pt">INDIA</span>

                  <div className="flight-track-animated" aria-hidden="true">
                    <svg className="flight-track-airplane" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  </div>

                  <span className="flight-pt" style={{ color: '#F47B20' }}>DESTINATION</span>
                </div>

                <div className="flight-stage-details">
                  Visas &bull; Travel Insurance &bull; Air Tickets &bull; Splendid Forex
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
