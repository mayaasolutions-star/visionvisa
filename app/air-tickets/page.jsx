import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import JourneyCTA from '../../components/JourneyCTA';

export const metadata = {
    title: "Air Tickets | Domestic & International Flight Booking | Vision Visa",

    description:
        "Book domestic and international air tickets with Vision Visa. Get flight booking assistance for travel, holidays, business trips and study abroad.",

    keywords: [
        "Vision Visa air tickets",
        "air ticket booking",
        "flight booking",
        "flight tickets India",
        "international flight booking",
        "domestic flight booking",
        "cheap flights India",
        "air tickets for visa",
        "travel flight booking",
        "business flight booking",
        "student flight booking",
        "air ticket assistance"
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
        canonical: "YOUR-VISION-VISA-DOMAIN/air-tickets"
    },

    openGraph: {
        title: "Air Tickets | Domestic & International Flight Booking | Vision Visa",

        description:
            "Flight booking assistance from Vision Visa. Find and book domestic and international air tickets for travel, study and business.",

        type: "website",

        siteName: "Vision Visa",

        url: "YOUR-VISION-VISA-DOMAIN/air-tickets",

        locale: "en_IN",

        images: [
            {
                url: "YOUR-VISION-VISA-DOMAIN/images/vision-visa-air-tickets-og.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Visa Air Tickets | Flight Booking Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Air Tickets | Domestic & International Flight Booking | Vision Visa",

        description:
            "Book domestic and international flights with guidance from Vision Visa.",

        images: [
            "YOUR-VISION-VISA-DOMAIN/images/vision-visa-air-tickets-og.jpg"
        ]
    }
};

export default function AIR_TICKETS_Page() {
    return (
    <main>
      {/*  Navigation  */}
        {/*  Navigation  */}
    

<section
    className="hero-img-banner"
    style={{
        backgroundImage: `url(${getAssetPath('/images/airtickets-hero.png')})`
    }}
>
    <div className="container">
        <div className="hero-img-banner-content reveal">
            <span className="eyebrow">
                FLIGHT BOOKINGS & RESERVATIONS
            </span>

            <h1 className="mb-24">
                Tell us where you are flying.
            </h1>

            <p className="body-large mb-32" style={{ color: "var(--slate-600)" }}>
                Share your travel dates, destination and passenger details.
                Our team can help you explore suitable flight options and
                guide you through the booking process.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
                style={{ marginTop: "24px" }}
            >
                Enquire About Flights
            </Link>
        </div>
    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                FLIGHT BOOKING
            </span>

            <h2>
                Flights for wherever you need to go.
            </h2>

            <p className="body-large">
                From a short domestic trip to an international journey,
                Vision Visa can help you find suitable flight options based
                on your travel dates, destination and plans.
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
                    Domestic Flights
                </h3>

                <p className="body-base">
                    Travelling within India? Tell us your departure city,
                    destination and travel dates. We can help you explore
                    available domestic flight options for your trip.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="globe-2"></i>
                </div>

                <h3 className="mb-24">
                    International Flights
                </h3>

                <p className="body-base">
                    Planning a trip abroad? Get assistance with international
                    flight options based on your destination, travel dates
                    and itinerary.
                </p>

            </div>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                FIND THE RIGHT FLIGHT
            </span>

            <h2>
                Flight options that fit your plans.
            </h2>

            <p className="body-large">
                Your travel dates, timings and destination all matter when
                choosing a flight. Vision Visa helps you explore available
                flight options and understand the details before you book.
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
                    <i data-lucide="calendar-clock"></i>
                </div>

                <h3 className="mb-24">
                    Flight Schedules
                </h3>

                <p className="body-base">
                    Check available flight timings and choose an option that
                    works with your travel dates and plans.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="route"></i>
                </div>

                <h3 className="mb-24">
                    Travel Itinerary
                </h3>

                <p className="body-base">
                    Planning a connecting journey? We can help you understand
                    the flight route and itinerary before you confirm your
                    booking.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Flight Information
                </h3>

                <p className="body-base">
                    Get relevant flight details and, where available, status
                    information to help you plan your journey.
                </p>

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
                <span className="eyebrow">
                    BOOKING ASSISTANCE
                </span>

                <h2 className="mb-24">
                    Tell us your plans. We will help with the booking.
                </h2>

                <p className="body-base mb-24">
                    Share your destination, travel dates and passenger details
                    with Vision Visa. Our team can help you check available
                    flight options and choose one that works for your trip.
                </p>

                <p className="body-base mb-48">
                    Once you decide on a flight, we can guide you through the
                    booking details and provide the relevant ticket and travel
                    information.
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
                        <i data-lucide="map-pin" className="text-accent"></i>
                        Share your departure and destination
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="calendar-days" className="text-accent"></i>
                        Provide your preferred travel dates
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="users" className="text-accent"></i>
                        Share passenger details
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="ticket" className="text-accent"></i>
                        Confirm your flight and receive booking details
                    </li>

                </ul>

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Enquire About Flight Booking
                </Link>
            </div>


            <div className="reveal reveal-delay-1">
                <img
                    src={getAssetPath("/images/airtickets-bookingassistance.webp")}
                    alt="Air ticket booking assistance for domestic and international flights"
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

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                FLIGHTS FOR YOUR TRAVEL NEEDS
            </span>

            <h2>
                Flying for a holiday, study or work?
            </h2>

            <p className="body-large">
                Whatever the reason for your trip, Vision Visa can help you
                with domestic and international flight bookings based on your
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
                    Holiday Travel
                </h3>

                <p className="body-base">
                    Planning a holiday or visiting a new destination? Tell us
                    your dates and destination and we can help you find
                    suitable flight options.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Study Abroad
                </h3>

                <p className="body-base">
                    Heading overseas for your studies? Get assistance with
                    international flight options that fit your travel dates
                    and destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Business Travel
                </h3>

                <p className="body-base">
                    Travelling for meetings, conferences or work? We can help
                    you check flight options and plan the air travel part of
                    your itinerary.
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
                AIR TICKET FAQS
            </span>

            <h2>
                Questions about flight booking?
            </h2>

            <p className="body-large">
                Here are some common questions about booking domestic and
                international flights with Vision Visa.
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
                    Can Vision Visa book domestic flights?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa provides domestic air ticket booking
                    assistance for travel within India. Share your destination
                    and travel dates with our team to check available options.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can I book an international flight through Vision Visa?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa provides international air ticket booking
                    assistance. Tell us your destination, travel dates and
                    passenger details to get started.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    What information is needed to book a flight?
                </h3>

                <p className="body-base">
                    We generally need your departure city, destination, travel
                    dates and passenger details. Additional information may be
                    required depending on the booking.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    Can I check flight schedules before booking?
                </h3>

                <p className="body-base">
                    Yes. Our flight booking service includes assistance with
                    checking available flight schedules and options before you
                    confirm your booking.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can Vision Visa help with flight information?
                </h3>

                <p className="body-base">
                    Yes. We can help you with relevant flight details and,
                    where available, flight status information for your
                    journey.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    Can I book a flight for international study?
                </h3>

                <p className="body-base">
                    Yes. Students travelling abroad can enquire about
                    international flight options based on their destination
                    and travel dates.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    How do I enquire about a flight?
                </h3>

                <p className="body-base">
                    Contact Vision Visa with your destination, travel dates
                    and passenger details. Our team will guide you through the
                    available flight options and booking process.
                </p>
            </div>

        </div>

    </div>
</section>

        <JourneyCTA
          eyebrow="READY TO BOOK?"
          title="Tell Us Where You Are"
          titleHighlight="Flying?"
          description="Share your destination, travel dates and passenger details. Vision Visa will check available flight options and guide you through seamless booking."
          primaryBtnText="Enquire About Flights"
        />

        {/*  Footer  */}
    </main>
  );
}
