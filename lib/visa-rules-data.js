/**
 * Category-specific visa rules database and provider for country visa detail pages.
 * Supplies minimal, 1-sentence scannable points per country + visa type.
 */

const VISA_RULES_DB = {
  australia: {
    tourist: {
      importantRestrictions: [
        "No paid work in Australia",
        "Study limited to 3 months maximum",
        "Leave before your visa expires"
      ],
      specialConditions: [
        "Condition 8101: No work allowed",
        "Genuine temporary visitor intent required",
        "Health and character requirements apply"
      ],
      goodToKnow: [
        "Visa is linked digitally to your passport",
        "Biometrics may be requested at VFS",
        "Apply 4–6 weeks before planned travel"
      ]
    },
    business: {
      importantRestrictions: [
        "No direct employment or job roles in Australia",
        "No direct sales to the Australian public",
        "Study limited to 3 months maximum"
      ],
      specialConditions: [
        "Activities restricted to meetings & trade events",
        "Official host business invitation required"
      ],
      goodToKnow: [
        "Multiple-entry validity often granted",
        "Carry printed Visa Grant Notice while travelling"
      ]
    },
    family: {
      importantRestrictions: [
        "No paid work permitted during stay",
        "Must depart within authorized stay limit"
      ],
      specialConditions: [
        "Host invitation & financial alignment required",
        "Host may be asked to guarantee compliance"
      ],
      goodToKnow: [
        "Host should provide Citizenship or PR proof",
        "Medical travel insurance strongly advised"
      ]
    },
    transit: {
      importantRestrictions: [
        "Stay limited to 72 hours maximum",
        "No tourism or work while in transit"
      ],
      specialConditions: [
        "Must hold confirmed onward flight ticket"
      ],
      goodToKnow: [
        "Subclass 771 Transit Visa has no visa fee"
      ]
    }
  },

  "united-kingdom": {
    tourist: {
      importantRestrictions: [
        "No paid work for any UK company",
        "No access to UK public funds",
        "Cannot live in UK through successive visits"
      ],
      specialConditions: [
        "Must leave UK at the end of your visit",
        "Recreational study limited to 30 days"
      ],
      goodToKnow: [
        "In-person biometrics required at VFS UK center",
        "Priority processing service available"
      ]
    },
    business: {
      importantRestrictions: [
        "Cannot fill job roles or serve UK clients directly",
        "Direct sales to UK consumers prohibited"
      ],
      specialConditions: [
        "Limited to corporate meetings & negotiations",
        "Host invitation letter required"
      ],
      goodToKnow: [
        "Long-term 2, 5, and 10-year visas available"
      ]
    }
  },

  "united-states": {
    tourist: {
      importantRestrictions: [
        "No employment or paid work allowed",
        "Academic degree study prohibited"
      ],
      specialConditions: [
        "In-person US Embassy interview required",
        "Stay duration (up to 6 months) set by CBP officer"
      ],
      goodToKnow: [
        "B1/B2 visas typically granted for 10 years",
        "Bring printed DS-160 barcode confirmation page"
      ]
    },
    business: {
      importantRestrictions: [
        "No salary or payment from US sources",
        "Hands-on work for US clients prohibited"
      ],
      specialConditions: [
        "B1 covers business consultations & conventions",
        "Employer & US host support letters required"
      ],
      goodToKnow: [
        "Usually issued as combined B1/B2 visa"
      ]
    }
  },

  canada: {
    tourist: {
      importantRestrictions: [
        "No work without an official work permit",
        "Study limited to 6 months maximum"
      ],
      specialConditions: [
        "Biometrics enrollment required at VFS Canada",
        "Must satisfy IRCC officer of temporary intent"
      ],
      goodToKnow: [
        "Visa validity granted up to passport expiry date"
      ]
    }
  },

  france: {
    tourist: {
      importantRestrictions: [
        "No work allowed in Schengen area",
        "Max 90 days stay in any 180-day period"
      ],
      specialConditions: [
        "France must be main destination or first entry point",
        "Medical insurance (€30,000 min) mandatory"
      ],
      goodToKnow: [
        "Permits travel across 29 Schengen countries"
      ]
    }
  }
};

/**
 * Retrieves or generates minimal, accurate rules for a given country and visa category.
 * @param {string} countrySlug - Country slug (e.g. 'australia')
 * @param {object|string} visaCategory - Visa type object or string
 * @returns {object} Object with importantRestrictions, specialConditions, goodToKnow
 */
