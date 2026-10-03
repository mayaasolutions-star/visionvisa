import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Tourist Visa Assistance | Tourist Visa Services | Vision Visa",

    description:
        "Get tourist visa assistance from Vision Visa for holidays and international travel. Understand tourist visa requirements, documents and the application process.",

    keywords: [
        "Vision Visa tourist visa",
        "tourist visa",
        "tourist visa assistance",
        "tourist visa services",
        "tourist visa application",
        "tourist visa requirements",
        "tourist visa documents",
        "tourist visa consultant",
        "tourist visa assistance India",
        "holiday visa",
        "travel visa",
        "international tourist visa",
        "tourist visa application assistance",
        "visa for holiday travel",
        "visitor visa for tourism"
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
        canonical: "https://www.visionvisa.in/tourist-visa"
    },

    openGraph: {
        title: "Tourist Visa Assistance | Tourist Visa Services | Vision Visa",

        description:
            "Vision Visa helps travellers understand tourist visa requirements, prepare documents and navigate the application process for international holidays and travel.",

        type: "website",

        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/tourist-visa",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/touristvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Vision Visa Tourist Visa Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Tourist Visa Assistance | Tourist Visa Services | Vision Visa",

        description:
            "Get guidance on tourist visa requirements, documents and applications for international holidays and travel with Vision Visa.",

        images: [
            "https://www.visionvisa.in/images/touristvisa-hero.webp"
        ]
    }
};

