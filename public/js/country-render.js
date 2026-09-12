/* Vision Visa - Dynamic Country Page Renderer */
(function() {
    function getCountrySlug() {
        const params = new URLSearchParams(window.location.search);
        let slug = params.get('country') || params.get('c');
        
        if (!slug && window.location.hash) {
            slug = window.location.hash.replace(/^#/, '');
        }

        if (!slug) {
            const pathParts = window.location.pathname.split('/').filter(Boolean);
            const lastPart = pathParts[pathParts.length - 1];
            if (lastPart && lastPart !== 'country' && lastPart !== 'country.html' && lastPart !== 'country-template.html' && lastPart !== 'index.html') {
                if (lastPart.startsWith('country-') && lastPart.endsWith('.html')) {
                    slug = lastPart.replace('country-', '').replace('.html', '');
                } else {
                    slug = lastPart.replace('.html', '');
                }
            }
        }

        if (slug) {
            slug = slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        }

        return slug || 'argentina';
    }

    function renderCountryPage() {
        if (document.querySelector('.master-country-page')) return;
        const slug = getCountrySlug();
        const db = window.VISION_VISA_COUNTRIES || {};
        const data = db[slug] || db['australia'] || Object.values(db)[0];

        if (!data) return;

        // 1. Update Title & SEO Metadata
        const pageTitle = `${data.name} Tourist & Visitor Visa | Vision Visa`;
        document.title = pageTitle;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Apply for your ${data.name} ${data.visaType} with expert guidance, document verification, and fast processing at Vision Visa.`;

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = `https://visionvisa.in/country/${data.slug}`;

        // Open Graph Meta Tags
        function setOgMeta(property, content) {
            let el = document.querySelector(`meta[property="${property}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('property', property);
                document.head.appendChild(el);
            }
            el.content = content;
        }
        setOgMeta('og:title', pageTitle);
        setOgMeta('og:description', metaDesc.content);
        setOgMeta('og:image', data.heroImage);
        setOgMeta('og:url', canonical.href);

        // JSON-LD Schema
        let jsonLd = document.getElementById('jsonLdSchema');
        if (!jsonLd) {
            jsonLd = document.createElement('script');
            jsonLd.id = 'jsonLdSchema';
            jsonLd.type = 'application/ld+json';
            document.head.appendChild(jsonLd);
        }
        jsonLd.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentService",
            "name": `${data.name} Visa Application Assistance`,
            "serviceType": data.visaType,
            "provider": {
                "@type": "Organization",
                "name": "Vision Visa",
                "url": "https://visionvisa.in"
            },
            "areaServed": data.name,
            "description": data.overviewDescription
        });

        // 2. HERO SECTION
        const heroBgImg = document.getElementById('heroBgImg');
        if (heroBgImg) {
            heroBgImg.src = data.heroImage;
            heroBgImg.alt = data.name;
        }

        const heroFlagImg = document.getElementById('heroFlagImg');
        if (heroFlagImg) {
            heroFlagImg.src = data.flagImage;
            heroFlagImg.alt = `${data.name} Flag`;
        }

        const heroVisaBadge = document.getElementById('heroVisaBadge');
        if (heroVisaBadge) heroVisaBadge.textContent = data.visaType;

        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) heroTitle.textContent = `${data.name} Visa`;

        const heroDesc = document.getElementById('heroDesc');
        if (heroDesc) heroDesc.textContent = `Apply for your ${data.name} visa with complete document assistance, expert guidance and end-to-end application support.`;

        const metaProcessing = document.getElementById('metaProcessing');
        if (metaProcessing) metaProcessing.textContent = data.processingTime;

        const metaStay = document.getElementById('metaStay');
        if (metaStay) metaStay.textContent = data.stayDuration;

        const metaEntry = document.getElementById('metaEntry');
        if (metaEntry) metaEntry.textContent = data.entryType;

        const heroApplyBtn = document.getElementById('heroApplyBtn');
        if (heroApplyBtn) heroApplyBtn.href = `${(window.VISION_VISA_BASE_PATH || '')}/contact?country=${data.slug}`;

        // 3. VISA OVERVIEW
        const overviewLabel = document.getElementById('overviewLabel');
        if (overviewLabel) overviewLabel.textContent = `${data.name} Visa Overview`;

        const overviewTitle = document.getElementById('overviewTitle');
        if (overviewTitle) overviewTitle.textContent = data.overviewTitle || "Everything You Need Before You Apply";

        const overviewDesc = document.getElementById('overviewDesc');
        if (overviewDesc) {
            if (data.overviewDescription && data.overviewDescription.includes('\n')) {
                overviewDesc.innerHTML = data.overviewDescription
                    .split('\n\n')
                    .map(para => {
                        const trimmed = para.trim();
                        if (trimmed.startsWith('Do Indians Need') || trimmed.startsWith('Argentina Visa Processing Time') || trimmed.startsWith('Argentina Visa Types') || trimmed.startsWith('Why Choose')) {
                            const lines = trimmed.split('\n');
                            const heading = lines[0];
                            const rest = lines.slice(1).join('<br>');
                            return `<div style="margin-top:20px;margin-bottom:16px"><strong style="display:block;font-size:1.15rem;color:var(--slate-900);margin-bottom:8px;">${heading}</strong><p style="margin:0;line-height:1.65;color:var(--slate-600);">${rest}</p></div>`;
                        }
                        return `<p style="margin-bottom:14px;line-height:1.65;color:var(--slate-600);">${trimmed.replace(/\n/g, '<br>')}</p>`;
                    })
                    .join('');
            } else {
                overviewDesc.textContent = data.overviewDescription;
            }
        }

        const ovProc = document.getElementById('ovProc');
        if (ovProc) ovProc.textContent = data.processingTime;

        const ovType = document.getElementById('ovType');
        if (ovType) ovType.textContent = data.visaType;

        const ovStay = document.getElementById('ovStay');
        if (ovStay) ovStay.textContent = data.stayDuration;

        const ovEntry = document.getElementById('ovEntry');
        if (ovEntry) ovEntry.textContent = data.entryType;

        const ovApplyThrough = document.getElementById('ovApplyThrough');
        if (ovApplyThrough) ovApplyThrough.textContent = data.applyThrough;

        const ovInsurance = document.getElementById('ovInsurance');
        if (ovInsurance) ovInsurance.textContent = data.insuranceRequirement;

        // 4. DOCUMENTS SECTION
        const docHeading = document.getElementById('docHeading');
        if (docHeading) docHeading.textContent = `${data.name} Visa Document Checklist`;

        const docDesc = document.getElementById('docDesc');
        if (docDesc) docDesc.textContent = `Ensure you have the following documents ready before submitting your ${data.name} visa application.`;

        const docMandatoryList = document.getElementById('docMandatoryList');
        if (docMandatoryList && data.documents && data.documents.mandatory) {
            docMandatoryList.innerHTML = data.documents.mandatory.map(item => `<li>${item}</li>`).join('');
        }

        const docSupportingList = document.getElementById('docSupportingList');
        if (docSupportingList && data.documents && data.documents.supporting) {
            docSupportingList.innerHTML = data.documents.supporting.map(item => `<li>${item}</li>`).join('');
        }

        const docAlertText = document.getElementById('docAlertText');
        if (docAlertText && data.documents && data.documents.alertText) {
            docAlertText.textContent = data.documents.alertText;
        }

        // 5. VISA PROCESS
        const processHeading = document.getElementById('docProcessHeading');
        if (processHeading) processHeading.textContent = `${data.name} Visa Application Process`;

        const processStepsContainer = document.getElementById('processStepsContainer');
        if (processStepsContainer && data.processSteps) {
            processStepsContainer.innerHTML = data.processSteps.map((step, idx) => `
                <div class="process-step reveal ${idx > 0 ? 'reveal-delay-' + (idx % 4) : ''}">
                    <span>${step.num}</span>
                    <div>
                        <h3>${step.title}</h3>
                        <p>${step.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // 6. EXPLORE COUNTRY
        const exploreLabel = document.getElementById('exploreLabel');
        if (exploreLabel) exploreLabel.textContent = `Discover ${data.name}`;

        const exploreTitle = document.getElementById('exploreTitle');
        if (exploreTitle) exploreTitle.textContent = `Experience the Best of ${data.name}`;

        const exploreDesc = document.getElementById('exploreDesc');
        if (exploreDesc) exploreDesc.textContent = data.explore.desc;

        const place1Img = document.getElementById('place1Img');
        const place1Name = document.getElementById('place1Name');
        const place1Desc = document.getElementById('place1Desc');
        if (place1Img) { place1Img.src = data.explore.place1.image; place1Img.alt = data.explore.place1.name; }
        if (place1Name) place1Name.textContent = data.explore.place1.name;
        if (place1Desc) place1Desc.textContent = data.explore.place1.desc;

        const place2Img = document.getElementById('place2Img');
        const place2Name = document.getElementById('place2Name');
        const place2Desc = document.getElementById('place2Desc');
        if (place2Img) { place2Img.src = data.explore.place2.image; place2Img.alt = data.explore.place2.name; }
        if (place2Name) place2Name.textContent = data.explore.place2.name;
        if (place2Desc) place2Desc.textContent = data.explore.place2.desc;

        const place3Img = document.getElementById('place3Img');
        const place3Name = document.getElementById('place3Name');
        const place3Desc = document.getElementById('place3Desc');
        if (place3Img) { place3Img.src = data.explore.place3.image; place3Img.alt = data.explore.place3.name; }
        if (place3Name) place3Name.textContent = data.explore.place3.name;
        if (place3Desc) place3Desc.textContent = data.explore.place3.desc;

        const place4Img = document.getElementById('place4Img');
        const place4Name = document.getElementById('place4Name');
        const place4Desc = document.getElementById('place4Desc');
        if (place4Img) { place4Img.src = data.explore.place4.image; place4Img.alt = data.explore.place4.name; }
        if (place4Name) place4Name.textContent = data.explore.place4.name;
        if (place4Desc) place4Desc.textContent = data.explore.place4.desc;

        // Travel Info
        const infoSeason = document.getElementById('infoSeason');
        if (infoSeason) infoSeason.textContent = data.travelInfo.bestSeason;

        const infoCurrency = document.getElementById('infoCurrency');
        if (infoCurrency) infoCurrency.textContent = data.travelInfo.currency;

        const infoLanguage = document.getElementById('infoLanguage');
        if (infoLanguage) infoLanguage.textContent = data.travelInfo.language;

        const infoTimeZone = document.getElementById('infoTimeZone');
        if (infoTimeZone) infoTimeZone.textContent = data.travelInfo.timeZone;

        // 7. FAQS
        const faqHeading = document.getElementById('faqHeading');
        if (faqHeading) faqHeading.textContent = `${data.name} Visa FAQs`;

        const faqWrapper = document.getElementById('faqWrapper');
        if (faqWrapper && data.faqs) {
            faqWrapper.innerHTML = data.faqs.map((faq, idx) => `
                <details class="faq-item reveal" ${idx === 0 ? 'open' : ''}>
                    <summary>${faq.q}</summary>
                    <p>${faq.a}</p>
                </details>
            `).join('');
        }

        // 8. FINAL CTA
        const ctaTitle = document.getElementById('ctaTitle');
        if (ctaTitle) ctaTitle.textContent = `Ready to Apply for Your ${data.name} Visa?`;

        const ctaApplyBtn = document.getElementById('ctaApplyBtn');
        if (ctaApplyBtn) ctaApplyBtn.href = `${(window.VISION_VISA_BASE_PATH || '')}/contact?country=${data.slug}`;

        // Re-initialize Lucide Icons & Scroll Animations
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Re-observe reveal elements for dynamically injected content
        const newReveals = document.querySelectorAll('.reveal:not(.active)');
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.05 });
            newReveals.forEach(el => obs.observe(el));
        } else {
            newReveals.forEach(el => el.classList.add('active'));
        }
  

        // Scroll to top automatically
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderCountryPage();
    });

    window.addEventListener('popstate', () => {
        renderCountryPage();
    });
})();
