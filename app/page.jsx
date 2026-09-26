import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import HeroSearchForm from '../components/HeroSearchForm';
import JourneyCTA from '../components/JourneyCTA';

export const metadata = {
    title: "Vision Visa | Visa Assistance for International Travel",

    description:
        "Vision Visa provides visa assistance for tourist, visitor, business, study and work visas, along with travel insurance, forex and international air ticket services.",

    keywords: [
        "Vision Visa",
        "visa consultant",
        "visa assistance",
        "visa services",
        "tourist visa",
        "visitor visa",
        "business visa",
        "study visa",
        "student visa",
        "work visa",
        "visa application assistance",
        "visa requirements",
        "travel insurance",
        "forex services",
        "international air tickets",
        "international travel services"
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
        canonical: "YOUR-VISION-VISA-DOMAIN/"
    },

    openGraph: {
        title: "Vision Visa | Visa Assistance for International Travel",

        description:
            "Get guidance for tourist, visitor, business, study and work visa applications, with travel insurance, forex and international air ticket services.",

        type: "website",

        siteName: "Vision Visa",

        url: "YOUR-VISION-VISA-DOMAIN/",

        locale: "en_IN",

        images: [
            {
                url: "YOUR-VISION-VISA-DOMAIN/images/vision-visa-home-og.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Visa - Visa and International Travel Services"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Vision Visa | Visa Assistance for International Travel",

        description:
            "Visa assistance for international travel, including tourist, visitor, business, study and work visas, plus travel insurance, forex and air tickets.",

        images: [
            "YOUR-VISION-VISA-DOMAIN/images/vision-visa-home-og.jpg"
        ]
    }
};

export default function HomePage() {
    return (
    <main>
      {/*  Navigation  */}
        {/*  Navigation  */}
        {/*  Navigation  */}
    
    {/*  Hero & Search Section  */}
    <section className="hero-section">
        {/*  Light Travel Background & Soft Radial Protective Overlay  */}
        <div className="hero-bg-canvas" aria-hidden="true">
            <div className="hero-bg-image-layer"></div>
            <div className="hero-center-radial-overlay"></div>

            {/* Single Animated Airplane along curved travel route */}
            <svg className="hero-flight-route-canvas" viewBox="0 0 1717 916" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="heroFlightPath"
                    d="M 130,250 C 460,90 1120,310 1580,215"
                    fill="none"
                    stroke="#1E73DC"
                    strokeWidth="2"
                    strokeDasharray="5 7"
                    strokeOpacity="0.4"
                    className="hero-route-stroke"
                />

                {/* Single Animated Flying Airplane */}
                <g className="hero-flying-plane-group">
                    <g transform="translate(-14, -14)">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#1E73DC">
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" transform="rotate(90 12 12)" />
                        </svg>
                    </g>
                    <animateMotion
                        dur="12s"
                        repeatCount="indefinite"
                        rotate="auto"
                        keyPoints="0;0.94;0.98;1"
                        keyTimes="0;0.90;0.95;1"
                        keySplines="0.45 0.05 0.55 0.95; 0 0 1 1; 0 0 1 1"
                        calcMode="spline"
                    >
                        <mpath href="#heroFlightPath" />
                    </animateMotion>
                    <animate
                        attributeName="opacity"
                        values="0;0.85;0.85;0.85;0;0"
                        keyTimes="0;0.05;0.88;0.94;0.98;1"
                        dur="12s"
                        repeatCount="indefinite"
                    />
                </g>
            </svg>
        </div>

        <div className="container hero-content-wrapper">
            <div className="hero-header reveal">
                <span className="section-label">
                    VISA &amp; TRAVEL SERVICES
                </span>

                <h1 className="hero-main-title">
                    Your Journey Starts With{' '}
                    <span className="hero-title-emphasize">the Right Visa.</span>
                </h1>

                <p className="hero-sub-title">
                    Visa assistance for travel, study, work and business, with
                    travel insurance, forex and air tickets under one roof.
                </p>

                <div className="hero-cta-buttons">
                    <Link href="/contact" className="btn btn-primary">
                        Apply Now
                    </Link>

                    <Link href="/contact" className="btn btn-secondary">
                        Talk to Our Team
                    </Link>
                </div>
            </div>

            <div className="search-container reveal">
                <HeroSearchForm />
            </div>
        </div>
    </section>

    {/*  Destinations Grid  */}
    <section className="destinations" style={{"paddingTop":"36px","paddingBottom":"48px"}}>
        <div className="container">
            <div className="destination-grid">
            {/*  Row 1: 1 Large + 2 Standard  */}

<Link href="/country/argentina" className="card reveal">
    <img src={getAssetPath("/images/Argentina.webp")} alt="Argentina" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">South America</span>
        <h3 className="card-title">Argentina</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/australia" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Australia.webp")} alt="Australia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Oceania</span>
        <h3 className="card-title">Australia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/austria" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Austria.webp")} alt="Austria" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Austria</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 2: 4 Standard  */}

