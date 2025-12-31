// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMobile.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinksMobile = document.querySelectorAll('.nav-link-mobile, .btn-nav-mobile');
navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMobile.classList.remove('active');
  });
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

document.getElementById('toggle-features').addEventListener('click', function() {
    const extraFeatures = document.getElementById('more-features');
    const btn = this;
    const btnText = btn.querySelector('span');

    if (extraFeatures.style.display === 'grid') {
        extraFeatures.style.display = 'none';
        btnText.textContent = 'Voir toutes les fonctionnalités';
        btn.classList.remove('active');
    } else {
        extraFeatures.style.display = 'grid';
        btnText.textContent = 'Réduire';
        btn.classList.add('active');
    }
});

document.getElementById('toggle-features2').addEventListener('click', function() {
    const extraFeatures = document.getElementById('more-features2');
    const btn = this;
    const btnText = btn.querySelector('span');

    if (extraFeatures.style.display === 'grid') {
        extraFeatures.style.display = 'none';
        btnText.textContent = 'Voir toutes les fonctionnalités';
        btn.classList.remove('active');
    } else {
        extraFeatures.style.display = 'grid';
        btnText.textContent = 'Réduire';
        btn.classList.add('active');
    }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// CTA Form submission
const ctaForm = document.getElementById('ctaForm');

ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const submitButton = ctaForm.querySelector('.btn-submit');
  const originalContent = submitButton.innerHTML;
  
  // Show success state
  submitButton.innerHTML = '<span>Envoyé ✓</span>';
  submitButton.style.pointerEvents = 'none';
  
  // Create success message
  const existingMessage = ctaForm.querySelector('.success-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Merci ! Nous vous contacterons bientôt pour organiser une démo.';
  ctaForm.appendChild(successMessage);
  
  // Reset form after 3 seconds
  setTimeout(() => {
    submitButton.innerHTML = originalContent;
    submitButton.style.pointerEvents = 'auto';
    ctaForm.reset();
    successMessage.remove();
  }, 3000);
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.style.background = 'rgba(2, 6, 23, 0.98)';
    nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.background = 'rgba(2, 6, 23, 0.95)';
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBg = document.querySelector('.hero-bg');
  
  if (heroBg && scrolled < window.innerHeight) {
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Animate stats on scroll
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumber = entry.target.querySelector('.stat-number');
      if (statNumber && !statNumber.classList.contains('animated-stat')) {
        statNumber.classList.add('animated-stat');
        animateValue(statNumber);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
  statsObserver.observe(card);
});

function animateValue(element) {
  const text = element.textContent;
  const hasPlus = text.includes('+');
  const number = parseInt(text.replace(/\D/g, ''));
  
  if (isNaN(number)) return;
  
  const duration = 2000;
  const steps = 60;
  const increment = number / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }
    
    let displayValue = Math.floor(current);
    
    // Format based on original text
    if (text.includes('K')) {
      displayValue = (displayValue / 1000).toFixed(0) + 'K';
    }
    
    if (hasPlus) {
      displayValue = displayValue + '+';
    }
    
    if (text.includes('/')) {
      displayValue = '24/24';
      clearInterval(timer);
    }
    
    element.textContent = displayValue;
  }, duration / steps);
}

// Add hover effect to cards
const cards = document.querySelectorAll('.benefit-card, .feature-card, .usp-card, .bonus-card, .testimonial-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// Prevent animations on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
  }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);


