const fs = require('fs');
const path = './css/components.css';
let content = fs.readFileSync(path, 'utf8');

const marker = '/* ==========================================================================\n   VISION VISA REDESIGNED COUNTRY DETAIL PAGE STYLES';
const markerCRLF = '/* ==========================================================================\r\n   VISION VISA REDESIGNED COUNTRY DETAIL PAGE STYLES';

let cutIdx = content.indexOf(marker);
if (cutIdx === -1) cutIdx = content.indexOf(markerCRLF);
if (cutIdx === -1) cutIdx = content.indexOf('/* ==========================================================================\n   VV COUNTRY PAGE');
if (cutIdx === -1) cutIdx = content.indexOf('/* ==========================================================================\r\n   VV COUNTRY PAGE');

if (cutIdx !== -1) {
  content = content.substring(0, cutIdx).trimEnd();
}

const cleanStyles = `

/* ==========================================================================
   VISION VISA REDESIGNED COUNTRY DETAIL PAGE STYLES
   ========================================================================== */

.vv-country-page {
  padding-top: 100px;
  background: #f8fafc;
  min-height: 100vh;
  color: #071A3D;
}

.vv-hero-section {
  padding: 24px 0 16px 0;
}

.vv-hero-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.vv-hero-grid {
  display: grid;
  grid-template-columns: 1.85fr 1fr;
  gap: 24px;
  align-items: stretch;
}

/* HERO IMAGE CARD (LEFT COLUMN) */
.vv-hero-image-card {
  position: relative;
  height: 100%;
  min-height: 380px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(7, 26, 61, 0.08);
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
  background: linear-gradient(180deg, rgba(7, 26, 61, 0.05) 0%, rgba(7, 26, 61, 0.88) 100%);
}

.vv-hero-img-overlay {
  position: relative;
  z-index: 2;
  padding: 28px 32px;
  color: #ffffff;
}

.vv-hero-top-badges {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.vv-img-tag-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.vv-badge-flag-img {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  object-fit: cover;
}

.vv-active-visa-pill-badge {
  padding: 6px 14px;
  background: #F47B20;
  color: #ffffff;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  box-shadow: 0 4px 12px rgba(244, 123, 32, 0.3);
}

.vv-img-title {
  font-size: clamp(1.65rem, 3.2vw, 2.25rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px 0;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.vv-img-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  line-height: 1.5;
  max-width: 620px;
}

/* VISA INFO SUMMARY CARD (RIGHT COLUMN) */
.vv-hero-info-panel {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.vv-panel-header {
  margin-bottom: 12px;
}

.vv-panel-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
}

.vv-panel-icon-circle {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #EDF5FF;
  color: #1E73DC;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.vv-panel-card-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: #071A3D;
  letter-spacing: 0.05em;
  margin: 0;
}

.vv-panel-card-subtitle {
  font-size: 0.78rem;
  color: #64748B;
  margin: 2px 0 0 0;
}

.vv-panel-params-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px 0;
}

.vv-param-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
}

.vv-param-icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(30, 115, 220, 0.08);
  color: #1E73DC;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.vv-param-content {
  display: flex;
  flex-direction: column;
}

.vv-param-label {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.vv-param-value {
  font-size: 0.86rem;
  color: #071A3D;
  font-weight: 700;
}

.vv-social-btn-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.vv-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 16px;
  border-radius: 10px;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 180ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.vv-whatsapp-btn {
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
}

.vv-whatsapp-btn:hover {
  background: #20bd5a;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);
}

.vv-insta-btn {
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(225, 48, 108, 0.15);
}

.vv-insta-btn:hover {
  opacity: 0.94;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(225, 48, 108, 0.25);
}

/* ==========================================================================
   2. PROMINENT VISA TYPE SELECTOR SECTION
   ========================================================================== */
.vv-selector-section {
  padding: 16px 0 28px 0;
}

.vv-selector-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.vv-selector-header {
  margin-bottom: 16px;
}

.vv-section-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  color: #F47B20;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.vv-selector-title {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 800;
  color: #071A3D;
  margin: 0 0 4px 0;
  letter-spacing: -0.01em;
}

.vv-selector-subtitle {
  font-size: 0.88rem;
  color: #64748B;
  margin: 0;
}

.vv-visa-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.vv-visa-select-card {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 18px;
  text-align: left;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 12px rgba(7, 26, 61, 0.03);
}

.vv-visa-select-card:hover {
  border-color: #1E73DC;
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(30, 115, 220, 0.12);
}

.vv-visa-select-card.active {
  background: #ffffff;
  border-color: #1E73DC;
  box-shadow: 0 12px 28px rgba(30, 115, 220, 0.16);
  transform: translateY(-3px);
}

.vv-vcard-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.vv-vcard-icon-badge {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #F1F7FF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 200ms ease;
}

.vv-visa-select-card.active .vv-vcard-icon-badge {
  background: #1E73DC;
}

.vv-vcard-active-indicator {
  padding: 3px 10px;
  background: rgba(16, 185, 129, 0.12);
  color: #10B981;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 800;
}

.vv-vcard-body {
  flex: 1;
  margin-bottom: 12px;
}

.vv-vcard-title {
  font-size: 1.02rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0 0 4px 0;
  letter-spacing: -0.01em;
}

.vv-visa-select-card.active .vv-vcard-title {
  color: #1E73DC;
}

.vv-vcard-subtext {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
}

.vv-vcard-footer {
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
}

.vv-vcard-timetag {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
}

/* ==========================================================================
   3. MAIN CONTENT: KEY REQUIREMENTS (LEFT ~68%) + SIDEBAR (RIGHT ~32%)
   ========================================================================== */
.vv-content-section {
  padding: 12px 0 48px 0;
}

.vv-content-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.vv-requirements-layout-grid {
  display: grid;
  grid-template-columns: 1.85fr 1fr;
  gap: 24px;
  align-items: start;
}

.vv-card {
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
}

.vv-requirements-card {
  padding: 28px 32px;
}

.vv-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}

.vv-card-header-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.1);
  color: #10B981;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.vv-card-header-text {
  flex: 1;
}

.vv-req-header-top-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.vv-req-header-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F47B20;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.vv-req-count-pill {
  padding: 2px 10px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
}

.vv-card-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0 0 4px 0;
  letter-spacing: -0.01em;
}

.vv-card-subtitle {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.vv-req-single-col {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vv-req-item-single {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  transition: all 200ms ease;
}

.vv-req-item-single:hover {
  border-color: rgba(30, 115, 220, 0.25);
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(7, 26, 61, 0.03);
}

.vv-req-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #10B981;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
}

.vv-req-text {
  font-size: 0.9rem;
  color: #1e293b;
  line-height: 1.5;
  font-weight: 500;
}

.vv-req-expand-row {
  margin-top: 18px;
  text-align: center;
}

.vv-req-expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  background: #f1f5f9;
  color: #1E73DC;
  border: 1px solid #e2e8f0;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 200ms ease;
}

.vv-req-expand-btn:hover {
  background: #1E73DC;
  color: #ffffff;
  border-color: #1E73DC;
}

/* SIDEBAR WIDGETS */
.vv-sidebar-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 110px;
}

.vv-sidebar-widget {
  padding: 22px;
  background: #ffffff;
  border: 1px solid rgba(7, 26, 61, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(7, 26, 61, 0.04);
}

.vv-widget-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.vv-widget-title {
  font-size: 1rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0;
}

.vv-widget-viewall-link {
  font-size: 0.78rem;
  font-weight: 700;
  color: #1E73DC;
  text-decoration: none;
}

.vv-widget-viewall-link:hover {
  text-decoration: underline;
}

.vv-popular-visas-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vv-popular-visa-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
  color: #0f172a;
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 180ms ease;
}

.vv-popular-visa-item:hover {
  background: #071A3D;
  color: #ffffff;
  border-color: #071A3D;
}

.vv-pop-country-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vv-pop-flag {
  font-size: 1.05rem;
}

.vv-popular-visa-item .arrow {
  font-size: 0.88rem;
  transition: transform 180ms ease;
}

.vv-popular-visa-item:hover .arrow {
  transform: translateX(4px);
}

.vv-help-widget {
  background: linear-gradient(135deg, #071A3D 0%, #1e293b 100%);
  color: #ffffff;
  border: none;
}

.vv-help-widget .vv-widget-title {
  color: #ffffff;
  border-bottom-color: rgba(255, 255, 255, 0.15);
}

.vv-widget-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.vv-widget-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vv-widget-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  border-radius: 10px;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 150ms ease;
}

.vv-widget-whatsapp {
  background: #25D366;
  color: #ffffff;
}

.vv-widget-apply {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.vv-widget-btn:hover {
  transform: translateY(-2px);
}

/* SECONDARY INFO ROW & DESTINATION INFO */
.vv-secondary-info-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
  margin-top: 24px;
}

.vv-overview-card-secondary {
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.vv-overview-items-inline {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vv-sidebar-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #071A3D;
  margin: 0 0 14px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
  line-height: 1.3;
}

.vv-sidebar-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 44px;
  padding: 10px 14px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
}

.vv-sidebar-info-item .lbl {
  color: #64748b;
  font-size: 0.84rem;
  font-weight: 500;
}

.vv-sidebar-info-item .val {
  color: #071A3D;
  font-size: 0.86rem;
  font-weight: 700;
  text-align: right;
}

.vv-important-note-box {
  margin-top: 14px;
  padding: 14px 16px;
  background: #fffbeb;
  border: 1px solid #fef3c7;
  border-radius: 12px;
  font-size: 0.8125rem;
  color: #92400e;
}

.vv-important-note-box .note-head {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #b45309;
}

.vv-important-note-box .note-body {
  margin: 0;
  line-height: 1.45;
}

/* DESTINATION INFORMATION CARD */
.vv-dest-info-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.vv-dest-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.vv-dest-info-col {
  padding: 12px 14px;
  min-height: 76px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vv-dest-info-col .lbl {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 3px;
}

.vv-dest-info-col .val {
  font-size: 0.86rem;
  color: #071A3D;
  font-weight: 700;
  line-height: 1.3;
}

/* FAQS SECTION */
.vv-faqs-section-centered {
  padding: 44px 0 60px 0;
  background: #f8fafc;
}

.vv-faq-centered-box {
  max-width: 920px;
  margin: 0 auto;
}

.vv-faq-accordion-centered {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.vv-faq-item-old {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.vv-faq-item-old[open] {
  border-color: rgba(7, 26, 61, 0.25);
  box-shadow: 0 4px 14px rgba(7, 26, 61, 0.04);
}

.vv-faq-item-old summary {
  padding: 18px 22px;
  font-weight: 700;
  font-size: 0.95rem;
  color: #071A3D;
  cursor: pointer;
  user-select: none;
}

.vv-faq-item-old summary:hover {
  color: #1E73DC;
}

.vv-faq-item-old p {
  padding: 0 22px 20px 22px;
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* RESPONSIVE BREAKPOINTS */
@media (max-width: 1024px) {
  .vv-hero-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .vv-hero-image-card {
    min-height: 320px;
  }

  .vv-requirements-layout-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .vv-sidebar-wrap {
    position: static;
  }
}

@media (max-width: 768px) {
  .vv-country-page {
    padding-top: 80px;
  }

  .vv-visa-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .vv-visa-select-card {
    padding: 16px;
  }

  .vv-secondary-info-row {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .vv-requirements-card {
    padding: 20px;
  }

  .vv-img-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .vv-visa-cards-grid {
    grid-template-columns: 1fr;
  }

  .vv-dest-info-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
`;

fs.writeFileSync('./scratch/clean_css.js', cleanStyles, 'utf8');
