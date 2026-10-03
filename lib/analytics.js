/**
 * Vision Visa - Privacy-First Analytics & Conversion Tracking Helper
 * Provides a clean wrapper around Google Analytics 4 (GA4) with zero PII collection.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VISIONVISA';

// Page view event tracking
export function trackPageView(url, title = '', country = '', visaType = '') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title || document.title,
      country: country || undefined,
      visa_type: visaType || undefined,
    });
  }
}

// Custom event tracking helper (strictly non-PII)
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    // Sanitize parameters to ensure no PII is accidentally transmitted
    const sanitizedParams = { ...eventParams };
    delete sanitizedParams.name;
    delete sanitizedParams.email;
    delete sanitizedParams.phone;
    delete sanitizedParams.passport;
    delete sanitizedParams.address;
    delete sanitizedParams.message;

    window.gtag('event', eventName, sanitizedParams);
  }
}

// Destination Search Events
export function trackSearchOpen() {
  trackEvent('search_opened', { category: 'Search' });
}

export function trackSearchSubmit(searchTerm, countryMatched = '') {
  trackEvent('search_submitted', {
    search_term: searchTerm,
    country: countryMatched || 'unmatched',
    category: 'Search',
  });
}

export function trackSearchSelect(countryName, slug) {
  trackEvent('search_select', {
    country: countryName,
    country_slug: slug,
    category: 'Search',
  });
}

export function trackSearchNoResults(searchTerm) {
  trackEvent('search_no_results', {
    search_term: searchTerm,
    category: 'Search',
  });
}

// Visa Selection Event
export function trackVisaSelect(countryName, visaName) {
  trackEvent('visa_type_select', {
    country: countryName,
    visa_type: visaName,
    category: 'Visa Selection',
  });
}

// Requirements Interaction Events
export function trackRequirementsExpand(countryName, visaName, totalCount) {
  trackEvent('view_all_requirements', {
    country: countryName,
    visa_type: visaName,
    total_requirements: totalCount,
    category: 'Requirements',
  });
}

export function trackRequirementsCollapse(countryName, visaName) {
  trackEvent('show_less_requirements', {
    country: countryName,
    visa_type: visaName,
    category: 'Requirements',
  });
}

// Conversion & Outbound CTA Events
export function trackCTAClick(ctaName, location, country = '', visaType = '') {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location: location,
    country: country || undefined,
    visa_type: visaType || undefined,
    category: 'Conversion CTA',
  });
}

export function trackWhatsAppClick(location, country = '', visaType = '') {
  trackEvent('whatsapp_click', {
    location: location,
    country: country || undefined,
    visa_type: visaType || undefined,
    category: 'Outbound Conversion',
  });
}

export function trackInstagramClick(location) {
  trackEvent('instagram_click', {
    location: location,
    category: 'Outbound Conversion',
  });
}

// Form Funnel Events (Strictly Anonymous)
export function trackFormView(formId) {
  trackEvent('form_view', {
    form_id: formId,
    category: 'Form Funnel',
  });
}

export function trackFormStart(formId) {
  trackEvent('form_start', {
    form_id: formId,
    category: 'Form Funnel',
  });
}

export function trackFormFieldExit(formId, fieldName) {
  trackEvent('form_field_exit', {
    form_id: formId,
    field_name: fieldName,
    category: 'Form Funnel',
  });
}

export function trackFormSubmit(formId, serviceType = '') {
  trackEvent('form_submit', {
    form_id: formId,
    service_type: serviceType,
    category: 'Form Funnel',
  });
}

export function trackFormSuccess(formId, serviceType = '') {
  trackEvent('form_success', {
    form_id: formId,
    service_type: serviceType,
    category: 'Form Funnel',
  });
}

export function trackFormError(formId, errorMessage) {
  trackEvent('form_error', {
    form_id: formId,
    error_type: errorMessage,
    category: 'Form Funnel',
  });
}

// Carousel Navigation Events
export function trackCarouselAction(action, country = '', slideTitle = '') {
  trackEvent(`carousel_${action}`, {
    country: country,
    slide_title: slideTitle,
    category: 'Carousel',
  });
}
