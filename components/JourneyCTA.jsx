import React from 'react';
import Link from 'next/link';

export default function JourneyCTA({
  eyebrow = "PLAN YOUR JOURNEY",
  title = "Not Sure Where to",
  titleHighlight = "Start?",
  description = "Tell us where you want to go. We'll help you understand the visa requirements and next steps.",
  primaryBtnText = "Apply Now",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Talk to Our Team",
  secondaryBtnLink = "/contact"
}) {
  return (
    <section className="journey-cta-section">
      <div className="container">
        <div className="journey-cta-card reveal">
          {/* Subtle Ambient Glows & Flight Route Backdrop */}
          <div className="cta-ambient-bg" aria-hidden="true">
            <div className="cta-glow glow-blue"></div>
            <div className="cta-glow glow-orange"></div>
            
            {/* World Travel Grid & Flight Route SVG */}
            <svg className="cta-route-svg" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-50,280 C150,80 400,320 650,120 C720,60 780,90 850,50"
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              <path
                d="M50,380 C250,220 500,100 820,200"
                stroke="rgba(244, 123, 32, 0.18)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            </svg>
          </div>

          <div className="journey-cta-inner">
            {/* Left Content Column */}
            <div className="journey-cta-content">
              <div className="journey-cta-eyebrow">
                <span className="eyebrow-dot"></span>
                {eyebrow}
              </div>

              <h2 className="journey-cta-title">
                {title} <span className="text-orange-glow">{titleHighlight}</span>
              </h2>

              <p className="journey-cta-desc">
                {description}
              </p>

              <div className="journey-cta-actions">
                <Link href={primaryBtnLink} className="btn-cta-primary magnetic">
                  <span>{primaryBtnText}</span>
                  <svg className="btn-arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link href={secondaryBtnLink} className="btn-cta-secondary magnetic">
                  <span>{secondaryBtnText}</span>
                </Link>
              </div>

              {/* Trust Indicators Pill Row */}
              <div className="journey-cta-trust">
                <div className="trust-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Free Initial Assessment</span>
                </div>
                <div className="trust-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Quick 24h Response</span>
                </div>
                <div className="trust-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>50+ Countries</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition: Lightweight SVG / CSS Travel Composition */}
            <div className="journey-cta-visual" aria-hidden="true">
              <div className="travel-composition-stage">
                
                {/* 1. Decorative Radar & World Coordinates Circle */}
                <div className="visual-radar-ring ring-outer"></div>
                <div className="visual-radar-ring ring-inner"></div>

                {/* 2. Stylized Passport Booklet */}
                <div className="passport-card">
                  <div className="passport-header">
                    <span className="passport-emblem">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </span>
                    <span className="passport-type">PASSPORT</span>
                  </div>
                  <div className="passport-body">
                    <div className="passport-gold-crest">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <span className="passport-sub">VISION VISA TRAVEL ACCESS</span>
                  </div>
                  <div className="passport-chip"></div>
                </div>

                {/* 3. Stylized Boarding Pass Ticket */}
                <div className="boarding-pass-card">
                  <div className="boarding-header">
                    <div className="airline-brand">
                      <span className="brand-dot"></span>
                      <strong>VISION AIR</strong>
                    </div>
                    <span className="flight-badge">VV-2026</span>
                  </div>
                  <div className="boarding-route">
                    <div className="route-point">
                      <span className="city-code">DEL</span>
                      <span className="city-name">Delhi</span>
                    </div>
                    <div className="route-flight-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F47B20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                      </svg>
                    </div>
                    <div className="route-point">
                      <span className="city-code">LHR</span>
                      <span className="city-name">London</span>
                    </div>
                  </div>
                  <div className="boarding-footer">
                    <div className="boarding-status">
                      <span className="status-label">STATUS</span>
                      <span className="status-val text-green">VISA APPROVED</span>
                    </div>
                    <div className="barcode-mock">
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>

                {/* 4. Floating Airplane & Flight Path */}
                <div className="floating-airplane-wrap">
                  <div className="airplane-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                  </div>
                </div>

                {/* 5. Location Pin Bubble */}
                <div className="floating-pin-badge">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#F47B20" stroke="#FFFFFF" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3" fill="#FFFFFF"></circle>
                  </svg>
                  <span>Ready to Fly</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
