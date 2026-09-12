const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, '..', 'js', 'countries-data.js');
const pubPath = path.join(__dirname, '..', 'public', 'js', 'countries-data.js');

const raw = fs.readFileSync(jsPath, 'utf8');
const start = raw.indexOf('{');
const end = raw.lastIndexOf('}');
const db = JSON.parse(raw.substring(start, end + 1));

// Standard Schengen Countries List
const schengenCountries = [
  'austria', 'belgium', 'croatia', 'czech-republic', 'denmark', 'estonia', 'finland',
  'france', 'germany', 'greece', 'hungary', 'iceland', 'italy', 'luxembourg', 'malta',
  'netherlands', 'norway', 'poland', 'portugal', 'slovakia', 'slovenia', 'spain',
  'sweden', 'switzerland'
];

// Helper to build tailored checklist & categories
function generateCountryEnhancements(slug, country) {
  const name = country.name;
  const isSchengen = schengenCountries.includes(slug);

  let checklist = {
    essential: [],
    financial: [],
    travel: [],
    additional: []
  };

  let visaCategories = [];

  if (isSchengen) {
    checklist.essential = [
      "Original passport with at least 6 months validity from return date and 2 blank pages",
      "Two recent passport-size photographs (35x45mm, 80% face coverage, white background, matte finish)",
      `Completed and signed official ${name} / Schengen visa application form`,
      "Consular visa fee payment receipt & biometric appointment confirmation"
    ];
    checklist.financial = [
      "Original personal bank statement for the last 6 months with bank seal and signature",
      "Personal Income Tax Returns (ITR-V) or Form 16 for the last 2 to 3 financial years",
      "Salary slips for the last 3 months with company stamp (for salaried applicants)",
      "Employment letter / Leave sanction NOC from employer on official letterhead",
      "Business registration / GST certificate & company bank statement (for self-employed / business owners)"
    ];
    checklist.travel = [
      "Round-trip flight reservation or confirmed travel itinerary",
      `Confirmed hotel bookings / accommodation proof covering entire stay in ${name} and Schengen Area`,
      "Detailed day-by-day travel plan and sightseeing itinerary",
      "Travel Medical Insurance with minimum coverage of €30,000 (valid across all Schengen member states)"
    ];
    checklist.additional = [
      `Personal cover letter explaining purpose of travel, itinerary, and financial sponsorship`,
      "Copies of previous passports and previous Schengen, US, UK, or Canada visas (if applicable)",
      "Official invitation letter, host passport copy & residence proof (if visiting family/friends or business meetings)",
      "Marriage certificate and birth certificates (if travelling with spouse or minor children)",
      "Student ID card and leave NOC from school/university (for student applicants)"
    ];

    visaCategories = [
      {
        name: "Tourist Visa (Schengen Type C)",
        description: `For tourism, leisure holidays, and sightseeing across ${name} and the Schengen zone.`,
        icon: "🏖️"
      },
      {
        name: "Business Visa (Schengen Type C)",
        description: `For corporate meetings, trade fairs, client discussions, and business conferences.`,
        icon: "💼"
      },
      {
        name: "Visitor / Family Visa",
        description: `For visiting family members, relatives, or friends residing in ${name}.`,
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student / Study Visa",
        description: `For university degree programs, exchange semesters, and academic courses.`,
        icon: "🎓"
      },
      {
        name: "Work / Employment Visa",
        description: `For official long-term employment contracts with a registered employer in ${name}.`,
        icon: "🏢"
      },
      {
        name: "Airport Transit Visa (Type A)",
        description: `For connecting flights through international transit zones of Schengen airports.`,
        icon: "✈️"
      }
    ];
  } else if (slug === 'usa' || slug === 'united-states') {
    checklist.essential = [
      "Original valid passport with at least 6 months validity beyond intended stay",
      "Completed DS-160 online non-immigrant visa application confirmation page (with barcode)",
      "US Visa MRV application fee payment receipt",
      "VAC (Biometrics) appointment and Consular interview appointment confirmation letters",
      "One printed photograph (2x2 inches / 51x51 mm, white background, taken within last 6 months)"
    ];
    checklist.financial = [
      "Personal bank statements for the last 6 months showing consistent balance and source of funds",
      "Income Tax Returns (ITR-V) for the last 3 assessment years",
      "Salary slips for the last 3 months and current company ID card",
      "Employment verification letter / Leave approval letter on employer letterhead",
      "Business registration (GST / Certificate of Incorporation) and business financials (if self-employed)"
    ];
    checklist.travel = [
      "Proposed travel itinerary and tentative flight plans",
      "Hotel reservation or host address details in the United States",
      "Comprehensive cover letter outlining the purpose of visit and duration of stay"
    ];
    checklist.additional = [
      "Evidence of strong economic and family ties to India (property papers, investments, family dependents)",
      "Formal invitation letter, host visa/citizenship status & financial support proof (if visiting relatives)",
      "Corporate invitation letter and conference schedule (if travelling on business / B1 visa)",
      "Copies of previous US visas and international travel history"
    ];

    visaCategories = [
      {
        name: "B1/B2 Visitor Visa",
        description: "Combined visa for tourism, holidays, family visits, business consultations, and conferences.",
        icon: "🏖️"
      },
      {
        name: "B1 Business Visa",
        description: "For attending commercial conferences, negotiating contracts, and consulting business associates.",
        icon: "💼"
      },
      {
        name: "B2 Tourist & Medical Visa",
        description: "For vacation, visiting friends or relatives, and medical treatment in the USA.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "F1 Student Visa",
        description: "For academic studies at accredited US universities and colleges.",
        icon: "🎓"
      },
      {
        name: "H-1B / L-1 Work Visa",
        description: "For specialty occupation employment and intra-company transferee petitions.",
        icon: "🏢"
      },
      {
        name: "C-1 Transit Visa",
        description: "For immediate and continuous transit through the United States to another country.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'united-kingdom') {
    checklist.essential = [
      "Current valid passport with at least 6 months validity and a full blank page",
      "Completed UKVI online visa application form and visa fee payment receipt",
      "VFS Global biometric appointment confirmation letter",
      "Passport scan and appointment submission receipt"
    ];
    checklist.financial = [
      "Original personal bank statements for the last 6 months showing regular income and healthy closing balance",
      "Income Tax Returns (ITR) or Form 16 for the last 2 to 3 financial years",
      "Employment letter detailing role, salary, date of joining, and approved leave from employer",
      "Last 3 to 6 months payslips",
      "Company registration, audited balance sheets, and company bank statements (if self-employed)"
    ];
    checklist.travel = [
      "Planned travel itinerary outlining UK stay dates and intended destinations",
      "Proof of accommodation (hotel booking confirmation or host address details)",
      "Provisional flight itinerary (confirmed tickets not mandatory before approval)"
    ];
    checklist.additional = [
      "Cover letter stating the purpose of trip, funding source, and ties ensuring return to India",
      "Invitation letter, host UK passport/BRP copy, and host tenancy/council tax bill (if hosted)",
      "Proof of ties to India such as property ownership, ongoing employment, or family commitments",
      "Previous passports and record of previous international travels"
    ];

    visaCategories = [
      {
        name: "Standard Visitor Visa (Tourist)",
        description: "For tourism, holidays, sightseeing, and visiting family or friends in the UK.",
        icon: "🏖️"
      },
      {
        name: "Standard Visitor Visa (Business)",
        description: "For attending business meetings, conferences, training sessions, and corporate negotiations.",
        icon: "💼"
      },
      {
        name: "Student Visa (Tier 4)",
        description: "For pursuing undergraduate, postgraduate, or long-term courses at UK educational institutions.",
        icon: "🎓"
      },
      {
        name: "Skilled Worker Visa",
        description: "For qualified professionals with an approved Certificate of Sponsorship (CoS) from a UK employer.",
        icon: "🏢"
      },
      {
        name: "Family / Spouse Visa",
        description: "For joining a spouse, partner, or family member settled in the United Kingdom.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Direct Airside Transit Visa (DATV)",
        description: "For changing flights in the UK without passing through border control.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'canada') {
    checklist.essential = [
      "Original valid passport with sufficient validity beyond the intended return date",
      "Completed IRCC online Temporary Resident Visa application (IMM 5257) & Family Information form (IMM 5645)",
      "IRCC visa fee & biometric fee payment receipts",
      "Two passport photographs (35x45mm, white background) conforming to IRCC specifications",
      "VFS Biometrics collection appointment letter"
    ];
    checklist.financial = [
      "Personal bank statements for the last 6 months certified by the bank",
      "Income Tax Returns (ITR-V) for the last 3 assessment years",
      "Employment letter / Leave approval NOC from current employer stating salary and designation",
      "Pay slips for the last 3 to 6 months",
      "Business registration (GST/incorporation) and corporate financial statements (if self-employed)"
    ];
    checklist.travel = [
      "Comprehensive travel itinerary detailing day-by-day sightseeing and city transfers in Canada",
      "Confirmed hotel reservations or accommodation arrangements",
      "Tentative return flight itinerary"
    ];
    checklist.additional = [
      "Statement of Purpose / Personal cover letter explaining visit objectives and ties to India",
      "Proof of ties to home country (employment continuity, residential property, family dependents)",
      "Invitation letter, Canadian host PR card/citizenship proof, and Notice of Assessment (if invited)",
      "Copies of previous international visas and entry/exit stamps"
    ];

    visaCategories = [
      {
        name: "Visitor Visa (Tourist)",
        description: "For leisure travel, exploring Canadian national parks, and vacationing.",
        icon: "🏖️"
      },
      {
        name: "Business Visitor Visa",
        description: "For attending business conferences, trade seminars, and meetings with Canadian companies.",
        icon: "💼"
      },
      {
        name: "Super Visa (Parents & Grandparents)",
        description: "Multi-entry visa allowing eligible parents and grandparents to stay up to 5 years per visit.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Study Permit",
        description: "For enrolled students at Designated Learning Institutions (DLI) in Canada.",
        icon: "🎓"
      },
      {
        name: "Work Permit",
        description: "For professionals with valid LMIA-approved job offers or intra-company transfers.",
        icon: "🏢"
      },
      {
        name: "Transit Visa",
        description: "For travel through Canadian airports en route to another international destination.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'australia') {
    checklist.essential = [
      "Color scan of valid passport (bio-data page and all stamped/visa pages)",
      "Completed Subclass 600 Visitor Visa application submitted via Australian ImmiAccount",
      "Australian visa application fee payment confirmation",
      "Recent passport-sized digital photograph per Australian immigration criteria",
      "VFS Biometrics appointment notification (if requested by Home Affairs)"
    ];
    checklist.financial = [
      "Personal bank statements for the last 6 months showing steady financial history",
      "Income Tax Returns (ITR) for the last 3 financial years",
      "Letter of employment and sanctioned leave approval from employer",
      "Last 3 months salary slips",
      "Business registration (GST / company certificate) and company bank statements (if self-employed)"
    ];
    checklist.travel = [
      "Detailed Australian travel itinerary covering planned cities and activities",
      "Proof of accommodation (hotel bookings or host residential address)",
      "Provisional round-trip flight booking"
    ];
    checklist.additional = [
      "Genuine Temporary Entrant (GTE) statement / Cover letter outlining reasons to return to India",
      "Invitation letter, host Australian passport/PR copy, and host utility bills (if visiting family/friends)",
      "Evidence of home ties (property ownership, continuing employment, dependent family)",
      "Copies of previous overseas visas and travel history"
    ];

    visaCategories = [
      {
        name: "Visitor Visa (Tourist Stream Subclass 600)",
        description: "For holidays, sightseeing, visiting friends or family, and informal recreation.",
        icon: "🏖️"
      },
      {
        name: "Business Visitor Stream (Subclass 600)",
        description: "For general business inquiries, contract negotiations, trade fairs, and conferences.",
        icon: "💼"
      },
      {
        name: "Sponsored Family Stream",
        description: "For applicants formally sponsored by an eligible Australian citizen or permanent resident.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student Visa (Subclass 500)",
        description: "For full-time registered study at Australian universities and vocational colleges.",
        icon: "🎓"
      },
      {
        name: "Temporary Work Visa (Subclass 482 / 400)",
        description: "For skilled employment and specialized short-term work assignments in Australia.",
        icon: "🏢"
      },
      {
        name: "Transit Visa (Subclass 771)",
        description: "For transiting through Australia for up to 72 hours.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'new-zealand') {
    checklist.essential = [
      "Original valid passport with at least 6 months validity",
      "Completed New Zealand online visitor visa application via INZ portal",
      "Visa application and International Visitor Conservation and Tourism Levy (IVL) fee receipt",
      "Digital passport photograph meeting INZ requirements"
    ];
    checklist.financial = [
      "Personal bank statements for the last 6 months showing sufficient funds (min NZD 1,000/month or NZD 400 if pre-paid stay)",
      "Income Tax Returns (ITR) for the last 2 to 3 years",
      "Employment letter / NOC with approved leave dates and recent 3 months payslips",
      "Business registration and financial statements (for business owners)"
    ];
    checklist.travel = [
      "Travel itinerary detailing New Zealand travel plans",
      "Return flight ticket booking or itinerary",
      "Confirmed hotel or lodge accommodation reservations",
      "Comprehensive travel medical insurance"
    ];
    checklist.additional = [
      "Cover letter detailing purpose of visit and commitments in India",
      "Sponsorship form (INZ 1025) and host identification if sponsored by a New Zealand resident",
      "Previous international travel history and visa copies"
    ];

    visaCategories = [
      {
        name: "Visitor Visa (Tourist)",
        description: "For tourism, sightseeing, visiting friends, and exploring New Zealand.",
        icon: "🏖️"
      },
      {
        name: "Business Visitor Visa",
        description: "For attending business meetings, conducting negotiations, and trade fairs.",
        icon: "💼"
      },
      {
        name: "Student Visa",
        description: "For pursuing full-time academic courses at New Zealand universities and institutes.",
        icon: "🎓"
      },
      {
        name: "Accredited Employer Work Visa",
        description: "For professionals working with an accredited New Zealand employer.",
        icon: "🏢"
      },
      {
        name: "Transit Visa",
        description: "For passing through Auckland International Airport en route to another destination.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'japan') {
    checklist.essential = [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Completed and signed Japan visa application form with photo pasted",
      "Two recent photographs (45x45 mm / 2x2 inch, white background, matte finish)",
      "Personal cover letter addressed to the Embassy/Consulate General of Japan"
    ];
    checklist.financial = [
      "Original personal bank statements for the last 6 months stamped and signed by the bank",
      "Income Tax Returns (ITR-V) or Form 16 for the last 2 to 3 assessment years",
      "Employment certificate and sanctioned leave letter from employer",
      "Salary slips for the last 3 months",
      "Company registration certificate & company bank statement (for self-employed applicants)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight reservation",
      "Confirmed hotel bookings for all nights of stay in Japan",
      "Detailed 'Schedule of Stay' (Form 1) indicating daily activities, accommodation names, and contact numbers"
    ];
    checklist.additional = [
      "Letter of Reason for Invitation & Schedule of Stay from host in Japan (if visiting relatives/friends)",
      "Host Residence Certificate (Juminhyo) & copy of Japanese visa/residence card (if invited)",
      "Corporate invitation letter and Certificate of Employment (for business visa applications)",
      "Previous passports and international travel records"
    ];

    visaCategories = [
      {
        name: "Tourist Visa (Short-Term Stay)",
        description: "For tourism, sightseeing, cultural tours, and holiday visits in Japan.",
        icon: "🏖️"
      },
      {
        name: "Business Visa",
        description: "For short-term business affairs, corporate meetings, and attending conferences.",
        icon: "💼"
      },
      {
        name: "Visiting Relatives / Friends Visa",
        description: "For visiting relatives, acquaintances, or friends living in Japan.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student Visa",
        description: "For long-term study at Japanese universities, language schools, and vocational colleges.",
        icon: "🎓"
      },
      {
        name: "Highly Skilled / Work Visa",
        description: "For specialized employment holding a Certificate of Eligibility (COE).",
        icon: "🏢"
      },
      {
        name: "Transit Visa",
        description: "For brief sightseeing during flight connections in Japan.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'uae' || slug === 'united-arab-emirates') {
    checklist.essential = [
      "Clear color scan of passport bio-data page and address page (valid min 6 months)",
      "Recent digital passport-size photograph with white background (clear face, no glasses)",
      "Completed UAE visa application details"
    ];
    checklist.financial = [];
    checklist.travel = [
      "Confirmed round-trip flight tickets",
      "Hotel booking confirmation or UAE resident host accommodation address details"
    ];
    checklist.additional = [
      "Valid Emirates ID copy and host visa copy (if staying with relatives or friends)",
      "Birth certificate in English (for minor applicants travelling with parents)",
      "PAN Card copy (for identity verification)"
    ];

    visaCategories = [
      {
        name: "30 Days Tourist Visa (Single Entry)",
        description: "Ideal for short vacations, family visits, and leisure holidays in Dubai and UAE.",
        icon: "🏖️"
      },
      {
        name: "60 Days Tourist Visa (Single / Multiple Entry)",
        description: "For extended holidays, visiting relatives, and comprehensive exploration across Emirates.",
        icon: "🌴"
      },
      {
        name: "14 Days Express Visa",
        description: "Quick turnaround tourist/business visa for urgent short-duration visits.",
        icon: "⚡"
      },
      {
        name: "30 / 60 Days Business Visa",
        description: "For attending corporate events, trade exhibitions, client meetings, and investment reviews.",
        icon: "💼"
      },
      {
        name: "96 Hours Transit Visa",
        description: "For short stopovers and connecting flight layovers via Dubai/Abu Dhabi airports.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'vietnam') {
    checklist.essential = [
      "Clear digital color scan of passport data page (valid at least 6 months from entry date)",
      "Recent digital portrait photograph (4x6 cm, white background, straight look without glasses)",
      "Completed Vietnam eVisa online application"
    ];
    checklist.financial = [];
    checklist.travel = [
      "Intended entry and exit border gates / international airports in Vietnam",
      "Tentative flight schedule and travel dates",
      "Accommodation address / hotel name for the first night in Vietnam"
    ];
    checklist.additional = [
      "Travel insurance coverage (recommended)",
      "Business sponsor approval letter from Vietnam Immigration (for Business eVisa)"
    ];

    visaCategories = [
      {
        name: "30 Days Single Entry eVisa",
        description: "For short leisure trips, cultural sightseeing, and exploring Hanoi, Da Nang, and Ho Chi Minh City.",
        icon: "🏖️"
      },
      {
        name: "90 Days Single / Multiple Entry eVisa",
        description: "For extended vacations, regional travel, and multi-entry tourism across Vietnam.",
        icon: "🌴"
      },
      {
        name: "Business eVisa (DN1 / DN2)",
        description: "For attending commercial meetings, conferences, and collaborating with Vietnamese enterprises.",
        icon: "💼"
      },
      {
        name: "Urgent Express eVisa",
        description: "Fast-track processing for applicants with upcoming immediate flight departures.",
        icon: "⚡"
      }
    ];
  } else if (slug === 'singapore') {
    checklist.essential = [
      "Original passport with at least 6 months validity from departure date",
      "Completed and physically signed Singapore Form 14A",
      "Two recent passport photos (35x45mm, matte/semi-matte finish, 80% face coverage, white background)",
      "Personal cover letter stating travel purpose and dates"
    ];
    checklist.financial = [
      "Original personal bank statement for the last 3 to 6 months stamped by the bank",
      "Employment letter / leave approval NOC on company letterhead (for salaried applicants)",
      "Last 3 months salary slips",
      "Business registration certificate (GST / Incorporation) if self-employed"
    ];
    checklist.travel = [
      "Confirmed round-trip flight tickets",
      "Confirmed hotel accommodation booking",
      "SG Arrival Card (electronic health & travel declaration submitted 3 days prior to arrival)"
    ];
    checklist.additional = [
      "Form V39A (Letter of Introduction) and sponsor NRIC copy (if sponsored by Singapore citizen/PR)",
      "Invitation letter from Singapore registered entity (for business visa applicants)"
    ];

    visaCategories = [
      {
        name: "Tourist Visa (e-Visa)",
        description: "For leisure travel, family vacations, shopping, and visiting Singapore attractions.",
        icon: "🏖️"
      },
      {
        name: "Business Visa",
        description: "For corporate meetings, trade conferences, exhibitions, and commercial discussions.",
        icon: "💼"
      },
      {
        name: "Social Visit Pass",
        description: "For visiting family members and close relatives residing in Singapore.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student Pass",
        description: "For pursuing full-time education at recognized institutions in Singapore.",
        icon: "🎓"
      },
      {
        name: "Employment Pass / S Pass",
        description: "For foreign professionals and executives employed by Singapore companies.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'thailand') {
    checklist.essential = [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Completed and signed Thailand visa application form",
      "Two recent photographs (35x45mm, white background, taken within last 6 months)",
      "Proof of visa fee payment"
    ];
    checklist.financial = [
      "Original bank statement for the last 6 months stamped by bank (min balance of INR 50,000 per person / INR 1,00,000 per family)",
      "Employment letter / NOC and salary slips (where applicable)",
      "Business registration proof (if self-employed)"
    ];
    checklist.travel = [
      "Confirmed return or onward air tickets with flight numbers and dates",
      "Confirmed hotel reservation / accommodation proof in Thailand matching flight dates"
    ];
    checklist.additional = [
      "Personal cover letter explaining travel purpose and itinerary",
      "Invitation letter and Thai host ID copy (if visiting family or friends)",
      "Travel insurance (recommended for international travel)"
    ];

    visaCategories = [
      {
        name: "Tourist Visa (Single Entry - TR)",
        description: "Allows stay up to 60 days for tourism, beach holidays, and leisure travel.",
        icon: "🏖️"
      },
      {
        name: "Multiple Entry Tourist Visa (METV)",
        description: "Valid for 6 months, allowing multiple entries up to 60 days per visit.",
        icon: "🌴"
      },
      {
        name: "Non-Immigrant Business Visa (Category B)",
        description: "For attending corporate meetings, business negotiations, and trade events.",
        icon: "💼"
      },
      {
        name: "Education Visa (Category ED)",
        description: "For studying at recognized Thai academic institutions or taking specialized training.",
        icon: "🎓"
      },
      {
        name: "Transit Visa (Category TS)",
        description: "For transiting through Thai international airports to a third destination.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'malaysia') {
    checklist.essential = [
      "Clear scan of valid passport bio-data and signature pages (min 6 months validity)",
      "Recent passport-size digital photograph (35x50mm, white background, studio quality)",
      "Completed Malaysia visa application form"
    ];
    checklist.financial = [
      "Personal bank statement for the last 3 months with sufficient funds",
      "Employment NOC / salary proof (if requested for eVisa)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight booking with e-ticket numbers",
      "Confirmed hotel booking or accommodation voucher in Malaysia",
      "Completed Malaysia Digital Arrival Card (MDAC) submitted within 3 days prior to arrival"
    ];
    checklist.additional = [
      "Cover letter detailing purpose and dates of travel",
      "Invitation letter and sponsor identification (if hosted in Malaysia)"
    ];

    visaCategories = [
      {
        name: "Tourist eVisa / eNTRI",
        description: "For leisure travel, sightseeing in Kuala Lumpur, Penang, Langkawi, and cultural holidays.",
        icon: "🏖️"
      },
      {
        name: "Multiple Entry Tourist Visa",
        description: "For frequent visitors, allowing multiple stays across a 3 to 12 months validity.",
        icon: "🌴"
      },
      {
        name: "Business eVisa",
        description: "For attending business meetings, investment seminars, and trade discussions.",
        icon: "💼"
      },
      {
        name: "Student Visa (VAL)",
        description: "With Visa Approval Letter from Education Malaysia Global Services (EMGS).",
        icon: "🎓"
      },
      {
        name: "Employment Pass (EP)",
        description: "For skilled expatriates employed by authorized companies in Malaysia.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'indonesia-bali' || slug === 'indonesia') {
    checklist.essential = [
      "Valid passport scan with at least 6 months validity from arrival date",
      "Recent digital color photograph (passport format with plain light background)",
      "Completed official Indonesian electronic visa application"
    ];
    checklist.financial = [];
    checklist.travel = [
      "Confirmed return or onward international flight ticket",
      "Hotel reservation or villa booking confirmation in Bali / Indonesia",
      "Completed electronic Customs Declaration (e-CD) prior to arrival"
    ];
    checklist.additional = [
      "Bali Tourist Levy payment voucher (for travellers arriving in Bali)",
      "Travel medical insurance (recommended)"
    ];

    visaCategories = [
      {
        name: "e-VOA (Electronic Visa on Arrival - B1)",
        description: "30-day tourist visa for holidays, leisure, and sightseeing in Bali, extendable once.",
        icon: "🏖️"
      },
      {
        name: "60 Days Tourist Visa (211A)",
        description: "For extended vacations, spiritual retreats, and long-stay exploration across Indonesia.",
        icon: "🌴"
      },
      {
        name: "Business eVisa (211B)",
        description: "For attending corporate seminars, business discussions, and trade exhibitions.",
        icon: "💼"
      },
      {
        name: "Multiple Entry Visitor Visa (D1/D2)",
        description: "For frequent business or leisure travel with multiple entries over 1 to 2 years.",
        icon: "🌐"
      }
    ];
  } else if (slug === 'turkey') {
    checklist.essential = [
      "Original passport with at least 6 months validity beyond intended stay",
      "Completed Turkey visa application form",
      "Two biometric photographs (50x50 mm, white background, 80% face coverage)",
      "Valid Schengen, USA, UK, or Ireland Visa / Residence Permit (for eligible conditional e-Visa route)"
    ];
    checklist.financial = [
      "Personal bank statement for the last 3 to 6 months stamped and signed by bank",
      "Income Tax Returns (ITR) for the last 2 to 3 years",
      "Employment letter / Leave sanction letter and last 3 months salary slips",
      "Business registration documents (if self-employed)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight booking",
      "Confirmed hotel reservations covering the entire duration in Turkey",
      "Travel medical insurance covering minimum €30,000 / $50,000 medical expenses"
    ];
    checklist.additional = [
      "Detailed travel itinerary and personal cover letter",
      "Invitation letter from host/organization in Turkey (if visiting friends or business meetings)",
      "Previous international visa copies and travel history"
    ];

    visaCategories = [
      {
        name: "Tourist e-Visa (Conditional)",
        description: "Instant 30-day single-entry e-Visa for holders of valid US, UK, Schengen, or Ireland visas.",
        icon: "⚡"
      },
      {
        name: "Tourist Sticker Visa (Consular)",
        description: "Standard consular sticker visa for applicants applying through Gateway / VFS Turkey centers.",
        icon: "🏖️"
      },
      {
        name: "Business Visa",
        description: "For commercial meetings, trade conferences, supplier visits, and expos in Turkey.",
        icon: "💼"
      },
      {
        name: "Student / Education Visa",
        description: "For study programs at accredited Turkish universities and higher education academies.",
        icon: "🎓"
      },
      {
        name: "Work Visa",
        description: "For official employment with a Turkish employer with Ministry of Labour approval.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'saudi-arabia') {
    checklist.essential = [
      "Valid passport scan with at least 6 months validity",
      "Recent passport-style digital photograph with white background",
      "Completed Saudi visa application details on official visa portal"
    ];
    checklist.financial = [];
    checklist.travel = [
      "Confirmed round-trip flight tickets",
      "Confirmed hotel reservation in Saudi Arabia",
      "Mandatory integrated medical insurance policy (included automatically with eVisa)"
    ];
    checklist.additional = [
      "Valid Schengen, US, or UK visa copy (for conditional instant eVisa eligibility)",
      "Proof of Umrah registration via Nusuk app (for Umrah pilgrimage visitors)"
    ];

    visaCategories = [
      {
        name: "Tourist eVisa (1 Year Multiple Entry)",
        description: "Allows stays up to 90 days per visit for tourism, leisure, and Umrah pilgrimage (outside Hajj season).",
        icon: "🕌"
      },
      {
        name: "Stopover / Transit Visa (96 Hours)",
        description: "Free 96-hour transit visa when flying with Saudia or Flynas for short city visits and Umrah.",
        icon: "✈️"
      },
      {
        name: "Business Visa",
        description: "For corporate meetings, investment discussions, and trade partnerships with Saudi entities.",
        icon: "💼"
      },
      {
        name: "Family Visit Visa",
        description: "For visiting immediate family members residing in the Kingdom of Saudi Arabia.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Employment Visa",
        description: "For long-term contractual employment approved by the Ministry of Human Resources.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'azerbaijan') {
    checklist.essential = [
      "High-resolution digital color copy of valid passport bio-data page (valid min 3 months beyond eVisa expiry)",
      "Completed online Azerbaijan ASAN Visa application",
      "Valid email address and eVisa processing fee payment"
    ];
    checklist.financial = [];
    checklist.travel = [
      "Accommodation address / hotel booking details in Baku or Azerbaijan",
      "Expected entry and departure dates",
      "Return flight itinerary"
    ];
    checklist.additional = [
      "Travel insurance (recommended)",
      "Corporate invitation letter (for business travel)"
    ];

    visaCategories = [
      {
        name: "Standard Tourist ASAN eVisa (30 Days)",
        description: "Single-entry electronic visa processed in 3 working days for Baku tourism and sightseeing.",
        icon: "🏖️"
      },
      {
        name: "Urgent / Express ASAN eVisa",
        description: "Fast-track electronic visa issued within 3 to 5 hours for emergency or last-minute travel.",
        icon: "⚡"
      },
      {
        name: "Business eVisa",
        description: "For attending corporate discussions, exhibitions, and bilateral trade conferences.",
        icon: "💼"
      },
      {
        name: "Official / Cultural Visa",
        description: "For attending governmental, scientific, sports, and cultural festivals in Azerbaijan.",
        icon: "🏛️"
      }
    ];
  } else if (slug === 'bahrain') {
    checklist.essential = [
      "Clear digital copy of valid passport data page and address page (valid min 6 months)",
      "Completed Bahrain eVisa application",
      "eVisa fee payment confirmation"
    ];
    checklist.financial = [
      "Stamped personal bank statement for the last 3 months with required minimum balance (min INR 60,000+ equivalent)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight booking to/from Bahrain",
      "Confirmed hotel booking or CPR copy and utility bill of Bahrain resident sponsor"
    ];
    checklist.additional = [
      "Cover letter stating the purpose and dates of travel",
      "Previous GCC or international visas (if applicable)"
    ];

    visaCategories = [
      {
        name: "Tourist eVisa (2 Weeks / 1 Month)",
        description: "For holidays, weekend getaways, and visiting relatives in Manama and Bahrain.",
        icon: "🏖️"
      },
      {
        name: "Multiple Entry Tourist eVisa (3 Months / 1 Year)",
        description: "For frequent visitors, allowing multiple stays up to 30 days per visit.",
        icon: "🌴"
      },
      {
        name: "Business eVisa",
        description: "For corporate meetings, investment discussions, and commercial trade conferences.",
        icon: "💼"
      },
      {
        name: "Transit Visa",
        description: "For connecting flight passengers transiting through Bahrain International Airport.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'sri-lanka') {
    checklist.essential = [
      "Clear digital scan of passport bio-data page (valid at least 6 months from arrival date)",
      "Completed Sri Lanka Electronic Travel Authorization (ETA) application",
      "ETA processing fee payment confirmation"
    ];
    checklist.financial = [];
    checklist.travel = [
      "Confirmed return or onward flight tickets",
      "Proof of hotel accommodation or address of stay in Sri Lanka",
      "Proof of sufficient funds for maintenance during the stay"
    ];
    checklist.additional = [
      "Travel health insurance (recommended)",
      "Business invitation letter from Sri Lankan host organization (for Business ETA)"
    ];

    visaCategories = [
      {
        name: "Tourist ETA (30 Days Double Entry)",
        description: "For holidays, sightseeing, beach retreats, Ayurvedic wellness, and visiting friends.",
        icon: "🏖️"
      },
      {
        name: "Business ETA (Multiple Entry)",
        description: "For participating in business meetings, conferences, negotiations, and short training.",
        icon: "💼"
      },
      {
        name: "Transit ETA (Free up to 48 Hours)",
        description: "For passengers transiting through Colombo Bandaranaike International Airport.",
        icon: "✈️"
      },
      {
        name: "Long-Term Resident / Residence Visa",
        description: "For investors, expatriate employment, and long-term academic studies.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'egypt') {
    checklist.essential = [
      "Original passport with min 6 months validity (or clear scan for eVisa)",
      "Completed Egypt visa application form",
      "Two recent passport photographs (35x45 mm, white background)",
      "Visa fee payment receipt"
    ];
    checklist.financial = [
      "Personal bank statements for the last 6 months stamped by bank",
      "Employment NOC / salary slips or business proof (for consular submission)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight tickets",
      "Confirmed hotel reservations in Cairo, Giza, Luxor, or Red Sea resorts",
      "Comprehensive travel itinerary for Egypt sightseeing"
    ];
    checklist.additional = [
      "Cover letter stating purpose and schedule of travel",
      "Invitation letter from host or authorized Egyptian travel agency (if applicable)"
    ];

    visaCategories = [
      {
        name: "Tourist eVisa / Sticker Visa (Single Entry)",
        description: "Valid for 90 days, allowing up to 30 days stay for exploring pyramids, Nile cruises, and heritage.",
        icon: "🏛️"
      },
      {
        name: "Multiple Entry Tourist Visa",
        description: "Valid for 6 months, allowing multiple entries up to 30 days per visit.",
        icon: "🌴"
      },
      {
        name: "Business Visa",
        description: "For commercial meetings, trade conferences, and industrial partnerships in Egypt.",
        icon: "💼"
      },
      {
        name: "Transit Visa",
        description: "For connecting flight layovers exceeding international airport transit zones.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'south-africa') {
    checklist.essential = [
      "Original passport with at least 30 days validity beyond departure and 2 consecutive blank pages",
      "Completed and signed Form DHA-84 visa application form in black ink",
      "Two recent passport photographs (35x45 mm, white background)",
      "VFS South Africa submission fee receipt"
    ];
    checklist.financial = [
      "Original personal bank statements for the last 3 months stamped and signed by bank (min balance maintaining healthy funds)",
      "Employment letter / Leave sanction letter on company letterhead",
      "Salary slips for the last 3 months",
      "Business registration (GST / Incorporation) and company bank statements (if self-employed)"
    ];
    checklist.travel = [
      "Confirmed return flight itinerary showing confirmed seat status",
      "Confirmed hotel booking on official hotel letterhead with guest names, check-in/out dates, and hotel contact",
      "Day-by-day travel itinerary covering Cape Town, Johannesburg, Kruger, etc."
    ];
    checklist.additional = [
      "Personal cover letter explaining purpose and duration of visit",
      "Yellow Fever vaccination certificate (mandatory if travelling through yellow fever endemic countries)",
      "Invitation letter, host South African ID copy, and host proof of residence (if visiting family/friends)",
      "Birth certificates and parental consent affidavits (if travelling with minor children)"
    ];

    visaCategories = [
      {
        name: "Visitor / Tourist Visa (Section 11(1))",
        description: "For holidays, wildlife safaris, sightseeing, and visiting family or friends.",
        icon: "🦁"
      },
      {
        name: "Business Visa",
        description: "For attending corporate meetings, trade conferences, and exploring investment opportunities.",
        icon: "💼"
      },
      {
        name: "Study Visa",
        description: "For studying at primary, secondary, or higher educational institutions in South Africa.",
        icon: "🎓"
      },
      {
        name: "Critical Skills Work Visa",
        description: "For qualified professionals falling under South Africa's critical skills list.",
        icon: "🏢"
      },
      {
        name: "Transit Visa",
        description: "For transiting through South African airports to neighboring African nations.",
        icon: "✈️"
      }
    ];
  } else if (slug === 'south-korea') {
    checklist.essential = [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Completed South Korea visa application form with 1 passport photo (35x45 mm, white background)",
      "Visa fee receipt and Korea Visa Application Center (KVAC) appointment confirmation"
    ];
    checklist.financial = [
      "Personal bank statements for the last 6 months with bank verification seal",
      "Income Tax Returns (ITR-V) for the last 2 assessment years",
      "Employment certificate and sanctioned leave approval from employer",
      "Last 3 months salary slips",
      "Certificate of Business Registration & business bank statement (for business owners)"
    ];
    checklist.travel = [
      "Confirmed return flight booking",
      "Confirmed hotel reservations in Seoul, Busan, Jeju, or other Korean cities",
      "Detailed day-wise travel schedule in South Korea"
    ];
    checklist.additional = [
      "Cover letter stating the travel purpose, itinerary, and financial sponsorship",
      "Invitation letter and host Certificate of Alien Registration / ID (if invited)",
      "Corporate invitation letter and business registration copy of Korean host (for business visa)"
    ];

    visaCategories = [
      {
        name: "Tourist Visa (C-3-9)",
        description: "For leisure travel, K-pop and cultural tours, holiday sightseeing, and recreation in Korea.",
        icon: "🏖️"
      },
      {
        name: "Business Visa (C-3-4)",
        description: "For short-term business consultations, trade meetings, and market research.",
        icon: "💼"
      },
      {
        name: "Visiting Family / Friends Visa (C-3-1)",
        description: "For visiting relatives, Korean citizens, or registered foreign residents in South Korea.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student Visa (D-2 / D-4)",
        description: "For degree courses and language training at Korean universities.",
        icon: "🎓"
      },
      {
        name: "Short-Term Employment Visa (C-4)",
        description: "For temporary specialized contracts, performances, and technical installations.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'russia') {
    checklist.essential = [
      "Original passport with at least 6 months validity beyond visa expiry and 2 blank pages",
      "Printed electronic visa application form (from visa.kdmid.ru) with glued photograph",
      "One recent color photograph (35x45 mm, white background, no headwear)",
      "Official Russian Tourist Voucher & Confirmation (Tourist Acceptance Confirmation from an authorized Russian tour operator)"
    ];
    checklist.financial = [
      "Personal bank statements for the last 3 months with bank stamp (recommended)",
      "Employment letter / pay slip copy"
    ];
    checklist.travel = [
      "Confirmed return flight tickets to/from Russia",
      "Hotel booking vouchers corresponding to the Tourist Confirmation",
      "Travel Medical Insurance policy valid across the Russian Federation with minimum €30,000 coverage"
    ];
    checklist.additional = [
      "Personal cover letter stating travel itinerary across Moscow, St. Petersburg, etc.",
      "Official invitation from the Ministry of Internal Affairs (MVD) for private/business visits",
      "Previous Russian visa copies (if applicable)"
    ];

    visaCategories = [
      {
        name: "Unified Electronic Visa (e-Visa)",
        description: "Single-entry electronic visa allowing up to 16 days stay for tourism, business, and cultural visits.",
        icon: "⚡"
      },
      {
        name: "Tourist Sticker Visa (Consular)",
        description: "Single or double entry consular visa for stays up to 30 days based on official Tourist Voucher.",
        icon: "🏛️"
      },
      {
        name: "Business Visa",
        description: "Single, double, or multi-entry visa for commercial negotiations and trade fairs based on MVD invitation.",
        icon: "💼"
      },
      {
        name: "Private / Visit Visa",
        description: "For visiting Russian citizens or permanent residents based on official MVD invitation.",
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student Visa",
        description: "For full-time studies at Russian state and accredited private universities.",
        icon: "🎓"
      }
    ];
  } else if (slug === 'brazil') {
    checklist.essential = [
      "Original passport with at least 6 months validity from entry date and 2 blank pages",
      "Printed Visa Request Form Receipt (RER) with uploaded photo and physical signature",
      "One recent passport photograph (35x45 mm, white background, taken within 6 months)",
      "Consular visa fee payment receipt"
    ];
    checklist.financial = [
      "Personal bank statements for the last 3 months stamped by the bank (showing sufficient funds)",
      "Income Tax Returns (ITR-V) for the last 2 assessment years",
      "Employment verification letter / Leave sanction letter on company letterhead",
      "Last 3 months salary slips",
      "Business incorporation documents & company financials (if self-employed)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight booking / e-ticket reservation",
      "Confirmed hotel reservations in Rio de Janeiro, São Paulo, etc.",
      "Day-wise travel itinerary in Brazil"
    ];
    checklist.additional = [
      "Personal cover letter detailing travel objectives, dates, and financial responsibility",
      "Notarized letter of invitation from Brazilian host or company (if visiting family or on business)",
      "International Certificate of Vaccination for Yellow Fever (recommended for certain regions)"
    ];

    visaCategories = [
      {
        name: "Visitor Visa (VIVIS - Tourist)",
        description: "For leisure vacations, sightseeing, carnival trips, and visiting family or friends.",
        icon: "🏖️"
      },
      {
        name: "Visitor Visa (VIVIS - Business)",
        description: "For attending commercial meetings, trade conferences, and exploring corporate contracts.",
        icon: "💼"
      },
      {
        name: "Transit Visa (VIVIS - Transit)",
        description: "For connecting flights passing through Brazilian territory to another final destination.",
        icon: "✈️"
      },
      {
        name: "Temporary Student Visa (VITEM IV)",
        description: "For higher education degrees and exchange programs in Brazil.",
        icon: "🎓"
      },
      {
        name: "Temporary Work Visa (VITEM V)",
        description: "For foreign professionals with approved employment authorization from the Ministry of Labour.",
        icon: "🏢"
      }
    ];
  } else if (slug === 'argentina') {
    checklist.essential = [
      "Original passport valid for at least 6 months from entry date with 2 blank pages",
      "Two recent colour photographs (35x45 mm, white background, front view)",
      "Two completed and signed Argentina visa application forms",
      "Consular visa fee payment receipt & in-person interview appointment confirmation"
    ];
    checklist.financial = [
      "Personal bank statement for the last 3 to 6 months stamped and signed by the bank",
      "Personal Income Tax Returns (ITR-V) for the last 3 assessment years",
      "Employment letter / Leave sanction letter from employer with salary details",
      "Salary slips for the last 3 months",
      "Company registration certificate & company financials (for self-employed applicants)"
    ];
    checklist.travel = [
      "Confirmed round-trip flight tickets as per itinerary",
      "Confirmed hotel booking matching flight itinerary dates",
      "Travel medical insurance covering the full duration of stay in Argentina"
    ];
    checklist.additional = [
      "Personal covering letter explaining the purpose of travel, itinerary, and financial responsibility",
      "Letter of invitation certified by Argentine Public Notary and RENURE registration (for business/visit)",
      "Previous international visa copies and travel history"
    ];

    visaCategories = [
      {
        name: "Tourist Visa",
        description: "For leisure travel, sightseeing in Buenos Aires, Patagonia, and visiting relatives.",
        icon: "🏖️"
      },
      {
        name: "Business Visa",
        description: "For commercial meetings, trade negotiations, and attending exhibitions in Argentina.",
        icon: "💼"
      },
      {
        name: "Technical / Work Visa",
        description: "For carrying out specialized technical work or professional services under local contract.",
        icon: "🏢"
      },
      {
        name: "Student Visa",
        description: "For academic courses and university exchange programs at Argentine institutions.",
        icon: "🎓"
      },
      {
        name: "Transit Visa",
        description: "For brief airport transits through Argentine airports en route to neighboring nations.",
        icon: "✈️"
      }
    ];
  } else {
    // Standard high-quality default for other global destinations
    const isEmbassy = (country.applyThrough && !country.applyThrough.toLowerCase().includes('evisa') && !country.applyThrough.toLowerCase().includes('e-visa')) || country.insuranceRequirement?.toLowerCase().includes('required');

    if (isEmbassy) {
      checklist.essential = [
        `Original passport with at least 6 months validity and 2 blank pages`,
        `Recent passport-size photographs per ${name} consular specifications (35x45 mm, white background)`,
        `Completed and signed ${name} visa application form`,
        `Visa fee payment receipt & appointment confirmation (where applicable)`
      ];
      checklist.financial = [
        "Personal bank statements for the last 3 to 6 months stamped by the bank",
        "Personal Income Tax Returns (ITR) or Form 16 for the last 2 to 3 years",
        "Employment verification letter / Leave sanction NOC from employer",
        "Last 3 months salary slips (or business registration for self-employed applicants)"
      ];
      checklist.travel = [
        "Round-trip flight booking / confirmed travel itinerary",
        `Confirmed hotel bookings / accommodation proof in ${name}`,
        "Detailed day-wise travel and sightseeing plan",
        "Travel medical insurance covering emergency medical expenses"
      ];
      checklist.additional = [
        "Personal cover letter stating travel purpose, dates, and financial sponsorship",
        `Letter of invitation and host identification (if visiting family, friends, or business associates in ${name})`,
        "Previous passports and international travel history"
      ];
    } else {
      checklist.essential = [
        `Clear digital scan of valid passport bio-data page (min 6 months validity)`,
        `Recent digital passport-size photograph with white background`,
        `Completed ${name} electronic visa application form`
      ];
      checklist.financial = [
        "Proof of sufficient funds (bank statement or credit card limit proof if requested by immigration)"
      ];
      checklist.travel = [
        "Confirmed return or onward flight itinerary",
        `Confirmed hotel accommodation or host stay details in ${name}`
      ];
      checklist.additional = [
        "Cover letter detailing purpose of visit and travel schedule",
        "Travel health insurance (recommended for international journeys)"
      ];
    }

    visaCategories = [
      {
        name: "Tourist Visa",
        description: `For vacations, holiday sightseeing, cultural exploration, and recreation in ${name}.`,
        icon: "🏖️"
      },
      {
        name: "Business Visa",
        description: `For corporate meetings, trade conferences, client discussions, and business seminars in ${name}.`,
        icon: "💼"
      },
      {
        name: "Visitor / Family Visa",
        description: `For visiting family members, relatives, or personal hosts living in ${name}.`,
        icon: "👨‍👩‍👧"
      },
      {
        name: "Student Visa",
        description: `For university studies, academic courses, and educational stays in ${name}.`,
        icon: "🎓"
      },
      {
        name: "Transit Visa",
        description: `For international flight connections and airport layovers through ${name}.`,
        icon: "✈️"
      }
    ];
  }

  // Consistent 5-step Application Process
  const processSteps = [
    {
      num: "01",
      title: "Share Your Requirements",
      desc: `Tell us your destination, travel purpose, and planned dates for travelling to ${name}.`
    },
    {
      num: "02",
      title: "Document Review & Verification",
      desc: `Our visa specialists review your documents against ${name} consulate checklists to eliminate errors.`
    },
    {
      num: "03",
      title: "Application Preparation & Submission",
      desc: `We prepare your application file, assist with fee payment, and handle appointment booking or online portal submission.`
    },
    {
      num: "04",
      title: "Consular / Embassy Processing",
      desc: `Your application is processed by the relevant embassy, consulate, or immigration authority.`
    },
    {
      num: "05",
      title: "Visa Outcome & Handover",
      desc: `Receive your approved ${name} visa and travel documents with complete pre-departure guidance.`
    }
  ];

  return {
    checklist,
    visaCategories,
    processSteps
  };
}

let updatedCount = 0;
for (const slug of Object.keys(db)) {
  const enhancements = generateCountryEnhancements(slug, db[slug]);
  db[slug].checklist = enhancements.checklist;
  db[slug].visaCategories = enhancements.visaCategories;
  db[slug].processSteps = enhancements.processSteps;
  
  if (!db[slug].alertText) {
    db[slug].alertText = "Document requirements can vary based on visa category, nationality, travel purpose and applicant profile. Additional documents may be requested by the relevant embassy or visa authority.";
  }
  
  updatedCount++;
}

console.log(`Updated ${updatedCount} countries with structured checklist, visaCategories, and processSteps.`);

const outputContent = `/* Vision Visa - 66 Country Dynamic Database */
window.VISION_VISA_COUNTRIES = ${JSON.stringify(db, null, 2)};
`;

fs.writeFileSync(jsPath, outputContent, 'utf8');
fs.writeFileSync(pubPath, outputContent, 'utf8');
console.log('Saved updated database to js/countries-data.js and public/js/countries-data.js');
