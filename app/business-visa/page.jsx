import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Business Visa Assistance | Business Travel Visa | Vision Visa",

    description:
        "Get business visa assistance from Vision Visa for international meetings, conferences, business visits and professional travel. Understand visa requirements, documents and the application process.",

    keywords: [
        "Vision Visa business visa",
        "business visa",
        "business visa assistance",
        "business visa services",
        "business travel visa",
        "business visa application",
        "business visa requirements",
        "business visa documents",
        "business visa consultant",
        "international business visa",
        "business travel abroad",
        "visa for business meetings",
        "conference visa",
        "corporate travel visa",
        "business visit visa",
        "business visa application assistance"
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
        canonical: "https://www.visionvisa.in/business-visa"
    },

    openGraph: {
        title: "Business Visa Assistance | Business Travel Visa | Vision Visa",

        description:
            "Vision Visa helps travellers understand business visa requirements, prepare documents and navigate the application process for international business travel.",

        type: "website",

        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/business-visa",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/businessvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Vision Visa Business Visa Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Business Visa Assistance | Business Travel Visa | Vision Visa",

        description:
            "Get guidance on business visa requirements, documents and applications for international meetings, conferences and business travel.",

        images: [
            "https://www.visionvisa.in/images/businessvisa-hero.webp"
        ]
    }
};

