// DomainWatch main JavaScript
// Handles mobile navigation, FAQ accordion, reveal animations, and pricing toggle

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.parentElement.classList.toggle('active');
    });
  });

  // Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    revealElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback: just show
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Pricing toggle functionality
  const toggle = document.querySelector('#billing-toggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      const annual = toggle.checked;
      const priceValues = document.querySelectorAll('.price-value');
      priceValues.forEach(el => {
        const monthly = el.getAttribute('data-monthly');
        const annualVal = el.getAttribute('data-annual');
        el.textContent = annual ? annualVal : monthly;
      });
      const pricePeriod = document.querySelectorAll('.price-period');
      pricePeriod.forEach(el => {
        el.textContent = annual ? '/yr' : '/mo';
      });
    });
  }
});