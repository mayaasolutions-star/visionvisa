import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Tourist & Visitor Visa | Vision Visa Premium Services",
  description: "Apply for your international tourist visa with complete document assistance, expert guidance and end-to-end application support at Vision Visa.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function COUNTRY_TEMPLATE_Page() {
  return (
    <main>
      {/*  Global Header  */}
    

    {/*  HERO SECTION  */}
    <section className="country-hero">
        <div className="hero-bg">
            <img id="heroBgImg" src={getAssetPath("/images/Australia.webp")} alt="Country Hero" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
            <div className="hero-badge reveal">
                <img id="heroFlagImg" src="https://flagcdn.com/w40/au.png" alt="Country Flag" />
                <span id="heroVisaBadge">Visitor Visa</span>
            </div>
            <h1 id="heroTitle" className="hero-title reveal reveal-delay-1">Australia Visa</h1>
            <p id="heroDesc" className="hero-description reveal reveal-delay-2">
                Apply for your visa with complete document assistance, expert guidance and end-to-end application support.
            </p>
            <div className="hero-meta reveal reveal-delay-3">
                <div>
                    <small>Processing</small>
                    <strong id="metaProcessing">10 - 15 Days</strong>
                </div>
                <div>
                    <small>Stay</small>
                    <strong id="metaStay">Up to 90 Days</strong>
                </div>
                <div>
                    <small>Entry</small>
                    <strong id="metaEntry">Single / Multiple</strong>
                </div>
            </div>
            <div className="hero-buttons reveal reveal-delay-3">
                <a id="heroApplyBtn" href="contact.html" className="btn btn-primary">Contact Us</a>
                <a href="https://wa.me/918010152621" target="_blank" rel="noopener" className="btn btn-secondary">Talk to Expert</a>
            </div>
        </div>
    </section>

    {/*  VISA OVERVIEW  */}
    <section className="country-overview">
        <div className="container">
            <div className="overview-card reveal">
                <div className="overview-left">
                    <span id="overviewLabel" className="section-label">Visa Overview</span>
                    <h2 id="overviewTitle">Everything You Need Before You Apply</h2>
                    <p id="overviewDesc">
                        Get complete assistance for your visa application, from document verification to submission guidance.
                    </p>
                </div>
                <div className="overview-right">
                    <div className="overview-item">
                        <span>Processing Time</span>
                        <strong id="ovProc">10 - 15 Days</strong>
                    </div>
                    <div className="overview-item">
                        <span>Visa Type</span>
                        <strong id="ovType">Tourist Visa</strong>
                    </div>
                    <div className="overview-item">
                        <span>Maximum Stay</span>
                        <strong id="ovStay">Up to 90 Days</strong>
                    </div>
                    <div className="overview-item">
                        <span>Entry</span>
                        <strong id="ovEntry">Single / Multiple</strong>
                    </div>
                    <div className="overview-item">
                        <span>Apply Through</span>
                        <strong id="ovApplyThrough">VFS Global / High Commission</strong>
                    </div>
                    <div className="overview-item">
                        <span>Travel Insurance</span>
                        <strong id="ovInsurance">Recommended</strong>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  REQUIRED DOCUMENTS  */}
    <section className="section documents-section">
        <div className="container">
            <div className="section-heading reveal">
                <span className="section-label">Required Documents</span>
                <h2 id="docHeading" className="display-text">Visa Document Checklist</h2>
                <p id="docDesc" className="section-description">
                    Ensure you have the following documents ready before submitting your visa application.
                </p>
            </div>
            <div className="documents-wrapper">
                <div className="document-column reveal">
                    <h3>Mandatory Documents</h3>
                    <ul id="docMandatoryList">
                        <li>Valid Passport</li>
                        <li>Completed Application Form</li>
                        <li>Recent Passport Photograph</li>
                        <li>Bank Statements (6 Months)</li>
                    </ul>
                </div>
                <div className="document-column reveal reveal-delay-1">
                    <h3>Supporting Documents</h3>
                    <ul id="docSupportingList">
                        <li>Income Tax Returns</li>
                        <li>Salary Slips / Employment NOC</li>
                        <li>Property / Asset Proofs</li>
                    </ul>
                </div>
            </div>
            <div className="document-alert reveal">
                <i data-lucide="info"></i>
                <p id="docAlertText">
                    The embassy may request additional supporting documents depending on your travel history and application profile.
                </p>
            </div>
        </div>
    </section>

    {/*  VISA PROCESS  */}
    <section className="section visa-process">
        <div className="container">
            <div className="section-heading reveal">
                <span className="section-label">Visa Process</span>
                <h2 id="docProcessHeading" className="display-text">Visa Application Process</h2>
                <p className="section-description">
                    Our experts guide you through every stage of your visa application to ensure a smooth and hassle-free experience.
                </p>
            </div>
            <div className="process-layout">
                <div id="processStepsContainer" className="process-left">
                    {/*  Populated dynamically  */}
                </div>
                <div className="process-right reveal">
                    <div className="process-info-card">
                        <h3>Important Information</h3>
                        <ul>
                            <li>✓ Biometrics may be required for applicants.</li>
                            <li>✓ Processing time may vary during peak travel seasons.</li>
                            <li>✓ Embassy may request additional supporting documents.</li>
                            <li>✓ Visa approval is solely at the discretion of the Embassy.</li>
                            <li>✓ Ensure your passport has at least two blank pages.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  EXPLORE COUNTRY  */}
    <section className="section explore-country">
        <div className="container">
            <div className="section-heading reveal">
                <span id="exploreLabel" className="section-label">Discover Destination</span>
                <h2 id="exploreTitle" className="display-text">Experience the Best</h2>
                <p id="exploreDesc" className="section-description">
                    From breathtaking landscapes and historic landmarks to vibrant cities and cultural experiences, discover what makes this country unique.
                </p>
            </div>
            <div className="explore-grid">
                <div className="featured-destination reveal">
                    <img id="place1Img" src={getAssetPath("/images/Australia.webp")} alt="Featured Destination" loading="lazy" />
                    <div className="featured-content">
                        <span>Most Popular Destination</span>
                        <h3 id="place1Name">Capital & Historic Landmarks</h3>
                        <p id="place1Desc">Explore the vibrant culture and iconic landmarks.</p>
                    </div>
                </div>
                <div className="destination-list">
                    <div className="destination-card reveal">
                        <img id="place2Img" src={getAssetPath("/images/Australia.webp")} alt="Destination 2" loading="lazy" />
                        <div>
                            <h4 id="place2Name">Cultural & Heritage Sites</h4>
                            <p id="place2Desc">Experience rich history and architectural heritage.</p>
                        </div>
                    </div>
                    <div className="destination-card reveal reveal-delay-1">
                        <img id="place3Img" src={getAssetPath("/images/Australia.webp")} alt="Destination 3" loading="lazy" />
                        <div>
                            <h4 id="place3Name">Natural Wonders & Landscapes</h4>
                            <p id="place3Desc">Discover scenic beauty and outdoor views.</p>
                        </div>
                    </div>
                    <div className="destination-card reveal reveal-delay-2">
                        <img id="place4Img" src={getAssetPath("/images/Australia.webp")} alt="Destination 4" loading="lazy" />
                        <div>
                            <h4 id="place4Name">Local Markets & Cuisine</h4>
                            <p id="place4Desc">Taste authentic local dishes and bustling centers.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Travel Info  */}
            <div className="travel-info reveal">
                <div>
                    <span>Best Time to Visit</span>
                    <strong id="infoSeason">Peak Season</strong>
                </div>
                <div>
                    <span>Currency</span>
                    <strong id="infoCurrency">Local Currency</strong>
                </div>
                <div>
                    <span>Language</span>
                    <strong id="infoLanguage">Official Language</strong>
                </div>
                <div>
                    <span>Time Difference</span>
                    <strong id="infoTimeZone">Standard Time Zone</strong>
                </div>
            </div>
        </div>
    </section>

    {/*  FAQ SECTION  */}
    <section className="section faq-section">
        <div className="container">
            <div className="section-heading reveal">
                <span className="section-label">Frequently Asked Questions</span>
                <h2 id="faqHeading" className="display-text">Visa FAQs</h2>
                <p className="section-description">
                    Find answers to common questions about visa applications, processing, documents and travel requirements.
                </p>
            </div>
            <div id="faqWrapper" className="faq-wrapper">
                {/*  Populated dynamically  */}
            </div>
        </div>
    </section>

    {/*  FINAL CTA  */}
    <section className="visa-cta">
        <div className="container">
            <div className="cta-card reveal">
                <span className="section-label">Start Your Application</span>
                <h2 id="ctaTitle">Ready to Apply for Your Visa?</h2>
                <p>Let our visa experts guide you through every step—from document verification to successful submission.</p>
                <div className="cta-buttons">
                    <a id="ctaApplyBtn" href="contact.html" className="btn btn-primary">Contact Us</a>
                    <a href="https://wa.me/918010152621" target="_blank" rel="noopener" className="btn btn-secondary">Chat on WhatsApp</a>
                </div>
            </div>
        </div>
    </section>

    {/*  Global Footer  */}
    

    {/*  Scripts  */}
    </main>
  );
}