export default function TOURIST_VISA_Page() {
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
                        "name": "Tourist Visa",
                        "item": "https://www.visionvisa.in/tourist-visa"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Tourist Visa Assistance",
                "provider": {
                    "@type": "TravelAgency",
                    "name": "Vision Visa",
                    "url": "https://www.visionvisa.in"
                },
                "serviceType": "Tourist Visa Application Guidance",
                "description": "Expert assistance for tourist visa applications, documentation checklist, appointment scheduling, and guidance for international leisure travel."
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
                TOURIST VISA
            </span>

            <h1 className="display-text mb-24">
                Tourist Visa Assistance for
                <span className="text-accent"> Your Next Trip.</span>
            </h1>

            <p className="body-large">
                Planning a holiday or sightseeing trip abroad? Vision Visa
                helps you understand the tourist visa requirements, prepare
                your documents and navigate the application process.
            </p>

        </div>


        <div className="reveal reveal-delay-1">

            <img
                src={getAssetPath("/images/touristvisa-hero.webp")}
                alt="Traveller planning an international holiday"
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

        {/* Top Content + CTA */}
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
                    TOURIST VISA ASSISTANCE
                </span>

                <h2 className="mb-24">
                    Get your tourist visa requirements clear before you travel.
                </h2>

                <p className="body-base mb-24">
                    A holiday should be exciting, but getting the visa
                    requirements right is an important part of planning your
                    trip.
                </p>

                <p className="body-base">
                    Vision Visa helps you understand the requirements for your
                    destination, prepare the necessary documents and navigate
                    the tourist visa application process.
                </p>

            </div>


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
                        PLAN YOUR TRIP
                    </span>

                    <h3
                        className="mb-24"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        Planning a holiday abroad?
                    </h3>

                    <p
                        className="body-base mb-32"
                        style={{
                            "color": "rgba(255,255,255,0.75)"
                        }}
                    >
                        Tell us your destination and travel plans. We can help
                        you understand the tourist visa requirements and what
                        you need to prepare.
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
                        Get Tourist Visa Assistance
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
                    <i data-lucide="map-pin"></i>
                </div>

                <h3 className="mb-24">
                    Destination Requirements
                </h3>

                <p className="body-small">
                    Understand the tourist visa requirements that may
                    apply to your destination and travel plans.
                </p>

            </div>


            {/* Card 2 */}

            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Document Guidance
                </h3>

                <p className="body-small">
                    Get practical guidance on the documents and
                    information you may need for your application.
                </p>

            </div>


            {/* Card 3 */}

            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="calendar-days"></i>
                </div>

                <h3 className="mb-24">
                    Travel Details
                </h3>

                <p className="body-small">
                    Understand how your travel dates, destination and
                    purpose of travel may relate to your application.
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
                    Have questions about your tourist visa? Our team
                    can help you understand the next steps.
                </p>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                TOURIST VISA PURPOSE
            </span>

            <h2>
                Travelling abroad for a holiday or a short visit?
            </h2>

            <p className="body-large">
                A tourist visa may be required when you travel to another
                country for tourism or other permitted short-term activities.
                The exact rules depend on your destination, nationality and
                travel plans.
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
                    <i data-lucide="map"></i>
                </div>

                <h3 className="mb-24">
                    Holiday & Sightseeing
                </h3>

                <p className="body-base">
                    Planning a holiday, sightseeing trip or short break
                    abroad? Check whether you need a tourist visa before
                    making your travel arrangements.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="camera"></i>
                </div>

                <h3 className="mb-24">
                    Leisure Travel
                </h3>

                <p className="body-base">
                    Travelling to explore a new destination, experience its
                    culture or simply enjoy some time away? Understand the
                    visa requirements before you travel.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Visiting Family or Friends
                </h3>

                <p className="body-base">
                    If you are travelling abroad to visit family or friends
                    for a short stay, the appropriate visa may depend on the
                    purpose and conditions of your visit.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="calendar-days"></i>
                </div>

                <h3 className="mb-24">
                    Short International Trips
                </h3>

                <p className="body-base">
                    Taking a short trip abroad? Check the entry and visa
                    requirements for your destination before finalising
                    your travel plans.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="globe-2"></i>
                </div>

                <h3 className="mb-24">
                    International Tourism
                </h3>

                <p className="body-base">
                    Visa requirements can differ even between popular tourist
                    destinations. Vision Visa can help you understand what
                    applies to your planned trip.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="circle-help"></i>
                </div>

                <h3 className="mb-24">
                    Not Sure If You Need a Visa?
                </h3>

                <p className="body-base">
                    Entry rules depend on your passport, destination and
                    purpose of travel. Speak with Vision Visa before you
                    submit an application or book your trip.
                </p>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                TOURIST VISA DOCUMENTS
            </span>

            <h2>
                Get your tourist visa documents ready.
            </h2>

            <p className="body-large">
                The documents required for a tourist visa depend on your
                destination, nationality and travel plans. Vision Visa helps
                you understand what may be required before you apply.
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
                    Your passport and other personal documents may be required
                    for the application. Check that they meet the requirements
                    of your destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="calendar-days"></i>
                </div>

                <h3 className="mb-24">
                    Travel Details
                </h3>

                <p className="body-base">
                    Your proposed travel dates, destination and trip details
                    may form part of your tourist visa application.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="hotel"></i>
                </div>

                <h3 className="mb-24">
                    Accommodation Details
                </h3>

                <p className="body-base">
                    Depending on the destination, you may need information
                    about where you plan to stay during your visit.
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
                    Some tourist visa applications require evidence that you
                    can support yourself during your trip. Requirements vary
                    by destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="file-text"></i>
                </div>

                <h3 className="mb-24">
                    Supporting Documents
                </h3>

                <p className="body-base">
                    Additional documents may be required depending on your
                    travel purpose, destination and individual circumstances.
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
                    requirements and organise your information before you
                    submit your application.
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
                Tourist visa requirements vary by country and applicant.
                Always check the latest requirements of the relevant embassy,
                consulate or immigration authority.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Check Your Tourist Visa Requirements
            </Link>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                TOURIST VISA PROCESS
            </span>

            <h2>
                A simple way to prepare for your tourist visa.
            </h2>

            <p className="body-large">
                Start with your destination and travel plans. Vision Visa
                helps you understand the requirements, organise your documents
                and prepare for the application.
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
                    Share Your Travel Plans
                </h3>

                <p className="body-base">
                    Tell us your destination, travel dates, purpose of travel
                    and other details about your planned trip.
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
                    Review the tourist visa category, documents and other
                    requirements that apply to your destination.
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
                Processing times and application procedures vary by destination
                and visa category. Visa decisions are made by the relevant
                embassy, consulate or immigration authority.
            </p>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                GET READY FOR YOUR TRIP
            </span>

            <h2>
                Your holiday plans go beyond the visa.
            </h2>

            <p className="body-large">
                Once your tourist visa requirements are clear, you can take
                care of the other important parts of your international trip,
                from flights and travel insurance to foreign currency.
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
                    Planning your holiday abroad? Explore domestic and
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
                    destination and understand the coverage options available
                    for your trip.
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
                    Travelling abroad for a holiday? Get guidance on foreign
                    currency and other permitted forex requirements for your
                    international journey.
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
                TOURIST VISA FAQS
            </span>

            <h2>
                Tourist visa questions, answered.
            </h2>

            <p className="body-large">
                Planning a holiday abroad? Here are some common questions
                travellers ask before applying for a tourist visa.
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
                    What is a tourist visa?
                </h3>

                <p className="body-base">
                    A tourist visa is a visa that may allow eligible travellers
                    to enter a country for tourism or other permitted
                    short-term activities. The rules depend on the destination
                    and your passport.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Do I need a tourist visa to travel abroad?
                </h3>

                <p className="body-base">
                    It depends on your nationality and destination. Some
                    countries require a visa before travel, while others may
                    offer visa-free entry, an e-visa or another form of travel
                    authorisation.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    What documents are needed for a tourist visa?
                </h3>

                <p className="body-base">
                    Requirements vary by country. You may need a valid
                    passport, travel details, accommodation information,
                    financial documents and other supporting documents.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    How long does a tourist visa take?
                </h3>

                <p className="body-base">
                    Processing times vary by destination, visa category and
                    application. It is best to check the latest information
                    from the relevant embassy, consulate or immigration
                    authority before planning your trip.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can I apply for a tourist visa online?
                </h3>

                <p className="body-base">
                    Some destinations offer online visa applications or
                    e-visas, while others require a different application
                    process. The available option depends on your destination
                    and nationality.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Can I get a tourist visa to visit family or friends?
                </h3>

                <p className="body-base">
                    Some countries have separate visitor or family visit visa
                    categories. The correct category depends on the purpose
                    and circumstances of your trip.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    When should I apply for a tourist visa?
                </h3>

                <p className="body-base">
                    It is generally better to understand the visa process and
                    apply well before your planned travel date. The recommended
                    timing depends on the destination and application process.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can Vision Visa help with a tourist visa application?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa can help you understand the applicable
                    tourist visa requirements, prepare your documents and
                    navigate the application process.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Does Vision Visa guarantee tourist visa approval?
                </h3>

                <p className="body-base">
                    No. Tourist visa decisions are made by the relevant
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
                Get Tourist Visa Assistance
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
                READY FOR YOUR TRIP?
            </span>

            <h2 className="mb-24">
                Planning your next holiday abroad?
            </h2>

            <p className="body-large mb-48">
                Tell Vision Visa about your destination and travel plans.
                Our team can help you understand the tourist visa requirements,
                prepare your documents and plan the next steps.
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
                    Get Tourist Visa Assistance
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