<Link href="/country/azerbaijan" className="card reveal">
    <img src={getAssetPath("/images/Azerbaijan.webp")} alt="Azerbaijan" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Azerbaijan</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/bahrain" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Bahrain.webp")} alt="Bahrain" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Bahrain</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/bangladesh" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Bangladesh.webp")} alt="Bangladesh" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Bangladesh</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/belgium" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Belgium.webp")} alt="Belgium" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Belgium</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 3: 1 Normal + 1 Large + 1 Normal  */}

<Link href="/country/brazil" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Brazil.webp")} alt="Brazil" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">South America</span>
        <h3 className="card-title">Brazil</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/canada" className="card reveal">
    <img src={getAssetPath("/images/Canada.webp")} alt="Canada" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">North America</span>
        <h3 className="card-title">Canada</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/china" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/China.webp")} alt="China" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">China</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 4: 4 Standard  */}

<Link href="/country/costa-rica" className="card reveal">
    <img src={getAssetPath("/images/Costa-Rica.webp")} alt="Costa Rica" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Central America</span>
        <h3 className="card-title">Costa Rica</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/croatia" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Croatia.webp")} alt="Croatia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Croatia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/cyprus" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Cyprus.webp")} alt="Cyprus" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Cyprus</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/czech-republic" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Czech-Republic.webp")} alt="Czech Republic" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Czech Republic</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 5: 2 Normal + 1 Large  */}

<Link href="/country/denmark" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Copenhagen-denmark.webp")} alt="Denmark" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Denmark</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/egypt" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Egypt.webp")} alt="Egypt" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Africa</span>
        <h3 className="card-title">Egypt</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/estonia" className="card reveal">
    <img src={getAssetPath("/images/Estonia.webp")} alt="Estonia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Estonia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 6: 1 Large + 2 Standard  */}

<Link href="/country/finland" className="card reveal">
    <img src={getAssetPath("/images/Finland.webp")} alt="Finland" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Finland</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/france" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/France.webp")} alt="France" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">France</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/georgia" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Georgia.webp")} alt="Georgia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Georgia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 7: 4 Standard  */}

<Link href="/country/germany" className="card reveal">
    <img src={getAssetPath("/images/Germany.webp")} alt="Germany" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Germany</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/ghana" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Ghana.webp")} alt="Ghana" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Africa</span>
        <h3 className="card-title">Ghana</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/greece" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Greece.webp")} alt="Greece" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Greece</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/haiti" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Haiti.webp")} alt="Haiti" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Caribbean</span>
        <h3 className="card-title">Haiti</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 8: 1 Normal + 1 Large + 1 Normal  */}

<Link href="/country/hungary" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Hungary.webp")} alt="Hungary" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Hungary</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/iceland" className="card reveal">
    <img src={getAssetPath("/images/Iceland.webp")} alt="Iceland" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Iceland</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/indonesia" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Indonesia-Bali-.webp")} alt="Indonesia (Bali)" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Indonesia (Bali)</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 9: 4 Standard  */}

<Link href="/country/iran" className="card reveal">
    <img src={getAssetPath("/images/Iran.webp")} alt="Iran" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Iran</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/ireland" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Ireland.webp")} alt="Ireland" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Ireland</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/israel" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Israel.webp")} alt="Israel" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Israel</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/italy" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Italy.webp")} alt="Italy" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Italy</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 10: 2 Normal + 1 Large  */}

<Link href="/country/japan" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Japan.webp")} alt="Japan" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Japan</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/kuwait" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Kuwait.webp")} alt="Kuwait" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Kuwait</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/luxembourg" className="card reveal">
    <img src={getAssetPath("/images/Luxembourg.webp")} alt="Luxembourg" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Luxembourg</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 11: 1 Large + 2 Standard  */}

<Link href="/country/madagascar" className="card reveal">
    <img src={getAssetPath("/images/Madagascar-2048x1366.webp")} alt="Madagascar" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Africa</span>
        <h3 className="card-title">Madagascar</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/malaysia" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Malaysia.webp")} alt="Malaysia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Malaysia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/malta" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Malta.webp")} alt="Malta" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Malta</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 12: 4 Standard  */}

