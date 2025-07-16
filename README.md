# Personal Portfolio

A professional portfolio website showcasing academic achievements, technical skills, and professional experience of a Computer Science student with interests in national security, quantitative finance, and open-source intelligence (OSINT).

Built with modern HTML, CSS, and JavaScript, featuring an interactive Three.js background and comprehensive favicon support.

**Live Site:** https://theredplanetsings.github.io/csjtrutherford/

## Features

- Animated typing effect for hero title with smooth font loading
- Interactive Three.js grid background with mouse-responsive animations on desktop and subtle jiggle animation on mobile
- Custom animated cursor for enhanced user experience
- Comprehensive favicon support with multiple sizes and formats for all devices
- Fully responsive design optimised for desktop and mobile
- Working contact form with Formspree integration and email delivery
- PDF modal viewer with zoom controls, fullscreen mode, and download functionality
- Comprehensive content sections including education, experience, volunteering, organisations, languages, honours, and writing samples
- Project showcase with live demos and source code links
- Skills categorisation including programming languages, technologies, and soft skills
- Timeline layouts for education and professional experience
- Smooth scroll navigation with active section highlighting
- Social media integration (GitHub, LinkedIn, Email)
- Modern CSS animations with intersection observers and parallax effects
- Academic credential verification with external links to official platforms

## Project Structure

```
├── index.html              # Main HTML file with comprehensive portfolio sections
├── css/
│   └── style.css          # Complete stylesheet with animations and responsive design
├── js/
│   ├── main.js            # Core functionalities
│   ├── three-grid.js      # Three.js animated grid background with mouse interaction
│   └── three.module.js    # Three.js library module
├── images/
│   ├── icons and related assets
├── papers/
│   ├── writing samples and certifications
├── README.md              # This document
└── LICENSE                # MIT Licence
```

## Content Sections

- Hero Section – Animated introduction with typing effect
- About – Professional summary with focus on Computer Science & Russian Studies, national security interests, and statistical achievements
- Education – Academic background including Davidson College, University of York, and Azerbaijan University of Languages with detailed coursework
- Experience – Professional roles including IT internship, research, NCAA Division I wrestling, and officiating
- Skills – Technical and soft skills organised by category (Languages, Libraries & Technologies, Tools & Frameworks, Soft Skills including multilingual capabilities)
- Volunteering & Leadership – Eagle Scout, Young Marines (Gunnery Sergeant), coaching, and community service with achievement recognition
- Organisations – Mensa Society and QuestBridge membership with detailed descriptions
- Languages – English (native), Russian (C1), Azerbaijani (B1) with visual proficiency indicators and learning context
- Honours, Awards, & Certifications – Academic scholarships, leadership recognition, language certifications, and achievements with credential verification links
- Writing Samples – Academic papers on international relations and financial markets with integrated PDF viewer
- Projects – Technical projects including options pricing dashboard, shell implementation, automation tools, and more, with live demos and source code repositories
- Contact – Working contact form and social media links

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript (ES6+)
- 3D Graphics: Three.js for interactive background animations
- Fonts: Google Fonts (Inter family with weights 300-900)
- Icons: Font Awesome 6.0
- Form Handling: Formspree for contact form email delivery
- Hosting: GitHub Pages

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/theredplanetsings/csjtrutherford.git
   cd csjtrutherford
   ```

2. Open locally:
   - Open `index.html` in your browser, or
   - Run a local server for full functionality:
     ```bash
     # Python
     python -m http.server 8000
     # Node.js
     npx serve .
     # PHP
     php -S localhost:8000
     ```

3. View at: `http://localhost:8000`

## Customisation Guide

### Content Updates
- Update personal information, biography, education, experience, skills, volunteering, languages, honours, writing samples, and projects directly in `index.html`.

### Styling Changes
- Modify colours, fonts, and animations in `css/style.css` and the relevant HTML/JS files.

### Functionality Modifications
- Update the Formspree endpoint in the contact form action attribute.
- Change social links in the hero and contact sections.
- Adjust Three.js grid parameters in `three-grid.js` for different effects.
- Add or remove navigation items as needed.
- Update scroll-triggered animations in `main.js` for new sections.
- Replace PDF files in the `papers/` directory as required.

### Assets
- Replace `images/pfp.jpg` with a preferred profile image (recommended: 400x400px square format).
- Add PDF documents to the `papers/` directory for academic papers and certificates.
- Favicon package includes:
  - `favicon.ico` – Standard ICO format for legacy browsers
  - `favicon-16x16.png` and `favicon-32x32.png` – Modern PNG favicons
  - `apple-touch-icon.png` – iOS home screen icon (180x180px)
  - `android-chrome-192x192.png` and `android-chrome-512x512.png` – Android icons

## Contact Form Setup

The contact form uses Formspree for email delivery:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and note the form ID
3. Update the form action in `index.html`: `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Configure settings in the Formspree dashboard (email, CAPTCHA, etc.)

## Browser Support

- Chrome: 80+
- Firefox: 75+
- Safari: 13+
- Edge: 80+

Modern JavaScript features used: Fetch API, Intersection Observer, CSS Grid

## Dependencies & Credits

### External Libraries
- [Three.js](https://threejs.org/) – 3D graphics and animations via CDN
- [Font Awesome](https://fontawesome.com/) – Icon library (v6.0)
- [Google Fonts](https://fonts.google.com/) – Inter font family
- [Formspree](https://formspree.io/) – Contact form backend service

### Inspiration & Resources
- Modern portfolio design patterns
- Three.js documentation and examples
- CSS Grid and Flexbox best practices
- JavaScript animation techniques

## Performance Notes

- Three.js grid optimised for 60fps with requestAnimationFrame and efficient geometry handling; mobile devices receive performance-optimised jiggle animation instead of mouse interaction
- Mobile detection ensures optimal experience across all devices
- Preconnected Google Fonts with font-display: swap for improved loading performance
- Images optimised for web with fallback placeholders, error handling, and lazy loading considerations
- CSS organised and optimised for fast loading with efficient selectors and minimal reflow
- JavaScript uses modern ES6+ with progressive enhancement, intersection observers, and debounced scroll listeners
- Responsive design with a mobile-first approach and efficient media queries
- Animation performance enhanced with hardware-accelerated CSS transforms and optimised scroll listeners
- PDF handling is efficient for modal viewer with zoom controls
- Favicon optimisation ensures fast loading and proper display across all devices and platforms

## Contributing

This is a personal portfolio template. You are welcome to:
- Fork the repository for your own use
- Submit issues for bugs or suggestions
- Create pull requests for improvements
- Use as a template for your own portfolio

## Licence

This project is open source under the MIT Licence. See the `LICENSE` file for full details.

Contact: [GitHub](https://github.com/theredplanetsings) | [LinkedIn](https://www.linkedin.com/in/csjtrutherford)
