# Personal Portfolio

Professional portfolio website showcasing academic achievements, technical skills, and professional experience of a Davidson College Computer Science student with interests in national security, quantitative finance, and open-source intelligence (OSINT).

Built with modern HTML, CSS, and JavaScript featuring an interactive Three.js background and comprehensive favicon support.

**Live Page:** https://theredplanetsings.github.io/csjtrutherford/

## Features

- **Animated typing effect** for hero title with smooth font loading
- **Interactive Three.js grid background** with mouse-responsive animations on desktop and subtle jiggle animation on mobile
- **Custom animated cursor** for enhanced user experience
- **Comprehensive favicon support** with multiple sizes and formats for all devices
- **Fully responsive design** optimised for desktop and mobile
- **Working contact form** with Formspree integration and email delivery
- **PDF modal viewer** with zoom controls, fullscreen mode, and download functionality
- **Comprehensive content sections** including education, experience, volunteering, organisations, languages, honors, and writing samples
- **Project showcase** with live demos and GitHub links
- **Skills categorisation** including programming languages, technologies, and soft skills
- **Timeline layouts** for education and professional experience
- **Smooth scroll navigation** with active section highlighting
- **Social media integration** (GitHub, LinkedIn, Email)
- **Modern CSS animations** with intersection observers and parallax effects
- **Academic credential verification** with external links to official platforms

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
│   ├── icons and whatnot yktv
├── papers/
│   ├── writing samples + certifications and stuff yktv
├── project banner yktv
├── README.md literally this document
└── LICENSE               # MIT License
```

## Content Sections

- **Hero Section** - Animated introduction with typing effect
- **About** - Professional summary with focus on Computer Science & Russian Studies, national security interests, and statistical achievements
- **Education** - Academic background including Davidson College, University of York, and Azerbaijan University of Languages with detailed coursework
- **Experience** - Professional roles including IT internship at Paradigm Companies, research at College Crisis Initiative, NCAA Division I wrestling, and officiating
- **Skills** - Technical and soft skills organized by category (Languages, Libraries & Technologies, Tools & Frameworks, Soft Skills including multilingual capabilities)
- **Volunteering & Leadership** - Eagle Scout, Young Marines (Gunnery Sergeant), coaching, and community service with achievement recognition
- **Organisations** - Mensa Society and QuestBridge membership with detailed descriptions
- **Languages** - English (native), Russian (C1), Azerbaijani (B1) with visual proficiency indicators and learning context
- **Honors, Awards, & Certifications** - Academic scholarships (Gilman Scholar), leadership recognition (Young Marine of the Year), language certifications (ACTFL OPI), and achievements with credential verification links
- **Writing Samples** - Academic papers on international relations (Russia-Ukraine War analysis) and financial markets (Housing Financialisation) with integrated PDF viewer
- **Projects** - Technical projects including Options Pricing Dashboard, Simple Shell, Active Directory Automation, and Trading Analysis Tools with live demos and GitHub repositories
- **Contact** - Working contact form and social media links

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics:** Three.js for interactive background animations
- **Fonts:** Google Fonts (Inter family with weights 300-900)
- **Icons:** Font Awesome 6.0
- **Form Handling:** Formspree for contact form email delivery
- **Hosting:** GitHub Pages

## Key Features Breakdown

### **Visual Design**
- **Hero Section:** Typing animation with gradient text effects, Three.js background, and professional tagline
- **Timeline Layouts:** Clean, organized presentation of education and professional experience with detailed coursework and achievements
- **Custom Cursor:** Animated cursor with hover effects on interactive elements
- **Responsive Layout:** Mobile-first design with smooth breakpoints and touch-friendly navigation
- **Color Scheme:** Dark theme with red accent colors (#ff4757) and modern typography
- **Professional Typography:** Inter font family with multiple weights (300-900) for visual hierarchy
- **Comprehensive Favicon Support:** Multiple icon formats and sizes for optimal display across all devices and platforms

### **Interactive Elements**
- **Three.js Grid:** Dynamic 3D wireframe grid that responds to mouse movement on desktop; gentle jiggle animation on mobile devices for optimal performance
- **Mobile Optimization:** Smart device detection with performance-optimized animations for touch devices
- **Smooth Scrolling:** Section-based navigation with active link highlighting
- **Hover Animations:** Project cards with overlay effects and link previews
- **Loading States:** Font loading detection and smooth animation timing
- **Scroll Animations:** Intersection observer-based animations for section reveals

### **Content Organi0zation**
- **Comprehensive Sections:** Detailed education (3 institutions), experience (5 professional roles), volunteering (4 major commitments), and achievements
- **Skill Categorization:** Technical skills organized by programming languages (Python, C/C++, JavaScript, etc.), libraries & technologies (React, Node.js, Three.js, etc.), tools & frameworks (Microsoft 365, Git, Azure, etc.), and soft skills including multilingual capabilities
- **Language Proficiency:** Visual indicators for multilingual capabilities (English native, Russian C1, Azerbaijani B1) with learning context
- **Achievement Highlights:** Academic honors (Gilman Scholar, QuestBridge Scholar), leadership recognition (Young Marine of the Year 2021/2022), professional certifications (ACTFL OPI Azerbaijani B-1), and external credential verification
- **Project Portfolio:** Featured technical projects with live demos including Options Pricing Dashboard, Shell implementation, and automation tools
- **Academic Writing:** Research papers on international relations (Russia-Ukraine War analysis) and financial markets (Housing Financialisation) with integrated PDF viewer

### **Document Viewing**
- **PDF Modal System:** In-page document viewer for academic papers and certificates
- **Zoom Controls:** 50% to 200% zoom with smooth scaling
- **Fullscreen Mode:** Immersive reading experience for detailed documents
- **Download Options:** Direct PDF download functionality
- **Credential Verification:** External links to official credential platforms (credential.net)
- **Fallback Support:** Graceful handling for unsupported browsers

### **Contact Integration**
- **Formspree Integration:** Working contact form that sends emails directly
- **Form Validation:** Client-side validation for required fields and email format
- **CAPTCHA Support:** Configured for anti-spam protection
- **Multiple Contact Methods:** Email, GitHub, and LinkedIn links

### **Performance & Accessibility**
- **Font Optimisation:** Preconnected Google Fonts with multiple weights
- **Mobile Responsive:** Touch-friendly navigation and optimised layouts with device-specific animations
- **Cross-browser Support:** Modern JavaScript with fallbacks
- **SEO Friendly:** Semantic HTML structure and meta tags

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/theredplanetsings/csjtrutherford.git
   cd csjtrutherford
   ```

