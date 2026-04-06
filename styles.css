/* ==========================================
   ROOT VARIABLES & THEME CONFIGURATION
   ========================================== */
:root {
  /* Color Palette - Dark Theme */
  --bg-primary: #0a0e13;
  --bg-secondary: #141a22;
  --bg-tertiary: #1a2332;
  --text-primary: #e6e8eb;
  --text-secondary: #9aa4b2;
  --text-muted: #6b7280;
  --accent-primary: #3b82f6;
  --accent-secondary: #60a5fa;
  --accent-hover: #2563eb;
  --border-color: #1f2937;
  --shadow-sm: rgba(0, 0, 0, 0.1);
  --shadow-md: rgba(0, 0, 0, 0.2);
  --shadow-lg: rgba(0, 0, 0, 0.3);
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}

/* Light Theme */
body.light {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #9ca3af;
  --accent-primary: #2563eb;
  --accent-secondary: #3b82f6;
  --accent-hover: #1d4ed8;
  --border-color: #e5e7eb;
  --shadow-sm: rgba(0, 0, 0, 0.05);
  --shadow-md: rgba(0, 0, 0, 0.1);
  --shadow-lg: rgba(0, 0, 0, 0.15);
}

/* ==========================================
   RESET & BASE STYLES
   ========================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-primary);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  transition: background-color var(--transition-base), color var(--transition-base);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-fast);
}

ul {
  list-style: none;
}

/* ==========================================
   NAVIGATION
   ========================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  box-shadow: 0 4px 20px var(--shadow-md);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--accent-primary);
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  position: relative;
}

.theme-toggle:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
}

.sun-icon {
  display: none;
}

body.light .sun-icon {
  display: block;
}

body.light .moon-icon {
  display: none;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-base);
}

/* ==========================================
   HERO SECTION
   ========================================== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 1.5rem 4rem;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  animation: fadeInLeft 0.8s ease-out;
}

.hero-greeting {
  font-size: var(--font-size-lg);
  color: var(--accent-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-muted);
  margin-bottom: 2rem;
}

/* Research Interests in Hero */
.research-interests-hero {
  background: var(--bg-tertiary);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.research-interests-hero h3 {
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
}

.btn-primary {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all var(--transition-base);
}

.social-links a:hover {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.hero-image {
  animation: fadeInRight 0.8s ease-out;
}

.profile-photo {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: 0 20px 60px var(--shadow-lg);
  border: 4px solid var(--bg-secondary);
  margin: 0 auto;
  animation: float 6s ease-in-out infinite;
}

/* ==========================================
   SECTIONS
   ========================================== */
.section {
  padding: 5rem 1.5rem;
  position: relative;
}

.section-alt {
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--accent-primary);
  border-radius: 2px;
}

/* ==========================================
   ABOUT SECTION
   ========================================== */
.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-text {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.certifications {
  margin-top: 3rem;
}

.certifications h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cert-card {
  background: var(--bg-tertiary);
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-md);
  border-color: var(--accent-primary);
}

.cert-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cert-card h4 {
  font-size: var(--font-size-xl);
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.cert-provider {
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.cert-details {
  list-style: disc;
  padding-left: 1.5rem;
  color: var(--text-secondary);
}

.cert-details li {
  margin-bottom: 0.5rem;
}

/* ==========================================
   PROJECTS SECTION
   ========================================== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 2rem;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px var(--shadow-md);
  border-color: var(--accent-primary);
}

.project-header {
  margin-bottom: 1rem;
}

.project-header h3 {
  font-size: var(--font-size-xl);
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-date {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--bg-tertiary);
  color: var(--accent-primary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  transition: all var(--transition-base);
}

.tag:hover {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.project-link {
  color: var(--accent-primary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all var(--transition-fast);
  margin-top: auto;
}

.project-link:hover {
  gap: 0.75rem;
  color: var(--accent-hover);
}

/* ==========================================
   EDUCATION TIMELINE
   ========================================== */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 3px solid var(--bg-secondary);
  box-shadow: 0 0 0 4px var(--accent-primary);
  z-index: 1;
}

.timeline-content {
  background: var(--bg-tertiary);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
}

.timeline-item:hover .timeline-content {
  transform: translateX(8px);
  border-color: var(--accent-primary);
}

.timeline-date {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--accent-primary);
  color: white;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.timeline-content h3 {
  font-size: var(--font-size-xl);
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.institution {
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.degree-info,
.achievement,
.subjects {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.gpa {
  color: var(--text-secondary);
  margin-top: 0.75rem;
}

.gpa strong {
  color: var(--accent-primary);
  font-size: var(--font-size-lg);
}

/* ==========================================
   HONORS & AWARDS SECTION
   ========================================== */
.honors-grid {
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.honor-card {
  background: var(--bg-tertiary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: all var(--transition-base);
}

.honor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-md);
  border-color: var(--accent-primary);
}

.honor-image-placeholder {
  width: 100%;
  height: 300px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.honor-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
}

.honor-image.loaded {
  display: block;
}

.image-placeholder-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
  color: var(--text-muted);
  text-align: center;
  padding: 2rem;
}

.image-placeholder-overlay svg {
  margin-bottom: 1rem;
  opacity: 0.5;
}

.image-placeholder-overlay p {
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.honor-content {
  padding: 2rem;
}

.honor-content h3 {
  font-size: var(--font-size-xl);
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.honor-org {
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: var(--font-size-base);
}

.honor-desc {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.honor-year {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: var(--bg-secondary);
  color: var(--accent-primary);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--font-size-sm);
}

/* ==========================================
   EXPERIENCE SECTION
   ========================================== */
.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.experience-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-md);
  border-color: var(--accent-primary);
}

.exp-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.experience-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.exp-org {
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: var(--font-size-sm);
}

.exp-date {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  margin-bottom: 0.75rem;
}

.exp-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ==========================================
   CONTACT SECTION
   ========================================== */
.contact-content {
  max-width: 900px;
  margin: 0 auto;
}

.contact-intro {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.8;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all var(--transition-base);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-md);
  border-color: var(--accent-primary);
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  flex-shrink: 0;
}

.contact-card:hover .contact-icon {
  background: var(--accent-primary);
  color: white;
}

.contact-info h3 {
  font-size: var(--font-size-lg);
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.contact-info p {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

/* ==========================================
   FOOTER
   ========================================== */
.footer {
  background: var(--bg-secondary);
  padding: 2rem 1.5rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
}

.footer p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.footer-note {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
}

/* ==========================================
   ANIMATIONS
   ========================================== */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ==========================================
   RESPONSIVE DESIGN
   ========================================== */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-image {
    order: -1;
  }
  
  .profile-photo {
    max-width: 300px;
  }
  
  .hero-name {
    font-size: var(--font-size-4xl);
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 73px;
    flex-direction: column;
    background: var(--bg-secondary);
    width: 100%;
    text-align: center;
    transition: left var(--transition-base);
    box-shadow: 0 10px 27px var(--shadow-md);
    padding: 2rem 0;
    gap: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
  
  .hero {
    padding: 5rem 1.5rem 3rem;
  }
  
  .hero-name {
    font-size: var(--font-size-3xl);
  }
  
  .hero-title {
    font-size: var(--font-size-xl);
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .section {
    padding: 3rem 1.5rem;
  }
  
  .section-title {
    font-size: var(--font-size-3xl);
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .experience-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
  
  .timeline-item {
    padding-left: 1.5rem;
  }
  
  .cert-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: var(--font-size-2xl);
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

/* ==========================================
   UTILITY CLASSES
   ========================================== */
.text-center {
  text-align: center;
}

.mt-1 { margin-top: var(--spacing-sm); }
.mt-2 { margin-top: var(--spacing-md); }
.mt-3 { margin-top: var(--spacing-lg); }

.mb-1 { margin-bottom: var(--spacing-sm); }
.mb-2 { margin-bottom: var(--spacing-md); }
.mb-3 { margin-bottom: var(--spacing-lg); }

/* Smooth scroll offset for fixed navbar */
section {
  scroll-margin-top: 80px;
}
