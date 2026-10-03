import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Visitor Visa Assistance | Visitor Visa Services | Vision Visa",

    description:
        "Get visitor visa assistance from Vision Visa for visiting family, friends or travelling abroad for a short stay. Understand visa requirements, documents and the application process.",

    keywords: [
        "Vision Visa visitor visa",
        "visitor visa",
        "visitor visa assistance",
        "visitor visa services",
        "visitor visa application",
        "visitor visa requirements",
        "visitor visa documents",
        "visitor visa consultant",
        "visitor visa assistance India",
        "visit visa",
        "visit visa assistance",
        "family visit visa",
        "visa to visit family abroad",
        "visa to visit friends abroad",
        "short stay visitor visa",
        "international visitor visa",
        "visitor visa application assistance"
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
        canonical: "https://www.visionvisa.in/visitor-visa"
    },

    openGraph: {
        title: "Visitor Visa Assistance | Visitor Visa Services | Vision Visa",

        description:
            "Vision Visa helps travellers understand visitor visa requirements, prepare documents and navigate the application process for short visits abroad.",

        type: "website",

        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/visitor-visa",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/visitorvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Vision Visa Visitor Visa Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Visitor Visa Assistance | Visitor Visa Services | Vision Visa",

        description:
            "Get guidance on visitor visa requirements, documents and applications for visiting family, friends or travelling abroad.",

        images: [
            "https://www.visionvisa.in/images/visitorvisa-hero.webp"
        ]
    }
};

