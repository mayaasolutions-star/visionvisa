'use client';

import React from 'react';

/**
 * Vision Visa - Art-Directed Hero Decorative System
 *
 * Designed as a unified, coherent travel composition for each non-image hero:
 * - variant="insurance": Protective journey arcs, escort airplane, safety shield, navigation rose.
 * - variant="flights": Connected transcontinental flight corridor, gliding jetliner, radar beacon, boarding route.
 * - variant="about": Global meridian sphere, trans-meridian route, milestone waypoints, heritage compass.
 *
 * Strict Safe-Zone Architecture:
 * - Contained 100% inside the hero canvas (0 0 1440 500).
 * - Zero overlap with eyebrow, headings, paragraphs, buttons, or statistic cards.
 * - Zero leakage into navbar or next section.
 */
export default function TravelHeroDecor({ variant = 'insurance' }) {
  return (
    <div className={`hero-journey-layer hero-journey--${variant}`} aria-hidden="true">
      
      {/* =========================================================================
         1. TRAVEL INSURANCE: Complete Protective Transit Composition
         ========================================================================= */}
      {variant === 'insurance' && (
        <svg
          className="hero-journey-canvas"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Atmospheric Grid Lines */}
          <line x1="60" y1="55" x2="1380" y2="55" stroke="rgba(30, 115, 220, 0.08)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="60" y1="445" x2="1380" y2="445" stroke="rgba(30, 115, 220, 0.08)" strokeWidth="1" strokeDasharray="6 8" />

          {/* Upper Protective Umbrella Flight Route (Passing strictly ABOVE central content) */}
          <path
            d="M 120,240 C 180,80 480,42 720,42 C 960,42 1220,70 1320,160"
            stroke="rgba(30, 115, 220, 0.26)"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="vvd-anim-route"
          />

          {/* Lower Ground Assistance Transit Route (Passing strictly BELOW central content) */}
          <path
            d="M 140,430 C 440,455 1000,455 1300,410"
            stroke="rgba(30, 115, 220, 0.22)"
            strokeWidth="1.8"
            strokeDasharray="5 7"
            className="vvd-anim-route-reverse"
          />

          {/* Left Flank Protective Orbit Arc */}
          <path
            d="M 120,240 C 90,300 100,370 140,430"
            stroke="rgba(30, 115, 220, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Right Flank Shield Connection Arc */}
          <path
            d="M 1320,160 C 1350,240 1340,340 1300,410"
            stroke="rgba(30, 115, 220, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Waypoint Milestone Pins along the journey */}
          <g transform="translate(720, 42)">
            <circle cx="0" cy="0" r="10" stroke="#F47B20" strokeWidth="1.2" strokeOpacity="0.35" className="vvd-pulse-ring" />
            <circle cx="0" cy="0" r="4" fill="#F47B20" />
          </g>

          <g transform="translate(1320, 160)">
            <circle cx="0" cy="0" r="9" stroke="#1E73DC" strokeWidth="1.2" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="3.5" fill="#1E73DC" />
          </g>

          {/* PRIMARY ANCHOR 1: Safety Shield Crest (Upper Right Flank: x:1180, y:45) */}
          <g transform="translate(1180, 45)" className="vvd-float-gentle">
            <path
              d="M 45 8 L 84 23 C 84 62 66 94 45 104 C 24 94 6 62 6 23 Z"
              stroke="#1E73DC"
              strokeWidth="2.2"
              strokeOpacity="0.5"
              fill="rgba(255, 255, 255, 0.85)"
            />
            <path
              d="M 45 18 L 75 30 C 75 58 61 82 45 90 C 29 82 15 58 15 30 Z"
              stroke="rgba(30, 115, 220, 0.25)"
              strokeWidth="1.4"
              strokeDasharray="3 3"
            />
            <path
              d="M 33 54 L 42 63 L 61 42"
              stroke="#1E73DC"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.9"
            />
            <circle cx="45" cy="78" r="3" fill="#F47B20" />
          </g>

          {/* PRIMARY ANCHOR 2: Escorted Aircraft (Upper Left Flank: x:180, y:55) */}
          <g transform="translate(180, 55)" className="vvd-plane-glide-insurance">
            <g transform="rotate(18 20 20)">
              <path
                d="M20 3 L23 13 L36 17 L23 20 L21 31 L18 31 L19 21 L8 22 L6 27 L3 27 L5 19 L3 10 L6 10 L8 15 L19 16 L18 4 Z"
                fill="rgba(30, 115, 220, 0.25)"
                stroke="#1E73DC"
                strokeWidth="1.8"
                strokeOpacity="0.85"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* TERTIARY ANCHOR 1: Navigational Coordinate Rose (Lower Left: x:110, y:390) */}
          <g transform="translate(110, 390)">
            <circle cx="35" cy="35" r="32" stroke="rgba(30, 115, 220, 0.2)" strokeWidth="1.4" strokeDasharray="4 4" />
            <circle cx="35" cy="35" r="20" stroke="rgba(30, 115, 220, 0.28)" strokeWidth="1.4" />
            <line x1="35" y1="5" x2="35" y2="15" stroke="#1E73DC" strokeWidth="1.6" strokeOpacity="0.5" />
            <line x1="35" y1="55" x2="35" y2="65" stroke="#1E73DC" strokeWidth="1.6" strokeOpacity="0.5" />
            <line x1="5" y1="35" x2="15" y2="35" stroke="#1E73DC" strokeWidth="1.6" strokeOpacity="0.5" />
            <line x1="55" y1="35" x2="65" y2="35" stroke="#1E73DC" strokeWidth="1.6" strokeOpacity="0.5" />
            <circle cx="35" cy="35" r="4" fill="#F47B20" />
          </g>

          {/* TERTIARY ANCHOR 2: Care Assistance Node (Lower Right: x:1260, y:380) */}
          <g transform="translate(1260, 380)">
            <circle cx="35" cy="35" r="28" stroke="rgba(30, 115, 220, 0.18)" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="35" cy="35" r="16" stroke="rgba(30, 115, 220, 0.28)" strokeWidth="1.4" />
            <path d="M35 24 V46 M24 35 H46" stroke="#1E73DC" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.75" />
            <circle cx="35" cy="35" r="3" fill="#F47B20" />
          </g>
        </svg>
      )}

      {/* =========================================================================
         2. AIR TICKETS: Transcontinental Flight Corridor Composition
         ========================================================================= */}
      {variant === 'flights' && (
        <svg
          className="hero-journey-canvas"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid & Sky Corridors */}
          <line x1="60" y1="55" x2="1380" y2="55" stroke="rgba(30, 115, 220, 0.08)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="60" y1="445" x2="1380" y2="445" stroke="rgba(30, 115, 220, 0.08)" strokeWidth="1" strokeDasharray="6 8" />

          {/* Primary Outbound Flight Corridor (Arching gracefully above central text) */}
          <path
            d="M 100,260 C 180,75 460,40 720,40 C 980,40 1200,68 1320,150"
            stroke="rgba(30, 115, 220, 0.3)"
            strokeWidth="2.2"
            strokeDasharray="6 8"
            className="vvd-anim-route"
          />

          {/* Secondary Inbound Flight Route (Crossing across lower negative space) */}
          <path
            d="M 120,425 C 420,458 1020,458 1340,410"
            stroke="rgba(30, 115, 220, 0.24)"
            strokeWidth="1.8"
            strokeDasharray="5 7"
            className="vvd-anim-route-reverse"
          />

          {/* Peripheral Lateral Connection Arcs */}
          <path
            d="M 100,260 C 70,320 80,380 120,425"
            stroke="rgba(30, 115, 220, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          <path
            d="M 1320,150 C 1360,230 1350,330 1340,410"
            stroke="rgba(30, 115, 220, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Mid-Journey Navigational Waypoint Pin */}
          <g transform="translate(720, 40)">
            <circle cx="0" cy="0" r="11" stroke="#F47B20" strokeWidth="1.2" strokeOpacity="0.4" className="vvd-pulse-ring" />
            <circle cx="0" cy="0" r="4.5" fill="#F47B20" />
          </g>

          {/* PRIMARY ANCHOR 1: High-Altitude Airliner along the Flight Corridor */}
          <g className="vvd-flight-corridor-plane">
            <g transform="rotate(-10 24 24)">
              <path
                d="M24 4 L28 16 L44 20 L28 24 L25 38 L21 38 L23 25 L10 26 L7 32 L3 32 L5 22 L3 12 L7 12 L10 18 L23 19 L21 6 Z"
                fill="#1E73DC"
                fillOpacity="0.3"
                stroke="#1E73DC"
                strokeWidth="2"
                strokeOpacity="0.9"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* PRIMARY ANCHOR 2: Boarding Pass Route Marker (Upper Right: x:1170, y:45) */}
          <g transform="translate(1170, 45)" className="vvd-float-gentle">
            <rect x="0" y="0" width="124" height="62" rx="9" stroke="#1E73DC" strokeWidth="1.6" strokeOpacity="0.38" fill="rgba(255, 255, 255, 0.92)" />
            <line x1="0" y1="31" x2="124" y2="31" stroke="rgba(30, 115, 220, 0.2)" strokeDasharray="4 4" />
            <circle cx="0" cy="31" r="5" fill="#F4F8FE" stroke="#1E73DC" strokeWidth="1.4" strokeOpacity="0.4" />
            <circle cx="124" cy="31" r="5" fill="#F4F8FE" stroke="#1E73DC" strokeWidth="1.4" strokeOpacity="0.4" />
            <text x="24" y="21" fill="#071A3D" fillOpacity="0.8" fontSize="12" fontWeight="800">DEL</text>
            <text x="62" y="21" textAnchor="middle" fill="#1E73DC" fontSize="11">✈</text>
            <text x="100" y="21" textAnchor="end" fill="#071A3D" fillOpacity="0.8" fontSize="12" fontWeight="800">LHR</text>
            <text x="62" y="49" textAnchor="middle" fill="#1E73DC" fillOpacity="0.9" fontSize="8.5" fontWeight="700" letterSpacing="1.2">DIRECT FLIGHTS</text>
          </g>

          {/* TERTIARY ANCHOR 1: Airport Radar Waves Beacon (Lower Left: x:100, y:390) */}
          <g transform="translate(100, 390)">
            <circle cx="35" cy="35" r="34" stroke="rgba(30, 115, 220, 0.14)" strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="35" cy="35" r="22" stroke="rgba(30, 115, 220, 0.28)" strokeWidth="1.4" />
            <circle cx="35" cy="35" r="4.5" fill="#F47B20" />
          </g>

          {/* TERTIARY ANCHOR 2: Runway Destination Node (Lower Right: x:1270, y:380) */}
          <g transform="translate(1270, 380)">
            <circle cx="35" cy="35" r="28" stroke="rgba(30, 115, 220, 0.18)" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="35" cy="35" r="16" stroke="rgba(30, 115, 220, 0.3)" strokeWidth="1.4" />
            <circle cx="35" cy="35" r="4.5" fill="#F47B20" />
          </g>
        </svg>
      )}

      {/* =========================================================================
         3. ABOUT US: Global Experience & Meridian Journey Composition
         ========================================================================= */}
      {variant === 'about' && (
        <svg
          className="hero-journey-canvas"
          viewBox="0 0 1440 540"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Top & Bottom Meridian Grid Corridors */}
          <line x1="60" y1="48" x2="1380" y2="48" stroke="rgba(30, 115, 220, 0.08)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="60" y1="490" x2="1380" y2="490" stroke="rgba(30, 115, 220, 0.08)" strokeWidth="1" strokeDasharray="6 8" />

          {/* Trans-Continental Journey Route (Sweeping across the clear top margin) */}
          <path
            d="M 80,48 C 380,32 720,52 1080,35 C 1220,28 1320,50 1380,90"
            stroke="rgba(30, 115, 220, 0.28)"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="vvd-anim-route"
          />

          {/* Lower Heritage Transit Line (Passing strictly below all text & cards) */}
          <path
            d="M 80,490 C 440,510 980,510 1380,480"
            stroke="rgba(30, 115, 220, 0.2)"
            strokeWidth="1.6"
            strokeDasharray="5 7"
            className="vvd-anim-route-reverse"
          />

          {/* Central Channel Meridian Arc (Passing vertically between left text & right cards) */}
          <path
            d="M 700,48 C 725,180 725,360 700,490"
            stroke="rgba(30, 115, 220, 0.14)"
            strokeWidth="1.4"
            strokeDasharray="4 6"
          />

          {/* Navigational Milestone Waypoints */}
          <g transform="translate(420, 40)">
            <circle cx="0" cy="0" r="9" stroke="#F47B20" strokeWidth="1.2" strokeOpacity="0.4" className="vvd-pulse-ring" />
            <circle cx="0" cy="0" r="3.5" fill="#F47B20" />
          </g>

          <g transform="translate(1080, 35)">
            <circle cx="0" cy="0" r="9" stroke="#1E73DC" strokeWidth="1.2" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="3.5" fill="#1E73DC" />
          </g>

          {/* PRIMARY ANCHOR 1: Global Meridian Sphere (Upper Right Margin: x:1260, y:25) */}
          <g transform="translate(1260, 25)" className="vvd-float-gentle">
            <circle cx="48" cy="48" r="42" stroke="#1E73DC" strokeWidth="1.8" strokeOpacity="0.4" fill="rgba(255, 255, 255, 0.7)" />
            <ellipse cx="48" cy="48" rx="42" ry="16" stroke="rgba(30, 115, 220, 0.28)" strokeWidth="1.2" />
            <ellipse cx="48" cy="48" rx="18" ry="42" stroke="rgba(30, 115, 220, 0.28)" strokeWidth="1.2" />
            <line x1="6" y1="48" x2="90" y2="48" stroke="rgba(30, 115, 220, 0.22)" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="48" cy="48" r="3.5" fill="#F47B20" />
          </g>

          {/* PRIMARY ANCHOR 2: Heritage Travel Compass (Lower Center Margin: x:665, y:455) */}
          <g transform="translate(665, 455)" className="vvd-compass-sway">
            <circle cx="35" cy="35" r="30" stroke="rgba(30, 115, 220, 0.25)" strokeWidth="1.4" strokeDasharray="4 4" />
            <polygon
              points="35,10 39,31 60,35 39,39 35,60 31,39 10,35 31,31"
              fill="rgba(30, 115, 220, 0.2)"
              stroke="#1E73DC"
              strokeWidth="1.6"
              strokeOpacity="0.75"
            />
            <circle cx="35" cy="35" r="3.5" fill="#F47B20" />
          </g>

          {/* Small Departure Pin (Upper Left: x:80, y:48) */}
          <g transform="translate(80, 48)">
            <circle cx="0" cy="0" r="7" stroke="#1E73DC" strokeWidth="1.2" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="3" fill="#1E73DC" />
          </g>
        </svg>
      )}

    </div>
  );
}
