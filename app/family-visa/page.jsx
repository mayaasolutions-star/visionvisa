import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Family Visa Assistance | Spouse & Dependent Visa | Vision Visa",

    description:
        "Get family visa assistance from Vision Visa for spouse, partner, children and dependent visa applications. Understand visa requirements, documents and the application process.",

    keywords: [
        "Vision Visa family visa",
        "family visa",
        "family visa assistance",
        "family visa services",
        "dependent visa",
        "dependent visa assistance",
        "spouse visa",
        "spouse visa assistance",
        "partner visa",
        "children dependent visa",
        "family reunification visa",
        "family visa application",
        "family visa documents",
        "family visa requirements",
        "visa to join family abroad",
        "family immigration services",
        "family visit visa"
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
        canonical: "https://www.visionvisa.in/family-visa"
    },

    openGraph: {
        title: "Family Visa Assistance | Spouse & Dependent Visa | Vision Visa",

        description:
            "Vision Visa helps with family, spouse and dependent visa requirements, document preparation and the visa application process for joining family abroad.",

        type: "website",

        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/family-visa",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/familyvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Vision Visa Family Visa Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Family Visa Assistance | Spouse & Dependent Visa | Vision Visa",

        description:
            "Get guidance on family, spouse and dependent visa requirements, documents and applications with Vision Visa.",

        images: [
            "https://www.visionvisa.in/images/familyvisa-hero.webp"
        ]
    }
};

