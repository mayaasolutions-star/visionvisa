import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Vision Visa',
  description: 'The requested page could not be found on Vision Visa. Navigate back to our visa services or contact our team.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <div style={{
          fontSize: 'clamp(4rem, 8vw, 6rem)',
          fontWeight: 800,
          color: 'var(--brand-primary)',
          lineHeight: 1,
          marginBottom: '16px'
        }}>
          404
        </div>
        <h1 className="display-text" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '12px' }}>
          Page Not Found
        </h1>
        <p className="lead-text" style={{ color: 'var(--slate-600)', marginBottom: '32px' }}>
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link href="/" className="btn btn-primary magnetic">
            Return to Homepage
          </Link>
          <Link href="/visas" className="btn btn-secondary magnetic">
            Explore Visas
          </Link>
          <Link href="/contact" className="btn btn-secondary magnetic">
            Contact Support
          </Link>
        </div>

        <div style={{
          background: 'var(--slate-50)',
          border: '1px solid var(--slate-200)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--slate-700)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            Popular Services
          </h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
            <li><Link href="/tourist-visa" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>→ Tourist Visa</Link></li>
            <li><Link href="/business-visa" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>→ Business Visa</Link></li>
            <li><Link href="/travel-insurance" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>→ Travel Insurance</Link></li>
            <li><Link href="/forex" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>→ Forex Services</Link></li>
            <li><Link href="/air-tickets" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>→ Air Tickets</Link></li>
            <li><Link href="/about" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>→ About Us</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
