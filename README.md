# Abdul Rahman Mohamed Farharth - Portfolio Website

A clean, responsive academic and engineering portfolio for **Abdul Rahman Mohamed Farharth**, Biomedical Engineering undergraduate at the University of Moratuwa.

## What is included

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── Abdul_Rahman_CV.pdf
├── cv-source/
│   └── Abdul_Rahman_CV_General.tex
└── images/
    └── README.txt
```

The site is intentionally dependency-free: plain HTML, CSS and JavaScript. It can be deployed directly to GitHub Pages.

## Current profile content

- CGPA: **3.83/4.00**
- Dean's List: **Semesters 1, 2 and 4**
- Expected graduation: **2028**
- Research interests:
  - Biomedical Sensing
  - Embedded Healthcare Systems
  - Biomedical Signal Processing
  - AI for Healthcare
- Projects are grouped into:
  - HCI & Wearable Systems
  - Medical AI & Biomedical Signal Processing
  - Computer Vision & Intelligent Systems
  - IoT & Connected Monitoring Systems
  - Instrumentation, Electronics & Embedded Hardware

## Profile image

The site expects an optional profile photo at:

```text
images/profile.jpg
```

If that file is missing, the hero section automatically displays an **AR** monogram instead, so the site remains deployable without an image.

## Run locally

From the portfolio directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy with GitHub Pages

1. Copy these files into your GitHub Pages repository.
2. Commit and push to the default branch.
3. In **Repository Settings -> Pages**, select the branch/folder used for GitHub Pages.
4. The portfolio will be published at your configured GitHub Pages URL.

Example commands:

```bash
git add .
git commit -m "Update biomedical engineering portfolio"
git push origin main
```

## Updating content

### Projects
Project cards are in `index.html` under the five project-domain sections. Keep the project description concise and update the date beside the project title.

### CV
Replace `Abdul_Rahman_CV.pdf` whenever the CV changes. The source used for the bundled version is also included under `cv-source/`.

### Certificates
The current credential links are already embedded in the Honors & Certifications section.

### Theme and layout
- Colors, spacing and responsive layout: `styles.css`
- Theme toggle, mobile menu, subtle reveal effects and active navigation: `script.js`

## Design choices

The revised site removes the older long coursework list, oversized skill inventory, unrelated/outdated project entries and heavy animation. The portfolio now mirrors the structure of the general CV while keeping enough project detail for a researcher or engineering recruiter to understand the work quickly.

## Contact

- Email: `abdulrahmanfarharth@gmail.com`
- GitHub: `https://github.com/Abdul-Rahman-bme`
- LinkedIn: `https://www.linkedin.com/in/abdulrahmanmf/`
- Portfolio: `https://abdul-rahman-bme.github.io/`

---

Last updated: August 2026
