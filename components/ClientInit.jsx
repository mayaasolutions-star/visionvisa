'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Trigger Lucide Icons
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons();
      setTimeout(() => window.lucide.createIcons(), 100);
    }

    // 2. Intersection Observer for Reveal Animations (with immediate viewport check & failsafe)
    const initObserver = () => {
      const revealElements = document.querySelectorAll('.reveal');
      if (!revealElements.length) return;

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px 80px 0px' }
      );

      revealElements.forEach((el) => {
        // If element is already in or near viewport, activate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -50) {
          el.classList.add('active');
        }
        revealObserver.observe(el);
      });
    };

    initObserver();
    const timer1 = setTimeout(initObserver, 60);
    const timer2 = setTimeout(initObserver, 250);
    const timer3 = setTimeout(initObserver, 600);

    // Safety fallback: ensure no content remains permanently blank/hidden if observer is delayed
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        el.classList.add('active');
      });
    }, 1200);

    // 3. Magnetic Buttons
    const magneticButtons = document.querySelectorAll('.magnetic');
    magneticButtons.forEach(btn => {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };

      const handleMouseLeave = () => {
        btn.style.transform = 'translate(0px, 0px)';
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    // 4. Trigger Search Engine if on home page or search present
    if (typeof window !== 'undefined' && window.VISION_VISA_INIT_SEARCH) {
      window.VISION_VISA_INIT_SEARCH();
    }

    // 5. Trigger Country Render if on country page
    if (typeof window !== 'undefined' && window.VISION_VISA_RENDER_COUNTRY) {
      window.VISION_VISA_RENDER_COUNTRY();
      // Re-run observer after country render
      setTimeout(initObserver, 100);
      setTimeout(initObserver, 500);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(safetyTimer);
    };
  }, [pathname]);

  return null;
}
