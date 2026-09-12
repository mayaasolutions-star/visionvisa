'use client';

import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Is travel insurance required for a visa?',
    a: 'Certain countries and visa categories require mandatory travel insurance before issuing a visa. For instance, Schengen visa applications require an insurance policy covering at least €30,000 in emergency medical and repatriation expenses. For other destinations, while not legally mandated for entry, insurance is strongly recommended to protect against unpredictable medical costs and travel disruptions.'
  },
  {
    q: 'What does travel insurance usually cover?',
    a: 'Standard international travel insurance policies typically provide coverage for eligible emergency medical treatment, hospitalisation, trip cancellation or interruption, baggage loss or delay, passport loss assistance, and emergency medical evacuation. Actual coverage varies by provider and plan, and is subject to specific policy terms, limits, and exclusions.'
  },
  {
    q: 'Which travel insurance is suitable for international travel?',
    a: 'The right policy depends on your destination country, trip duration, traveller age, and planned activities. For example, high healthcare-cost destinations such as the US or Canada require higher medical cover limits, whereas European journeys require Schengen-compliant terms. Our team helps you review suitable options from our associated insurance partners.'
  },
  {
    q: 'Can students get travel insurance?',
    a: 'Yes. Dedicated student travel insurance plans are tailored specifically for students travelling abroad for higher education. These policies frequently feature extended durations (up to a full academic year or multi-year terms) and may include benefits such as study interruption cover, sponsor protection, and medical limits aligned with university guidelines.'
  },
  {
    q: 'Can families travelling together get insurance?',
    a: 'Yes. Family travel insurance plans allow parents and dependent children travelling together on the same itinerary to be protected under a single policy. This simplifies administration and provides coordinated emergency support for the entire group.'
  },
  {
    q: 'When should I buy travel insurance?',
    a: 'It is best to secure your travel insurance policy as soon as your travel dates and flights are confirmed, or when compiling your visa application documents if proof of insurance is mandatory for submission. Booking early ensures you have protection against unexpected pre-departure cancellations if eligible under your policy.'
  },
  {
    q: 'Does travel insurance cover everything?',
    a: 'No. Travel insurance policies contain clear exclusions, deductibles, sub-limits, and defined terms. Common exclusions include pre-existing medical conditions (unless explicitly declared and accepted), undeclared adventure activities, travel against official advisory warnings, or losses resulting from unattended personal effects. We advise reviewing all exclusions carefully before purchase.'
  }
];

export default function InsuranceFaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className="insurance-faq-accordion">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`insurance-faq-item ${isOpen ? 'active' : ''}`}
          >
            <button
              type="button"
              className="insurance-faq-question"
              aria-expanded={isOpen}
              onClick={() => toggleItem(idx)}
            >
              <span className="faq-q-text">{item.q}</span>
              <span className="faq-icon-wrap" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="insurance-faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