<Link href="/country/morocco" className="card reveal">
    <img src={getAssetPath("/images/Morocco.webp")} alt="Morocco" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Africa</span>
        <h3 className="card-title">Morocco</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/netherlands" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Netherlands.webp")} alt="Netherlands" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Netherlands</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/new-zealand" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/New-Zealand.webp")} alt="New Zealand" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Oceania</span>
        <h3 className="card-title">New Zealand</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/norway" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Norway.webp")} alt="Norway" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Norway</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 13: 1 Normal + 1 Large + 1 Normal  */}

<Link href="/country/oman" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Oman.webp")} alt="Oman" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Oman</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/panama" className="card reveal">
    <img src={getAssetPath("/images/Panama.webp")} alt="Panama" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Central America</span>
        <h3 className="card-title">Panama</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/philippines" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Philippines.webp")} alt="Philippines" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Philippines</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 14: 4 Standard  */}

<Link href="/country/poland" className="card reveal">
    <img src={getAssetPath("/images/Poland.webp")} alt="Poland" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Poland</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/portugal" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Portugal.webp")} alt="Portugal" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Portugal</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/russia" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Russia.webp")} alt="Russia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe / Asia</span>
        <h3 className="card-title">Russia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/saudi-arabia" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Saudi-Arabia.webp")} alt="Saudi Arabia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Saudi Arabia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 15: 2 Normal + 1 Large  */}

<Link href="/country/singapore" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Singapore.webp")} alt="Singapore" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Singapore</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/slovakia" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Slovakia.webp")} alt="Slovakia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Slovakia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/slovenia" className="card reveal">
    <img src={getAssetPath("/images/Slovenia.webp")} alt="Slovenia" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Slovenia</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 16: 1 Large + 2 Standard  */}

<Link href="/country/south-africa" className="card reveal">
    <img src={getAssetPath("/images/South-Africa.webp")} alt="South Africa" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Africa</span>
        <h3 className="card-title">South Africa</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/south-korea" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/South-Korea.webp")} alt="South Korea" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">South Korea</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/spain" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Spain.webp")} alt="Spain" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Spain</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 17: 4 Standard  */}

<Link href="/country/sri-lanka" className="card reveal">
    <img src={getAssetPath("/images/Sri-lanka.webp")} alt="Sri Lanka" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Sri Lanka</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/sweden" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Sweden.webp")} alt="Sweden" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Sweden</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/switzerland" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/Switzerland.webp")} alt="Switzerland" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Switzerland</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/taiwan" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Taiwan.webp")} alt="Taiwan" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Taiwan</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 18: 1 Normal + 1 Large + 1 Normal  */}

<Link href="/country/thailand" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Thailand.webp")} alt="Thailand" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Thailand</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/turkey" className="card reveal">
    <img src={getAssetPath("/images/Turkey.webp")} alt="Turkey" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe / Asia</span>
        <h3 className="card-title">Turkey</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/united-arab-emirates" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/United-Arab-Emirate-UAE-DUBAI.webp")} alt="UAE" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">UAE</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 19: 4 Standard  */}

<Link href="/country/ukraine" className="card reveal">
    <img src={getAssetPath("/images/Ukraine.webp")} alt="Ukraine" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">Ukraine</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/united-kingdom" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/United-Kingdom.webp")} alt="United Kingdom" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Europe</span>
        <h3 className="card-title">United Kingdom</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/united-states" className="card reveal reveal-delay-2">
    <img src={getAssetPath("/images/USA.webp")} alt="USA" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">North America</span>
        <h3 className="card-title">USA</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

<Link href="/country/vietnam" className="card reveal reveal-delay-3">
    <img src={getAssetPath("/images/Vietnam.webp")} alt="Vietnam" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Asia</span>
        <h3 className="card-title">Vietnam</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            {/*  Row 20: 2 Normal + 1 Large  */}

<Link href="/country/yemen" className="card reveal reveal-delay-1">
    <img src={getAssetPath("/images/Yemen.webp")} alt="Yemen" className="card-img" loading="lazy" />
    <div className="card-overlay">
        <span className="card-tag">Middle East</span>
        <h3 className="card-title">Yemen</h3>
        <div className="card-info">
            <div className="card-arrow"><i data-lucide="arrow-right"></i></div>
        </div>
    </div>
</Link>

            </div>
