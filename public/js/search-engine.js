/* Vision Visa - Dynamic Search & Filter Engine */
(function () {
    let selectedCountrySlug = '';
    let highlightedIndex = -1;

    // Nationalities list
    const nationalities = [
        { name: 'Indian', code: 'in' },
        { name: 'American', code: 'us' },
        { name: 'British', code: 'gb' },
        { name: 'Canadian', code: 'ca' },
        { name: 'Australian', code: 'au' },
        { name: 'Emirati', code: 'ae' },
        { name: 'French', code: 'fr' },
        { name: 'German', code: 'de' },
        { name: 'Japanese', code: 'jp' },
        { name: 'Singaporean', code: 'sg' },
        { name: 'Saudi', code: 'sa' },
        { name: 'Chinese', code: 'cn' },
        { name: 'Brazilian', code: 'br' },
        { name: 'Russian', code: 'ru' },
        { name: 'South African', code: 'za' }
    ];

    function initSearchEngine() {
        const destInput = document.getElementById('destSearchInput');
        const destDropdown = document.getElementById('destDropdown');
        const visaSelect = document.getElementById('visaTypeSelect');
        const natInput = document.getElementById('natSearchInput');
        const natDropdown = document.getElementById('natDropdown');
        const searchForm = document.getElementById('heroSearchForm');
        const errorMsg = document.getElementById('searchValidationError');

        if (!destInput || !destDropdown) return;

        const db = window.VISION_VISA_COUNTRIES || {};
        const countriesList = Object.values(db);

        // Helper: Highlight matching substring
        function highlightMatch(text, query) {
            if (!query) return text;
            const regex = new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
            return text.replace(regex, '<span class="search-highlight">$1</span>');
        }

        // 1. Destination Autocomplete
        function renderDestDropdown(query) {
            const trimmed = query.trim().toLowerCase();
            const selectedVisa = visaSelect ? visaSelect.value : '';

            // Filter countries
            let matches = countriesList.filter(c => {
                const matchesName = c.name.toLowerCase().includes(trimmed);
                const matchesVisa = !selectedVisa || c.visaType.toLowerCase().includes(selectedVisa.toLowerCase());
                return matchesName && matchesVisa;
            });

            highlightedIndex = -1;

            if (matches.length === 0) {
                destDropdown.innerHTML = `<div class="search-dropdown-empty">No matching country found.</div>`;
                destDropdown.classList.add('show');
                return;
            }

            destDropdown.innerHTML = matches.map((c, idx) => `
                <a href="${(window.VISION_VISA_BASE_PATH || '')}/country/${c.slug}" 
                   class="search-dropdown-item" 
                   data-slug="${c.slug}" 
                   data-name="${c.name}"
                   data-index="${idx}">
                    <div class="search-item-left">
                        <img src="${c.flagImage}" alt="${c.name}" class="search-flag" loading="lazy">
                        <span class="search-country-name">${highlightMatch(c.name, trimmed)}</span>
                    </div>
                </a>
            `).join('');

            destDropdown.classList.add('show');
        }

        // Delegated click listener on destDropdown
        destDropdown.addEventListener('click', (e) => {
            const item = e.target.closest('.search-dropdown-item');
            if (!item) return;
            e.preventDefault();
            destInput.value = item.getAttribute('data-name');
            selectedCountrySlug = item.getAttribute('data-slug');
            destDropdown.classList.remove('show');
            if (errorMsg) errorMsg.style.display = 'none';
            const targetUrl = item.getAttribute('href');
            if (targetUrl) window.location.href = targetUrl;
        });

        // Input Event Listener for Destination
        destInput.addEventListener('input', () => {
            selectedCountrySlug = '';
            if (errorMsg) errorMsg.style.display = 'none';
            renderDestDropdown(destInput.value);
        });

        destInput.addEventListener('focus', () => {
            renderDestDropdown(destInput.value);
        });

        // Keyboard Navigation for Destination Dropdown
        destInput.addEventListener('keydown', (e) => {
            const items = destDropdown.querySelectorAll('.search-dropdown-item');
            if (!destDropdown.classList.contains('show') || items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                highlightedIndex = (highlightedIndex + 1) % items.length;
                updateHighlight(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
                updateHighlight(items);
            } else if (e.key === 'Enter') {
                if (highlightedIndex >= 0 && items[highlightedIndex]) {
                    e.preventDefault();
                    items[highlightedIndex].click();
                }
            } else if (e.key === 'Escape') {
                destDropdown.classList.remove('show');
            }
        });

        function updateHighlight(items) {
            items.forEach((item, idx) => {
                if (idx === highlightedIndex) {
                    item.classList.add('active-highlight');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('active-highlight');
                }
            });
        }

        // 2. Visa Type Dropdown Filter & Grid Filtering
        if (visaSelect) {
            visaSelect.addEventListener('change', () => {
                if (destInput.value.trim()) {
                    renderDestDropdown(destInput.value);
                }
                filterHomepageCards(visaSelect.value);
            });
        }

        function filterHomepageCards(visaType) {
            const cards = document.querySelectorAll('.destination-grid .card');
            if (!cards.length) return;

            const selectedVisa = visaType.toLowerCase().trim();
            cards.forEach(card => {
                if (!selectedVisa) {
                    card.style.display = '';
                    return;
                }
                const link = card.getAttribute('href') || '';
                const match = link.match(/\/country\/([a-z0-9-]+)/i);
                if (match && match[1]) {
                    const countryData = db[match[1]];
                    if (countryData && countryData.visaType.toLowerCase().includes(selectedVisa)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }

        // 3. Nationality Selector Autocomplete
        if (natInput && natDropdown) {
            function renderNatDropdown(query) {
                const trimmed = query.trim().toLowerCase();
                const matches = nationalities.filter(n => n.name.toLowerCase().includes(trimmed));

                if (matches.length === 0) {
                    natDropdown.innerHTML = `<div class="search-dropdown-empty">No nationality found.</div>`;
                } else {
                    natDropdown.innerHTML = matches.map(n => `
                        <div class="search-dropdown-item nat-item" data-name="${n.name}">
                            <div class="search-item-left">
                                <img src="https://flagcdn.com/w40/${n.code}.png" alt="${n.name}" class="search-flag">
                                <span class="search-country-name">${highlightMatch(n.name, trimmed)}</span>
                            </div>
                        </div>
                    `).join('');

                    natDropdown.querySelectorAll('.nat-item').forEach(item => {
                        item.addEventListener('click', () => {
                            natInput.value = item.getAttribute('data-name');
                            localStorage.setItem('visionvisa_nationality', natInput.value);
                            natDropdown.classList.remove('show');
                        });
                    });
                }
                natDropdown.classList.add('show');
            }

            natInput.addEventListener('input', () => renderNatDropdown(natInput.value));
            natInput.addEventListener('focus', () => renderNatDropdown(natInput.value));

            natInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') natDropdown.classList.remove('show');
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#destSearchInput') && !e.target.closest('#destDropdown')) {
                destDropdown.classList.remove('show');
            }
            if (natDropdown && !e.target.closest('#natSearchInput') && !e.target.closest('#natDropdown')) {
                natDropdown.classList.remove('show');
            }
        });

        // 4. Form Submit & Search Button Validation
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                executeSearch();
            });
        }

        function executeSearch() {
            const query = destInput.value.trim().toLowerCase();
            const selectedVisa = visaSelect ? visaSelect.value : '';

            if (!query && !selectedCountrySlug) {
                if (errorMsg) {
                    errorMsg.style.display = 'flex';
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }
                destInput.focus();
                return;
            }

            if (errorMsg) errorMsg.style.display = 'none';

            // Find matching country
            let targetSlug = selectedCountrySlug;
            if (!targetSlug) {
                const match = countriesList.find(c => c.name.toLowerCase() === query || c.slug === query);
                if (match) {
                    targetSlug = match.slug;
                } else {
                    const partialMatch = countriesList.find(c => c.name.toLowerCase().includes(query));
                    if (partialMatch) targetSlug = partialMatch.slug;
                }
            }

            if (targetSlug) {
                let targetUrl = `${(window.VISION_VISA_BASE_PATH || '')}/country/${targetSlug}`;
                                window.location.href = targetUrl;
            } else {
                if (errorMsg) {
                    errorMsg.querySelector('span').textContent = 'No matching destination found. Please select from the dropdown.';
                    errorMsg.style.display = 'flex';
                }
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initSearchEngine();
    });
})();
