import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';

export const metadata = {
    title: "Contact Vision Visa | Visa, Forex, Insurance & Air Tickets",

    description:
        "Contact Vision Visa for visa assistance, travel insurance, forex services and domestic and international air ticket booking. Talk to our team about your travel plans.",

    keywords: [
        "Vision Visa contact",
        "contact Vision Visa",
        "visa assistance",
        "visa consultant",
        "visa services",
        "travel insurance",
        "forex services",
        "forex card",
        "foreign currency",
        "international money transfer",
        "air ticket booking",
        "domestic flight booking",
        "international flight booking",
        "travel services"
    ],

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
        }
    },

    alternates: {
        canonical: "https://www.visionvisa.in/contact"
    },

    openGraph: {
        title: "Contact Vision Visa | Visa & Travel Services",

        description:
            "Get in touch with Vision Visa for visa assistance, travel insurance, forex, and air ticket services.",

        type: "website",

        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/contact",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/businessvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Contact Vision Visa Travel Desk"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Contact Vision Visa | Visa & Travel Services",

        description:
            "Contact Vision Visa for visa, travel insurance, forex, and air ticket assistance.",

        images: [
            "https://www.visionvisa.in/images/businessvisa-hero.webp"
        ]
    }
};

export default function CONTACT_Page() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visionvisa.in" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.visionvisa.in/contact" }
        ]
    };

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Vision Visa",
        "url": "https://www.visionvisa.in/contact",
        "description": "Contact Vision Visa for visa assistance, travel insurance, forex, and air ticket inquiries."
    };

    return (
    <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    <section className="inner-hero inner-hero-soft">
        <div className="hero-pattern-dots"></div>
        <div className="container">
            <div className="contact-hero-grid">
                <div className="reveal">
                    <span className="editorial-tag">
                        DIRECT CONSULTATION & ASSISTANCE
                    </span>

                    <h1 className="editorial-title">
                        Let's plan your <br />
                        <span className="accent">next step together.</span>
                    </h1>

                    <p className="editorial-subtitle">
                        Have questions about visa documents, eligibility, insurance policies, or flight options? Reach out to our specialist team directly.
                    </p>

                    <div className="contact-quick-pills mb-24">
                        <a href="tel:+918010152621" className="contact-pill-item">
                            <div className="contact-pill-icon"><i data-lucide="phone"></i></div>
                            <div>
                                <span style={{ fontSize: "0.75rem", color: "var(--slate-600)", display: "block" }}>Call Us Directly</span>
                                <strong>+91 80101 52621</strong>
                            </div>
                        </a>
                        <a href="mailto:info@visionvisa.in" className="contact-pill-item">
                            <div className="contact-pill-icon"><i data-lucide="mail"></i></div>
                            <div>
                                <span style={{ fontSize: "0.75rem", color: "var(--slate-600)", display: "block" }}>Email Inquiries</span>
                                <strong>info@visionvisa.in</strong>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="hero-frame-container reveal reveal-delay-1">
                    <img src={getAssetPath("/images/businessvisa-hero.webp")} alt="Contact Vision Visa Travel Desk" className="hero-frame-img" />
                    
                    <div className="floating-hero-badge badge-pos-top-right">
                        <div className="editorial-badge-icon">
                            <i data-lucide="clock"></i>
                        </div>
                        <div className="editorial-badge-text">
                            <span className="editorial-badge-val">Mon - Sat: 10AM - 7PM</span>
                        </div>
                    </div>

                    <div className="floating-hero-badge badge-pos-bottom-left">
                        <div className="editorial-badge-icon editorial-badge-icon-green">
                            <i data-lucide="map-pin"></i>
                        </div>
                        <div className="editorial-badge-text">
                            <span className="editorial-badge-val">Wakad, Pune, MH</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        {/* =========================================================
            OUR BRANCHES SECTION (PUNE & PCMC LOCATIONS)
            ========================================================= */}
        <section className="contact-branches-section" aria-labelledby="branches-heading">
            <div className="container">
                <div className="branches-header reveal">
                    <span className="section-label">OUR BRANCHES</span>
                    <h2 id="branches-heading" className="display-text branches-title">
                        Visit Us at a Branch Near You
                    </h2>
                    <p className="body-large branches-subtitle">
                        Connect with our team at any of our Pune and Pimpri-Chinchwad branches.
                    </p>
                </div>

                <div className="branches-grid">
                    {/* BRANCH 01 - WAKAD */}
                    <article className="branch-card reveal">
                        <div className="branch-card-header">
                            <span className="branch-card-num">01</span>
                            <h3 className="branch-card-title">WAKAD</h3>
                        </div>

                        <div className="branch-card-body">
                            <div className="branch-info-row branch-info-address">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="map-pin"></i>
                                </span>
                                <address className="branch-address-text">
                                    SHOP NO 12 GROUND FLOOR, Sanskriti Arcade, Kaspate Wasti, Wakad, Pimpri-Chinchwad, Maharashtra 411057
                                </address>
                            </div>

                            <div className="branch-info-row branch-info-phone">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="phone"></i>
                                </span>
                                <div className="branch-phone-content">
                                    <span className="branch-phone-label">Direct Contact</span>
                                    <a href="tel:7500690019" className="branch-phone-link">
                                        7500690019
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="branch-card-footer">
                            <a
                                href="https://share.google/XUDKxSnCjG1uxg3gJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary branch-map-btn"
                            >
                                <i data-lucide="external-link" aria-hidden="true"></i>
                                <span>View on Map</span>
                            </a>
                        </div>
                    </article>

                    {/* BRANCH 02 - NIGDI */}
                    <article className="branch-card reveal reveal-delay-1">
                        <div className="branch-card-header">
                            <span className="branch-card-num">02</span>
                            <h3 className="branch-card-title">NIGDI</h3>
                        </div>

                        <div className="branch-card-body">
                            <div className="branch-info-row branch-info-address">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="map-pin"></i>
                                </span>
                                <address className="branch-address-text">
                                    Office No 107, Ashish Plaza, Sector 27A, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044
                                </address>
                            </div>

                            <div className="branch-info-row branch-info-phone">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="phone"></i>
                                </span>
                                <div className="branch-phone-content">
                                    <span className="branch-phone-label">Direct Contact</span>
                                    <a href="tel:8805504110" className="branch-phone-link">
                                        8805504110
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="branch-card-footer">
                            <a
                                href="https://share.google/MrcfAnwmai1pAHCf0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary branch-map-btn"
                            >
                                <i data-lucide="external-link" aria-hidden="true"></i>
                                <span>View on Map</span>
                            </a>
                        </div>
                    </article>

                    {/* BRANCH 03 - FC ROAD */}
                    <article className="branch-card reveal reveal-delay-2">
                        <div className="branch-card-header">
                            <span className="branch-card-num">03</span>
                            <h3 className="branch-card-title">FC ROAD</h3>
                        </div>

                        <div className="branch-card-body">
                            <div className="branch-info-row branch-info-address">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="map-pin"></i>
                                </span>
                                <address className="branch-address-text">
                                    Laxmi Niwas, Tukaram Paduka Chowk, 926, Ferguson College Rd, Shivajinagar, Pune, Maharashtra 411004
                                </address>
                            </div>

                            <div className="branch-info-row branch-info-phone">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="phone"></i>
                                </span>
                                <div className="branch-phone-content">
                                    <span className="branch-phone-label">Direct Contact</span>
                                    <a href="tel:+919970101101" className="branch-phone-link">
                                        +91 99701 01101
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="branch-card-footer branch-card-footer-empty"></div>
                    </article>

                    {/* BRANCH 04 - DHANORI */}
                    <article className="branch-card reveal reveal-delay-3">
                        <div className="branch-card-header">
                            <span className="branch-card-num">04</span>
                            <h3 className="branch-card-title">DHANORI</h3>
                        </div>

                        <div className="branch-card-body">
                            <div className="branch-info-row branch-info-address">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="map-pin"></i>
                                </span>
                                <address className="branch-address-text">
                                    Shop - S, Ranpur Darshan, 111/1, Plot 27, Tank Rd, Dhanori, Pune, Maharashtra 411006
                                </address>
                            </div>

                            <div className="branch-info-row branch-info-phone">
                                <span className="branch-info-icon" aria-hidden="true">
                                    <i data-lucide="phone"></i>
                                </span>
                                <div className="branch-phone-content">
                                    <span className="branch-phone-label">Direct Contact</span>
                                    <a href="tel:09370927624" className="branch-phone-link">
                                        093709 27624
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="branch-card-footer branch-card-footer-empty"></div>
                    </article>
                </div>
            </div>
        </section>

        <section className="contact-section" style={{ padding: "80px 0" }}>
            <div className="container">
                <div className="contact-main-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "60px",
                    alignItems: "start"
                }}>
                    {/* Left Column: Contact Info & Support */}
                    <div className="reveal">
                        <span className="eyebrow">REACH US</span>
                        <h2 className="display-text mb-24" style={{ fontSize: "2.25rem" }}>
                            We'd love to hear from you.
                        </h2>
                        <p className="body-large mb-32" style={{ color: "var(--slate-600)" }}>
                            Have questions about visa applications, travel insurance, forex rates, or flight tickets? Fill out the form or reach out to us directly.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
                            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(10, 37, 64, 0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i data-lucide="mail" style={{ color: "var(--navy)", width: "20px", height: "20px" }}></i>
                                </div>
                                <div>
                                    <p className="caption text-muted" style={{ marginBottom: "2px" }}>Email Us</p>
                                    <a href="mailto:info@visionvisa.in" className="body-base fw-bold" style={{ color: "var(--navy)" }}>info@visionvisa.in</a>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(10, 37, 64, 0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i data-lucide="phone" style={{ color: "var(--navy)", width: "20px", height: "20px" }}></i>
                                </div>
                                <div>
                                    <p className="caption text-muted" style={{ marginBottom: "2px" }}>Call Us</p>
                                    <a href="tel:+918010152621" className="body-base fw-bold" style={{ color: "var(--navy)" }}>+91 80101 52621</a>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(10, 37, 64, 0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i data-lucide="map-pin" style={{ color: "var(--navy)", width: "20px", height: "20px" }}></i>
                                </div>
                                <div>
                                    <p className="caption text-muted" style={{ marginBottom: "2px" }}>Office Location</p>
                                    <p className="body-base fw-bold" style={{ color: "var(--navy)", margin: 0 }}>Wakad, Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Minimal & Meaningful Consultation Commitment Block to fill vertical space */}
                        <div style={{
                            background: "var(--off-white)",
                            padding: "28px",
                            borderRadius: "20px",
                            border: "1px solid var(--light-gray)"
                        }}>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px", color: "var(--navy)" }}>
                                What Happens Next?
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                    <span style={{ background: "var(--navy)", color: "#fff", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>1</span>
                                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                                        <strong>Document Evaluation:</strong> We verify your eligibility and consulate requirements.
                                    </p>
                                </div>
                                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                    <span style={{ background: "var(--navy)", color: "#fff", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>2</span>
                                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                                        <strong>Personal Guidance:</strong> Clear instructions on checklists, forms, and submission dates.
                                    </p>
                                </div>
                                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                    <span style={{ background: "var(--navy)", color: "#fff", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>3</span>
                                    <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--slate-700)", lineHeight: 1.5 }}>
                                        <strong>Application Filing:</strong> Careful review and submission for smooth processing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="reveal reveal-delay-1">
                        <div className="contact-form-card" style={{
                            background: "var(--white)",
                            padding: "40px",
                            borderRadius: "24px",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
                            border: "1px solid rgba(0, 0, 0, 0.06)"
                        }}>
                            <h3 className="mb-24" style={{ fontSize: "1.5rem", fontWeight: 700 }}>Send a Message</h3>
                            <form id="contactForm">
                                <div className="form-group" style={{ marginBottom: "20px" }}>
                                    <label htmlFor="name" className="form-label" style={{ display: "block", marginBottom: "8px", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)" }}>Full Name</label>
                                    <input type="text" className="form-input" id="name" placeholder="Enter your full name" required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }} />
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>
                                    <label htmlFor="email" className="form-label" style={{ display: "block", marginBottom: "8px", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)" }}>Email Address</label>
                                    <input type="email" className="form-input" id="email" placeholder="name@example.com" required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }} />
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>
                                    <label htmlFor="phone" className="form-label" style={{ display: "block", marginBottom: "8px", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)" }}>Phone Number</label>
                                    <input type="tel" className="form-input" id="phone" placeholder="+91 98765 43210" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }} />
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>
                                    <label htmlFor="service" className="form-label" style={{ display: "block", marginBottom: "8px", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)" }}>Service Required</label>
                                    <select className="form-input" id="service" required defaultValue="" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }}>
                                        <option value="" disabled>Select Service</option>
                                        <option value="tourist">Tourist Visa</option>
                                        <option value="business">Business Visa</option>
                                        <option value="study">Study Visa</option>
                                        <option value="insurance">Travel Insurance</option>
                                        <option value="forex">Forex Services</option>
                                        <option value="tickets">Air Tickets</option>
                                    </select>
                                </div>

                                <div className="form-group" style={{ marginBottom: "24px" }}>
                                    <label htmlFor="message" className="form-label" style={{ display: "block", marginBottom: "8px", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)" }}>Your Message</label>
                                    <textarea className="form-input" id="message" rows={4} placeholder="How can we help you?" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary magnetic" style={{ width: "100%" }}>Send Message</button>
                                <p style={{ marginTop: '14px', fontSize: '0.75rem', color: '#64748b', textAlign: 'center', lineHeight: '1.4' }}>
                                  By submitting, you agree to our <Link href="/privacy-policy" style={{ color: '#1E73DC', textDecoration: 'underline' }}>Privacy Policy</Link> &amp; <Link href="/terms" style={{ color: '#1E73DC', textDecoration: 'underline' }}>Terms</Link>. Vision Visa is an independent consultancy; visa issuance is subject to government approval.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="successPopup" style={{ display: "none" }}>
            <div className="reveal">
                <div style={{ width: "80px", height: "80px", background: "var(--accent-green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", color: "var(--white)" }}>
                    <i data-lucide="check" style={{ width: "40px", height: "40px" }}></i>
                </div>
                <h2 className="display-text" style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Message Sent!</h2>
                <p className="body-large">Thank you for reaching out. Our experts will contact you shortly.</p>
            </div>
        </div>
    </main>
  );
}
