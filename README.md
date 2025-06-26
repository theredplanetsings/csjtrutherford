# Personal Portfolio

This is the personal portfolio website of theredplanetsings.

Built with modern HTML, CSS, and JavaScript featuring an interactive Three.js background.

**Live Site:** https://theredplanetsings.github.io/csjtrutherford/

## Features

- **Animated typing effect** for hero title with smooth font loading
- **Interactive Three.js grid background** with mouse-responsive animations
- **Custom animated cursor** for enhanced user experience
- **Fully responsive design** optimised for desktop and mobile
- **Working contact form** with Formspree integration and email delivery
- **Project showcase** with live demos and GitHub links
- **Skills categorisation** including programming languages, technologies, and soft skills
- **Smooth scroll navigation** with active section highlighting
- **Social media integration** (GitHub, LinkedIn, Email)
- **Modern CSS animations** with intersection observers and parallax effects

## Project Structure

```
├── index.html              # Main HTML file with all sections
├── css/
│   └── style.css          # Complete stylesheet with animations and responsive design
├── js/
│   ├── main.js            # Core functionality: navigation, typing animation, form handling
│   └── three-grid.js      # Three.js animated grid background with mouse interaction
├── images/
│   ├── pfp.jpg           # Profile photo
│   └── banner.PNG        # Banner image
├── README.md             # Project documentation
└── LICENSE               # MIT License
```

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics:** Three.js for interactive background animations
- **Fonts:** Google Fonts (Inter family with weights 300-900)
- **Icons:** Font Awesome 6.0
- **Form Handling:** Formspree for contact form email delivery
- **Hosting:** GitHub Pages

## Key Features Breakdown

### **Visual Design**
- **Hero Section:** Typing animation with gradient text effects and Three.js background
- **Custom Cursor:** Animated cursor with hover effects on interactive elements
- **Responsive Layout:** Mobile-first design with smooth breakpoints
- **Color Scheme:** Dark theme with red accent colors and modern typography

### **Interactive Elements**
- **Three.js Grid:** Dynamic 3D wireframe grid that responds to mouse movement
- **Smooth Scrolling:** Section-based navigation with active link highlighting
- **Hover Animations:** Project cards with overlay effects and link previews
- **Loading States:** Font loading detection and smooth animation timing

### **Contact Integration**
- **Formspree Integration:** Working contact form that sends emails directly
- **Form Validation:** Client-side validation for required fields and email format
- **CAPTCHA Support:** Configured for anti-spam protection
- **Multiple Contact Methods:** Email, GitHub, and LinkedIn links

### **Performance & Accessibility**
- **Font Optimisation:** Preconnected Google Fonts with multiple weights
- **Mobile Responsive:** Touch-friendly navigation and optimised layouts
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
- **About Section:** Modify the biography and statistics in `index.html`
- **Skills:** Edit the skills categories and tags to match your expertise
- **Projects:** Add/remove project cards with links to your repositories and live demos

### **Styling Changes**
- **Colors:** Modify CSS custom properties in `style.css` for theme colors
- **Typography:** Change font families in the Google Fonts link and CSS
- **Animations:** Adjust timing and effects in both CSS and JavaScript files

### **Functionality Modifications**
- **Contact Form:** Update Formspree endpoint in `index.html` action attribute
- **Social Links:** Change URLs in the hero and contact sections
- **Three.js Grid:** Modify grid parameters in `three-grid.js` for different effects

### **Assets**
- **Profile Photo:** Replace `images/pfp.jpg` with your own image (recommended: 400x400px)
- **Favicon:** Add your own favicon files to the root directory
- **Banner:** Update or remove `images/banner.PNG` as needed

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

- **Three.js Grid:** Optimised for 60fps with requestAnimationFrame
- **Font Loading:** Preconnected with font-display: swap
- **Images:** Optimised for web with fallback placeholders
- **CSS:** Minified and organised for fast loading
- **JavaScript:** Modern ES6+ with progressive enhancement

## Contributing

This is a personal portfolio, but feel free to:
- **Fork** the repository for your own use
- **Submit issues** for bugs or suggestions  
- **Create pull requests** for improvements
- **Use as template** for your own portfolio

## License

This project is open source under the **MIT License**. See `LICENSE` file for full details.

---

**Contact:** [GitHub](https://github.com/theredplanetsings) | [LinkedIn](https://www.linkedin.com/in/csjtrutherford)
