'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            const delay = target.dataset.delay;
            if (delay) {
              // Only apply delay to opacity and transform
              target.style.transitionDelay = `${delay}, ${delay}`;
              target.style.transitionProperty = 'opacity, transform';
            }

            target.classList.add('active');
          } else {
            target.classList.remove('active');
            target.style.transitionDelay = '';
            target.style.transitionProperty = '';
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