export function getVisaRules(countrySlug, visaCategory) {
  const cSlug = (countrySlug || 'australia').toLowerCase().trim();
  
  let vId = 'tourist';
  let vName = 'Tourist Visa';

  if (typeof visaCategory === 'string') {
    vName = visaCategory;
    const lower = visaCategory.toLowerCase();
    if (lower.includes('biz') || lower.includes('business')) vId = 'business';
    else if (lower.includes('family') || lower.includes('relative')) vId = 'family';
    else if (lower.includes('transit')) vId = 'transit';
    else if (lower.includes('student') || lower.includes('study')) vId = 'student';
  } else if (visaCategory && typeof visaCategory === 'object') {
    vId = (visaCategory.id || '').toLowerCase();
    vName = visaCategory.name || 'Tourist Visa';
    if (!vId) {
      const lower = vName.toLowerCase();
      if (lower.includes('biz') || lower.includes('business')) vId = 'business';
      else if (lower.includes('family') || lower.includes('relative')) vId = 'family';
      else if (lower.includes('transit')) vId = 'transit';
      else if (lower.includes('student') || lower.includes('study')) vId = 'student';
      else vId = 'tourist';
    }
  }

  // 1. Check explicit visaCategory rules
  if (visaCategory && typeof visaCategory === 'object') {
    if (visaCategory.importantRestrictions || visaCategory.specialConditions || visaCategory.goodToKnow) {
      return {
        importantRestrictions: (visaCategory.importantRestrictions || []).slice(0, 3),
        specialConditions: (visaCategory.specialConditions || []).slice(0, 3),
        goodToKnow: (visaCategory.goodToKnow || []).slice(0, 3)
      };
    }
  }

  // 2. Check VISA_RULES_DB
  const countryRules = VISA_RULES_DB[cSlug];
  if (countryRules && countryRules[vId]) {
    return {
      importantRestrictions: (countryRules[vId].importantRestrictions || []).slice(0, 3),
      specialConditions: (countryRules[vId].specialConditions || []).slice(0, 3),
      goodToKnow: (countryRules[vId].goodToKnow || []).slice(0, 3)
    };
  }

  // 3. Category Fallbacks
  const countryName = cSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  if (vId.includes('biz') || vName.toLowerCase().includes('business')) {
    return {
      importantRestrictions: [
        `No direct employment for local companies in ${countryName}`,
        `No direct retail sales to the public`
      ],
      specialConditions: [
        `Activities restricted to meetings, trade shows & negotiations`,
        `Official host business invitation required`
      ],
      goodToKnow: [
        `Stay dates should match invitation letter`
      ]
    };
  }

  if (vId.includes('family') || vName.toLowerCase().includes('family')) {
    return {
      importantRestrictions: [
        `No paid work permitted during stay`,
        `Must depart before authorized stay expires`
      ],
      specialConditions: [
        `Host invitation & address in ${countryName} required`
      ],
      goodToKnow: [
        `Keep host invitation & status proof accessible`
      ]
    };
  }

  if (vId.includes('transit') || vName.toLowerCase().includes('transit')) {
    return {
      importantRestrictions: [
        `Stay restricted to short transit window`,
        `No extended tourism or work allowed`
      ],
      specialConditions: [
        `Confirmed onward flight ticket required`
      ],
      goodToKnow: [
        `Verify airport transit visa rules before travel`
      ]
    };
  }

  // Default Tourist / Visitor fallback
  return {
    importantRestrictions: [
      `No paid work allowed for local employers`,
      `Must depart before visa expires`,
      `Formal degree studies not permitted`
    ],
    specialConditions: [
      `Travel limited to tourism & family visits`,
      `Valid travel medical insurance recommended`
    ],
    goodToKnow: [
      `Apply 3–4 weeks prior to travel`,
      `Application details must match passport`
    ]
  };
}

/**
 * Generates dynamic, verified, country + visa specific travel guide slides for the country carousel.
 * @param {object} countryData - Country data object from getCountryData()
 * @param {object} activeVisa - Active visa category object
 * @returns {Array} List of slide objects
 */
