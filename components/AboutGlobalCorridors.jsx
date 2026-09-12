'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const CORRIDORS = [
  {
    id: 'uk-ireland',
    name: 'UK & Ireland',
    tag: 'WESTERN EUROPE',
    countries: ['United Kingdom', 'Ireland'],
    keyTypes: ['Standard Visitor Visa', 'Short-Term Study', 'Business Visit'],
    destinations: ['London', 'Edinburgh', 'Manchester', 'Dublin'],
    summary:
      'Guiding Indian passport holders through UK Standard Visitor and Irish tourist/business visa requirements, financial scrutiny, and appointment logistics.'
  },
  {
    id: 'schengen',
    name: 'Europe & Schengen Area',
    tag: '29 COUNTRIES',
    countries: ['France', 'Switzerland', 'Germany', 'Italy', 'Spain', 'Netherlands', 'Austria'],
    keyTypes: ['Schengen Tourist (Type C)', 'Business & Conference', 'Family Visit'],
    destinations: ['Paris', 'Zurich', 'Rome', 'Amsterdam', 'Berlin', 'Barcelona'],
    summary:
      'Seamless multi-country European itineraries. Guidance on primary destination consulate jurisdiction, Schengen travel insurance, and biometric appointments.'
  },
  {
    id: 'north-america',
    name: 'North America',
    tag: 'USA & CANADA',
    countries: ['United States', 'Canada'],
    keyTypes: ['USA B1/B2 Visitor', 'Canada Visitor Visa', 'Super Visa for Parents'],
    destinations: ['New York', 'San Francisco', 'Toronto', 'Vancouver', 'Chicago'],
    summary:
      'Comprehensive DS-160 application support, appointment slot guidance, document structuring, and Canadian portal visa preparation.'
  },
  {
    id: 'asia-pacific',
    name: 'Asia-Pacific',
    tag: 'EAST & SE ASIA',
    countries: ['Japan', 'Singapore', 'Thailand', 'Malaysia', 'Vietnam', 'Indonesia'],
    keyTypes: ['Tourist eVisas', 'Consular Tourist Visas', 'Business Visitors'],
    destinations: ['Tokyo', 'Singapore', 'Bangkok', 'Kuala Lumpur', 'Hanoi', 'Bali'],
    summary:
      'Fast-track electronic visas, consular applications, transit coordination, and entry document checklists for popular Asian travel hubs.'
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    tag: 'GULF REGION',
    countries: ['UAE (Dubai / Abu Dhabi)', 'Saudi Arabia', 'Oman', 'Qatar'],
    keyTypes: ['30 & 60 Days Dubai eVisas', 'Saudi Tourist / Umrah', 'Oman eVisa'],
    destinations: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Jeddah', 'Muscat', 'Doha'],
    summary:
      'Rapid electronic visa processing for leisure holidays, short stopovers, business meetings, and religious travel across the GCC.'
  }
];

export default function AboutGlobalCorridors() {
  const [activeId, setActiveId] = useState('uk-ireland');

  const current = CORRIDORS.find((c) => c.id === activeId) || CORRIDORS[0];

  return (
    <div className="corridors-interactive-widget">
      {/* Top Region Tabs */}
      <div className="corridors-tab-bar" role="tablist" aria-label="International travel corridors">
        {CORRIDORS.map((c) => {
          const isActive = c.id === activeId;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(c.id)}
              className={`corridor-tab-item ${isActive ? 'active' : ''}`}
            >
              <span className="corridor-tab-name">{c.name}</span>
              <span className="corridor-tab-tag">{c.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Active Corridor Display Card (Light & Crisp) */}
      <div className="corridor-showcase-card">
        <div className="corridor-showcase-header">
          <div>
            <span className="corridor-active-eyebrow">GLOBAL CORRIDOR PROFILE</span>
            <h3 className="corridor-active-title">{current.name}</h3>
          </div>

          <div className="corridor-route-badge">
            <span className="corridor-route-dot"></span>
            <span>INDIA &rarr; {current.name.toUpperCase()}</span>
          </div>
        </div>

        <p className="corridor-active-desc">{current.summary}</p>

        <div className="corridor-details-row">
          {/* Countries Served */}
          <div className="corridor-detail-col">
            <h4 className="corridor-col-heading">Key Countries</h4>
            <div className="corridor-tag-cloud">
              {current.countries.map((country) => (
                <span key={country} className="corridor-pill country">
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Key Visa Categories */}
          <div className="corridor-detail-col">
            <h4 className="corridor-col-heading">Common Visa Categories</h4>
            <div className="corridor-tag-cloud">
              {current.keyTypes.map((type) => (
                <span key={type} className="corridor-pill visa">
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Popular Hubs */}
          <div className="corridor-detail-col">
            <h4 className="corridor-col-heading">Popular Hubs</h4>
            <div className="corridor-tag-cloud">
              {current.destinations.map((city) => (
                <span key={city} className="corridor-pill hub">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="corridor-card-footer">
          <span className="corridor-disclaimer">
            Visas &bull; Travel Insurance &bull; Air Tickets &bull; Forex Support
          </span>

          <Link href="/visas" className="corridor-explore-btn">
            <span>Explore {current.name} Visas</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