export default function BUSINESS_VISA_Page() {
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
                        "name": "Business Visa",
                        "item": "https://www.visionvisa.in/business-visa"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Business Visa Assistance",
                "provider": {
                    "@type": "TravelAgency",
                    "name": "Vision Visa",
                    "url": "https://www.visionvisa.in"
                },
                "serviceType": "Business Visa Guidance & Processing Assistance",
                "description": "Professional visa support for corporate travel, business delegations, trade shows, partner meetings, and international conferences."
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
    

    <section style={{"paddingTop":"140px","paddingBottom":"100px","background":"var(--off-white)"}}>
    <div
        className="container"
        style={{
            "display":"grid",
            "gridTemplateColumns":"1fr 1fr",
            "gap":"80px",
            "alignItems":"center"
        }}
    >

        <div className="reveal">

            <span className="eyebrow">
                BUSINESS VISA
            </span>

            <h1 className="display-text mb-24">
                Business Visa Assistance for
                <span className="text-accent"> International Travel.</span>
            </h1>

            <p className="body-large">
                Travelling abroad for meetings, conferences, business visits
                or professional engagements? Vision Visa helps you understand the
                business visa requirements, prepare your documents and
                navigate the application process.
            </p>

        </div>


        <div className="reveal reveal-delay-1">

            <img
                src={getAssetPath("/images/businessvisa-hero.webp")}
                alt="Business traveller preparing for an international business trip"
                style={{
                    "width":"100%",
                    "height":"400px",
                    "objectFit":"cover",
                    "borderRadius":"24px"
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
                    BUSINESS TRAVEL
                </span>

                <h2 className="mb-24">
                    Get your business visa requirements clear before you travel.
                </h2>

                <p className="body-base mb-24">
                    Business travel can involve meetings, conferences, client
                    visits, training, events and other professional activities.
                    The visa you need depends on your destination and purpose
                    of travel.
                </p>

                <p className="body-base">
                    Vision Visa helps you understand the applicable business
                    visa requirements, organise the required documents and
                    prepare for the application process.
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
                        BUSINESS VISA
                    </span>

                    <h3
                        className="mb-24"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        Planning a business trip abroad?
                    </h3>

                    <p
                        className="body-base mb-32"
                        style={{
                            "color": "rgba(255,255,255,0.75)"
                        }}
                    >
                        Share your destination and purpose of travel with us.
                        We can help you understand the visa requirements and
                        what you need to prepare.
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
                        Get Business Visa Assistance
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
                    <i data-lucide="clipboard-check"></i>
                </div>

                <h3 className="mb-24">
                    Requirement Guidance
                </h3>

                <p className="body-small">
                    Understand the visa requirements and documents
                    relevant to your business trip and destination.
                </p>

            </div>


            {/* Card 2 */}

            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Document Support
                </h3>

                <p className="body-small">
                    Get practical guidance on preparing the documents
                    needed for your business visa application.
                </p>

            </div>


            {/* Card 3 */}

            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Travel Planning
                </h3>

                <p className="body-small">
                    Coordinate your visa requirements with other travel
                    arrangements such as flights and travel insurance.
                </p>

            </div>


            {/* Card 4 */}

            <div className="category-card reveal reveal-delay-3">

                <div className="category-icon">
                    <i data-lucide="messages-square"></i>
                </div>

                <h3 className="mb-24">
                    Personal Assistance
                </h3>

                <p className="body-small">
                    Have questions about your application? Our team can
                    help you understand the next steps.
                </p>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                BUSINESS VISA PURPOSE
            </span>

            <h2>
                Travelling abroad for work or business?
            </h2>

            <p className="body-large">
                The right visa depends on your destination, nationality and
                reason for travel. A business visa may be relevant when you
                are travelling for certain professional or business activities.
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
                    <i data-lucide="handshake"></i>
                </div>

                <h3 className="mb-24">
                    Business Meetings
                </h3>

                <p className="body-base">
                    Travelling overseas to meet clients, partners, suppliers
                    or other business contacts? Check the visa requirements
                    for your destination before you travel.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="presentation"></i>
                </div>

                <h3 className="mb-24">
                    Conferences & Events
                </h3>

                <p className="body-base">
                    Attending a conference, business event or professional
                    gathering abroad? Make sure you understand which visa
                    category applies to your trip.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Business Visits
                </h3>

                <p className="body-base">
                    Visiting an overseas office, exploring business
                    opportunities or meeting potential partners? Vision Visa
                    can help you understand the applicable visa requirements.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Training & Professional Activities
                </h3>

                <p className="body-base">
                    Travelling for certain training or professional activities?
                    Check the rules for your destination before making your
                    travel arrangements.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="building-2"></i>
                </div>

                <h3 className="mb-24">
                    Corporate Travel
                </h3>

                <p className="body-base">
                    Arranging international travel for yourself or your
                    employees? We can help you understand the visa and travel
                    requirements for the planned trip.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="circle-help"></i>
                </div>

                <h3 className="mb-24">
                    Not Sure Which Visa You Need?
                </h3>

                <p className="body-base">
                    Visa rules vary by country and purpose of travel. If you
                    are unsure which category applies, speak with our team
                    before submitting your application.
                </p>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                BUSINESS VISA DOCUMENTS
            </span>

            <h2>
                Get your business visa documents ready.
            </h2>

            <p className="body-large">
                Business visa requirements can differ from one country to
                another. Vision Visa helps you understand the documents and
                information relevant to your destination and purpose of travel.
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
                    Your passport and other personal documents may form part of
                    the visa application. The exact requirements depend on the
                    destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="building-2"></i>
                </div>

                <h3 className="mb-24">
                    Business Information
                </h3>

                <p className="body-base">
                    Depending on the destination, you may need information
                    about your company, employer, business activity or the
                    organisation you are visiting.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="mail"></i>
                </div>

                <h3 className="mb-24">
                    Invitation & Travel Details
                </h3>

                <p className="body-base">
                    Some business visa applications may require details of
                    your visit, such as an invitation, meeting information or
                    other supporting travel documents.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="wallet-cards"></i>
                </div>

                <h3 className="mb-24">
                    Financial Information
                </h3>

                <p className="body-base">
                    Depending on the visa requirements, applicants may need to
                    provide information showing how their trip will be funded.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="calendar-days"></i>
                </div>

                <h3 className="mb-24">
                    Travel Plans
                </h3>

                <p className="body-base">
                    Your proposed travel dates, destination and purpose of the
                    visit may be required as part of the application.
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
                    We help you understand the applicable requirements and
                    prepare the information needed before you submit your
                    application.
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
                Document requirements vary by country, visa category and
                applicant. Always follow the current requirements of the
                relevant embassy, consulate or immigration authority.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Check Your Visa Requirements
            </Link>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                BUSINESS VISA PROCESS
            </span>

            <h2>
                A simple way to prepare for your business visa.
            </h2>

            <p className="body-large">
                Every country has its own visa process. Vision Visa helps you
                understand the requirements and prepare your application one
                step at a time.
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
                    Tell Us About Your Trip
                </h3>

                <p className="body-base">
                    Share your destination, travel dates and the reason for
                    your business visit so we can understand your requirements.
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
                    Understand the Requirements
                </h3>

                <p className="body-base">
                    Get guidance on the visa category, documents and other
                    requirements applicable to your destination.
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
                    Organise the required information and supporting documents
                    before completing and submitting your application.
                </p>

            </div>


            <div className="category-card reveal">

                <span className="eyebrow">
                    04
                </span>

                <div className="category-icon">
                    <i data-lucide="stamp"></i>
                </div>

                <h3 className="mb-24">
                    Submit & Follow the Process
                </h3>

                <p className="body-base">
                    Submit your application according to the applicable
                    process and keep track of any further requirements or
                    updates from the relevant authority.
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
                Visa processing times and application procedures vary by
                destination. Visa approval is subject to the decision of the
                relevant embassy, consulate or immigration authority.
            </p>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                BEYOND THE VISA
            </span>

            <h2>
                Get the other travel details ready too.
            </h2>

            <p className="body-large">
                A business trip involves more than getting a visa. Once your
                visa requirements are clear, you may also need to arrange your
                flight, travel insurance and foreign currency for the journey.
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
                    Planning your business travel? Explore domestic and
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
                    Check the travel insurance requirements for your
                    destination and explore suitable options for your
                    international business trip.
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
                    Travelling abroad for work? Get guidance on foreign
                    currency and other permitted forex requirements for your
                    business trip.
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
                BUSINESS VISA FAQS
            </span>

            <h2>
                Business visa questions, answered.
            </h2>

            <p className="body-large">
                Here are some common questions about business visas and
                travelling abroad for professional purposes.
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
                    What is a business visa?
                </h3>

                <p className="body-base">
                    A business visa is a visa category that may allow eligible
                    travellers to enter a country for permitted business or
                    professional activities. The rules and permitted activities
                    depend on the destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    When do I need a business visa?
                </h3>

                <p className="body-base">
                    It depends on your destination, nationality and purpose of
                    travel. A business visa may be relevant for activities
                    such as business meetings, conferences, professional visits
                    or other permitted business activities.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    What documents are required for a business visa?
                </h3>

                <p className="body-base">
                    Requirements vary by country and visa category. Depending
                    on the destination, you may need personal documents,
                    business information, travel details, financial
                    information and supporting documents.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Do I need an invitation letter for a business visa?
                </h3>

                <p className="body-base">
                    Some destinations or visa categories may require an
                    invitation or supporting information from the organisation
                    or business you are visiting. Check the current
                    requirements for your destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can I attend a business conference on a business visa?
                </h3>

                <p className="body-base">
                    Conference and event rules vary by destination and visa
                    category. Before travelling, check whether the planned
                    activity is permitted under the visa you are applying for.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Can Vision Visa help with my business visa application?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa can help you understand the applicable
                    requirements, prepare the necessary information and
                    navigate the visa application process.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    How long does a business visa take?
                </h3>

                <p className="body-base">
                    Processing times vary by country, visa category, applicant
                    and the relevant authority. It is best to check the current
                    processing information for your destination before making
                    travel plans.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Does Vision Visa guarantee business visa approval?
                </h3>

                <p className="body-base">
                    No. Visa decisions are made by the relevant embassy,
                    consulate or immigration authority. Vision Visa provides
                    guidance and assistance with the application process.
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
                Get Business Visa Assistance
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
                PLAN YOUR BUSINESS TRIP
            </span>

            <h2 className="mb-24">
                Need help with your business visa?
            </h2>

            <p className="body-large mb-48">
                Tell Vision Visa where you are travelling, why you are
                travelling and when you plan to go. Our team can help you
                understand the visa requirements and the next steps for your
                application.
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
                    Get Business Visa Assistance
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
