// ===== TYPING ANIMATION =====
const typingText = document.getElementById('typingText');
const phrases = [
  "Computer Science Student",
  "Frontend Developer",
  "Lifelong Learner"
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

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== NAVBAR SOLID ON SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

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
    const sectionTop = section.offsetTop - 120;
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

// ===== FADE-IN ON SCROLL =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.15,
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
// ===== VISITOR COUNTER (Supabase) =====
const SUPABASE_URL = 'https://rwvjiudgbbvkargsyflg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-3BBlgSDPNanOYW3K2iz8w_C39adkBb';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function updateVisitorCount() {
  const { data, error } = await supabaseClient
    .from('visitor_count')
    .select('count')
    .eq('id', 1)
    .single();

  if (error) {
    console.error('Error fetching count:', error);
    return;
  }

  const newCount = data.count + 1;

  await supabaseClient
    .from('visitor_count')
    .update({ count: newCount })
    .eq('id', 1);

  const counterEl = document.getElementById('visitorCount');
  if (counterEl) counterEl.textContent = newCount;
}

updateVisitorCount();
// ===== VISIT TIMESTAMP LOG (Supabase) =====
async function logVisit() {
  await supabaseClient
    .from('visits')
    .insert([{}]);
}

logVisit();

