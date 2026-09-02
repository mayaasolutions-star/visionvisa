import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import JourneyCTA from '../../components/JourneyCTA';

export const metadata = {
    title: "Visa Services | Tourist, Business, Study & Work Visas | Vision Visa",

    description:
        "Explore Vision Visa for tourist, visitor, business, study, family and work visa assistance. Get clear guidance on visa requirements, documents and the application process.",

    keywords: [
        "Vision Visa",
        "visa services",
        "visa assistance",
        "tourist visa",
        "visitor visa",
        "business visa",
        "study visa",
        "family visa",
        "work visa",
        "visa requirements",
        "visa documents",
        "visa application",
        "visa application assistance",
        "international visa services"
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
        canonical: "YOUR-VISION-VISA-DOMAIN/visas"
    },

    openGraph: {
        title: "Visa Services | Tourist, Business, Study & Work Visas | Vision Visa",

        description:
            "Visa assistance for tourist, business, study, family and work travel. Vision Visa helps Indian passport holders with clear requirements and application steps.",

        type: "website",

        siteName: "Vision Visa",

        url: "YOUR-VISION-VISA-DOMAIN/visas",

        locale: "en_IN",

        images: [
            {
                url: "YOUR-VISION-VISA-DOMAIN/images/vision-visa-services-og.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Visa Services | Visa Application Guidance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Visa Services | Tourist, Business, Study & Work Visas | Vision Visa",

        description:
            "Explore visa options for tourism, business, education and work with Vision Visa.",

        images: [
            "YOUR-VISION-VISA-DOMAIN/images/vision-visa-services-og.jpg"
        ]
    }
};

export default function SERVICES_Page() {
    return (
    <main>
      {/*  Navigation  */}
        {/*  Navigation  */}
    

    <section className="visas-inner-hero">
        <div className="hero-pattern-dots"></div>
        <div className="container">
            <div className="visas-hero-grid">
                {/* IMAGE LEFT */}
                <div className="visas-hero-frame reveal">
                    <img src={getAssetPath("/images/visas-choosewithconfidence.webp")} alt="Visa Assistance & Application Guidance" className="hero-frame-img" />
                    <div className="editorial-image-overlay"></div>

                    {/* Integrated Subtle Visa Journey Route Animation */}
                    <svg className="visas-route-svg" viewBox="0 0 500 310" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                            <linearGradient id="visaRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#F97316" stopOpacity="0.5" />
                                <stop offset="50%" stopColor="#F97316" stopOpacity="0.95" />
                                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.7" />
                            </linearGradient>
                        </defs>
                        
                        {/* Animated Route Curve */}
                        <path d="M 130 190 Q 240 100 370 130" fill="none" stroke="url(#visaRouteGrad)" strokeWidth="2.5" className="visas-anim-path" />
                        
                        {/* Origin Point */}
                        <circle cx="130" cy="190" r="4.5" fill="#F97316" />
                        <circle cx="130" cy="190" r="10" fill="none" stroke="#F97316" strokeWidth="1.5" className="visas-pulse-ring" />
                        
                        {/* Destination Point */}
                        <circle cx="370" cy="130" r="4.5" fill="#1D4ED8" />
                        <circle cx="370" cy="130" r="10" fill="none" stroke="#1D4ED8" strokeWidth="1.5" className="visas-pulse-ring-dest" />

                        {/* Micro Label */}
                        <g transform="translate(138, 204)">
                            <rect x="0" y="0" width="76" height="18" rx="4" fill="rgba(10, 17, 40, 0.72)" />
                            <text x="38" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="700" letterSpacing="0.8px">VISA JOURNEY</text>
                        </g>
                    </svg>
                </div>

                {/* CONTENT RIGHT */}
                <div className="visas-hero-content reveal reveal-delay-1">
                    <span className="editorial-tag">
                        VISA ASSISTANCE & CATEGORIES
                    </span>

                    <h1 className="editorial-title">
                        The journey starts with <br />
                        <span className="accent">the right visa.</span>
                    </h1>

                    <p className="editorial-subtitle">
                        Whether you are travelling for tourism, corporate meetings, university admission, or joining family abroad, Vision Visa ensures your documentation and application meet official consulate standards with complete accuracy.
                    </p>

                    <div>
                        <Link href="/contact" className="btn btn-primary magnetic">
                            Enquire About Your Visa
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section" style={{"paddingTop":"60px","paddingBottom":"80px"}}>
    <div className="container">

        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(3, 1fr)",
                "gap": "32px"
            }}
        >

            {/* Tourist Visa */}

            <Link
                href="/tourist-visa"
                className="category-card reveal"
            >
                <div className="category-icon">
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Tourist Visa
                </h3>

                <p className="body-base">
                    Planning a holiday or short trip abroad? Get guidance on
                    visa requirements, documents and the application process.
                </p>

                <div className="category-card-cta">
                    <span>Explore Tourist Visa</span>
                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            {/* Business Visa */}

            <Link
                href="/business-visa"
                className="category-card reveal reveal-delay-1"
            >
                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Business Visa
                </h3>

                <p className="body-base">
                    Travelling for meetings, conferences or business visits?
                    Understand the visa requirements for your trip.
                </p>

                <div className="category-card-cta">
                    <span>Explore Business Visa</span>
                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            {/* Study Visa */}

            <Link
                href="/study-visa"
                className="category-card reveal reveal-delay-2"
            >
                <div className="category-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Study Visa
                </h3>

                <p className="body-base">
                    Planning to study abroad? Get guidance on the visa process,
                    documents and application requirements.
                </p>

                <div className="category-card-cta">
                    <span>Explore Study Visa</span>
                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            {/* Family Visa */}

            <Link
                href="/family-visa"
                className="category-card reveal"
            >
                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Family Visa
                </h3>

                <p className="body-base">
                    Joining your family abroad? Get guidance on family
                    reunification and dependent visa requirements.
                </p>

                <div className="category-card-cta">
                    <span>Explore Family Visa</span>
                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            {/* Visitor Visa */}

            <Link
                href="/visitor-visa"
                className="category-card reveal reveal-delay-1"
            >
                <div className="category-icon">
                    <i data-lucide="heart-handshake"></i>
                </div>

                <h3 className="mb-24">
                    Visitor Visa
                </h3>

                <p className="body-base">
                    Visiting family, friends or attending an event abroad?
                    Understand the requirements before you apply.
                </p>

                <div className="category-card-cta">
                    <span>Explore Visitor Visa</span>
                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>


            {/* Work Visa */}

            <Link
                href="/work-visa"
                className="category-card reveal reveal-delay-2"
            >
                <div className="category-icon">
                    <i data-lucide="building-2"></i>
                </div>

                <h3 className="mb-24">
                    Work Visa
                </h3>

                <p className="body-base">
                    Moving abroad for work? Understand your work visa
                    requirements, documents and application steps.
                </p>

                <div className="category-card-cta">
                    <span>Explore Work Visa</span>
                    <i data-lucide="arrow-right"></i>
                </div>
            </Link>

        </div>

    </div>
</section>



<section>
    <div className="container">

        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "1fr 1fr",
                "gap": "80px",
                "alignItems": "center"
            }}
        >

            <div className="reveal">

                <span className="eyebrow">
                    BEFORE YOU APPLY
                </span>

                <h2 className="mb-24">
                    Know your visa requirements before you apply.
                </h2>

                <p className="body-base mb-24">
                    Visa requirements can vary depending on your destination,
                    purpose of travel and visa type.
                </p>

                <p className="body-base mb-48">
                    Vision Visa helps you understand the documents,
                    eligibility requirements and application steps relevant
                    to your journey.
                </p>

                <ul
                    className="body-base"
                    style={{
                        "listStyle": "none",
                        "display": "flex",
                        "flexDirection": "column",
                        "gap": "16px"
                    }}
                >

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>
                        Understand your visa type
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>
                        Check the required documents
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>
                        Understand the application process
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>
                        Get guidance from our team
                    </li>

                </ul>

            </div>


            <div className="reveal reveal-delay-1">

                <img
                    src={getAssetPath("/images/visas-beforeyouapply.webp")}
                    alt="Visa application documents and travel planning"
                    style={{
                        "width": "100%",
                        "height": "500px",
                        "objectFit": "cover",
                        "borderRadius": "40px"
                    }}
                />

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "1fr 1fr",
                "gap": "80px",
                "alignItems": "center"
            }}
        >

            <div className="reveal">

                <img
                    src={getAssetPath("/images/visas-visaapplication.webp")}
                    alt="Visa application and travel documents"
                    style={{
                        "width": "100%",
                        "height": "500px",
                        "objectFit": "cover",
                        "borderRadius": "40px"
                    }}
                />

            </div>


            <div className="reveal reveal-delay-1">

                <span className="eyebrow">
                    VISA APPLICATION
                </span>

                <h2 className="mb-24">
                    A clearer way to prepare your visa application.
                </h2>

                <p className="body-base mb-24">
                    The right documents and information can make the visa
                    application process easier to manage.
                </p>

                <p className="body-base mb-48">
                    Vision Visa helps you understand what may be required for
                    your destination and visa type, so you can prepare before
                    submitting your application.
                </p>


                <ul
                    className="body-base"
                    style={{
                        "listStyle": "none",
                        "display": "flex",
                        "flexDirection": "column",
                        "gap": "16px"
                    }}
                >

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Understand the visa requirements
                    </li>


                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Prepare the required documents
                    </li>


                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Understand the application steps
                    </li>


                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Get help with your visa questions
                    </li>

                </ul>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                VISA APPLICATION SUPPORT
            </span>

            <h2>
                Prepare with the right information.
            </h2>

            <p className="body-large">
                Visa requirements vary by destination and purpose of travel.
                Knowing what to prepare before you apply can make the process
                much easier.
            </p>

        </div>


        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(3, 1fr)",
                "gap": "32px"
            }}
        >

            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="search-check"></i>
                </div>

                <h3 className="mb-24">
                    Check Requirements
                </h3>

                <p className="body-base">
                    Understand the visa requirements that apply to your
                    destination and reason for travel.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Prepare Documents
                </h3>

                <p className="body-base">
                    Get your passport, supporting documents and other required
                    information ready before applying.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="clipboard-check"></i>
                </div>

                <h3 className="mb-24">
                    Understand the Process
                </h3>

                <p className="body-base">
                    Know the application steps and what to expect before you
                    submit your visa application.
                </p>

            </div>

        </div>


        <div
            className="reveal"
            style={{
                "marginTop": "48px",
                "textAlign": "center"
            }}
        >

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Get Visa Assistance
            </Link>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "1fr 1fr",
                "gap": "80px",
                "alignItems": "center"
            }}
        >

            <div className="reveal">

                <span className="eyebrow">
                    CHOOSE WITH CONFIDENCE
                </span>

                <h2 className="mb-24">
                    The right visa starts with the right information.
                </h2>

                <p className="body-base mb-24">
                    Your visa type depends on the purpose of your travel.
                    Whether you are visiting, studying, working, joining
                    family or travelling for business, start with the option
                    that matches your plans.
                </p>

                <p className="body-base mb-48">
                    Explore the relevant visa page to understand the process,
                    documents and next steps before you apply.
                </p>

                <ul
                    className="body-base mb-48"
                    style={{
                        "listStyle": "none",
                        "display": "flex",
                        "flexDirection": "column",
                        "gap": "16px"
                    }}
                >

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Tourist and Visitor Visas
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Business and Work Visas
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Study Visa
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i
                            data-lucide="check"
                            className="text-accent"
                        ></i>

                        Family Visa
                    </li>

                </ul>

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Talk to Vision Visa
                </Link>

            </div>


            <div className="reveal reveal-delay-1">

                <img
                    src={getAssetPath("/images/visas-choosewithconfidence.webp")}
                    alt="International travel and visa planning"
                    style={{
                        "width": "100%",
                        "height": "500px",
                        "objectFit": "cover",
                        "borderRadius": "40px"
                    }}
                />

            </div>

        </div>

    </div>
</section>

        <JourneyCTA
          eyebrow="READY TO APPLY?"
          title="Know Which Visa You"
          titleHighlight="Need?"
          description="Tell us your destination and reason for travel. We’ll help you understand the visa requirements and what to do next."
          primaryBtnText="Start Your Application"
        />

        {/*  Footer  */}
    </main>
  );
}
