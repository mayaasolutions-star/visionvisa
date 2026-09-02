'use client';

import { getAssetPath } from '@/lib/asset-path';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileVisasOpen, setIsMobileVisasOpen] = useState(false);

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  /*
   * Remove base path when checking active navigation.
   */
  const cleanPathname = pathname?.replace(/^\/visionvisa-demo/, '') || '/';

  const visaCategories = [
    {
      name: 'Tourist Visa',
      href: '/tourist-visa',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
        </svg>
      ),
    },
    {
      name: 'Business Visa',
      href: '/business-visa',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          <rect width="20" height="14" x="2" y="6" rx="2"/>
        </svg>
      ),
    },
    {
      name: 'Study Visa',
      href: '/study-visa',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
          <path d="M22 10v6"/>
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
        </svg>
      ),
    },
    {
      name: 'Family Visa',
      href: '/family-visa',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      name: 'Visitor Visa',
      href: '/visitor-visa',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
        </svg>
      ),
    },
    {
      name: 'Work Visa',
      href: '/work-visa',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4"/>
          <path d="M10 10h4"/>
          <path d="M10 14h4"/>
          <path d="M10 18h4"/>
        </svg>
      ),
    },
  ];

  const isVisaSubpageActive = (path) => {
    return (
      cleanPathname === path ||
      cleanPathname.startsWith(`${path}/`) ||
      cleanPathname.startsWith(`${path}.html`)
    );
  };

  const isVisaActive = () => {
    if (
      cleanPathname === '/visas' ||
      cleanPathname.startsWith('/visas/') ||
      cleanPathname.startsWith('/visas.html')
    ) {
      return true;
    }
    return visaCategories.some((category) => isVisaSubpageActive(category.href));
  };

  const isActive = (path) => {
    if (path === '/') {
      return cleanPathname === '/' || cleanPathname === '/index.html';
    }
    if (path === '/visas') {
      return isVisaActive();
    }
    return (
      cleanPathname === path ||
      cleanPathname.startsWith(`${path}/`) ||
      cleanPathname.startsWith(`${path}.html`)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset dropdown and mobile state on any page navigation
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
    setIsMobileVisasOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons();
    }
  }, [isMobileOpen, isDropdownOpen, isMobileVisasOpen]);

  // Click outside and escape key listeners
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileOpen(false);
        setIsMobileVisasOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 120);
  };

  const handleItemClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
    setIsMobileVisasOpen(false);
    if (typeof document !== 'undefined' && document.activeElement) {
      document.activeElement.blur();
    }
  };

  const toggleMobile = (e) => {
    e.stopPropagation();
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobile = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
    setIsMobileVisasOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">

        {/* Logo */}
        <Link href="/" className="logo-brand">
          <img
            src={getAssetPath('/images/vision-visa-logo-symbol.webp')}
            alt="Vision Visa Symbol"
            className="logo-symbol"
          />

          <img
            src={getAssetPath('/images/visionvisa-name-dark.webp')}
            alt="Vision Visa"
            className="logo-name"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">

          <Link
            href="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>

          {/* Visas Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <Link
              href="/visas"
              className={`nav-link ${isActive('/visas') ? 'active' : ''}`}
              onClick={handleItemClick}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Visas
              <svg
                className={`nav-dropdown-chevron ${isDropdownOpen ? 'open' : ''}`}
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`nav-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
              role="menu"
              aria-label="Visa Categories"
            >
              <div className="nav-dropdown-list">
                {visaCategories.map((item) => {
                  const active = isVisaSubpageActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={`nav-dropdown-item ${active ? 'active' : ''}`}
                      onClick={handleItemClick}
                    >
                      <span className="nav-dropdown-icon">
                        {item.icon}
                      </span>
                      <span className="nav-dropdown-item-name">{item.name}</span>
                      <svg
                        className="nav-dropdown-item-arrow"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/travel-insurance"
            className={`nav-link ${
              isActive('/travel-insurance') ? 'active' : ''
            }`}
          >
            Travel Insurance
          </Link>

          <Link
            href="/forex"
            className={`nav-link ${isActive('/forex') ? 'active' : ''}`}
          >
            Forex
          </Link>

          <Link
            href="/air-tickets"
            className={`nav-link ${
              isActive('/air-tickets') ? 'active' : ''
            }`}
          >
            Air Tickets
          </Link>

          <Link
            href="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>

        </div>

        {/* CTA + Mobile Button */}
        <div className="nav-actions">

          <Link
            href="/contact"
            className="nav-cta magnetic"
          >
            Apply Now
          </Link>

          <button
            className="mobile-toggle"
            aria-label="Toggle Navigation"
            aria-expanded={isMobileOpen}
            onClick={toggleMobile}
          >
            <i data-lucide={isMobileOpen ? 'x' : 'menu'}></i>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'active' : ''}`}>

        <Link
          href="/"
          className={`mobile-nav-link ${
            isActive('/') ? 'active' : ''
          }`}
          onClick={closeMobile}
        >
          Home
        </Link>

        {/* Mobile Visas Accordion */}
        <div className="mobile-dropdown-section">
          <div className="mobile-dropdown-row">
            <Link
              href="/visas"
              className={`mobile-nav-link mobile-dropdown-main ${
                isActive('/visas') ? 'active' : ''
              }`}
              onClick={closeMobile}
            >
              Visas
            </Link>
            <button
              type="button"
              className="mobile-dropdown-arrow-btn"
              aria-label="Toggle Visa Subcategories"
              aria-expanded={isMobileVisasOpen}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileVisasOpen((prev) => !prev);
              }}
            >
              <svg
                className={`mobile-chevron ${isMobileVisasOpen ? 'open' : ''}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          <div className={`mobile-dropdown-sublist ${isMobileVisasOpen ? 'open' : ''}`}>
            {visaCategories.map((item) => {
              const active = isVisaSubpageActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-sub-link ${active ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  <span className="mobile-sub-icon">
                    {item.icon}
                  </span>
                  <span className="mobile-sub-text">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="/travel-insurance"
          className={`mobile-nav-link ${
            isActive('/travel-insurance') ? 'active' : ''
          }`}
          onClick={closeMobile}
        >
          Travel Insurance
        </Link>

        <Link
          href="/forex"
          className={`mobile-nav-link ${
            isActive('/forex') ? 'active' : ''
          }`}
          onClick={closeMobile}
        >
          Forex
        </Link>

        <Link
          href="/air-tickets"
          className={`mobile-nav-link ${
            isActive('/air-tickets') ? 'active' : ''
          }`}
          onClick={closeMobile}
        >
          Air Tickets
        </Link>

        <Link
          href="/about"
          className={`mobile-nav-link ${
            isActive('/about') ? 'active' : ''
          }`}
          onClick={closeMobile}
        >
          About
        </Link>

        <Link
          href="/contact"
          className="mobile-nav-cta"
          onClick={closeMobile}
        >
          Apply Now
        </Link>

      </div>
    </nav>
  );
}