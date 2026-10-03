import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Vision Visa',
  description: 'Review the Terms & Conditions and Visa Service Disclaimer governing Vision Visa consultancy services, document guidance, and travel support.',
  alternates: {
    canonical: 'https://www.visionvisa.in/terms'
  },
  openGraph: {
    title: 'Terms & Conditions | Vision Visa',
    description: 'Review the Terms & Conditions and Visa Service Disclaimer governing Vision Visa consultancy services, document guidance, and travel support.',
    type: 'website',
    url: 'https://www.visionvisa.in/terms',
    siteName: 'Vision Visa',
    locale: 'en_IN'
  }
};

export default function TermsPage() {
  return (
    <main>
      <section className="about-hero-clean" style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '16px' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Terms &amp; Conditions</span>
          </div>
          <h1 className="display-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '12px' }}>
            Terms &amp; Conditions
          </h1>
          <p className="lead-text" style={{ color: 'var(--slate-600)', maxWidth: '720px' }}>
            Last updated: January 2026. Please read these terms and visa service disclaimers carefully before engaging our travel consultation services.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '0 0 80px' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="legal-content-card" style={{
            background: 'var(--white)',
            border: '1px solid var(--slate-200)',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            {/* Disclaimer Callout Box */}
            <div style={{
              background: '#fffbeb',
              border: '1px solid #fef3c7',
              borderLeft: '4px solid #f59e0b',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '32px'
            }}>
              <h3 style={{ fontSize: '1.05rem', color: '#b45309', marginBottom: '8px', fontWeight: '600' }}>
                Important Visa Service Disclaimer
              </h3>
              <p style={{ color: '#92400e', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Vision Visa is a private travel consultancy and documentation support firm. We are not an official government agency, embassy, or consulate. Visa approval, processing timeframes, fees, and eligibility criteria are determined solely by the issuing government authority. Submission of an application through Vision Visa does not guarantee visa issuance.
              </p>
            </div>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>1. Scope of Services</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Vision Visa provides document checking, application form filling guidance, appointment scheduling assistance, travel insurance setup, foreign exchange (forex) guidance, and air ticket reservation assistance. Our role is advisory and administrative to help ensure applications are complete and accurately submitted according to official guidelines.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>2. Independent Entity Representation</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Vision Visa operates as an independent consultancy. We do not issue visas, represent diplomatic missions, or have influence over consular decisions. Any representation of official authority by third parties using our name is strictly unauthorized.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>3. Client Obligations & Document Authenticity</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '12px' }}>
              As an applicant, you agree to:
            </p>
            <ul style={{ color: 'var(--slate-600)', lineHeight: '1.7', paddingLeft: '20px', marginBottom: '24px' }}>
              <li>Provide true, accurate, valid, and authentic information and documentation.</li>
              <li>Verify that all passport details, financial statements, and supporting certificates are genuine.</li>
              <li>Disclose prior visa refusals, travel history, or immigration compliance records when requested during checklist preparation.</li>
              <li>Pay official consular fees and center service charges as required by destination embassies.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>4. Decision Authority & Processing Times</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Processing timelines published on our website or communicated verbally are based on average historical figures provided by immigration authorities and are subject to change without notice. Vision Visa is not liable for delay, refusal, or administrative processing security holds initiated by foreign embassies or border control authorities.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>5. Service Fees & Payment Terms</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Vision Visa consultation and processing fees cover our professional time, document audit, and administrative guidance. Government consular fees, biometrics charges, and VFS/appointment service fees are collected on behalf of the respective authorities or paid directly by the client. Service fees paid to Vision Visa cover completed review work and are non-refundable once documentation preparation has commenced.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>6. Limitation of Liability</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Vision Visa shall not be held liable for losses resulting from visa delays, flight re-bookings, hotel cancellations, or embassy decision outcomes. Clients are advised to arrange refundable travel bookings or wait until visa approval before purchasing non-refundable tickets.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>7. Governing Law</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              These Terms &amp; Conditions are governed by the laws of India. Any legal proceedings or disputes arising from our services shall fall under the jurisdiction of the courts in Pune, Maharashtra.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>8. Contact Us</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '8px' }}>
              If you have any questions regarding these terms or visa service disclaimers:
            </p>
            <div style={{ background: 'var(--slate-50)', padding: '16px 20px', borderRadius: '8px', color: 'var(--slate-700)', fontSize: '0.95rem' }}>
              <strong>Vision Visa</strong><br />
              Shop No. 12, Sanskriti Arcade, Kaspate Wasti, Wakad, Pimpri-Chinchwad, Maharashtra 411057<br />
              Email: <a href="mailto:info@visionvisa.in" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>info@visionvisa.in</a><br />
              Phone: +91 80101 52621
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