</div></section>

    {/*  Why Vision Visa  */}
    <section className="guidance-section bg-off-white">
    <div className="container">

        <div
            className="reveal mb-48"
            style={{
                "textAlign": "center",
                "maxWidth": "640px",
                "marginLeft": "auto",
                "marginRight": "auto"
            }}
        >
            <span className="section-label">
                WHY VISION VISA
            </span>

            <h2 className="display-text mb-12">
                Visa guidance without the confusion.
            </h2>

            <p className="body-large">
                Clear advice, practical support and everything you need
                to prepare for your international journey.
            </p>
        </div>


        <div className="guidance-grid">

            <div className="guidance-card reveal">
                <div className="guidance-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                </div>
                <div className="guidance-content">
                    <h3 className="guidance-title">
                        Clear Guidance
                    </h3>
                    <div className="guidance-accent-line"></div>
                    <p className="guidance-desc">
                        Understand your visa requirements and next steps without complicated explanations.
                    </p>
                </div>
            </div>

            <div className="guidance-card reveal reveal-delay-1">
                <div className="guidance-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="m9 15 2 2 4-4" />
                    </svg>
                </div>
                <div className="guidance-content">
                    <h3 className="guidance-title">
                        Document Support
                    </h3>
                    <div className="guidance-accent-line"></div>
                    <p className="guidance-desc">
                        Get practical help understanding and preparing the documents needed for your application.
                    </p>
                </div>
            </div>

            <div className="guidance-card reveal reveal-delay-2">
                <div className="guidance-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </div>
                <div className="guidance-content">
                    <h3 className="guidance-title">
                        Straightforward Process
                    </h3>
                    <div className="guidance-accent-line"></div>
                    <p className="guidance-desc">
                        Know what to expect at each stage of your visa application with a simple and transparent process.
                    </p>
                </div>
            </div>

            <div className="guidance-card reveal">
                <div className="guidance-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
                    </svg>
                </div>
                <div className="guidance-content">
                    <h3 className="guidance-title">
                        Travel Services
                    </h3>
                    <div className="guidance-accent-line"></div>
                    <p className="guidance-desc">
                        Visa assistance, travel insurance, forex and air tickets, all in one place.
                    </p>
                </div>
            </div>

            <div className="guidance-card reveal reveal-delay-1">
                <div className="guidance-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                </div>
                <div className="guidance-content">
                    <h3 className="guidance-title">
                        Personal Support
                    </h3>
                    <div className="guidance-accent-line"></div>
                    <p className="guidance-desc">
                        Have a question? Speak with our team about your travel and visa plans.
                    </p>
                </div>
            </div>

            <div className="guidance-card reveal reveal-delay-2">
                <div className="guidance-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </div>
                <div className="guidance-content">
                    <h3 className="guidance-title">
                        International Travel
                    </h3>
                    <div className="guidance-accent-line"></div>
                    <p className="guidance-desc">
                        Get assistance for different visa types and international travel needs.
                    </p>
                </div>
            </div>

        </div>

    </div>
</section>

    {/*  Services  */}
    <section className="services-section">
    <div className="container">

        <div className="reveal services-header">

            <span className="section-label">
                OUR SERVICES
            </span>

            <h2 className="display-text">
                Everything You Need for Your Journey
            </h2>

            <p className="body-large">
                From visas to flights, we help you prepare for international travel.
            </p>

        </div>


        <div className="category-grid reveal">

            <Link
                href="/visas"
                className="category-card"
            >
                <div className="category-card-content">

                    <h3>
                        Visa Services
                    </h3>

                    <p>
                        Assistance for tourist, visitor, business, study and work visas.
                    </p>

                </div>

                <div className="category-card-cta">
                    <span>
                        Explore Visas
                    </span>

                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            <Link
                href="/travel-insurance"
                className="category-card"
            >
                <div className="category-card-content">

                    <h3>
                        Travel Insurance
                    </h3>

                    <p>
                        Travel insurance options to help protect you on your journey.
                    </p>

                </div>

                <div className="category-card-cta">
                    <span>
                        Explore Insurance
                    </span>

                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            <Link
                href="/forex"
                className="category-card"
            >
                <div className="category-card-content">

                    <h3>
                        Forex
                    </h3>

                    <p>
                        Foreign exchange services for your international travel needs.
                    </p>

                </div>

                <div className="category-card-cta">
                    <span>
                        Explore Forex
                    </span>

                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            <Link
                href="/air-tickets"
                className="category-card"
            >
                <div className="category-card-content">

                    <h3>
                        Air Tickets
                    </h3>

                    <p>
                        International flight booking assistance for your travel plans.
                    </p>

                </div>

                <div className="category-card-cta">
                    <span>
                        Explore Flights
                    </span>

                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>

        </div>

    </div>
</section>


    {/*  Final CTA  */}
    <JourneyCTA />

    {/*  Footer  */}
    </main>
  );
}
