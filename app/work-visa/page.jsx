import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Work Visa Assistance | Work Visa Services | Vision Visa",

    description:
        "Get work visa assistance from Vision Visa for working abroad. Understand work visa requirements, documents and the application process for your destination.",

    keywords: [
        "Vision Visa work visa",
        "work visa",
        "work visa assistance",
        "work visa services",
        "work visa application",
        "work visa requirements",
        "work visa documents",
        "work visa consultant",
        "work visa assistance India",
        "employment visa",
        "employment visa assistance",
        "work permit visa",
        "work permit assistance",
        "visa for working abroad",
        "international work visa",
        "work visa application assistance"
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
        canonical: "https://www.visionvisa.in/work-visa"
    },

    openGraph: {
        title: "Work Visa Assistance | Work Visa Services | Vision Visa",

        description:
            "Vision Visa helps you understand work visa requirements, prepare documents and navigate the application process for working abroad.",

        type: "website",
        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/work-visa",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/workvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Vision Visa Work Visa Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Work Visa Assistance | Work Visa Services | Vision Visa",

        description:
            "Get guidance on work visa requirements, documents and applications for working abroad with Vision Visa.",

        images: [
            "https://www.visionvisa.in/images/workvisa-hero.webp"
        ]
    }
};

export default function WORK_VISA_Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.visionvisa.in"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Visas",
                        "item": "https://www.visionvisa.in/visas"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Work Visa",
                        "item": "https://www.visionvisa.in/work-visa"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Work Visa Assistance",
                "provider": {
                    "@type": "TravelAgency",
                    "name": "Vision Visa",
                    "url": "https://www.visionvisa.in"
                },
                "serviceType": "Employment Visa Guidance",
                "description": "Professional guidance for overseas employment visas, work permits, sponsor letter validation, and application filing assistance."
            }
        ]
    };

    return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*  Navigation  */}
        {/*  Navigation  */}
    

    <section
    style={{
        "paddingTop": "140px",
        "paddingBottom": "100px",
        "background": "var(--off-white)"
    }}
>
    <div
        className="container"
        style={{
            "display": "grid",
            "gridTemplateColumns": "1fr 1fr",
            "gap": "80px",
            "alignItems": "center"
        }}
    >

        <div className="reveal">

            <span className="eyebrow">
                WORK VISA
            </span>

            <h1 className="display-text mb-24">
                Work Visa Assistance for
                <span className="text-accent"> Your Career Abroad.</span>
            </h1>

            <p className="body-large">
                Planning to work in another country? Vision Visa helps you
                understand work visa requirements, prepare your documents and
                navigate the application process.
            </p>

        </div>


        <div className="reveal reveal-delay-1">

            <img
                src={getAssetPath("/images/workvisa-hero.webp")}
                alt="Professionals working together in an international workplace"
                style={{
                    "width": "100%",
                    "height": "400px",
                    "objectFit": "cover",
                    "borderRadius": "24px"
                }}
            />

        </div>

    </div>
</section>

