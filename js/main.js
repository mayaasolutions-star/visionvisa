document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Logic
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = mobileMenu.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isActive);
            
            // Swap icon dynamically between menu and x
            const icon = mobileToggle.querySelector('i');
            if (icon && typeof lucide !== 'undefined') {
                icon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
                lucide.createIcons();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('i');
                if (icon && typeof lucide !== 'undefined') {
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            }
        });
    }

    // Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Magnetic Buttons
    const magneticButtons = document.querySelectorAll('.magnetic');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // Form Prototype Handling
    const contactForm = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (successPopup) {
                successPopup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    successPopup.style.display = 'none';
                    document.body.style.overflow = '';
                    contactForm.reset();
                }, 3500);
            }
        });
    }

    if (successPopup) {
        successPopup.addEventListener('click', (e) => {
            if (e.target === successPopup) {
                successPopup.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && successPopup.style.display === 'flex') {
                successPopup.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});
