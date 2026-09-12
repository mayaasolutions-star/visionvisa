'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const JOURNEY_STAGES = [
  {
    stage: 'STAGE 01',
    num: '01',
    title: 'Your Travel Idea',
    accent: 'Destination, purpose & tentative travel dates',
    description:
      "Every journey starts somewhere. Understanding where you're going, why you're travelling and what you hope to do helps establish the right starting point.",
    tag: 'INITIAL PLANNING',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    )
  },
  {
    stage: 'STAGE 02',
    num: '02',
    title: 'Consultation',
    accent: 'Understanding your requirements',
    description:
      'Your circumstances matter. We take the time to understand your plans and explain the requirements relevant to your journey.',
    tag: 'ELIGIBILITY & CRITERIA',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    )
  },
  {
    stage: 'STAGE 03',
    num: '03',
    title: 'Documentation',
    accent: 'Prepare with clarity',
    description:
      'The right documents can make the application process easier to navigate. We help you understand what is required and organise the information carefully.',
    tag: 'CHECKLIST & SCRUTINY',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    stage: 'STAGE 04',
    num: '04',
    title: 'Visa Lodgement',
    accent: 'Ready for submission',
    description:
      'Where applicable, we guide you through appointments, biometrics and the submission process, helping you understand what comes next.',
    tag: 'CONSULAR SUBMISSION',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    )
  },
  {
    stage: 'STAGE 05',
    num: '05',
    title: 'Travel Essentials',
    accent: 'Preparing beyond the application',
    description:
      'Once the travel plan takes shape, essential arrangements such as insurance, flights and foreign currency (arranged through Splendid Forex) can complete the practical side of the journey.',
    tag: 'PRE-DEPARTURE SUITE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  },
  {
    stage: 'STAGE 06',
    num: '06',
    title: 'Take-Off',
    accent: 'Ready for what comes next',
    description:
      'With the important pieces prepared, the focus can finally shift from paperwork to the journey itself.',
    tag: 'DEPARTURE READY',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    )
  }
];

export default function AboutJourneyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);

  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const total = JOURNEY_STAGES.length;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Dynamic ref tracking for state inside interval
  const isPausedRef = useRef(false);
  isPausedRef.current = !isInView || isHovered || isDragging || prefersReducedMotion;

  // Restart auto-rotation timer: cancels any pending tick and waits full 3.5s
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (isPausedRef.current) return;

    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((curr) => (curr + 1) % total);
      }
    }, 3500);
  }, [total]);

  // Manual actions: transition immediately and restart the 3.5s countdown
  const handleManualNext = useCallback(() => {
    goToNext();
    resetTimer();
  }, [goToNext, resetTimer]);

  const handleManualPrev = useCallback(() => {
    goToPrev();
    resetTimer();
  }, [goToPrev, resetTimer]);

  const handleManualSelect = useCallback((idx) => {
    setActiveIndex(idx);
    resetTimer();
  }, [resetTimer]);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mq.addEventListener?.('change', listener);
      return () => mq.removeEventListener?.('change', listener);
    }
  }, []);

  // Viewport Intersection Observer: start when entering view, pause when out
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

  // Autoplay lifecycle: run when in view, pause when hovered/dragging/reduced motion
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

  // Drag & Swipe helpers
  const finishDrag = (delta) => {
    setIsDragging(false);
    if (delta < -35) {
      handleManualNext();
    } else if (delta > 35) {
      handleManualPrev();
    } else {
      resetTimer();
    }
    setDragDeltaX(0);
  };

  // Mouse drag handlers (Desktop)
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

  // Touch swipe handlers (Mobile/Tablet)
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

  return (
    <div
      className="journey-3d-stage-wrapper"
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive 3D Journey Stages Carousel. Use side arrows, keyboard keys, swipe, or indicators to explore stages."
      role="region"
    >
      {/* Side Navigation Arrow: Previous (Vertically aligned with cards) */}
      <button
        type="button"
        onClick={handleManualPrev}
        className="journey-side-btn journey-side-prev"
        aria-label="Previous journey stage"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* 3D Stacked Viewport */}
      <div
        className={`journey-3d-viewport ${isDragging ? 'is-dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="journey-3d-track">
          {JOURNEY_STAGES.map((card, idx) => {
            // Calculate relative offset from active index
            let offset = idx - activeIndex;
            // Wrap around for circular perception
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            let cardClass = 'journey-3d-card';
            if (isActive) cardClass += ' card-active';
            else if (isPrev) cardClass += ' card-prev';
            else if (isNext) cardClass += ' card-next';
            else cardClass += ' card-hidden';

            return (
              <div
                key={card.stage}
                className={cardClass}
                onClick={() => {
                  if (!isActive) {
                    handleManualSelect(idx);
                  }
                }}
                aria-hidden={!isActive}
                role="tabpanel"
                aria-label={`${card.stage}: ${card.title}`}
              >
                <div className="journey-card-inner">
                  {/* Card Header */}
                  <div className="journey-card-header">
                    <div className="journey-stage-badge">
                      <span className="stage-badge-dot"></span>
                      <span>{card.stage}</span>
                    </div>

                    <div className="journey-card-icon-wrap" aria-hidden="true">
                      {card.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="journey-card-title">{card.title}</h3>
                  <div className="journey-card-accent">{card.accent}</div>

                  <p className="journey-card-desc">{card.description}</p>

                  {/* Card Footer Tag */}
                  <div className="journey-card-footer">
                    <span className="journey-meta-tag">{card.tag}</span>
                    <span className="journey-step-indicator">
                      STAGE {card.num} OF 06
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Side Navigation Arrow: Next (Vertically aligned with cards) */}
      <button
        type="button"
        onClick={handleManualNext}
        className="journey-side-btn journey-side-next"
        aria-label="Next journey stage"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

    </div>
  );
}
