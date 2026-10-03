'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    trackFormView,
    trackFormStart,
    trackFormSubmit,
    trackFormSuccess,
} from '@/lib/analytics';

export default function ApplyForm() {
    const [submitted, setSubmitted] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        trackFormView('apply_now_form');
    }, []);

    const handleFocus = () => {
        if (!hasStarted) {
            setHasStarted(true);
            trackFormStart('apply_now_form');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceSelect = document.getElementById('applyService');
        const serviceVal = serviceSelect ? serviceSelect.value : '';

        trackFormSubmit('apply_now_form', serviceVal);
        setSubmitted(true);
        trackFormSuccess('apply_now_form', serviceVal);

        setTimeout(() => {
            setSubmitted(false);
            setHasStarted(false);
            if (e.target) e.target.reset();
        }, 3500);
    };

    return (
        <div className="apply-form-card" style={{ maxWidth: "700px", margin: "0 auto", background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "var(--shadow-luxury)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <h2 className="display-text mb-16" style={{ fontSize: "2rem" }}>Service Application Form</h2>
            <p className="body-base mb-32" style={{ color: "var(--slate-600)" }}>Select the service you need and our specialists will contact you immediately.</p>
            
            {submitted ? (
                <div className="reveal active" style={{ textAlign: "center", padding: "32px 16px" }}>
                    <div style={{ width: "64px", height: "64px", background: "var(--accent-green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#ffffff" }}>
                        <i data-lucide="check" style={{ width: "32px", height: "32px" }}></i>
                    </div>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "12px", color: "var(--slate-900)" }}>Inquiry Submitted!</h3>
                    <p className="body-large" style={{ color: "var(--slate-600)" }}>Thank you for reaching out. Our visa specialist will contact you shortly.</p>
                </div>
            ) : (
                <form id="applyNowForm" onSubmit={handleSubmit}>
                    {/* SECTION 1: PERSONAL DETAILS */}
                    <div className="form-section-header" style={{ marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #F1F5F9" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#1E73DC", textTransform: "uppercase" }}>01 • PERSONAL DETAILS</span>
                    </div>

                    <div className="form-group" style={{ marginBottom: "20px" }}>
                        <label htmlFor="applyName" style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Full Name</label>
                        <input type="text" id="applyName" required onFocus={handleFocus} placeholder="Enter full name" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "20px" }}>
                        <label htmlFor="applyEmail" style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Email Address</label>
                        <input type="email" id="applyEmail" required onFocus={handleFocus} placeholder="name@example.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "24px" }}>
                        <label htmlFor="applyPhone" style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Phone Number</label>
                        <input type="tel" id="applyPhone" required onFocus={handleFocus} placeholder="+91 98765 43210" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }} />
                    </div>

                    {/* SECTION 2: SERVICE & TRAVEL DETAILS */}
                    <div className="form-section-header" style={{ marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #F1F5F9", marginTop: "8px" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#1E73DC", textTransform: "uppercase" }}>02 • SERVICE &amp; TRAVEL DETAILS</span>
                    </div>

                    <div className="form-group" style={{ marginBottom: "20px" }}>
                        <label htmlFor="applyService" style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Required Service</label>
                        <select id="applyService" required defaultValue="" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }}>
                            <option value="" disabled>Select Service</option>
                            <option value="tourist">Tourist Visa</option>
                            <option value="business">Business Visa</option>
                            <option value="study">Study Visa</option>
                            <option value="work">Work Visa</option>
                            <option value="insurance">Travel Insurance</option>
                            <option value="forex">Forex &amp; Currency Card</option>
                            <option value="tickets">Air Tickets</option>
                        </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: "24px" }}>
                        <label htmlFor="applyNotes" style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Destination / Travel Details</label>
                        <textarea id="applyNotes" rows={4} placeholder="Mention your target destination, travel dates, or specific requirements..." style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "16px" }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary magnetic" style={{ width: "100%" }}>Submit Application Inquiry</button>
                    <p style={{ marginTop: '14px', fontSize: '0.75rem', color: '#64748b', textAlign: 'center', lineHeight: '1.4' }}>
                      By submitting, you agree to our <Link href="/privacy-policy" style={{ color: '#1E73DC', textDecoration: 'underline' }}>Privacy Policy</Link> &amp; <Link href="/terms" style={{ color: '#1E73DC', textDecoration: 'underline' }}>Terms</Link>. Vision Visa is an independent consultancy; visa issuance is subject to government approval.
                    </p>
                </form>
            )}
        </div>
    );
}
