import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Vision Visa',
  description: 'Learn how Vision Visa collects, uses, and protects your personal data during visa inquiries and travel consultation services.',
  alternates: {
    canonical: 'https://www.visionvisa.in/privacy-policy'
  },
  openGraph: {
    title: 'Privacy Policy | Vision Visa',
    description: 'Learn how Vision Visa collects, uses, and protects your personal data during visa inquiries and travel consultation services.',
    type: 'website',
    url: 'https://www.visionvisa.in/privacy-policy',
    siteName: 'Vision Visa',
    locale: 'en_IN'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="about-hero-clean" style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '16px' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </div>
          <h1 className="display-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p className="lead-text" style={{ color: 'var(--slate-600)', maxWidth: '720px' }}>
            Last updated: January 2026. Your privacy and personal data protection are fundamental to how Vision Visa operates.
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
            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>1. Overview</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Vision Visa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as an independent visa guidance and pre-departure travel consultancy based in Wakad, Pune, Maharashtra. This Privacy Policy details how we handle, protect, and process personal information collected when you use our website, submit inquiries, or consult with our team.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>2. Information We Collect</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '12px' }}>
              We collect information provided directly by you when filling out contact forms, requesting visa consultations, or communicating with us via phone, email, or WhatsApp. This information includes:
            </p>
            <ul style={{ color: 'var(--slate-600)', lineHeight: '1.7', paddingLeft: '20px', marginBottom: '24px' }}>
              <li>Full Name and contact details (email address, phone number)</li>
              <li>Travel details (target destination country, visa category, proposed travel dates)</li>
              <li>Passport or eligibility details shared during consultation for document verification</li>
              <li>Any additional message content or uploaded documents provided voluntarily for visa review</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>3. How We Use Your Information</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '12px' }}>
              Your personal information is used exclusively for the following purposes:
            </p>
            <ul style={{ color: 'var(--slate-600)', lineHeight: '1.7', paddingLeft: '20px', marginBottom: '24px' }}>
              <li>To evaluate your visa eligibility and assist with document checklist preparation</li>
              <li>To communicate updates regarding your visa inquiry, travel insurance, forex, or air tickets</li>
              <li>To answer your specific questions and provide personalized consultation</li>
              <li>To improve our website user experience and internal operations</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>4. Data Protection & Confidentiality</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              We strictly uphold confidentiality. Vision Visa does <strong>NOT</strong> sell, trade, rent, or commercialize your personal information to third parties or marketing agencies. All applicant information is retained securely and accessed only by authorized consultation personnel.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>5. Third-Party Services & Government Submissions</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              When you instruct us to assist with visa application preparation, travel insurance, or flight bookings, relevant details are processed solely with official embassy/consulate portals, authorized visa application centers (e.g., VFS Global, TLScontact, BLS International), or licensed insurance and airline providers necessary to fulfill your request.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>6. Cookies & Website Analytics</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              Our website uses privacy-friendly cookies and aggregate analytics tools to monitor website performance and usage patterns. These metrics contain no directly identifiable personal data and help us optimize page load speeds and navigation layout.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>7. Your Privacy Rights</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '24px' }}>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your inquiry records after your consultation is complete.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)', marginBottom: '12px' }}>8. Contact Information</h2>
            <p style={{ color: 'var(--slate-600)', lineHeight: '1.7', marginBottom: '8px' }}>
              For any privacy inquiries, data removal requests, or questions regarding this policy, please contact:
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