export function getCountryTravelGuide(countryData, activeVisa) {
  if (!countryData) return [];

  const countryName = countryData.name || 'your destination';
  const cSlug = (countryData.slug || 'australia').toLowerCase();
  const vName = activeVisa?.name || 'Tourist Visa';
  const vId = (activeVisa?.id || 'tourist').toLowerCase();

  const travelInfo = countryData.travelInfo || {};
  const slides = [];

  // 1. TIMING / BEST SEASON
  const bestSeason = travelInfo.bestSeason && travelInfo.bestSeason !== 'Not Specified'
    ? travelInfo.bestSeason
    : null;

  if (bestSeason) {
    slides.push({
      category: 'TIMING',
      tag: 'SEASONAL ADVICE',
      title: `Best time to visit ${countryName}`,
      info: `Peak travel weather for ${countryName} is ${bestSeason}. Check regional forecasts before booking.`,
      iconType: 'calendar'
    });
  } else {
    slides.push({
      category: 'TIMING',
      tag: 'TRAVEL WINDOW',
      title: `Plan around your travel window`,
      info: `Ensure your travel dates fall comfortably within your authorized visa validity window for ${countryName}.`,
      iconType: 'calendar'
    });
  }

  // 2. MONEY & PAYMENTS
  const currency = travelInfo.currency && travelInfo.currency !== 'Not Specified'
    ? travelInfo.currency
    : 'Local Currency';

  let paymentNote = 'Cards and contactless payments are widely used. Carry minimal cash for local transit & markets.';
  if (['australia', 'united-kingdom', 'canada', 'france', 'germany', 'singapore'].includes(cSlug)) {
    paymentNote = 'Digital payments and contactless cards are universally accepted. Carry minimal physical currency.';
  } else if (cSlug === 'united-states') {
    paymentNote = 'Credit and debit cards accepted everywhere. Tipping (15–20%) is standard practice across dining and services.';
  } else if (['japan', 'thailand', 'vietnam'].includes(cSlug)) {
    paymentNote = 'Cash remains popular for small vendors and transit passes, alongside international credit cards.';
  }

  slides.push({
    category: 'MONEY',
    tag: 'CURRENCY & PAYMENTS',
    title: `${currency}`,
    info: paymentNote,
    iconType: 'money'
  });

  // 3. ARRIVAL EXPECTATIONS
  if (vId.includes('biz') || vName.toLowerCase().includes('business')) {
    slides.push({
      category: 'ARRIVAL',
      tag: 'BORDER & CUSTOMS',
      title: 'At border clearance',
      info: `Keep your corporate host invitation letter and hotel confirmation accessible for passport control in ${countryName}.`,
      iconType: 'arrival'
    });
  } else if (vId.includes('family') || vName.toLowerCase().includes('family')) {
    slides.push({
      category: 'ARRIVAL',
      tag: 'HOST CLEARANCE',
      title: 'Visiting family or friends',
      info: `Have host contact details and residential address in ${countryName} saved on your phone prior to immigration control.`,
      iconType: 'arrival'
    });
  } else if (vId.includes('transit') || vName.toLowerCase().includes('transit')) {
    slides.push({
      category: 'ARRIVAL',
      tag: 'TRANSIT GATE',
      title: 'Airport transit protocol',
      info: `Follow international transfer signage upon landing and present your confirmed onward flight boarding pass.`,
      iconType: 'arrival'
    });
  } else {
    let arrivalDetail = `Electronic visa records are verified against your passport number upon arrival in ${countryName}.`;
    if (cSlug === 'australia') {
      arrivalDetail = `Complete your digital or paper Incoming Passenger Card (IPC) prior to passport control in Australia.`;
    } else if (cSlug === 'united-kingdom') {
      arrivalDetail = `Keep your VFS submission receipt and accommodation details ready for UK Border Force inspection.`;
    } else if (cSlug === 'united-states') {
      arrivalDetail = `CBP officers determine your official stay duration (up to 6 months) at the US port of entry.`;
    }

    slides.push({
      category: 'ARRIVAL',
      tag: 'ENTRY CHECKPOINT',
      title: 'What to expect on arrival',
      info: arrivalDetail,
      iconType: 'arrival'
    });
  }

  // 4. CONNECTIVITY & UTILITIES
  const timeZone = travelInfo.timeZone && travelInfo.timeZone !== 'Not Specified'
    ? travelInfo.timeZone
    : null;

  slides.push({
    category: 'CONNECTIVITY',
    tag: 'LOCAL PRACTICALS',
    title: 'Stay connected on arrival',
    info: timeZone
      ? `Time zone: ${timeZone}. Local eSIMs or airport SIM kiosks are easily available upon landing.`
      : `Airport SIM counters and international roaming options make it easy to stay connected across ${countryName}.`,
    iconType: 'wifi'
  });

  // 5. TRIP SCOPE & PURPOSE FIT
  if (vId.includes('biz') || vName.toLowerCase().includes('business')) {
    slides.push({
      category: 'TRAVEL STYLE',
      tag: 'BUSINESS SCOPE',
      title: 'Suited for professional visits',
      info: `Designed for corporate meetings, contract negotiations, industry expos, and official consultations.`,
      iconType: 'compass'
    });
  } else {
    slides.push({
      category: 'TRAVEL STYLE',
      tag: 'TRIP EXPLORATION',
      title: 'Suited for travel & leisure',
      info: `Ideal for independent sightseeing, family vacations, cultural tours, and exploring key attractions in ${countryName}.`,
      iconType: 'compass'
    });
  }

  return slides;
}

