// ==========================================
// THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  
  // Save theme preference
  const theme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  }
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ==========================================
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

// Observe all elements with fade-in-up class
const fadeElements = document.querySelectorAll('.fade-in-up');
fadeElements.forEach(el => observer.observe(el));

// ==========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// PARALLAX EFFECT FOR HERO SECTION
// ==========================================
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.3;
  
  if (heroContent && window.innerWidth > 768) {
    heroContent.style.transform = `translateY(${rate}px)`;
  }
  if (heroImage && window.innerWidth > 768) {
    heroImage.style.transform = `translateY(${rate * 0.5}px)`;
  }
});

// ==========================================
// SKILL ITEMS ANIMATION ON HOVER
// ==========================================
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// ==========================================
// PROJECT CARDS STAGGER ANIMATION
// ==========================================
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, observerOptions);

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  projectObserver.observe(card);
});

// ==========================================
// TIMELINE ANIMATION
// ==========================================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }, index * 150);
    }
  });
}, observerOptions);

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  timelineObserver.observe(item);
});

// ==========================================
// EXPERIENCE CARDS STAGGER ANIMATION
// ==========================================
const experienceCards = document.querySelectorAll('.experience-card');

const expObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, observerOptions);

experienceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  expObserver.observe(card);
});

// ==========================================
// TYPING EFFECT FOR HERO TITLE (OPTIONAL)
// ==========================================
// Uncomment if you want a typing effect on the hero title
/*
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter() {
  if (i < titleText.length) {
    heroTitle.textContent += titleText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});
*/

// ==========================================
// SCROLL TO TOP BUTTON (OPTIONAL)
// ==========================================
// Create scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-primary);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

// Scroll to top when clicked
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'translateY(-5px)';
  scrollTopBtn.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'translateY(0)';
  scrollTopBtn.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
});

// ==========================================
// PREVENT FLASH OF UNSTYLED CONTENT
// ==========================================
window.addEventListener('load', () => {
  document.body.style.visibility = 'visible';
});
// ==========================================
document.querySelectorAll('.honor-image').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  }
});
// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Use debounced scroll handler
const debouncedScroll = debounce(() => {
  highlightNavigation();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Welcome to Abdul Rahman\'s Portfolio!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repository!', 'color: #9aa4b2; font-size: 12px;');
