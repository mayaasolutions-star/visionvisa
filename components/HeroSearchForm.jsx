'use client';

import { getAssetPath } from '@/lib/asset-path';
import React, { useState, useEffect, useRef } from 'react';
import countriesData from '../lib/countries-list.json';

export default function HeroSearchForm() {
    const [query, setQuery] = useState('');
    const [selectedSlug, setSelectedSlug] = useState('');
    const [isDestOpen, setIsDestOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const formRef = useRef(null);

    // Filter countries based on destination query
    const trimmedQuery = query.trim().toLowerCase();
    
    let matches = countriesData.filter(c => {
        return !trimmedQuery || c.name.toLowerCase().includes(trimmedQuery) || c.slug.toLowerCase().includes(trimmedQuery);
    });

    // Priority sorting: startsWith comes first
    if (trimmedQuery) {
        matches.sort((a, b) => {
            const aStarts = a.name.toLowerCase().startsWith(trimmedQuery);
            const bStarts = b.name.toLowerCase().startsWith(trimmedQuery);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;
            return a.name.localeCompare(b.name);
        });
    }

    // Handle outside clicks to close dropdown
    useEffect(() => {
        function handleClickOutside(e) {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setIsDestOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectCountry = (country) => {
        setQuery(country.name);
        setSelectedSlug(country.slug);
        setIsDestOpen(false);
        setErrorMsg('');
        window.location.href = getAssetPath(`/country/${country.slug}`);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setErrorMsg('');

        let targetSlug = selectedSlug;
        if (!targetSlug && trimmedQuery) {
            const exactMatch = countriesData.find(c => c.name.toLowerCase() === trimmedQuery || c.slug === trimmedQuery);
            if (exactMatch) {
                targetSlug = exactMatch.slug;
            } else {
                const startsMatch = countriesData.find(c => c.name.toLowerCase().startsWith(trimmedQuery));
                if (startsMatch) {
                    targetSlug = startsMatch.slug;
                } else {
                    const containsMatch = countriesData.find(c => c.name.toLowerCase().includes(trimmedQuery));
                    if (containsMatch) {
                        targetSlug = containsMatch.slug;
                    }
                }
            }
        }

        if (targetSlug) {
            window.location.href = getAssetPath(`/country/${targetSlug}`);
        } else {
            if (!trimmedQuery) {
                setErrorMsg('Please select a destination country to proceed.');
            } else {
                setErrorMsg('No matching destination found. Please select from the dropdown.');
            }
            setIsDestOpen(true);
        }
    };

    const handleDestKeyDown = (e) => {
        if (!isDestOpen || matches.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex(prev => (prev + 1) % matches.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex(prev => (prev - 1 + matches.length) % matches.length);
        } else if (e.key === 'Enter') {
            if (highlightedIndex >= 0 && matches[highlightedIndex]) {
                e.preventDefault();
                handleSelectCountry(matches[highlightedIndex]);
            }
        } else if (e.key === 'Escape') {
            setIsDestOpen(false);
        }
    };

    // Helper: Highlight matching text
    const highlightMatch = (text, q) => {
        if (!q) return text;
        const parts = text.split(new RegExp(`(${q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'));
        return parts.map((part, i) => 
            part.toLowerCase() === q.toLowerCase() ? (
                <span key={i} className="search-highlight">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <form id="heroSearchForm" ref={formRef} className="search-bar" onSubmit={handleSearchSubmit} autoComplete="off">
            {/* Destination */}
            <div className="search-item search-item-relative">
                <label htmlFor="destSearchInput" className="search-label">
                    DESTINATION
                </label>
                <input
                    type="text"
                    id="destSearchInput"
                    className="search-input"
                    placeholder="Where to? (e.g. Canada, Japan)"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setSelectedSlug('');
                        setErrorMsg('');
                        setIsDestOpen(true);
                    }}
                    onFocus={() => setIsDestOpen(true)}
                    onKeyDown={handleDestKeyDown}
                    aria-label="Destination country search"
                    autoComplete="off"
                />

                {/* Dropdown Menu */}
                {isDestOpen && (
                    <div id="destDropdown" className="search-dropdown show">
                        {matches.length === 0 ? (
                            <div className="search-dropdown-empty">No destinations found</div>
                        ) : (
                            matches.map((c, idx) => (
                                <div
                                    key={c.slug}
                                    className={`search-dropdown-item ${idx === highlightedIndex ? 'active-highlight' : ''}`}
                                    onClick={() => handleSelectCountry(c)}
                                >
                                    <div className="search-item-left">
                                        {c.flagImage && (
                                            <img src={getAssetPath(c.flagImage)} alt={c.name} className="search-flag" />
                                        )}
                                        <span className="search-country-name">
                                            {highlightMatch(c.name, trimmedQuery)}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>

            {/* Search Button */}
            <button type="submit" id="searchSubmitBtn" className="search-btn magnetic" aria-label="Search visa options">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="mobile-search-btn-text" style={{ display: "none" }}>
                    Search Visas
                </span>
            </button>

            {/* Validation Error */}
            {errorMsg && (
                <div id="searchValidationError" className="search-error-msg" style={{ display: "flex" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>{errorMsg}</span>
                </div>
            )}
        </form>
    );
}