export default function VISITOR_VISA_Page() {
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
                        "name": "Visitor Visa",
                        "item": "https://www.visionvisa.in/visitor-visa"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Visitor Visa Assistance",
                "provider": {
                    "@type": "TravelAgency",
                    "name": "Vision Visa",
                    "url": "https://www.visionvisa.in"
                },
                "serviceType": "Short-Stay Visitor Visa Guidance",
                "description": "Guidance for short-stay visitor visas, invitation letter validation, sponsorship verification, and visa application submission."
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
                VISITOR VISA
            </span>

            <h1 className="display-text mb-24">
                Visitor Visa Assistance for
                <span className="text-accent"> Your Next Visit.</span>
            </h1>

            <p className="body-large">
                Planning to visit family, friends or attend an event abroad?
                Vision Visa helps you understand visitor visa requirements,
                prepare your documents and navigate the application process.
            </p>

        </div>


        <div className="reveal reveal-delay-1">

            <img
                src={getAssetPath("/images/visitorvisa-hero.webp")}
                alt="Family and friends planning an international visit"
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
                    VISITOR VISA ASSISTANCE
                </span>

                <h2 className="mb-24">
                    Make your visit plans with the right visa guidance.
                </h2>

                <p className="body-base mb-24">
                    Visiting someone abroad often comes with a few important
                    things to arrange before you travel. Your visa application
                    is one of them.
                </p>

                <p className="body-base">
                    Vision Visa helps you understand the visitor visa
                    requirements for your destination, prepare the supporting
                    documents and get your application ready.
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
                        PLAN YOUR VISIT
                    </span>

                    <h3
                        className="mb-24"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        Planning to visit someone abroad?
                    </h3>

                    <p
                        className="body-base mb-32"
                        style={{
                            "color": "rgba(255,255,255,0.75)"
                        }}
                    >
                        Tell us your destination, purpose of visit and travel
                        plans. We can help you understand the visitor visa
                        requirements and next steps.
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
                        Get Visitor Visa Assistance
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
                    <i data-lucide="heart"></i>
                </div>

                <h3 className="mb-24">
                    Family Visits
                </h3>

                <p className="body-small">
                    Planning to visit parents, children, relatives or
                    other family members abroad? Understand the visa
                    requirements for your visit.
                </p>

            </div>


            {/* Card 2 */}

            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Visiting Friends
                </h3>

                <p className="body-small">
                    Get guidance when travelling abroad to spend time
                    with friends or people you know.
                </p>

            </div>


            {/* Card 3 */}

            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="calendar-days"></i>
                </div>

                <h3 className="mb-24">
                    Events & Occasions
                </h3>

                <p className="body-small">
                    Attending a wedding, graduation, family function
                    or other permitted short-term event abroad?
                    Understand what applies to your visit.
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
                    supporting information required for your visitor
                    visa application.
                </p>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                VISITOR VISA REQUIREMENTS
            </span>

            <h2>
                Know what you need before you apply.
            </h2>

            <p className="body-large">
                Visitor visa requirements can vary depending on your
                destination, passport, purpose of travel and personal
                circumstances. We help you understand the documents and
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
                    Your passport and personal documents form an important part
                    of most visitor visa applications. Requirements can vary
                    by destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Proof of Relationship
                </h3>

                <p className="body-base">
                    If you are visiting family or relatives, you may need
                    documents showing your relationship with the person you
                    plan to visit.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="map-pin"></i>
                </div>

                <h3 className="mb-24">
                    Travel Details
                </h3>

                <p className="body-base">
                    Your destination, travel dates, purpose of visit and
                    planned activities may be relevant to your application.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="house"></i>
                </div>

                <h3 className="mb-24">
                    Accommodation Details
                </h3>

                <p className="body-base">
                    Depending on the destination, you may need information
                    about where you will stay during your visit.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="wallet-cards"></i>
                </div>

                <h3 className="mb-24">
                    Financial Information
                </h3>

                <p className="body-base">
                    Some visitor visa applications require evidence that you
                    can support yourself during your stay. The requirements
                    depend on the destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Supporting Documents
                </h3>

                <p className="body-base">
                    Additional documents may be required based on your purpose
                    of visit and individual circumstances. We can help you
                    understand what applies to your application.
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
                Visitor visa requirements differ between countries and visa
                categories. Always check the latest requirements of the
                relevant embassy, consulate or immigration authority.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Check Your Visitor Visa Requirements
            </Link>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                VISITOR VISA PROCESS
            </span>

            <h2>
                A simple process for planning your visit.
            </h2>

            <p className="body-large">
                Start with your travel plans, understand the visa requirements
                and get your documents ready before submitting your application.
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
                    <i data-lucide="map-pin"></i>
                </div>

                <h3 className="mb-24">
                    Share Your Visit Plans
                </h3>

                <p className="body-base">
                    Tell us where you are travelling, why you are visiting,
                    your travel dates and who you plan to visit.
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
                    Understand the visitor visa category and requirements
                    that apply to your destination and circumstances.
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
                    Prepare Your Documents
                </h3>

                <p className="body-base">
                    Organise your passport, travel details and supporting
                    documents before completing your application.
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
                    relevant embassy, consulate or immigration authority.
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
                Application procedures and processing times vary by destination
                and visa category. Check the latest official requirements
                before applying.
            </p>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                PREPARE FOR YOUR VISIT
            </span>

            <h2>
                Your visit involves more than the visa.
            </h2>

            <p className="body-large">
                Once your visitor visa plans are in place, take care of the
                other important parts of your international trip, including
                flights, travel insurance and foreign currency.
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
                    Planning your visit abroad? Explore domestic and
                    international flight options based on your destination
                    and travel dates.
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
                    Travelling abroad to visit family or friends? Get guidance
                    on foreign currency and other permitted forex requirements
                    for your international trip.
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
                VISITOR VISA FAQS
            </span>

            <h2>
                Visitor visa questions, answered.
            </h2>

            <p className="body-large">
                Planning to visit family, friends or attend an event abroad?
                Here are some common questions travellers ask before applying
                for a visitor visa.
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
                    What is a visitor visa?
                </h3>

                <p className="body-base">
                    A visitor visa may allow eligible travellers to enter a
                    country for a short stay, such as visiting family or
                    friends or taking part in permitted activities. The rules
                    depend on the destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Do I need a visitor visa?
                </h3>

                <p className="body-base">
                    It depends on your passport, destination and purpose of
                    travel. Some countries offer visa-free entry or online
                    travel authorisation, while others require a visa before
                    travel.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    What documents are needed for a visitor visa?
                </h3>

                <p className="body-base">
                    Requirements vary by destination. You may need a valid
                    passport, travel details, accommodation information,
                    financial documents and other supporting evidence.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Do I need an invitation letter to visit family?
                </h3>

                <p className="body-base">
                    Some visitor visa applications may require an invitation
                    or supporting letter from the person you plan to visit.
                    Whether it is required depends on the destination and visa
                    category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can I visit friends on a visitor visa?
                </h3>

                <p className="body-base">
                    Some countries allow visits to friends under their visitor
                    visa category. The permitted activities and requirements
                    depend on the destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    How long can I stay on a visitor visa?
                </h3>

                <p className="body-base">
                    The permitted length of stay depends on the destination,
                    visa type and conditions attached to your visa. Check the
                    visa conditions before making your travel plans.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    How long does a visitor visa take?
                </h3>

                <p className="body-base">
                    Processing times vary by destination, visa category and
                    application. It is best to check the latest information
                    from the relevant embassy, consulate or immigration
                    authority.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can Vision Visa help with a visitor visa application?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa can help you understand the applicable
                    visitor visa requirements, organise your documents and
                    navigate the application process.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Does Vision Visa guarantee visitor visa approval?
                </h3>

                <p className="body-base">
                    No. Visitor visa decisions are made by the relevant
                    embassy, consulate or immigration authority. Vision Visa
                    provides guidance and assistance with the application
                    process.
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
                Get Visitor Visa Assistance
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
                PLAN YOUR VISIT
            </span>

            <h2 className="mb-24">
                Ready to plan your visit abroad?
            </h2>

            <p className="body-large mb-48">
                Tell Vision Visa about your destination, purpose of visit and
                travel plans. Our team can help you understand the visitor
                visa requirements, prepare your documents and plan the next
                steps.
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
                    Get Visitor Visa Assistance
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