2. **Open locally:**
   - Simply open `index.html` in your browser, or
   - Run a local server for full functionality:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve .
     
     # PHP
     php -S localhost:8000
     ```

3. **View at:** `http://localhost:8000`

## Customisation Guide

### **Content Updates**
- **Personal Info:** Update name, title, and description in the hero section
- **About Section:** Modify the biography and statistics in the about section
- **Education:** Add or modify educational institutions, degrees, and coursework
- **Experience:** Update professional roles, responsibilities, and achievements
- **Skills:** Edit the skills categories and tags to match your expertise
- **Volunteering:** Add leadership roles, community service, and organisational involvement
- **Languages:** Update language proficiency levels and descriptions
- **Honors:** Add academic awards, scholarships, certifications, and recognition with credential verification links
- **Writing Samples:** Add academic papers, research documents, and professional writing
- **Projects:** Add/remove project cards with links to your repositories and live demos

### **Styling Changes**
- **Colors:** Modify CSS custom properties in `style.css` for theme colors
- **Typography:** Change font families in the Google Fonts link and CSS
- **Animations:** Adjust timing and effects in both CSS and JavaScript files

### **Functionality Modifications**
- **Contact Form:** Update Formspree endpoint in the form action attribute
- **Social Links:** Change URLs in the hero and contact sections
- **Three.js Grid:** Modify grid parameters in `three-grid.js` for different effects
- **Navigation:** Add or remove navigation items to match your content sections
- **Animations:** Adjust scroll-triggered animations in `main.js` for new sections
- **PDF Documents:** Replace PDF files in the `papers/` directory with your own documents

### **Assets**
- **Profile Photo:** Replace `images/pfp.jpg` with your own image (recommended: 400x400px square format)
- **Documents:** Add your PDF documents to the `papers/` directory for academic papers and certificates
- **Favicon Package:** Complete favicon set includes:
  - `favicon.ico` - Standard ICO format for legacy browsers
  - `favicon-16x16.png` and `favicon-32x32.png` - Modern PNG favicons
  - `apple-touch-icon.png` - iOS home screen icon (180x180px)
  - `android-chrome-192x192.png` and `android-chrome-512x512.png` - Android icons
- **Banner:** Update or remove `banner.PNG` as needed for project branding

## Contact Form Setup

The contact form uses Formspree for email delivery:

1. **Create Formspree account** at [formspree.io](https://formspree.io)
2. **Create new form** and note the form ID
3. **Update form action** in `index.html`: `action="https://formspree.io/f/YOUR_FORM_ID"`
4. **Configure settings** in Formspree dashboard (email, CAPTCHA, etc.)

## Browser Support

- **Chrome:** 80+
- **Firefox:** 75+
- **Safari:** 13+
- **Edge:** 80+

*Modern JavaScript features used: Fetch API, Intersection Observer, CSS Grid*

## Dependencies & Credits

### **External Libraries**
- **[Three.js](https://threejs.org/)** - 3D graphics and animations via CDN
- **[Font Awesome](https://fontawesome.com/)** - Icon library (v6.0)
- **[Google Fonts](https://fonts.google.com/)** - Inter font family
- **[Formspree](https://formspree.io/)** - Contact form backend service

### **Inspiration & Resources**
- Modern portfolio design patterns
- Three.js documentation and examples
- CSS Grid and Flexbox best practices
- JavaScript animation techniques

## Performance Notes

- **Three.js Grid:** Optimised for 60fps with requestAnimationFrame and efficient geometry handling; mobile devices receive performance-optimized jiggle animation instead of mouse interaction
- **Mobile Detection:** Smart device detection (user agent, touch points, screen width) ensures optimal experience across all devices
- **Font Loading:** Preconnected Google Fonts with font-display: swap for improved loading performance
- **Images:** Optimised for web with fallback placeholders, error handling, and lazy loading considerations
- **CSS:** Organised and optimised for fast loading with efficient selectors and minimal reflow
- **JavaScript:** Modern ES6+ with progressive enhancement, intersection observers, and debounced scroll listeners
- **Responsive Design:** Mobile-first approach with efficient media queries and touch optimizations, including device-specific Three.js animations
- **Animation Performance:** Hardware-accelerated CSS transforms and optimized scroll listeners for smooth 60fps animations
- **PDF Handling:** Efficient document loading and memory management for modal viewer with zoom controls
- **Favicon Optimization:** Comprehensive icon set ensures fast loading and proper display across all devices and platforms

## Contributing

This is a personal portfolio, but feel free to:
- **Fork** the repository for your own use
- **Submit issues** for bugs or suggestions  
- **Create pull requests** for improvements
- **Use as template** for your own portfolio

## License

This project is open source under the **MIT License**. See `LICENSE` file for full details.

**Contact:** [GitHub](https://github.com/theredplanetsings) | [LinkedIn](https://www.linkedin.com/in/csjtrutherford)
