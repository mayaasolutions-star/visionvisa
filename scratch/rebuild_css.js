const fs = require('fs');

const cleanCSS = `/* ==========================================================================
   VISION VISA REBUILT COUNTRY DETAIL PAGE STYLES
   ========================================================================== */

.vv-rebuilt-page {
  padding-top: 104px;
  padding-bottom: 60px;
  background: #F8FAFC;
  min-height: 100vh;
  color: #071A3D;
  font-family: var(--font-body, 'Inter', sans-serif);
}

.vv-page-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ==========================================================================
   1. HERO & VISA INFORMATION (BALANCED TWO-COLUMN ROW)
   ========================================================================== */
.vv-hero-row {
  width: 100%;
}

.vv-hero-grid {
  display: grid;
  grid-template-columns: 1.85fr 1fr;
  gap: 24px;
  align-items: stretch;
}

/* LEFT IMAGE CARD */
.vv-hero-image-card {
  position: relative;
  height: 100%;
  min-height: 380px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.vv-hero-img-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vv-hero-img-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(7, 26, 61, 0.02) 0%, rgba(7, 26, 61, 0.85) 100%);
}

.vv-hero-img-overlay {
  position: relative;
  z-index: 2;
  padding: 28px;
  color: #ffffff;
}

.vv-hero-flag-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.vv-flag-img {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  object-fit: cover;
}

.vv-hero-title {
  font-family: var(--font-heading, 'Plus Jakarta Sans', sans-serif);
  font-size: clamp(1.65rem, 3.2vw, 2.25rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px 0;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.vv-hero-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  line-height: 1.5;
  max-width: 580px;
}

/* RIGHT VISA INFORMATION PANEL */
.vv-hero-info-panel {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.vv-panel-header {
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 12px;
}

.vv-panel-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  color: #F47B20;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.vv-panel-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0;
}

.vv-panel-params {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
}

.vv-param-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
}

.param-lbl {
  font-size: 0.78rem;
  color: #64748b;
  font-weight: 600;
}

.param-val {
  font-size: 0.86rem;
  color: #071A3D;
  font-weight: 700;
  text-align: right;
}

.vv-panel-ctas {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.vv-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 16px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 180ms ease;
  cursor: pointer;
}

.vv-cta-whatsapp {
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
}

.vv-cta-whatsapp:hover {
  background: #20bd5a;
  color: #ffffff;
  transform: translateY(-2px);
}

.vv-cta-insta {
  background: #ffffff;
  color: #071A3D;
  border: 1px solid #e2e8f0;
}

.vv-cta-insta:hover {
  border-color: #071A3D;
  background: #f8fafc;
}

/* ==========================================================================
   2. VISA TYPE SELECTOR (COMPACT SEGMENTED BAR DIRECTLY BELOW HERO)
   ========================================================================== */
.vv-selector-row {
  width: 100%;
}

.vv-segmented-control {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(7, 26, 61, 0.03);
  overflow-x: auto;
  scrollbar-width: none;
}

.vv-segmented-control::-webkit-scrollbar {
  display: none;
}

.vv-segmented-btn {
  flex: 1;
  min-width: 130px;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #64748B;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 180ms ease;
}

.vv-segmented-btn:hover {
  color: #071A3D;
  background: #F1F5F9;
}

.vv-segmented-btn.active {
  background: #071A3D;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(7, 26, 61, 0.15);
}

/* ==========================================================================
   3. KEY REQUIREMENTS (MAIN LAYOUT: LEFT 68% + RIGHT 32%)
   ========================================================================== */
.vv-requirements-row {
  width: 100%;
}

.vv-main-layout-grid {
  display: grid;
  grid-template-columns: 1.85fr 1fr;
  gap: 24px;
  align-items: start;
}

.vv-req-card {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
}

.vv-req-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}

.vv-req-tag-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.vv-req-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F47B20;
  letter-spacing: 0.08em;
}

.vv-req-count {
  padding: 2px 8px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
}

.vv-req-title {
  font-family: var(--font-heading, 'Plus Jakarta Sans', sans-serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0 0 4px 0;
  letter-spacing: -0.01em;
}

.vv-req-subtitle {
  font-size: 0.88rem;
  color: #64748B;
  margin: 0;
}

.vv-req-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vv-req-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  background: #F8FAFC;
  border-radius: 10px;
  border: 1px solid #F1F5F9;
}

.vv-req-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10B981;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 1px;
}

.vv-req-text {
  font-size: 0.9rem;
  color: #1E293B;
  line-height: 1.45;
  font-weight: 500;
}

.vv-req-toggle-wrap {
  margin-top: 16px;
  text-align: center;
}

.vv-req-toggle-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  background: #F1F5F9;
  color: #1E73DC;
  border: 1px solid #E2E8F0;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 180ms ease;
}

.vv-req-toggle-btn:hover {
  background: #1E73DC;
  color: #ffffff;
  border-color: #1E73DC;
}

/* SIDEBAR COLUMN */
.vv-sidebar-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vv-sidebar-card {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
}

.vv-sidebar-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 12px;
}

.vv-sidebar-heading {
  font-size: 0.82rem;
  font-weight: 800;
  color: #071A3D;
  letter-spacing: 0.06em;
  margin: 0;
}

.vv-sidebar-link {
  font-size: 0.78rem;
  font-weight: 700;
  color: #1E73DC;
  text-decoration: none;
}

.vv-related-countries-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.vv-related-country-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  color: #071A3D;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 150ms ease;
}

.vv-related-country-item:hover {
  background: #071A3D;
  color: #ffffff;
  border-color: #071A3D;
}

.country-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag-emoji {
  font-size: 1.05rem;
}

.arrow-icon {
  font-size: 0.88rem;
  transition: transform 150ms ease;
}

.vv-related-country-item:hover .arrow-icon {
  transform: translateX(3px);
}

.vv-sidebar-help-box {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
}

.help-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0 0 6px 0;
}

.help-desc {
  font-size: 0.82rem;
  color: #64748B;
  margin: 0 0 14px 0;
  line-height: 1.45;
}

.vv-sidebar-wa-btn {
  display: block;
  text-align: center;
  padding: 10px 14px;
  background: #25D366;
  color: #ffffff;
  font-size: 0.84rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  transition: background 150ms ease;
}

.vv-sidebar-wa-btn:hover {
  background: #20bd5a;
}

/* ==========================================================================
   4. ADDITIONAL VISA INFORMATION & DESTINATION INFO
   ========================================================================== */
.vv-additional-info-row {
  width: 100%;
}

.vv-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.vv-info-card {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
}

.vv-info-heading {
  font-size: 0.82rem;
  font-weight: 800;
  color: #071A3D;
  letter-spacing: 0.06em;
  margin: 0 0 14px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.vv-info-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vv-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
}

.vv-info-item .lbl {
  font-size: 0.82rem;
  color: #64748b;
  font-weight: 500;
}

.vv-info-item .val {
  font-size: 0.86rem;
  color: #071A3D;
  font-weight: 700;
  text-align: right;
}

.vv-consular-note {
  margin-top: 14px;
  padding: 12px 14px;
  background: #fffbeb;
  border: 1px solid #fef3c7;
  border-radius: 8px;
  font-size: 0.8125rem;
  color: #92400e;
}

.vv-consular-note strong {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
  color: #b45309;
}

.vv-consular-note p {
  margin: 0;
  line-height: 1.45;
}

.vv-info-grid-2x2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.vv-dest-box {
  padding: 12px 14px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}

.vv-dest-box .lbl {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 3px;
}

.vv-dest-box .val {
  font-size: 0.86rem;
  color: #071A3D;
  font-weight: 700;
}

/* ==========================================================================
   5. FAQS SECTION
   ========================================================================== */
.vv-faqs-row {
  width: 100%;
}

.vv-faqs-container {
  max-width: 900px;
  margin: 0 auto;
}

.vv-faqs-header {
  margin-bottom: 20px;
}

.vv-faqs-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vv-faq-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 150ms ease;
}

.vv-faq-item[open] {
  border-color: #071A3D;
}

.vv-faq-item summary {
  padding: 16px 20px;
  font-weight: 700;
  font-size: 0.92rem;
  color: #071A3D;
  cursor: pointer;
  user-select: none;
}

.vv-faq-item summary:hover {
  color: #1E73DC;
}

.vv-faq-item p {
  padding: 0 20px 18px 20px;
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* ==========================================================================
   RESPONSIVE LAYOUT
   ========================================================================== */
@media (max-width: 1024px) {
  .vv-hero-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .vv-hero-image-card {
    min-height: 320px;
  }

  .vv-main-layout-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .vv-rebuilt-page {
    padding-top: 84px;
  }

  .vv-info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .vv-req-card {
    padding: 20px;
  }

  .vv-hero-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .vv-info-grid-2x2 {
    grid-template-columns: 1fr;
  }
}
`;

fs.writeFileSync('./scratch/rebuild_css.js', cleanCSS, 'utf8');
