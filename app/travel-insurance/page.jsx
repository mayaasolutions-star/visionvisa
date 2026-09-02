import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import JourneyCTA from '../../components/JourneyCTA';

export const metadata = {
    title: "Travel Insurance | International Travel Cover | Vision Visa",

    description:
        "Get travel insurance for international trips, holidays, study abroad and business travel. Vision Visa helps you understand travel insurance and visa requirements.",

    keywords: [
        "Vision Visa travel insurance",
        "travel insurance",
        "international travel insurance",
        "travel insurance India",
        "overseas travel insurance",
        "travel insurance for visa",
        "visa travel insurance",
        "student travel insurance",
        "travel insurance for students",
        "business travel insurance",
        "family travel insurance",
        "holiday travel insurance",
        "medical travel insurance",
        "international travel cover"
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
        canonical: "YOUR-VISION-VISA-DOMAIN/travel-insurance"
    },

    openGraph: {
        title: "Travel Insurance | International Travel Cover | Vision Visa",

        description:
            "Travel insurance guidance for international trips, students, families and business travellers. Vision Visa helps you understand cover and visa-related requirements.",

        type: "website",

        siteName: "Vision Visa",

        url: "YOUR-VISION-VISA-DOMAIN/travel-insurance",

        locale: "en_IN",

        images: [
            {
                url: "YOUR-VISION-VISA-DOMAIN/images/vision-visa-travel-insurance-og.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Visa Travel Insurance | International Travel Cover"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Travel Insurance | International Travel Cover | Vision Visa",

        description:
            "Explore travel insurance options for international travel, study, business and holidays with Vision Visa.",

        images: [
            "YOUR-VISION-VISA-DOMAIN/images/vision-visa-travel-insurance-og.jpg"
        ]
    }
};

export default function TRAVEL_INSURANCE_Page() {
    return (
    <main>
      {/*  Navigation  */}
        {/*  Navigation  */}
    

<section
    className="hero-img-banner"
    style={{
        backgroundImage: `url(${getAssetPath('/images/travelinsurance-hero.png')})`
    }}
>
    <div className="container">
        <div className="hero-img-banner-content reveal">
            <span className="eyebrow">
                INTERNATIONAL TRAVEL COVER
            </span>

            <h1 className="mb-24">
                Going abroad soon?
            </h1>

            <p className="body-large mb-32" style={{ color: "var(--slate-600)" }}>
                Tell us where you are travelling, when you are going and
                why you are travelling. We will help you understand the
                travel insurance requirements and available options.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
                style={{ marginTop: "24px" }}
            >
                Get Travel Insurance
            </Link>
        </div>
    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                WHAT TRAVEL INSURANCE CAN HELP WITH
            </span>

            <h2>
                Because things don't always go to plan.
            </h2>

            <p className="body-large">
                Travel insurance can help with certain unexpected costs
                during an international trip. What is covered depends on
                the policy, its limits and its exclusions.
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
                    <i data-lucide="heart-pulse"></i>
                </div>

                <h3 className="mb-24">
                    Medical Expenses
                </h3>

                <p className="body-base">
                    Some policies cover eligible medical and emergency
                    expenses if you become ill or injured while travelling.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Travel Delays
                </h3>

                <p className="body-base">
                    Depending on your policy, certain costs caused by covered
                    delays, cancellations or travel disruptions may be
                    included.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <div className="category-icon">
                    <i data-lucide="luggage"></i>
                </div>

                <h3 className="mb-24">
                    Baggage
                </h3>

                <p className="body-base">
                    Some travel insurance plans provide cover for eligible
                    losses involving lost, delayed or damaged baggage.
                </p>
            </div>


            <div className="category-card reveal">
                <div className="category-icon">
                    <i data-lucide="phone-call"></i>
                </div>

                <h3 className="mb-24">
                    Emergency Assistance
                </h3>

                <p className="body-base">
                    Your policy may include assistance services for certain
                    emergencies while you are travelling outside India.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="calendar-x"></i>
                </div>

                <h3 className="mb-24">
                    Trip Cancellation
                </h3>

                <p className="body-base">
                    Certain policies can cover specific cancellation or trip
                    interruption situations listed in the policy.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Visa Requirements
                </h3>

                <p className="body-base">
                    Some countries require travel insurance for visa
                    applications. Vision Visa can help you understand the
                    requirement for your destination.
                </p>
            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                WHO IS IT FOR?
            </span>

            <h2>
                Travel insurance for different kinds of trips.
            </h2>

            <p className="body-large">
                A holiday, a university course or a business trip can all
                come with different travel requirements. Vision Visa can help
                you understand the insurance options for your type of trip.
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
                    <i data-lucide="map"></i>
                </div>

                <h3 className="mb-24">
                    Holiday Travel
                </h3>

                <p className="body-base">
                    Going abroad for a holiday or sightseeing? Get travel
                    insurance based on your destination, dates and plans.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Student Travel
                </h3>

                <p className="body-base">
                    Studying abroad? We can help you understand the travel
                    insurance requirements for your destination and period
                    of study.
                </p>
            </div>


            <div className="category-card reveal">
                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Business Travel
                </h3>

                <p className="body-base">
                    Travelling for meetings, conferences or work? Get guidance
                    on travel insurance suitable for your business trip.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="users"></i>
                </div>

                <h3 className="mb-24">
                    Family Travel
                </h3>

                <p className="body-base">
                    Travelling with your family? Explore travel insurance
                    options based on your destination and the people travelling
                    with you.
                </p>
            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                HOW IT WORKS
            </span>

            <h2>
                Four simple steps to get covered.
            </h2>

            <p className="body-large">
                Share your travel details with us. We will help you understand
                what you need and guide you through the insurance process.
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
                <span className="eyebrow">01</span>

                <div className="category-icon">
                    <i data-lucide="map-pin"></i>
                </div>

                <h3 className="mb-24">
                    Tell Us Your Plans
                </h3>

                <p className="body-base">
                    Share your destination, travel dates, number of travellers
                    and purpose of travel.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <span className="eyebrow">02</span>

                <div className="category-icon">
                    <i data-lucide="clipboard-list"></i>
                </div>

                <h3 className="mb-24">
                    Check the Requirements
                </h3>

                <p className="body-base">
                    We help you understand the insurance requirements for your
                    destination and visa, if applicable.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <span className="eyebrow">03</span>

                <div className="category-icon">
                    <i data-lucide="shield-check"></i>
                </div>

                <h3 className="mb-24">
                    Choose Your Cover
                </h3>

                <p className="body-base">
                    Review the available cover, limits, exclusions and policy
                    conditions before you choose.
                </p>
            </div>


            <div className="category-card reveal">
                <span className="eyebrow">04</span>

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Receive Your Policy
                </h3>

                <p className="body-base">
                    Once your policy is issued, keep your policy documents
                    handy throughout your trip.
                </p>
            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                WHY VISION VISA
            </span>

            <h2>
                Help with the details that matter.
            </h2>

            <p className="body-large">
                Travel insurance can be confusing when every destination and
                policy has different requirements. Vision Visa helps you
                understand what you need before you travel.
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
                    <i data-lucide="messages-square"></i>
                </div>

                <h3 className="mb-24">
                    Talk to a Real Person
                </h3>

                <p className="body-base">
                    Have a question about your destination or insurance
                    requirement? Speak with our team instead of figuring
                    everything out on your own.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="file-search"></i>
                </div>

                <h3 className="mb-24">
                    Understand the Policy
                </h3>

                <p className="body-base">
                    We help you look at the important details, including
                    coverage, limits, exclusions and conditions.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <div className="category-icon">
                    <i data-lucide="globe-2"></i>
                </div>

                <h3 className="mb-24">
                    International Travel
                </h3>

                <p className="body-base">
                    Get guidance for travel insurance requirements when you are
                    travelling abroad for holidays, studies or business.
                </p>
            </div>


            <div className="category-card reveal">
                <div className="category-icon">
                    <i data-lucide="badge-check"></i>
                </div>

                <h3 className="mb-24">
                    Visa Insurance Requirements
                </h3>

                <p className="body-base">
                    If your visa requires travel insurance, we can help you
                    understand the requirement before you apply.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="calendar-check"></i>
                </div>

                <h3 className="mb-24">
                    Plan Before You Fly
                </h3>

                <p className="body-base">
                    Get your insurance sorted along with the rest of your
                    travel preparations, before you leave India.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <div className="category-icon">
                    <i data-lucide="headphones"></i>
                </div>

                <h3 className="mb-24">
                    Help When You Have Questions
                </h3>

                <p className="body-base">
                    Not sure what you need? Our team can help you understand
                    the next step based on your travel plans.
                </p>
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
                TRAVEL INSURANCE FAQS
            </span>

            <h2>
                Common questions about travel insurance.
            </h2>

            <p className="body-large">
                Have questions before buying travel insurance? Here are some
                things travellers commonly want to know.
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
                    Is travel insurance required for a visa?
                </h3>

                <p className="body-base">
                    It depends on the country and visa type. Some destinations
                    require applicants to have travel insurance with specific
                    coverage. Vision Visa can help you understand the
                    requirement for your destination.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    What does travel insurance cover?
                </h3>

                <p className="body-base">
                    Coverage depends on the policy. It may include eligible
                    medical expenses, baggage-related losses, travel delays,
                    cancellations and other covered situations. Check the
                    policy terms, limits and exclusions before buying.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    Can I get travel insurance for international travel?
                </h3>

                <p className="body-base">
                    Yes. Travel insurance is available for many international
                    destinations. The suitable policy can depend on your
                    destination, travel dates, age and purpose of travel.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    Do students need travel insurance when studying abroad?
                </h3>

                <p className="body-base">
                    It depends on the country, visa and institution. Some
                    destinations have specific insurance requirements for
                    international students. Vision Visa can help you check
                    what applies to your destination.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can I get travel insurance for my family?
                </h3>

                <p className="body-base">
                    Family travel insurance options may be available depending
                    on the insurer and policy. Share your travel details with
                    Vision Visa and we can help you understand the available
                    options.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    When should I buy travel insurance?
                </h3>

                <p className="body-base">
                    It is generally a good idea to arrange travel insurance
                    before your trip. If insurance is required for your visa,
                    check the requirement before submitting your application.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    Does travel insurance cover everything?
                </h3>

                <p className="body-base">
                    No. Every policy has its own coverage, limits, exclusions
                    and conditions. Always read the policy details before
                    purchasing and travelling.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can Vision Visa help me choose travel insurance?
                </h3>

                <p className="body-base">
                    Vision Visa can help you understand the insurance
                    requirements for your destination and guide you through
                    the available options based on your travel plans.
                </p>
            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div
            className="section-heading reveal"
            style={{
                "maxWidth": "800px"
            }}
        >
            <span className="eyebrow">
                TRAVEL INSURANCE FAQS
            </span>

            <h2>
                Questions travellers often ask.
            </h2>

            <p className="body-large">
                Before you buy travel insurance, here are some common
                questions about cover, requirements and the application.
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
                    Is travel insurance required for a visa?
                </h3>

                <p className="body-base">
                    Some countries require travel insurance as part of the visa
                    process. The required cover can vary by destination and
                    visa type. Vision Visa can help you check what is required.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    What does travel insurance cover?
                </h3>

                <p className="body-base">
                    It depends on the policy. Cover may include eligible
                    medical expenses, baggage, travel delays, cancellations and
                    other covered situations. Always check the policy terms,
                    limits and exclusions.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    Can I get travel insurance for international travel?
                </h3>

                <p className="body-base">
                    Yes. Travel insurance is available for many international
                    destinations. The right policy depends on factors such as
                    your destination, travel dates and purpose of travel.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    Do students need travel insurance?
                </h3>

                <p className="body-base">
                    It depends on the destination, visa and institution.
                    Some countries have specific insurance requirements for
                    international students. We can help you understand them.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can I get travel insurance for my family?
                </h3>

                <p className="body-base">
                    Family travel insurance options may be available depending
                    on the insurer and policy. Share your travel details with
                    Vision Visa to understand the available options.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    When should I buy travel insurance?
                </h3>

                <p className="body-base">
                    It is best to arrange it before your trip. If insurance is
                    required for your visa, check the requirement before
                    submitting your visa application.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    Does travel insurance cover every loss?
                </h3>

                <p className="body-base">
                    No. Every policy has its own coverage, limits, exclusions
                    and conditions. Read the policy details carefully before
                    purchasing.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can Vision Visa help with travel insurance?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa can help you understand the insurance
                    requirements for your destination and guide you through
                    the available options for your trip.
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
                Ask About Travel Insurance
            </Link>
        </div>

    </div>
</section>

        <JourneyCTA
          eyebrow="TRAVEL PROTECTION"
          title="Need Travel Insurance for Your"
          titleHighlight="Trip?"
          description="Get comprehensive coverage for medical emergencies, delays, and lost baggage tailored to your destination."
          primaryBtnText="Get Insurance Quote"
        />

        {/*  Footer  */}
    </main>
  );
}
