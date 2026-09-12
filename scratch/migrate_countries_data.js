const fs = require('fs');
const path = require('path');

async function migrateData() {
  console.log('Fetching TPVisa search index...');
  const res = await fetch('https://framerusercontent.com/sites/51Kq3qkMZfT5ZeZXQEcSkg/searchIndex-2gTJom5KbWWZ.json');
  const tpIndex = await res.json();
  console.log('Loaded TPVisa index with', Object.keys(tpIndex).length, 'entries');

  const existingFile = path.join(process.cwd(), 'public', 'js', 'countries-data.js');
  const rawText = fs.readFileSync(existingFile, 'utf8');
  const jsonStart = rawText.indexOf('{');
  let jsonEnd = rawText.lastIndexOf('};');
  if (jsonEnd === -1) jsonEnd = rawText.lastIndexOf('}');
  const countriesData = JSON.parse(rawText.substring(jsonStart, jsonEnd + 1));

  console.log('Found', Object.keys(countriesData).length, 'countries in existing dataset');

  // Helper to normalize document strings
  function cleanDoc(str) {
    if (!str) return '';
    let s = str.trim()
      .replace(/\s+/g, ' ')
      .replace(/^[-*•\d.]+\s*/, '')
      .replace(/,\s*$/, '')
      .replace(/\.\s*$/, '');

    s = s.replace(/\bOrg\b/gi, 'Original')
      .replace(/\bppt\b/gi, 'passport')
      .replace(/\bpaxs?\b/gi, 'applicant')
      .replace(/\bappl\b/gi, 'application')
      .replace(/\bPrsnl\b/gi, 'Personal')
      .replace(/\bstmnt\b/gi, 'statement')
      .replace(/\btkt\b/gi, 'ticket')
      .replace(/\bbooing\b/gi, 'booking')
      .replace(/\bI\s*T\b/gi, 'Income Tax')
      .replace(/\bITR\s*copy\b/gi, 'Income Tax Returns (ITR-V)')
      .replace(/\bdully\b/gi, 'duly')
      .replace(/\(P F A Visa appl form\)/gi, '')
      .replace(/back to back print will not do/gi, 'single-sided print only')
      .replace(/Pls note\s*:/gi, 'Note:')
      .trim();

    if (s.length > 0) {
      s = s.charAt(0).toUpperCase() + s.slice(1);
    }
    return s;
  }

  // Country URL mapping
  function getTpKey(slug) {
    let key = '/stamping-visa/' + slug + '-visa';
    if (tpIndex[key]) return key;
    key = '/e-visa/' + slug + '-e-visa';
    if (tpIndex[key]) return key;

    const overrides = {
      'croatia': '/stamping-visa/crotia-visa',
      'saudi-arabia': '/stamping-visa/saudi-arabia-visa',
      'indonesia-bali': '/stamping-visa/indonesia-visa',
      'indonesia': '/stamping-visa/indonesia-visa',
      'united-states': '/stamping-visa/usa-visa',
      'united-arab-emirates': '/stamping-visa/uae-visa',
      'czech-republic': '/stamping-visa/austria-visa',
      'slovakia': '/stamping-visa/poland-visa',
      'philippines': null
    };

    if (overrides[slug]) return overrides[slug];

    const match = Object.keys(tpIndex).find(k => k.includes(slug.replace('-bali', '').replace('croatia', 'crotia')));
    return match || null;
  }

  const updatedCountries = {};

  for (const [slug, country] of Object.entries(countriesData)) {
    const tpKey = getTpKey(slug);
    const tpEntry = tpKey ? tpIndex[tpKey] : null;

    let metaProcessing = country.processingTime || '10–15 working days';
    let metaStay = country.stayDuration || 'Up to 90 days';
    let metaValidity = 'As granted by consulate';
    let metaEntry = country.entryType || 'Single / Multiple entry';
    let consularNote = null;

    if (tpEntry && tpEntry.p) {
      for (const p of tpEntry.p) {
        if (/processing time\s*:/i.test(p)) {
          const val = p.split(':')[1]?.trim();
          if (val && val !== 'NA' && val.length > 1) metaProcessing = val;
        } else if (/stay period\s*:/i.test(p)) {
          const val = p.split(':')[1]?.trim();
          if (val && val.length > 1) metaStay = val;
        } else if (/validity\s*:/i.test(p)) {
          const val = p.split(':')[1]?.trim();
          if (val && val.length > 1) metaValidity = val;
        } else if (/entry\s*:/i.test(p)) {
          const val = p.split(':')[1]?.trim();
          if (val && val.length > 1) {
            metaEntry = val.toLowerCase().includes('entry') ? val : `${val} entry`;
          }
        } else if (/pls note\s*:/i.test(p) || /please note\s*:/i.test(p)) {
          consularNote = cleanDoc(p);
        }
      }
    }

    // Determine visa categories from TPVisa
    let categories = [];
    if (tpEntry && tpEntry.h3) {
      const relevantH3 = tpEntry.h3.filter(h =>
        /tourist|business|family|transit|employment|dependent|student/i.test(h) &&
        !/partner|embassy address|fees|processing/i.test(h)
      );

      for (const h of relevantH3) {
        let typeName = 'Tourist Visa';
        let typeId = 'tourist';

        if (/business/i.test(h)) {
          typeName = 'Business Visa';
          typeId = 'business';
        } else if (/family/i.test(h)) {
          typeName = 'Family Visit Visa';
          typeId = 'family-visit';
        } else if (/transit/i.test(h)) {
          typeName = 'Transit Visa';
          typeId = 'transit';
        } else if (/employment|work/i.test(h)) {
          typeName = 'Employment Visa';
          typeId = 'employment';
        } else if (/student|study/i.test(h)) {
          typeName = 'Student Visa';
          typeId = 'student';
        }

        if (!categories.find(c => c.id === typeId)) {
          categories.push({ id: typeId, name: typeName });
        }
      }
    }

    // Default if none extracted
    if (categories.length === 0) {
      categories = [
        { id: 'tourist', name: 'Tourist Visa' },
        { id: 'business', name: 'Business Visa' }
      ];
    }

    // Build compressed, grouped requirements for each visa category
    const visaTypes = categories.map(cat => {
      const isTourist = cat.id === 'tourist';
      const isBusiness = cat.id === 'business';
      const isFamily = cat.id === 'family-visit';
      const isTransit = cat.id === 'transit';

      let shortDesc = isTourist
        ? `Suitable for Indian travellers visiting ${country.name} for tourism, sightseeing, and short visits.`
        : isBusiness
        ? `For corporate meetings, trade events, and business consultations in ${country.name}.`
        : isFamily
        ? `For visiting family members, relatives, or personal sponsors residing in ${country.name}.`
        : isTransit
        ? `For connecting flights and international airport transit through ${country.name}.`
        : `Official visa category tailored for travel to ${country.name}.`;

      let reqs = [];

      if (isTransit) {
        reqs = [
          `Original passport valid for at least 6 months with minimum 2 blank pages`,
          `Completed and signed transit visa application form with recent photographs`,
          `Confirmed onward flight ticket to destination country within permitted transit window`,
          `Valid entry visa or residence permit for the final destination country`,
          `Proof of transit accommodation if layover involves an overnight stay`
        ];
      } else if (isFamily) {
        reqs = [
          `Original passport valid for at least 6 months with minimum 2 blank pages`,
          `Completed and signed visa application form with recent passport photographs`,
          `Formal invitation letter and copy of host's passport/residence permit in ${country.name}`,
          `Proof of family relationship (birth certificate, marriage certificate, or civil registry)`,
          `Financial proof: personal stamped bank statements (3–6 months) and recent Income Tax Returns`,
          `Employment proof (leave letter from employer / business registration certificate)`,
          `Confirmed return flight itinerary, accommodation details & travel medical insurance`
        ];
      } else if (isBusiness) {
        reqs = [
          `Original passport valid for at least 6 months with minimum 2 blank pages`,
          `Completed and signed visa application form with recent passport photographs`,
          `Formal invitation letter from host company/organization in ${country.name}`,
          `Indian employer covering letter on business letterhead stating purpose and financial undertaking`,
          `Financial proof: company and personal bank statements (last 3–6 months) and recent ITR`,
          `Indian company registration certificate or incorporation proof`,
          `Confirmed flight booking, hotel reservation & overseas travel medical insurance`
        ];
      } else {
        // Tourist Visa standard 7-8 clean grouped items
        reqs = [
          `Valid passport with at least 6 months validity and minimum 2 blank pages`,
          `Completed and signed visa application form`,
          `Recent passport-size photographs matching official consular specifications`,
          `Personal covering letter detailing travel purpose, dates, and itinerary`,
          `Financial proof, including recent stamped bank statements (3–6 months) and Income Tax Returns`,
          `Employment or business proof (leave approval letter for employees / registration for self-employed)`,
          `Confirmed round-trip flight booking and hotel accommodation details`,
          `Overseas travel medical insurance covering the full duration of stay`
        ];
      }

      const steps = [
        {
          num: "01",
          title: "Select Visa Category",
          desc: `Choose the visa type matching your travel purpose for ${country.name}.`
        },
        {
          num: "02",
          title: "Prepare Required Documents",
          desc: `Assemble your passport, financial proofs, itinerary, and supporting papers.`
        },
        {
          num: "03",
          title: "File Application & Verify",
          desc: `Vision Visa specialists review your file and complete the official submission.`
        },
        {
          num: "04",
          title: "Biometrics / Consular Review",
          desc: `Complete appointment or biometric requirements, where applicable.`
        },
        {
          num: "05",
          title: "Receive Visa Decision",
          desc: `Receive your visa grant or stamped passport with full travel readiness.`
        }
      ];

      return {
        id: cat.id,
        name: cat.name,
        shortDescription: shortDesc,
        processingTime: metaProcessing,
        validity: metaValidity,
        stayDuration: metaStay,
        entryType: metaEntry,
        requirements: reqs,
        applicationSteps: steps,
        notes: consularNote
      };
    });

    updatedCountries[slug] = {
      ...country,
      processingTime: metaProcessing,
      stayDuration: metaStay,
      validity: metaValidity,
      entryType: metaEntry,
      consularNotes: consularNote,
      visaTypes: visaTypes
    };
  }

  // Argentina specific precision overrides
  if (updatedCountries['argentina']) {
    const ar = updatedCountries['argentina'];
    ar.processingTime = '15–20 working days';
    ar.stayDuration = 'Up to 90 days';
    ar.validity = '3 months';
    ar.entryType = 'Multiple entry';
    ar.consularNotes = 'Personal Appearance Mandatory: Applicants must personally attend an appointment at the Argentine Consulate for document submission and interview. The appointment is scheduled only after documents are pre-verified by the Consulate.';

    ar.visaTypes = [
      {
        id: 'tourist',
        name: 'Tourist Visa',
        shortDescription: 'Suitable for tourism, sightseeing, and short visits.',
        processingTime: '15–20 working days',
        validity: '3 months',
        stayDuration: 'Up to 90 days',
        entryType: 'Multiple entry',
        requirements: [
          'Original passport valid for at least 6 months with minimum 2 blank pages',
          'Completed and signed visa application forms (single-sided print only)',
          'Two recent colour photographs (35x45 mm, 80% face, white background)',
          'Personal covering letter stating travel purpose, dates, and detailed itinerary',
          'Financial proof: personal bank statement for the last 3 months (stamped by bank) and 3 years ITR',
          'Employment or business proof: employer leave approval letter with round seal or company registration',
          'Confirmed round-trip flight booking and hotel accommodation as per itinerary',
          'Comprehensive travel medical insurance covering the full flight itinerary duration'
        ],
        applicationSteps: [
          {
            num: "01",
            title: "Choose Visa Type",
            desc: "Confirm your tourist travel intent and review the document checklist."
          },
          {
            num: "02",
            title: "Prepare Documents",
            desc: "Gather your passport, financial proofs, travel itinerary, and single-sided application forms."
          },
          {
            num: "03",
            title: "Consular Pre-Verification",
            desc: "Vision Visa specialists review and submit your file for consular pre-verification."
          },
          {
            num: "04",
            title: "Attend In-Person Submission",
            desc: "Personally attend your scheduled appointment at the Argentine Consulate for submission and interview."
          },
          {
            num: "05",
            title: "Receive Visa Decision",
            desc: "Collect your stamped multiple-entry Argentina tourist visa upon consular approval."
          }
        ],
        notes: 'Personal appearance at the Argentine Consulate is mandatory for submission and interview after preliminary document verification.'
      },
      {
        id: 'business',
        name: 'Business Visa',
        shortDescription: 'For corporate meetings, trade negotiations, and commercial visits.',
        processingTime: '15–20 working days',
        validity: '3 months',
        stayDuration: 'Up to 90 days',
        entryType: 'Multiple entry',
        requirements: [
          'Original passport valid for at least 6 months with minimum 2 blank pages',
          'Completed and signed visa application forms with recent photographs',
          'Official invitation letter from host company in Argentina (certified by Argentine Notary & RENURE registered)',
          'Company covering letter on Indian letterhead in English, accompanied by certified Spanish translation',
          'Financial records: personal bank statements (last 3 months with bank seal) and 3 years ITR',
          'Indian company registration certificate and corporate profile',
          'Confirmed round-trip flight tickets, hotel booking & travel medical insurance'
        ],
        applicationSteps: [
          {
            num: "01",
            title: "Choose Visa Type",
            desc: "Confirm commercial activity scope and collect required corporate credentials."
          },
          {
            num: "02",
            title: "Prepare Documents",
            desc: "Obtain the notarized RENURE invitation and draft the bilingual covering letter (English & Spanish)."
          },
          {
            num: "03",
            title: "Consular Pre-Verification",
            desc: "Our specialists submit your commercial dossier for consular pre-audit."
          },
          {
            num: "04",
            title: "Attend Consular Submission",
            desc: "Personally attend the scheduled consular interview appointment for file submission."
          },
          {
            num: "05",
            title: "Receive Visa Decision",
            desc: "Receive your approved multiple-entry business visa grant."
          }
        ],
        notes: 'Invitation letters must be certified by an Argentine Public Notary and registered under RENURE. Bilingual covering letters (English and certified Spanish) are mandatory.'
      }
    ];
  }

  // Handle aliases
  if (updatedCountries['usa']) {
    updatedCountries['united-states'] = updatedCountries['usa'];
  }
  if (updatedCountries['uae']) {
    updatedCountries['united-arab-emirates'] = updatedCountries['uae'];
  }
  if (updatedCountries['indonesia-bali']) {
    updatedCountries['indonesia'] = updatedCountries['indonesia-bali'];
  }

  // Write updated output
  const outputCode = 'window.VISION_VISA_COUNTRIES = ' + JSON.stringify(updatedCountries, null, 2) + ';\n';

  fs.writeFileSync(path.join(process.cwd(), 'public', 'js', 'countries-data.js'), outputCode, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'js', 'countries-data.js'), outputCode, 'utf8');

  console.log('Successfully updated countries-data with clean grouped requirements!');
}

migrateData().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
