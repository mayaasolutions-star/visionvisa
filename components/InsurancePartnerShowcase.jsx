'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PARTNERS = [
  {
    id: 'indusind',
    name: 'IndusInd General Insurance',
    tagline: 'Associated Insurance Partner',
    desc: 'Travel insurance options for international travellers and different travel requirements, offering comprehensive assistance and flexible plan structures.',
    highlights: [
      'Comprehensive emergency medical cover options',
      'Assistance for baggage loss, delay and documents',
      'Single-trip and multi-trip international coverage',
      'Trip delay and missed connection protection options'
    ],
    suitedFor: 'Holidays, business visits & general international travel'
  },
  {
    id: 'tata-aig',
    name: 'Tata AIG',
    tagline: 'Associated Insurance Partner',
    desc: 'Travel insurance options for international travellers, including plans for different traveller profiles and trip types with global emergency assistance.',
    highlights: [
      'Plans tailored for vacation, business and student travel',
      'Emergency medical treatment and repatriation support',
      'Cover for flight disruptions, baggage and cancellations',
      'Established international emergency assistance network'
    ],
    suitedFor: 'Individual, family, student and corporate itineraries'
  },
  {
    id: 'care-health',
    name: 'Care Health Insurance',
    tagline: 'Associated Insurance Partner',
    desc: 'Travel insurance options designed for international travel and different traveller needs, with specific coverage options for students, leisure and corporate trips.',
    highlights: [
      'Dedicated international student travel insurance plans',
      'Medical emergencies, hospitalisation and doctor visits',
      'Protection against baggage loss and passport replacement support',
      'Options meeting international visa and university criteria'
    ],
    suitedFor: 'Higher education abroad, vacationers & corporate executives'
  },
  {
    id: 'bajaj-allianz',
    name: 'Bajaj Allianz',
    tagline: 'Associated Insurance Partner',
    desc: 'Travel insurance options with coverage choices for individual, family and business travellers, backed by international emergency network support.',
    highlights: [
      'Flexible individual and family floater international plans',
      '24x7 global emergency medical assistance helpline',
      'Medical cover, accidental injuries and urgent dental care',
      'Protection against passport loss, delays and personal liability'
    ],
    suitedFor: 'Families travelling together, leisure tourists & business trips'
  }
];

export default function InsurancePartnerShowcase() {
  const [activeId, setActiveId] = useState('tata-aig');
  const activePartner = PARTNERS.find((p) => p.id === activeId) || PARTNERS[0];

  return (
    <div className="insurance-showcase-box">
      {/* Horizontal Tab Selector */}
      <div className="insurance-showcase-tabs" role="tablist" aria-label="Insurance Providers">
        {PARTNERS.map((partner) => {
          const isActive = partner.id === activeId;
          return (
            <button
              key={partner.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              className={`insurance-showcase-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveId(partner.id)}
            >
              <span className="tab-indicator" aria-hidden="true" />
              <span className="tab-name">{partner.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Provider Card */}
      <div className="insurance-showcase-detail" role="tabpanel">
        <div className="showcase-detail-header">
          <div>
            <span className="showcase-partner-badge">{activePartner.tagline}</span>
            <h3 className="showcase-partner-name">{activePartner.name}</h3>
          </div>
          <div className="showcase-status-tag">
            <span className="showcase-status-dot" />
            <span>Associated Provider</span>
          </div>
        </div>

        <p className="showcase-partner-desc">{activePartner.desc}</p>

        <div className="showcase-highlights-grid">
          <div className="showcase-features-col">
            <h4 className="showcase-features-title">Available Policy Highlights</h4>
            <ul className="showcase-features-list">
              {activePartner.highlights.map((item, idx) => (
                <li key={idx}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="showcase-meta-col">
            <div className="showcase-meta-card">
              <span className="meta-card-label">SUITED FOR</span>
              <p className="meta-card-value">{activePartner.suitedFor}</p>
            </div>

            <div className="showcase-meta-card highlight">
              <span className="meta-card-label">VISION VISA GUIDANCE</span>
              <p className="meta-card-value">We review your trip itinerary, destination embassy criteria, and age group to help you select a suitable plan.</p>
            </div>

            <div className="showcase-actions">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Enquire for {activePartner.name}
              </Link>
            </div>
          </div>
        </div>

        <div className="showcase-footnote">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            *Plan availability, benefits, limits, deductibles, and eligibility depend on the specific policy selected and are subject to underwriting guidelines and terms of the insurer.
          </span>
        </div>
      </div>
    </div>
  );
}
