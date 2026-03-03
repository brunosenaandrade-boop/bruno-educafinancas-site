// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-up class to animatable elements
document.querySelectorAll('.section-header, .sobre-grid, .video-card, .produto-grid, .newsletter-box, .social-card').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Newsletter form
const form = document.getElementById('newsletterForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;

  // Placeholder: integrate with your email service (Mailchimp, ConvertKit, etc.)
  alert(`Obrigado, ${name}! Você será notificado quando a newsletter estiver ativa.`);
  form.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
