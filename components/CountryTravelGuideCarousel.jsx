'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getCountryTravelGuide } from '@/lib/visa-rules-data';
import { trackCarouselAction } from '@/lib/analytics';

export default function CountryTravelGuideCarousel({ data, activeVisa }) {
  const slides = getCountryTravelGuide(data, activeVisa);
  const total = slides.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);

  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Reset index when country or visa changes
  useEffect(() => {
    setActiveIndex(0);
  }, [data?.slug, activeVisa?.id]);

  const goToNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const isPausedRef = useRef(false);
  isPausedRef.current = !isInView || isHovered || isDragging || prefersReducedMotion;

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (isPausedRef.current || total === 0) return;

    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((curr) => (curr + 1) % total);
      }
    }, 4000);
  }, [total]);

  const handleManualNext = useCallback(() => {
    goToNext();
    resetTimer();
    trackCarouselAction('next', data?.name);
  }, [goToNext, resetTimer, data?.name]);

  const handleManualPrev = useCallback(() => {
    goToPrev();
    resetTimer();
    trackCarouselAction('prev', data?.name);
  }, [goToPrev, resetTimer, data?.name]);

  const handleManualSelect = useCallback((idx) => {
    setActiveIndex(idx);
    resetTimer();
  }, [resetTimer]);

  // Reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mq.addEventListener?.('change', listener);
      return () => mq.removeEventListener?.('change', listener);
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isInView, isHovered, isDragging, prefersReducedMotion, resetTimer]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleManualNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleManualPrev();
      }
    },
    [handleManualNext, handleManualPrev]
  );

  // Drag & Touch handlers
  const finishDrag = (delta) => {
    setIsDragging(false);
    if (delta < -30) {
      handleManualNext();
    } else if (delta > 30) {
      handleManualPrev();
    } else {
      resetTimer();
    }
    setDragDeltaX(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragDeltaX(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    finishDrag(dragDeltaX);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isDragging) {
      finishDrag(dragDeltaX);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragDeltaX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragDeltaX(e.touches[0].clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    finishDrag(dragDeltaX);
  };

  if (!slides || slides.length === 0) return null;

  // Render SVG icons per type
  const renderIcon = (type) => {
    switch (type) {
      case 'calendar':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case 'money':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
        );
      case 'arrival':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 18h20" />
            <path d="M19 12l-6-6-3 3-5-2-1 2 4 4-2 3 2 1 4-2 6 2z" />
          </svg>
        );
      case 'wifi':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
        );
      case 'compass':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
    }
  };

  return (
    <section className="vv-country-guide-section">
      <div className="vv-guide-header">
        <span className="vv-guide-kicker">TRAVEL & DESTINATION GUIDE</span>
        <h2 className="vv-guide-title">Useful details for your trip to {data.name}</h2>
        <p className="vv-guide-subtitle">
          Quick practical insights to keep in mind before you travel.
        </p>
      </div>

      <div
        className="journey-3d-stage-wrapper country-guide-stage-wrapper"
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        aria-label={`Interactive Travel Guide Carousel for ${data.name}. Use navigation buttons or swipe.`}
        role="region"
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handleManualPrev}
          className="journey-side-btn journey-side-prev country-guide-side-btn"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* 3D Stack Viewport */}
        <div
          className={`journey-3d-viewport country-guide-viewport ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="journey-3d-track">
            {slides.map((card, idx) => {
              let offset = idx - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;

              let cardClass = 'journey-3d-card country-guide-card';
              if (isActive) cardClass += ' card-active';
              else if (isPrev) cardClass += ' card-prev';
              else if (isNext) cardClass += ' card-next';
              else cardClass += ' card-hidden';

              return (
                <div
                  key={idx}
                  className={cardClass}
                  onClick={() => {
                    if (!isActive) handleManualSelect(idx);
                  }}
                  aria-hidden={!isActive}
                  role="tabpanel"
                  aria-label={`${card.category}: ${card.title}`}
                >
                  <div className="journey-card-inner country-guide-card-inner">
                    {/* Header */}
                    <div className="journey-card-header country-guide-card-header">
                      <div className="journey-stage-badge country-guide-badge">
                        <span className="stage-badge-dot"></span>
                        <span>{card.category}</span>
                      </div>

                      <div className="journey-card-icon-wrap country-guide-icon-wrap" aria-hidden="true">
                        {renderIcon(card.iconType)}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="country-guide-card-title">{card.title}</h3>
                    <p className="country-guide-card-desc">{card.info}</p>

                    {/* Footer Tag & Step Indicator */}
                    <div className="journey-card-footer country-guide-card-footer">
                      <span className="journey-meta-tag">{card.tag}</span>
                      <span className="journey-step-indicator">
                        0{idx + 1} OF 0{total}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleManualNext}
          className="journey-side-btn journey-side-next country-guide-side-btn"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