export default function FAMILY_VISA_Page() {
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
                        "name": "Family Visa",
                        "item": "https://www.visionvisa.in/family-visa"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Family & Dependent Visa Assistance",
                "provider": {
                    "@type": "TravelAgency",
                    "name": "Vision Visa",
                    "url": "https://www.visionvisa.in"
                },
                "serviceType": "Family Reunification & Dependent Visa Guidance",
                "description": "Expert assistance for spouse, children, and dependent parent visa applications for family reunification abroad."
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
                FAMILY VISA
            </span>

            <h1 className="display-text mb-24">
                Family Visa Assistance for
                <span className="text-accent"> Joining Your Loved Ones.</span>
            </h1>

            <p className="body-large">
                Planning to join your spouse, parents, children or other
                eligible family members abroad? Vision Visa helps you
                understand the family or dependent visa requirements and
                prepare for the application process.
            </p>

        </div>


        <div className="reveal reveal-delay-1">

            <img
                src={getAssetPath("/images/familyvisa-hero.webp")}
                alt="Family travelling together for an international journey"
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
                    FAMILY & DEPENDENT VISAS
                </span>

                <h2 className="mb-24">
                    Understand your options for joining family abroad.
                </h2>

                <p className="body-base mb-24">
                    Family and dependent visa rules can vary depending on the
                    country, your relationship with the person abroad and their
                    immigration status.
                </p>

                <p className="body-base">
                    Vision Visa helps you understand the applicable requirements,
                    organise the necessary documents and prepare for the visa
                    application process.
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
                        FAMILY VISA
                    </span>

                    <h3
                        className="mb-24"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        Planning to join your family abroad?
                    </h3>

                    <p
                        className="body-base mb-32"
                        style={{
                            "color": "rgba(255,255,255,0.75)"
                        }}
                    >
                        Tell us about your relationship, destination and travel
                        plans. Our team can help you understand the next steps
                        for your visa application.
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
                        Get Family Visa Assistance
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
                    <i data-lucide="heart-handshake"></i>
                </div>

                <h3 className="mb-24">
                    Spouse & Partner
                </h3>

                <p className="body-small">
                    Guidance for eligible spouses or partners planning
                    to join their family member abroad.
                </p>

            </div>


            {/* Card 2 */}

            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="baby"></i>
                </div>

                <h3 className="mb-24">
                    Children & Dependants
                </h3>

                <p className="body-small">
                    Understand the requirements that may apply when
                    children or eligible dependants join family abroad.
                </p>

            </div>


            {/* Card 3 */}

            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Family Visits
                </h3>

                <p className="body-small">
                    If you are travelling to visit family temporarily,
                    we can help you understand the relevant visit visa
                    requirements.
                </p>

            </div>


            {/* Card 4 */}

            <div className="category-card reveal reveal-delay-3">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Document Guidance
                </h3>

                <p className="body-small">
                    Get practical guidance on the documents and
                    information required for your application.
                </p>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                FAMILY VISA OPTIONS
            </span>

            <h2>
                Who may need a family or dependent visa?
            </h2>

            <p className="body-large">
                Family visa categories are different in every country. Your
                options can depend on your relationship, the status of your
                family member abroad and the purpose and duration of your stay.
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
                    <i data-lucide="heart"></i>
                </div>

                <h3 className="mb-24">
                    Joining Your Spouse
                </h3>

                <p className="body-base">
                    Planning to live with your spouse in another country?
                    Depending on the destination and immigration status,
                    a spouse or partner visa may be available.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="baby"></i>
                </div>

                <h3 className="mb-24">
                    Children Joining Parents
                </h3>

                <p className="body-base">
                    Parents and children may have specific dependent visa
                    options. The applicable rules depend on the destination
                    and the family's circumstances.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Dependent Family Members
                </h3>

                <p className="body-base">
                    Some countries allow eligible dependants to accompany or
                    join a family member who is living, studying or working
                    abroad.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Visiting Family Abroad
                </h3>

                <p className="body-base">
                    If you only plan to visit family for a limited period,
                    a visit visa may be more appropriate than a family or
                    dependent visa.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="house"></i>
                </div>

                <h3 className="mb-24">
                    Family Relocation
                </h3>

                <p className="body-base">
                    Moving abroad as a family can involve different visa
                    applications and supporting documents for each family
                    member.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="circle-help"></i>
                </div>

                <h3 className="mb-24">
                    Unsure Which Visa Applies?
                </h3>

                <p className="body-base">
                    Family visa rules can be complicated. Share your situation
                    with Vision Visa and we can help you understand which
                    requirements you should check.
                </p>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                FAMILY VISA DOCUMENTS
            </span>

            <h2>
                Get your family visa documents ready.
            </h2>

            <p className="body-large">
                Family and dependent visa applications can require documents
                from both you and the family member you are joining. The exact
                requirements depend on the country and visa category.
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
                    <i data-lucide="file-text"></i>
                </div>

                <h3 className="mb-24">
                    Personal Documents
                </h3>

                <p className="body-base">
                    Your passport, photographs and other personal documents
                    may be required as part of the application.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="heart-handshake"></i>
                </div>

                <h3 className="mb-24">
                    Proof of Relationship
                </h3>

                <p className="body-base">
                    Depending on the visa category, you may need documents
                    showing your relationship with the family member abroad.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="id-card"></i>
                </div>

                <h3 className="mb-24">
                    Sponsor Information
                </h3>

                <p className="body-base">
                    The family member you are joining may need to provide
                    information about their identity, residence or immigration
                    status.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="wallet-cards"></i>
                </div>

                <h3 className="mb-24">
                    Financial Documents
                </h3>

                <p className="body-base">
                    Some visa categories may require evidence of financial
                    support or other information about how your stay will be
                    supported.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="house"></i>
                </div>

                <h3 className="mb-24">
                    Accommodation Details
                </h3>

                <p className="body-base">
                    Depending on the destination, information about where you
                    will stay may form part of your visa application.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="list-checks"></i>
                </div>

                <h3 className="mb-24">
                    Application Review
                </h3>

                <p className="body-base">
                    Vision Visa can help you understand the applicable
                    requirements and organise the information needed before
                    you submit your application.
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
                Requirements vary by country, visa type and individual
                circumstances. Always check the current requirements of the
                relevant embassy, consulate or immigration authority.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Check Your Family Visa Requirements
            </Link>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                FAMILY VISA PROCESS
            </span>

            <h2>
                Take your family visa application one step at a time.
            </h2>

            <p className="body-large">
                Family visa applications can involve documents from more than
                one person. Vision Visa helps you understand the requirements
                and prepare each part of your application clearly.
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
                    <i data-lucide="messages-square"></i>
                </div>

                <h3 className="mb-24">
                    Share Your Situation
                </h3>

                <p className="body-base">
                    Tell us about your destination, family relationship,
                    current circumstances and plans for joining or visiting
                    your family abroad.
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
                    Understand the visa category, eligibility requirements
                    and documents that may apply to your situation.
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
                    Prepare the Documents
                </h3>

                <p className="body-base">
                    Organise your personal documents, relationship evidence
                    and supporting information before completing the
                    application.
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
                    Complete and submit the application according to the
                    requirements of the relevant embassy, consulate or
                    immigration authority.
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
                Processing times and application procedures vary by country
                and visa category. Final decisions are made by the relevant
                immigration authority.
            </p>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                PLAN YOUR JOURNEY
            </span>

            <h2>
                Once your visa is sorted, plan the rest of your trip.
            </h2>

            <p className="body-large">
                Joining family abroad involves more than the visa application.
                You may also need to arrange flights, travel insurance and
                foreign currency before you leave.
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
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Air Tickets
                </h3>

                <p className="body-base mb-24">
                    Planning your journey to join or visit family abroad?
                    Explore domestic and international flight options for
                    your travel dates.
                </p>

                <Link
                    href="/air-tickets"
                    className="btn btn-secondary magnetic"
                >
                    Explore Air Tickets
                </Link>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="shield-check"></i>
                </div>

                <h3 className="mb-24">
                    Travel Insurance
                </h3>

                <p className="body-base mb-24">
                    Check whether travel insurance is required for your
                    destination and understand the options available for
                    your journey.
                </p>

                <Link
                    href="/travel-insurance"
                    className="btn btn-secondary magnetic"
                >
                    Explore Travel Insurance
                </Link>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="banknote"></i>
                </div>

                <h3 className="mb-24">
                    Forex Services
                </h3>

                <p className="body-base mb-24">
                    Travelling abroad to be with your family? Get guidance
                    on foreign currency and other permitted forex needs
                    for your international journey.
                </p>

                <Link
                    href="/forex"
                    className="btn btn-secondary magnetic"
                >
                    Explore Forex Services
                </Link>

            </div>

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
                FAMILY VISA FAQS
            </span>

            <h2>
                Family visa questions, answered.
            </h2>

            <p className="body-large">
                Here are some common questions about family, spouse and
                dependent visas for people planning to join or visit family
                abroad.
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
                    What is a family visa?
                </h3>

                <p className="body-base">
                    A family visa is a visa or immigration category that may
                    allow eligible family members to join or live with a
                    relative in another country. The category and rules vary
                    by destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Who can apply for a family visa?
                </h3>

                <p className="body-base">
                    Eligibility depends on the country and visa category.
                    Spouses, partners, children and other eligible dependants
                    may qualify in some countries, subject to the applicable
                    requirements.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    What documents are needed for a family visa?
                </h3>

                <p className="body-base">
                    Requirements vary by destination. Depending on your
                    situation, you may need personal documents, proof of
                    relationship, sponsor information, financial documents
                    and other supporting evidence.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Do I need to prove my relationship?
                </h3>

                <p className="body-base">
                    Many family and dependent visa categories require evidence
                    of the relationship between the applicant and the family
                    member abroad. The type of evidence required depends on
                    the destination and visa category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can I apply for a visa to join my spouse abroad?
                </h3>

                <p className="body-base">
                    Some countries offer spouse or partner visa categories.
                    Whether you qualify depends on the destination, your
                    relationship and the immigration status of your spouse
                    or partner.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Can children apply as dependants?
                </h3>

                <p className="body-base">
                    Some countries allow eligible children to apply as
                    dependants of a parent or another qualifying family member.
                    Age and other eligibility conditions may apply.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    How long does a family visa take?
                </h3>

                <p className="body-base">
                    Processing times vary depending on the country, visa
                    category, application and immigration authority. Check the
                    latest processing information for your destination before
                    making firm travel plans.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can Vision Visa help with a family visa application?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa can help you understand the applicable
                    requirements, organise your documents and navigate the
                    family or dependent visa application process.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Does Vision Visa guarantee family visa approval?
                </h3>

                <p className="body-base">
                    No. Visa decisions are made by the relevant embassy,
                    consulate or immigration authority. Vision Visa provides
                    assistance and guidance with the application process.
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
                Get Family Visa Assistance
            </Link>

        </div>

    </div>
</section>

<section>
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
                START YOUR FAMILY VISA JOURNEY
            </span>

            <h2 className="mb-24">
                Planning to join your family abroad?
            </h2>

            <p className="body-large mb-48">
                Tell Vision Visa about your destination, family relationship
                and travel plans. Our team can help you understand the visa
                requirements, documents and next steps for your application.
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
                    Get Family Visa Assistance
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
