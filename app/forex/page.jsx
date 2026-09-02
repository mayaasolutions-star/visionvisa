import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import JourneyCTA from '../../components/JourneyCTA';

export const metadata = {
    title: "Forex Services | Foreign Currency & Forex Card | Vision Visa",

    description:
        "Get forex services from Vision Visa for international travel, study and business. Arrange foreign currency, forex cards and permitted international money transfers.",

    keywords: [
        "Vision Visa forex",
        "forex services",
        "foreign currency",
        "forex card",
        "forex card India",
        "foreign currency exchange",
        "international money transfer",
        "money transfer abroad",
        "student forex",
        "forex for students",
        "travel forex",
        "business travel forex",
        "currency exchange",
        "international travel money",
        "forex services India"
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
        canonical: "YOUR-VISION-VISA-DOMAIN/forex"
    },

    openGraph: {
        title: "Forex Services | Foreign Currency & Forex Card | Vision Visa",

        description:
            "Vision Visa provides forex services for international travel, students and business travellers, including foreign currency, forex cards and permitted international money transfers.",

        type: "website",

        siteName: "Vision Visa",

        url: "YOUR-VISION-VISA-DOMAIN/forex",

        locale: "en_IN",

        images: [
            {
                url: "YOUR-VISION-VISA-DOMAIN/images/vision-visa-forex-og.jpg",
                width: 1200,
                height: 630,
                alt: "Vision Visa Forex Services | Foreign Currency and Forex Card"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Forex Services | Foreign Currency & Forex Card | Vision Visa",

        description:
            "Arrange foreign currency, forex cards and permitted international money transfers with Vision Visa for your overseas travel needs.",

        images: [
            "YOUR-VISION-VISA-DOMAIN/images/vision-visa-forex-og.jpg"
        ]
    }
};

export default function FOREX_Page() {
    return (
    <main>
      {/*  Navigation  */}
        {/*  Navigation  */}
    

<section className="bg-off-white" style={{ "paddingTop": "120px" }}>
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
                    CURRENCY EXCHANGE
                </span>

                <h2 className="mb-24">
                    Need foreign currency before you travel?
                </h2>

                <p className="body-base mb-24">
                    Get the currency you need for your international trip,
                    whether you are travelling for a holiday, studying abroad
                    or going on a business trip.
                </p>

                <p className="body-base mb-48">
                    Vision Visa helps you with the currency exchange process,
                    from checking the amount and required documents to
                    completing the transaction and receiving your foreign
                    currency.
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
                        <i data-lucide="banknote" className="text-accent"></i>
                        Foreign currency for international travel
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="globe-2" className="text-accent"></i>
                        Multiple currencies for different destinations
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="file-check-2" className="text-accent"></i>
                        Guidance on required documents
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="receipt" className="text-accent"></i>
                        Transaction receipt for your records
                    </li>

                </ul>

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Enquire About Currency Exchange
                </Link>
            </div>


            <div className="reveal reveal-delay-1">
                <img
                    src={getAssetPath("/images/forex-currencyexchange.webp")}
                    alt="Foreign currency exchange for international travel"
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
                    src={getAssetPath("/images/forex-forexcard.webp")}
                    alt="Forex card for international travel"
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
                    FOREX CARD
                </span>

                <h2 className="mb-24">
                    Carry your travel money on one card.
                </h2>

                <p className="body-base mb-24">
                    A forex card is a prepaid card that lets you load foreign
                    currency and use it for payments while travelling abroad.
                    It can be a convenient alternative to carrying large
                    amounts of cash.
                </p>

                <p className="body-base mb-48">
                    Vision Visa helps travellers understand how a forex card
                    works, which currencies can be loaded and what they need
                    to get started.
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
                        <i data-lucide="wallet-cards" className="text-accent"></i>
                        Load foreign currency before you travel
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="globe-2" className="text-accent"></i>
                        Use supported currencies for international travel
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="credit-card" className="text-accent"></i>
                        Use the card for eligible international payments
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="shield-check" className="text-accent"></i>
                        A convenient and secure way to carry travel funds
                    </li>

                </ul>

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Enquire About Forex Card
                </Link>

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
                    INTERNATIONAL MONEY TRANSFER
                </span>

                <h2 className="mb-24">
                    Need to send money abroad?
                </h2>

                <p className="body-base mb-24">
                    Whether you are paying university fees, supporting family
                    overseas or sending money for another permitted purpose,
                    Vision Visa can help you with international money transfer
                    and remittance services.
                </p>

                <p className="body-base mb-48">
                    Tell us where the money is going and why you are sending
                    it. Our team can guide you through the applicable
                    requirements, documents and transfer process.
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
                        <i data-lucide="graduation-cap" className="text-accent"></i>
                        Overseas education and tuition payments
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="users" className="text-accent"></i>
                        Sending money to family abroad
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="gift" className="text-accent"></i>
                        Permitted personal transfers and gifts
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="file-check-2" className="text-accent"></i>
                        Guidance on documents and transfer requirements
                    </li>

                </ul>

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Enquire About Remittance
                </Link>
            </div>


            <div className="reveal reveal-delay-1">
                <img
                    src={getAssetPath("/images/forex-internationalmoneytransfer.webp")}
                    alt="International money transfer and remittance"
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
                    src={getAssetPath("/images/forex-fprexforstudents.webp")}
                    alt="Forex services for students studying abroad"
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
                    FOREX FOR STUDENTS
                </span>

                <h2 className="mb-24">
                    Going abroad to study? Sort your forex before you leave.
                </h2>

                <p className="body-base mb-24">
                    Moving to another country for studies means planning more
                    than your admission and visa. You also need to think about
                    how you will pay for expenses and access money while you
                    are abroad.
                </p>

                <p className="body-base mb-48">
                    Vision Visa can help students understand their forex
                    options, whether they need foreign currency for their
                    initial expenses, a forex card for everyday spending or
                    an international money transfer for education-related
                    payments.
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
                        <i data-lucide="banknote" className="text-accent"></i>
                        Foreign currency for your initial travel needs
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="wallet-cards" className="text-accent"></i>
                        Forex card for everyday spending abroad
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="graduation-cap" className="text-accent"></i>
                        Support for permitted education-related payments
                    </li>

                    <li
                        style={{
                            "display": "flex",
                            "alignItems": "center",
                            "gap": "12px"
                        }}
                    >
                        <i data-lucide="file-check-2" className="text-accent"></i>
                        Guidance on required documents
                    </li>

                </ul>

                <Link
                    href="/contact"
                    className="btn btn-primary magnetic"
                >
                    Enquire About Student Forex
                </Link>

            </div>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                BUSINESS & FREQUENT TRAVEL
            </span>

            <h2>
                Forex for work trips and regular travel abroad.
            </h2>

            <p className="body-large">
                If you travel internationally for work or travel abroad
                regularly, having the right way to carry and access foreign
                currency can make trip planning easier.
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
                    <i data-lucide="briefcase-business"></i>
                </div>

                <h3 className="mb-24">
                    Business Travel
                </h3>

                <p className="body-base">
                    Get foreign currency or a forex card for meetings,
                    conferences, business visits and other international
                    work trips.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <div className="category-icon">
                    <i data-lucide="repeat-2"></i>
                </div>

                <h3 className="mb-24">
                    Frequent Travellers
                </h3>

                <p className="body-base">
                    Travelling abroad more than once a year? Choose a forex
                    option that works for the way you travel and the
                    destinations you visit.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <div className="category-icon">
                    <i data-lucide="globe-2"></i>
                </div>

                <h3 className="mb-24">
                    Multiple Destinations
                </h3>

                <p className="body-base">
                    Visiting more than one country? We can help you understand
                    your foreign currency and forex card options for your
                    itinerary.
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
                Enquire About Forex
            </Link>
        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">
            <span className="eyebrow">
                HOW IT WORKS
            </span>

            <h2>
                Getting your forex sorted is simple.
            </h2>

            <p className="body-large">
                Tell us what you need and where you are travelling. We will
                guide you through the right forex option and the required
                documents.
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
                    Tell Us What You Need
                </h3>

                <p className="body-base">
                    Let us know your destination, travel dates and whether you
                    need currency, a forex card or a money transfer.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <span className="eyebrow">
                    02
                </span>

                <div className="category-icon">
                    <i data-lucide="file-check-2"></i>
                </div>

                <h3 className="mb-24">
                    Share Your Documents
                </h3>

                <p className="body-base">
                    Provide the documents required for your forex transaction
                    based on the purpose and type of service.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <span className="eyebrow">
                    03
                </span>

                <div className="category-icon">
                    <i data-lucide="calculator"></i>
                </div>

                <h3 className="mb-24">
                    Review the Details
                </h3>

                <p className="body-base">
                    Check the applicable exchange rate, amount, charges and
                    other transaction details before proceeding.
                </p>
            </div>


            <div className="category-card reveal">
                <span className="eyebrow">
                    04
                </span>

                <div className="category-icon">
                    <i data-lucide="check-circle-2"></i>
                </div>

                <h3 className="mb-24">
                    Complete Your Forex
                </h3>

                <p className="body-base">
                    Once everything is in place, complete your transaction and
                    receive your foreign currency, forex card or transfer
                    confirmation.
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
                FOREX FAQS
            </span>

            <h2>
                Common questions about forex.
            </h2>

            <p className="body-large">
                Planning to travel abroad or send money overseas? Here are
                some common questions about foreign currency, forex cards and
                international money transfers.
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
                    What is forex?
                </h3>

                <p className="body-base">
                    Forex is foreign exchange. It involves converting one
                    currency into another, such as converting Indian Rupees
                    into US Dollars, Euros or other foreign currencies.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Where can I get foreign currency for travel?
                </h3>

                <p className="body-base">
                    Vision Visa can help you arrange foreign currency for
                    international travel. The currency available depends on
                    your destination and the applicable requirements.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    What is a forex card?
                </h3>

                <p className="body-base">
                    A forex card is a prepaid travel card that can be loaded
                    with supported foreign currencies and used for eligible
                    payments while travelling abroad.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    Is a forex card better than carrying cash?
                </h3>

                <p className="body-base">
                    A forex card can be a convenient way to carry travel funds
                    and may reduce the need to carry large amounts of cash.
                    The right option depends on your destination and travel
                    needs.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    Can students get forex for studying abroad?
                </h3>

                <p className="body-base">
                    Yes. Students may need foreign currency, a forex card and
                    permitted international money transfers for their studies.
                    Vision Visa can guide you through the available options
                    and requirements.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-2">
                <h3 className="mb-24">
                    Can I send money to another country?
                </h3>

                <p className="body-base">
                    International money transfers may be available for
                    permitted purposes such as education payments and family
                    support, subject to applicable rules and documentation.
                </p>
            </div>


            <div className="category-card reveal">
                <h3 className="mb-24">
                    What documents are needed for forex?
                </h3>

                <p className="body-base">
                    The documents required depend on the type and purpose of
                    the transaction. Vision Visa can tell you what documents
                    are needed for your specific forex requirement.
                </p>
            </div>


            <div className="category-card reveal reveal-delay-1">
                <h3 className="mb-24">
                    How do I get started with forex?
                </h3>

                <p className="body-base">
                    Tell us your destination, what you need and the purpose of
                    your transaction. Our team will guide you through the next
                    steps.
                </p>
            </div>

        </div>

    </div>
</section>

        <JourneyCTA
          eyebrow="INTERNATIONAL MONEY & FOREX"
          title="Ready to Arrange Foreign"
          titleHighlight="Currency?"
          description="Get competitive exchange rates, secure multi-currency forex cards, and smooth international transfers."
          primaryBtnText="Enquire About Forex"
        />

        {/*  Footer  */}
    </main>
  );
}
