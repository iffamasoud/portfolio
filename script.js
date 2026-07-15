// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== FADE-IN ON SCROLL =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===== CONTACT FORM (placeholder handler) =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    contactForm.reset();
  });
}

// ===== TYPING ANIMATION =====
const typingText = document.getElementById('typingText');
const phrases = [
  "Computer Science Student",
  "UI/UX Designer",
  "Frontend Developer"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? 50 : 100);
}

if (typingText) typeLoop();

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  if (scrollProgress) scrollProgress.style.width = scrollPercent + '%';
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== ANIMATE SKILL BARS WHEN VISIBLE =====
const skillBars = document.querySelectorAll('.fill');

skillBars.forEach(bar => {
  bar.dataset.target = bar.style.width;
  bar.style.width = '0';
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.target;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));