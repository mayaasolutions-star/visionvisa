'use client';

import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">

          {/* Col 1: Brand */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-logo-brand mb-16">
              <img
                src={getAssetPath('/images/vision-visa-logo-symbol.webp')}
                alt="Vision Visa Symbol"
                className="logo-symbol"
                loading="lazy"
              />
              <img
                src={getAssetPath('/images/visionvisa-name-dark.webp')}
                alt="Vision Visa"
                className="logo-name"
                loading="lazy"
              />
            </Link>

            <p className="footer-brand-desc">
              Trusted visa assistance, document support, travel insurance,
              forex, and air tickets under one roof.
            </p>

            <p className="footer-trust-line">
              Trusted Services · 10,000+ Clients · 50+ Countries
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/visionvisa.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link href="/visas" className="footer-link">Visas</Link>
              <Link href="/travel-insurance" className="footer-link">Travel Insurance</Link>
              <Link href="/forex" className="footer-link">Forex</Link>
              <Link href="/air-tickets" className="footer-link">Air Tickets</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Col 3: Popular Visas */}
          <div className="footer-col">
            <h4 className="footer-heading">Popular Visas</h4>
            <div className="footer-links">
              <Link href="/country/canada" className="footer-link">Canada Visa</Link>
              <Link href="/country/united-kingdom" className="footer-link">UK Visa</Link>
              <Link href="/country/united-states" className="footer-link">USA Visa</Link>
              <Link href="/country/australia" className="footer-link">Australia Visa</Link>
              <Link href="/country/france" className="footer-link">Schengen Visa</Link>
              <Link href="/country/japan" className="footer-link">Japan Visa</Link>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <i data-lucide="map-pin" className="contact-icon"></i>
                <span>
                  Shop No. 12, Sanskriti Arcade, Kaspate Wasti,
                  Wakad, Pimpri-Chinchwad, Maharashtra 411057
                </span>
              </div>

              <a href="tel:08010152621" className="footer-contact-item contact-link">
                <i data-lucide="phone" className="contact-icon"></i>
                <span>+91 80101 52621</span>
              </a>

              <a href="mailto:info@visionvisa.in" className="footer-contact-item contact-link">
                <i data-lucide="mail" className="contact-icon"></i>
                <span>info@visionvisa.in</span>
              </a>

              <div className="footer-contact-item">
                <i data-lucide="clock" className="contact-icon"></i>
                <span>Mon to Sat: 10:00 AM to 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Vision Visa. All Rights Reserved.</p>
          <span className="designer-tag">
            Website designed by Mayaa Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}