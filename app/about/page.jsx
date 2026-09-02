import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import JourneyCTA from '../../components/JourneyCTA';

export const metadata = {
    title: "About Vision Visa | Visa & Travel Assistance",

    description:
        "Learn more about Vision Visa. We assist Indian passport holders with visa guidance, travel insurance, forex and air tickets.",

    keywords: [
        "About Vision Visa",
        "Vision Visa company",
        "visa consultants India",
        "travel services provider",
        "visa assistance company",
        "travel insurance assistance",
        "forex assistance",
        "air ticket booking assistance",
        "about us Vision Visa"
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
        canonical: "YOUR-VISION-VISA-DOMAIN/about"
    },

    openGraph: {
        title: "About Vision Visa | Visa & Travel Assistance",

        description:
            "Learn more about Vision Visa and how we help travellers with visa guidance, travel insurance, forex and air tickets.",

        type: "website",

        siteName: "Vision Visa",

        url: "YOUR-VISION-VISA-DOMAIN/about",

        locale: "en_IN",

        images: [
            {
                url: "YOUR-VISION-VISA-DOMAIN/images/vision-visa-about-og.jpg",
                width: 1200,
                height: 630,
                alt: "About Vision Visa - Visa and Travel Services"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "About Vision Visa | Visa & Travel Assistance",

        description:
            "Discover Vision Visa's visa assistance, travel insurance, forex and air ticket services.",

        images: [
            "YOUR-VISION-VISA-DOMAIN/images/vision-visa-about-og.jpg"
        ]
    }
};

export default function ABOUT_Page() {
    return (
    <main>
      {/*  Navigation  */}
        {/*  Navigation  */}
    

    <section className="bg-off-white" style={{ "paddingTop": "120px", "paddingBottom": "80px", "borderBottom": "1px solid rgba(226, 232, 240, 0.8)" }}>
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
                    EXPERIENCE YOU CAN RELY ON
                </span>

                <h2 className="mb-24">
                    Built on experience in international travel.
                </h2>

                <p className="body-base mb-24">
                    Travel plans involve more than booking a flight. Visas,
                    documents, insurance, foreign currency and other details
                    all need to come together before you leave.
                </p>

                <p className="body-base mb-24">
                    Vision Visa brings these travel needs together in one
                    place, with a focus on clear guidance, practical support
                    and a smoother experience for every traveller.
                </p>

                <p className="body-base">
                    Our travel background includes more than 25 years of
                    experience in handling travel-related requirements,
                    supported by an experienced team familiar with visa,
                    passport, ticketing and other travel services.
                </p>

            </div>


            <div
                className="reveal reveal-delay-1"
                style={{
                    "display": "grid",
                    "gridTemplateColumns": "1fr 1fr",
                    "gap": "24px"
                }}
            >

                <div
                    style={{
                        "background": "var(--white)",
                        "padding": "40px",
                        "borderRadius": "24px",
                        "textAlign": "center"
                    }}
                >
                    <div
                        className="display-text"
                        style={{
                            "color": "var(--accent-blue)"
                        }}
                    >
                        25+
                    </div>

                    <div
                        className="body-small"
                        style={{
                            "fontWeight": "700"
                        }}
                    >
                        Years of Travel Experience
                    </div>
                </div>


                <div
                    style={{
                        "background": "var(--white)",
                        "padding": "40px",
                        "borderRadius": "24px",
                        "textAlign": "center"
                    }}
                >
                    <div
                        className="display-text"
                        style={{
                            "color": "var(--accent-orange)"
                        }}
                    >
                        01
                    </div>

                    <div
                        className="body-small"
                        style={{
                            "fontWeight": "700"
                        }}
                    >
                        Place for Your Travel Needs
                    </div>
                </div>


                <div
                    style={{
                        "background": "var(--white)",
                        "padding": "40px",
                        "borderRadius": "24px",
                        "textAlign": "center"
                    }}
                >
                    <div
                        className="display-text"
                        style={{
                            "color": "var(--accent-green)"
                        }}
                    >
                        360°
                    </div>

                    <div
                        className="body-small"
                        style={{
                            "fontWeight": "700"
                        }}
                    >
                        Travel Support
                    </div>
                </div>


                <div
                    style={{
                        "background": "var(--white)",
                        "padding": "40px",
                        "borderRadius": "24px",
                        "textAlign": "center"
                    }}
                >
                    <div
                        className="display-text"
                        style={{
                            "color": "var(--primary)"
                        }}
                    >
                        01
                    </div>

                    <div
                        className="body-small"
                        style={{
                            "fontWeight": "700"
                        }}
                    >
                        Team to Guide You
                    </div>
                </div>

            </div>

        </div>

    </div>
</section>



<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                WHY VISION VISA
            </span>

            <h2>
                Travel planning is easier with the right guidance.
            </h2>

            <p className="body-large">
                International travel can involve visas, documents, insurance,
                foreign currency and flights. We help you take care of these
                important details with clear and practical support.
            </p>
        </div>


        <div
            style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(2, 1fr)",
                "gap": "32px"
            }}
        >

            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="messages-square"></i>
                </div>

                <h3 className="mb-24">
                    Clear Guidance
                </h3>

                <p className="body-base">
                    Not sure what you need for your trip? Our team helps you
                    understand the requirements and the next steps in simple
                    terms.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="layers-3"></i>
                </div>

                <h3 className="mb-24">
                    More Than Just Visas
                </h3>

                <p className="body-base">
                    Visa assistance is only one part of your journey. You can
                    also get support with travel insurance, forex and air
                    tickets through Vision Visa.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="user-round-check"></i>
                </div>

                <h3 className="mb-24">
                    Personal Support
                </h3>

                <p className="body-base">
                    Every trip is different. We take the time to understand
                    your destination and travel plans before guiding you
                    towards the next step.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="briefcase"></i>
                </div>

                <h3 className="mb-24">
                    Backed by Travel Experience
                </h3>

                <p className="body-base">
                    Our approach is built around practical travel support and
                    experience with visa, passport, ticketing and other
                    travel-related requirements.
                </p>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                HOW WE HELP
            </span>

            <h2>
                Start with your travel plans. We take it from there.
            </h2>

            <p className="body-large">
                You do not need to figure out every travel requirement on your
                own. Tell us where you are going and what you are travelling
                for, and we can help you understand what comes next.
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
                    Understand Your Trip
                </h3>

                <p className="body-base">
                    We start with your destination, purpose of travel and
                    plans so we can understand what support you may need.
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
                    Explain the Requirements
                </h3>

                <p className="body-base">
                    We help you understand the relevant documents,
                    requirements and steps for the service you need.
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
                    Help You Prepare
                </h3>

                <p className="body-base">
                    From visa documents and travel insurance to forex and
                    flight arrangements, we help you get the important details
                    ready for your journey.
                </p>

            </div>


            <div className="category-card reveal">

                <span className="eyebrow">
                    04
                </span>

                <div className="category-icon">
                    <i data-lucide="plane-takeoff"></i>
                </div>

                <h3 className="mb-24">
                    Get Ready to Travel
                </h3>

                <p className="body-base">
                    With the key travel arrangements in place, you can focus
                    on your trip and the reason you are travelling.
                </p>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                WHO WE HELP
            </span>

            <h2>
                Different reasons to travel. One place to get started.
            </h2>

            <p className="body-large">
                Whether you are taking a holiday, moving abroad for studies,
                visiting family or travelling for work, Vision Visa can help
                with the travel services you need.
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

                <div className="category-icon">
                    <i data-lucide="map"></i>
                </div>

                <h3 className="mb-24">
                    Holiday Travellers
                </h3>

                <p className="body-base">
                    Planning a holiday abroad? Get help with your visa, travel
                    insurance, foreign currency and flight arrangements.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Students
                </h3>

                <p className="body-base">
                    Going abroad to study? Get guidance for your visa, travel
                    insurance, forex, education-related transfers and flights.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Families
                </h3>

                <p className="body-base">
                    Travelling together or visiting family abroad? We can help
                    with the important travel arrangements before you leave.
                </p>

            </div>


            <div className="category-card reveal">

                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Business Travellers
                </h3>

                <p className="body-base">
                    Travelling for meetings, conferences or work? Get support
                    with business visas, flights, forex and other travel needs.
                </p>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                OUR APPROACH
            </span>

            <h2>
                Simple, clear and focused on your journey.
            </h2>

            <p className="body-large">
                Travel planning can get complicated quickly. Our approach is
                to keep things clear, understand what you need and help you
                take one step at a time.
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
                    <i data-lucide="eye"></i>
                </div>

                <h3 className="mb-24">
                    Clear Information
                </h3>

                <p className="body-base">
                    We explain requirements, documents and next steps in
                    straightforward language so you know what to expect.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="user-round"></i>
                </div>

                <h3 className="mb-24">
                    Personal Attention
                </h3>

                <p className="body-base">
                    Your destination, purpose and travel plans matter. We
                    start by understanding your situation before suggesting
                    the next step.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="check-circle-2"></i>
                </div>

                <h3 className="mb-24">
                    Practical Support
                </h3>

                <p className="body-base">
                    From visa documents to flights, forex and travel
                    insurance, we focus on the details that need to be taken
                    care of before you travel.
                </p>

            </div>

        </div>

    </div>
</section>

        <JourneyCTA
          eyebrow="GET STARTED WITH VISION VISA"
          title="Plan Your Travel with"
          titleHighlight="Confidence"
          description="Talk to our experienced visa consultants today for straightforward guidance on your international visa and travel requirements."
          primaryBtnText="Contact Our Team"
        />

        {/*  Footer  */}
    </main>
  );
}
