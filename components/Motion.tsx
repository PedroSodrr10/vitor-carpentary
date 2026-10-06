'use client';

import { useEffect } from 'react';

/** Adds motion progressively; the full page remains readable without JavaScript. */
export function Motion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = document.querySelectorAll<HTMLElement>(
      '.brand, .hero-copy, .hero-image, .section-heading, .service, .detail-image, .detail-label, .contact-inner',
    );
    const enable = () => {
      observer?.disconnect();
      if (preference.matches) {
        elements.forEach(element => element.classList.add('is-visible'));
        return;
      }
      if (!('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      elements.forEach(element => observer?.observe(element));
    };
    enable();
    preference.addEventListener('change', enable);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', enable);
    };
  }, []);
  return null;
}
