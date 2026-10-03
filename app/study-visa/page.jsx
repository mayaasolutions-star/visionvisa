import { getAssetPath } from '@/lib/asset-path';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Study Visa Assistance | Student Visa Services | Vision Visa",

    description:
        "Get study visa assistance from Vision Visa for students planning to study abroad. Understand student visa requirements, documents and the application process.",

    keywords: [
        "Vision Visa study visa",
        "study visa",
        "student visa",
        "study visa assistance",
        "student visa services",
        "student visa assistance",
        "study abroad visa",
        "student visa application",
        "student visa requirements",
        "student visa documents",
        "study visa consultant",
        "student visa application assistance",
        "visa for studying abroad",
        "study abroad visa assistance",
        "international student visa",
        "student visa guidance"
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
        canonical: "https://www.visionvisa.in/study-visa"
    },

    openGraph: {
        title: "Study Visa Assistance | Student Visa Services | Vision Visa",

        description:
            "Vision Visa helps students understand study visa requirements, prepare documents and navigate the student visa application process for studying abroad.",

        type: "website",

        siteName: "Vision Visa",

        url: "https://www.visionvisa.in/study-visa",

        locale: "en_IN",

        images: [
            {
                url: "https://www.visionvisa.in/images/studyvisa-hero.webp",
                width: 1200,
                height: 630,
                alt: "Vision Visa Study Visa Assistance"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title: "Study Visa Assistance | Student Visa Services | Vision Visa",

        description:
            "Get guidance on student visa requirements, documents and applications for studying abroad with Vision Visa.",

        images: [
            "https://www.visionvisa.in/images/studyvisa-hero.webp"
        ]
    }
};

export default function STUDY_VISA_Page() {
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
                        "name": "Study Visa",
                        "item": "https://www.visionvisa.in/study-visa"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Study Visa Assistance",
                "provider": {
                    "@type": "TravelAgency",
                    "name": "Vision Visa",
                    "url": "https://www.visionvisa.in"
                },
                "serviceType": "Student Visa Guidance",
                "description": "Comprehensive student visa guidance including admission proof verification, financial documentation checklist, and visa interview preparation for study abroad."
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
                STUDY VISA
            </span>

            <h1 className="display-text mb-24">
                Study Abroad with the
                <span className="text-accent"> Right Visa.</span>
            </h1>

            <p className="body-large">
                Planning to study abroad? Vision Visa helps students understand
                study visa requirements, prepare the necessary documents and
                navigate the student visa application process.
            </p>

        </div>


        <div className="reveal reveal-delay-1">

            <img
                src={getAssetPath("/images/studyvisa-hero.webp")}
                alt="Students preparing to study abroad"
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
                    STUDY ABROAD
                </span>

                <h2 className="mb-24">
                    Get clear guidance for your student visa.
                </h2>

                <p className="body-base mb-24">
                    Studying abroad involves more than getting admission to a
                    university. You also need to understand the student visa
                    requirements for your chosen destination and course.
                </p>

                <p className="body-base">
                    Vision Visa helps students understand the visa process,
                    prepare the required documents and get ready for their
                    application.
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
                        STUDY VISA
                    </span>

                    <h3
                        className="mb-24"
                        style={{
                            "color": "var(--white)"
                        }}
                    >
                        Planning to study abroad?
                    </h3>

                    <p
                        className="body-base mb-32"
                        style={{
                            "color": "rgba(255,255,255,0.75)"
                        }}
                    >
                        Tell us about your destination and study plans. We can
                        help you understand the student visa requirements and
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
                        Get Study Visa Assistance
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
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Student Visa Guidance
                </h3>

                <p className="body-small">
                    Understand the student visa requirements that apply
                    to your destination and study plans.
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
                    Get guidance on preparing the documents and
                    information required for your visa application.
                </p>

            </div>


            {/* Card 3 */}

            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="clipboard-list"></i>
                </div>

                <h3 className="mb-24">
                    Application Preparation
                </h3>

                <p className="body-small">
                    Understand the application steps and prepare before
                    submitting your student visa application.
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
                    Have questions about your student visa? Our team
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
                STUDENT VISA REQUIREMENTS
            </span>

            <h2>
                Know what you need before you apply.
            </h2>

            <p className="body-large">
                Student visa requirements can vary by country, course, institution
                and your individual circumstances. Getting your documents and
                information ready early can make the application process easier.
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
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Admission Details
                </h3>

                <p className="body-base">
                    Your course and institution details may form an important
                    part of your student visa application. Keep your admission
                    documents ready.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="file-text"></i>
                </div>

                <h3 className="mb-24">
                    Personal Documents
                </h3>

                <p className="body-base">
                    Your passport, photographs and other personal documents may
                    be required. The exact list depends on your destination and
                    visa category.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="wallet-cards"></i>
                </div>

                <h3 className="mb-24">
                    Financial Documents
                </h3>

                <p className="body-base">
                    Some student visa applications require evidence that you
                    can support your studies and stay. Requirements vary by
                    destination.
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
                    Additional documents may be required depending on your
                    course, destination and individual circumstances. We can
                    help you understand what applies to your application.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="clipboard-list"></i>
                </div>

                <h3 className="mb-24">
                    Application Details
                </h3>

                <p className="body-base">
                    Make sure the information in your visa application is
                    complete and consistent with your supporting documents.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="circle-help"></i>
                </div>

                <h3 className="mb-24">
                    Not Sure What You Need?
                </h3>

                <p className="body-base">
                    Student visa requirements can be confusing. Vision Visa
                    can help you understand the applicable requirements before
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
                Requirements vary by destination and visa category. Always
                check the current requirements of the relevant embassy,
                consulate or immigration authority.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary magnetic"
            >
                Check Your Study Visa Requirements
            </Link>

        </div>

    </div>
</section>

<section className="bg-off-white">
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                STUDY VISA PROCESS
            </span>

            <h2>
                A clear process from admission to visa application.
            </h2>

            <p className="body-large">
                Once you have your study plans in place, the next step is
                preparing your student visa application. Vision Visa helps
                you understand what needs to be done at each stage.
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
                    <i data-lucide="graduation-cap"></i>
                </div>

                <h3 className="mb-24">
                    Share Your Study Plans
                </h3>

                <p className="body-base">
                    Tell us about your destination, course, institution and
                    planned intake so we can understand your visa requirements.
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
                    Review the student visa category, documents and other
                    requirements that apply to your destination and situation.
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
                    Organise your admission documents, personal information
                    and other supporting documents before applying.
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
                    Complete and submit your student visa application through
                    the applicable process and follow any further instructions
                    from the relevant authority.
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
                Student visa procedures and processing times vary by country
                and visa category. Always follow the current instructions from
                the relevant embassy, consulate or immigration authority.
            </p>

        </div>

    </div>
</section>

<section>
    <div className="container">

        <div className="section-heading reveal">

            <span className="eyebrow">
                GET READY FOR YOUR JOURNEY
            </span>

            <h2>
                Your study abroad plans do not stop at the visa.
            </h2>

            <p className="body-large">
                Once your student visa requirements are clear, there are a few
                other travel details to think about before you leave for your
                new destination.
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
                    <i data-lucide="shield-check"></i>
                </div>

                <h3 className="mb-24">
                    Travel Insurance
                </h3>

                <p className="body-base mb-24">
                    Some destinations or student visa categories may require
                    travel insurance. Understand the applicable requirement
                    before you travel.
                </p>

                <Link
                    href="/travel-insurance"
                    className="btn btn-secondary magnetic"
                >
                    Explore Travel Insurance
                </Link>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <div className="category-icon">
                    <i data-lucide="plane"></i>
                </div>

                <h3 className="mb-24">
                    Air Tickets
                </h3>

                <p className="body-base mb-24">
                    Planning your move abroad? Explore domestic and
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


            <div className="category-card reveal reveal-delay-2">

                <div className="category-icon">
                    <i data-lucide="banknote"></i>
                </div>

                <h3 className="mb-24">
                    Forex Services
                </h3>

                <p className="body-base mb-24">
                    Moving abroad for your studies? Get guidance on foreign
                    currency and other permitted forex requirements for your
                    international travel.
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
                STUDY VISA FAQS
            </span>

            <h2>
                Student visa questions, answered.
            </h2>

            <p className="body-large">
                Planning to study abroad? Here are some common questions
                students ask about study visa requirements and applications.
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
                    What is a study visa?
                </h3>

                <p className="body-base">
                    A study visa or student visa allows eligible international
                    students to study in a country for the period and purpose
                    permitted by the visa. The rules vary by destination and
                    course.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    What documents are needed for a student visa?
                </h3>

                <p className="body-base">
                    Requirements vary by country and visa category. You may
                    need your passport, admission documents, financial
                    information and other supporting documents.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Do I need admission before applying for a student visa?
                </h3>

                <p className="body-base">
                    Many student visa applications require evidence of
                    admission or enrolment from an eligible educational
                    institution. The exact requirement depends on the
                    destination.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Do students need to show proof of funds?
                </h3>

                <p className="body-base">
                    Some destinations require students to show that they have
                    sufficient funds for tuition, living expenses or other
                    eligible costs. The amount and evidence required vary by
                    country.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    When should I apply for a student visa?
                </h3>

                <p className="body-base">
                    It is generally a good idea to understand the visa process
                    well before your planned course start date. Application
                    timelines and processing times vary by destination.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-2">

                <h3 className="mb-24">
                    Can Vision Visa help with my student visa application?
                </h3>

                <p className="body-base">
                    Yes. Vision Visa can help you understand the applicable
                    requirements, organise your documents and navigate the
                    student visa application process.
                </p>

            </div>


            <div className="category-card reveal">

                <h3 className="mb-24">
                    Does Vision Visa guarantee student visa approval?
                </h3>

                <p className="body-base">
                    No. Student visa decisions are made by the relevant
                    embassy, consulate or immigration authority. Vision Visa
                    provides guidance and assistance with the application
                    process.
                </p>

            </div>


            <div className="category-card reveal reveal-delay-1">

                <h3 className="mb-24">
                    Can I travel after getting my student visa?
                </h3>

                <p className="body-base">
                    Your travel must follow the conditions of your visa and
                    the immigration rules of your destination. Check the
                    current requirements before making your travel plans.
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
                Get Study Visa Assistance
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
                START YOUR STUDY ABROAD JOURNEY
            </span>

            <h2 className="mb-24">
                Ready to start your student visa application?
            </h2>

            <p className="body-large mb-48">
                Tell Vision Visa about your course, destination and study
                plans. Our team can help you understand the student visa
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
                    Get Study Visa Assistance
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
