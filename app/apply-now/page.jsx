import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import ApplyForm from '@/components/ApplyForm';

export const metadata = {
    title: "Apply Now | Start Your Visa & Travel Application | Vision Visa",
    description: "Begin your visa application, travel insurance inquiry, forex order, or air ticket booking with Vision Visa.",
    alternates: {
        canonical: "https://www.visionvisa.in/apply-now"
    },
    openGraph: {
        title: "Apply Now | Start Your Visa & Travel Application | Vision Visa",
        description: "Begin your visa application, travel insurance inquiry, forex order, or air ticket booking with Vision Visa.",
        type: "website",
        siteName: "Vision Visa",
        url: "https://www.visionvisa.in/apply-now",
        locale: "en_IN",
        images: [
            {
                url: "https://www.visionvisa.in/images/about-hero.webp",
                width: 1200,
                height: 630,
                alt: "Start Visa & Travel Application - Vision Visa"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Apply Now | Start Your Visa & Travel Application | Vision Visa",
        description: "Begin your visa application, travel insurance inquiry, forex order, or air ticket booking with Vision Visa.",
        images: ["https://www.visionvisa.in/images/about-hero.webp"]
    }
};

export default function APPLY_NOW_Page() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visionvisa.in" },
            { "@type": "ListItem", "position": 2, "name": "Apply Now", "item": "https://www.visionvisa.in/apply-now" }
        ]
    };

    return (
    <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <section className="inner-hero inner-hero-dark">
            <div className="hero-pattern-dots"></div>
            <div className="container">
                <div className="contact-hero-grid">
                    <div className="reveal">
                        <span className="editorial-tag">
                            <i data-lucide="sparkles" style={{ width: 14, height: 14 }}></i>
                            START YOUR APPLICATION
                        </span>

                        <h1 className="editorial-title">
                            Take the first step <br />
                            <span className="accent">toward your journey.</span>
                        </h1>

                        <p className="editorial-subtitle">
                            Get personalized assistance for visa filing, document evaluation, overseas medical cover, forex cards, and flight bookings.
                        </p>

                        <div className="editorial-actions mb-24">
                            <a href="#application-form" className="btn btn-primary magnetic">
                                Start Application
                            </a>
                            <a href="tel:+918010152621" className="btn btn-secondary magnetic">
                                Call Specialist
                            </a>
                        </div>
                    </div>

                    <div className="hero-frame-container reveal reveal-delay-1">
                        <img src={getAssetPath("/images/about-hero.webp")} alt="Apply Now - Start Journey" className="hero-frame-img" />
                        
                        <div className="floating-hero-badge badge-pos-top-right">
                            <div className="editorial-badge-icon">
                                <i data-lucide="check-circle-2"></i>
                            </div>
                            <div className="editorial-badge-text">
                                <span className="editorial-badge-label">PROCESS</span>
                                <span className="editorial-badge-val">FAST TRACK GUIDANCE</span>
                            </div>
                        </div>

                        <div className="floating-hero-badge badge-pos-bottom-left">
                            <div className="editorial-badge-icon editorial-badge-icon-green">
                                <i data-lucide="shield-check"></i>
                            </div>
                            <div className="editorial-badge-text">
                                <span className="editorial-badge-label">ASSURANCE</span>
                                <span className="editorial-badge-val">EXPERT VERIFIED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="application-form" className="apply-form-section" style={{ padding: "80px 0" }}>
            <div className="container">
                <ApplyForm />
            </div>
        </section>
    </main>
    );
}