<section>
    <div className="container">

        {/* Main Content + CTA */}
        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "1.5fr 1fr",
                "gap": "80px",
                "alignItems": "start"
            }}
        >

            <div className="reveal">

                <span className="eyebrow">
                    WORK VISA ASSISTANCE
                </span>

                <h2 className="mb-24">
                    Take your next career step with the right visa guidance.
                </h2>

                <p className="body-base mb-24">
                    Working abroad can open new opportunities, but every
                    country has its own visa rules and application process.
                </p>

                <p className="body-base">
                    Vision Visa helps you understand the requirements for your
                    destination, prepare the necessary documents and navigate
                    the work visa application process.
                </p>

            </div>


            {/* CTA */}

            <div className="reveal reveal-delay-2">

                <div
                    style={{
                        "background": "var(--primary)",
                        "color": "var(--white)",
                        "padding": "40px",
                        "borderRadius": "24px"
                    }}
                >

                    <span
                        className="eyebrow"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        WORK VISA ASSESSMENT
                    </span>

                    <h3
                        className="mb-24"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        Planning to work abroad?
                    </h3>

                    <p
                        className="body-base mb-32"
                        style={{
                            "color": "rgba(255,255,255,0.75)"
                        }}
                    >
                        Share your destination, employment details and travel
                        plans. Our team can help you understand the applicable
                        work visa requirements and next steps.
                    </p>

                    <Link
                        href="/contact"
                        className="btn btn-primary"
                        style={{
                            "background": "var(--white)",
                            "color": "var(--primary)",
                            "width": "100%"
                        }}
                    >
                        Discuss Your Work Visa
                    </Link>

                </div>

            </div>

        </div>


        {/* Four Cards - FULL WIDTH */}

        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
                "gap": "32px",
                "marginTop": "48px"
            }}
        >

            {/* Card 1 */}

            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="user-check"></i>
                </div>

                <h3 className="mb-24">
                    Profile & Eligibility
                </h3>

                <p className="body-small">
                    Understand the visa requirements that may apply to
                    your profession, employment and destination.
                </p>

            </div>


            {/* Card 2 */}

            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Employment Details
                </h3>

                <p className="body-small">
                    Get guidance on the documents and employment
                    information that may be required for your application.
                </p>

            </div>


            {/* Card 3 */}

            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Document Guidance
                </h3>

                <p className="body-small">
                    Understand the supporting documents needed for your
                    work visa application and prepare them correctly.
                </p>

            </div>


            {/* Card 4 */}

            <div className="category-card reveal reveal-delay-3">

                <div className="category-icon">
                    <i data-lucide="globe-2"></i>
                </div>

                <h3 className="mb-24">
                    International Opportunities
                </h3>

                <p className="body-small">
                    Get guidance for work visa applications across
                    international destinations based on your travel
                    and employment plans.
                </p>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                WORK VISA REQUIREMENTS
            </span>

            <h2>
                Know what you need before you apply.
            </h2>

            <p className="body-large">
                Work visa requirements vary by country, job, employer and
                visa category. We help you understand the documents and
                information relevant to your application.
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
                    <i data-lucide="passport"></i>
                </div>

                <h3 className="mb-24">
                    Passport & Personal Documents
                </h3>

                <p className="body-base">
                    A valid passport and personal documents are usually an
                    important part of a work visa application. Requirements
                    depend on the destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Job & Employment Details
                </h3>

                <p className="body-base">
                    Your job offer, employment information and other
                    job-related documents may be required depending on the
                    visa category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Education & Qualifications
                </h3>

                <p className="body-base">
                    Some work visa categories may require evidence of your
                    education, professional qualifications, skills or work
                    experience.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Supporting Documents
                </h3>

                <p className="body-base">
                    Additional documents may be required based on your
                    destination, employer, profession and individual
                    circumstances.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="clipboard-check"></i>
                </div>

                <h3 className="mb-24">
                    Application Requirements
                </h3>

                <p className="body-base">
                    Understand the forms, supporting information and other
                    requirements that may apply before submitting your
                    application.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="search-check"></i>
                </div>

                <h3 className="mb-24">
                    Application Review
                </h3>

                <p className="body-base">
                    Vision Visa can help you review your information and
                    understand the next steps before you proceed with your
                    work visa application.
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

            <p
                className="body-small"
                style={{
                    "maxWidth": "750px",
                    "margin": "0 auto 24px"
                }}
            >
                Work visa requirements differ between countries and visa
                categories. Always check the latest requirements of the
                relevant embassy, consulate or immigration authority.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Check Your Work Visa Requirements
            </Link>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                WORK VISA PROCESS
            </span>

            <h2>
                Understand the work visa process before you apply.
            </h2>

            <p className="body-large">
                From checking your requirements to preparing your documents,
                a clear process can make your work visa application easier to
                manage.
            </p>

        </div>


        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(4, 1fr)",
                "gap": "24px"
            }}
        >

            <div className="category-card reveal">

                <span className="eyebrow">
                    01
                </span>

                <div className="category-icon">
                    <i data-lucide="user-check"></i>
                </div>

                <h3 className="mb-24">
                    Discuss Your Plans
                </h3>

                <p className="body-base">
                    Share your destination, job details, qualifications and
                    travel plans so the applicable visa requirements can be
                    understood.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <span className="eyebrow">
                    02
                </span>

                <div className="category-icon">
                    <i data-lucide="clipboard-list"></i>
                </div>

                <h3 className="mb-24">
                    Check the Requirements
                </h3>

                <p className="body-base">
                    Understand the work visa category, eligibility conditions
                    and supporting documents relevant to your destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <span className="eyebrow">
                    03
                </span>

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Prepare Your Application
                </h3>

                <p className="body-base">
                    Organise your passport, employment documents,
                    qualifications and other supporting information required
                    for the application.
                </p>

            </div>


            <div className="category-card reveal">

                <span className="eyebrow">
                    04
                </span>

                <div className="category-icon">
                    <i data-lucide="send"></i>
                </div>

                <h3 className="mb-24">
                    Submit Your Application
                </h3>

                <p className="body-base">
                    Complete and submit your application through the applicable
                    process and follow any further instructions from the
                    relevant authority.
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

            <p
                className="body-small"
                style={{
                    "maxWidth": "750px",
                    "margin": "0 auto"
                }}
            >
                Work visa procedures and processing times vary by destination,
                employer and visa category. The final decision is made by the
                relevant immigration authority.
            </p>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div
            className="section-heading reveal"
            style={{
                "maxWidth": "800px"
            }}
        >

            <span className="eyebrow">
                WORK VISA FAQS
            </span>

            <h2>
                Work visa questions, answered.
            </h2>

            <p className="body-large">
                Planning to work abroad? Here are some common questions
                professionals ask before starting a work visa application.
            </p>

        </div>


        <div
            style={{
                "maxWidth": "900px",
                "margin": "0 auto",
                "display": "flex",
                "flexDirection": "column",
                "gap": "16px"
            }}
        >

            <div className="category-card reveal">

                <h3 className="mb-24">
                    What is a work visa?
                </h3>

                <p className="body-base">
                    A work visa is a visa or work authorisation that may allow
                    an eligible foreign national to work in a country for a
                    specified employer, role or period, depending on the
                    applicable rules.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Do I need a job offer for a work visa?
                </h3>

                <p className="body-base">
                    Some work visa categories require an employment offer or
                    sponsorship, while others may have different eligibility
                    routes. The requirement depends on the destination and
                    visa category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    What documents are needed for a work visa?
                </h3>

                <p className="body-base">
                    Requirements vary by country and visa category. Documents
                    may include your passport, employment information,
                    qualifications, work experience and other supporting
                    documents.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Do I need qualifications or work experience?
                </h3>

                <p className="body-base">
                    Some work visa categories have specific requirements for
                    qualifications, skills or professional experience. The
                    requirements depend on the destination, occupation and
                    visa category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can my employer sponsor my work visa?
                </h3>

                <p className="body-base">
                    Some work visa categories involve employer sponsorship or
                    other employer-related requirements. Whether sponsorship
                    is needed depends on the destination and visa category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    How long does a work visa take?
                </h3>

                <p className="body-base">
                    Processing times vary depending on the country, visa
                    category, application and other factors. Check the latest
                    processing information from the relevant immigration
                    authority.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Can I change jobs on a work visa?
                </h3>

                <p className="body-base">
                    This depends on the conditions of your visa and the
                    immigration rules of your destination. Some work visas may
                    be linked to a specific employer or role.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can Vision Visa help with my work visa application?
                </h3>

                <p className="body-base">
                    Vision Visa can help you understand the applicable work
                    visa requirements, organise your documents and navigate
                    the application process.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Does Vision Visa guarantee work visa approval?
                </h3>

                <p className="body-base">
                    No. Work visa decisions are made by the relevant
                    immigration authority. Vision Visa provides guidance and
                    assistance with the application process.
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
                Get Work Visa Assistance
            </Link>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div
            className="reveal"
            style={{
                "textAlign": "center",
                "maxWidth": "850px",
                "margin": "0 auto"
            }}
        >

            <span className="eyebrow">
                READY TO WORK ABROAD?
            </span>

            <h2 className="mb-24">
                Start planning your work visa application.
            </h2>

            <p className="body-large mb-48">
                Tell Vision Visa about your destination, job and travel plans.
                Our team can help you understand the applicable work visa
                requirements, prepare your documents and plan the next steps.
            </p>

            <div
                style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "gap": "16px",
                    "flexWrap": "wrap"
                }}
            >

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Get Work Visa Assistance
                </Link>

                <Link
                    href="/contact"
                    className="btn btn-secondary magnetic"
                >
                    Talk to Our Team
                </Link>

            </div>

        </div>

    </div>
</section>

        {/*  Footer  */}
        {/*  Footer  */}
    </main>
  );
}
