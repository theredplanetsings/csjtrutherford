// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}
// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(220, 38, 38, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .education-item, .experience-item, .volunteering-item, .organization-item, .language-item, .honor-item, .writing-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate language proficiency bars when they come into view
    const languageBars = document.querySelectorAll('.proficiency-fill');
    languageBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.width = level + '%';
                    }, 300);
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        barObserver.observe(bar);
    });
});

// Contact form handling - Let Formspree handle everything
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Just basic client-side validation, no form submission handling
    contactForm.addEventListener('submit', function(e) {
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
            return false;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return false;
        }
        
        // Show sending state but let form submit naturally
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Let form submit to Formspree - no preventDefault()
        return true;
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';
    element.classList.add('typing');
    
    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                // Handle HTML tags
                let tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    element.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialise typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalHTML = heroTitle.innerHTML;
        
        // Wait for fonts to load before starting animation
        document.fonts.ready.then(() => {
            setTimeout(() => {
                typeWriter(heroTitle, originalHTML, 50);
            }, 500);
        }).catch(() => {
            // Fallback if font loading detection fails
            setTimeout(() => {
                typeWriter(heroTitle, originalHTML, 50);
            }, 1000);
        });
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 20);
    });
}

// Trigger stats animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let userInput = [];

document.addEventListener('keydown', (e) => {
    userInput.push(e.code);
    
    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }
    
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        // Easter egg animation
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add CSS for rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Custom Cursor Implementation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

// Update cursor position
function updateCursor(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursor) {
        cursor.style.left = mouseX - 4 + 'px';
        cursor.style.top = mouseY - 4 + 'px';
    }
}

// Smooth following animation for cursor follower
function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    
    followerX += distX * 0.1;
    followerY += distY * 0.1;
    
    if (cursorFollower) {
        cursorFollower.style.left = followerX - 10 + 'px';
        cursorFollower.style.top = followerY - 10 + 'px';
    }
    
    requestAnimationFrame(animateFollower);
}

// Mouse move event
document.addEventListener('mousemove', updateCursor);

// Start the follower animation
animateFollower();

// Cursor hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .clickable, input, textarea, select');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor?.classList.add('hover');
        cursorFollower?.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor?.classList.remove('hover');
        cursorFollower?.classList.remove('hover');
    });
});

// Hide cursor when mouse leaves window
document.addEventListener('mouseleave', () => {
    cursor?.style.setProperty('opacity', '0');
    cursorFollower?.style.setProperty('opacity', '0');
});

// Show cursor when mouse enters window
document.addEventListener('mouseenter', () => {
    cursor?.style.setProperty('opacity', '1');
    cursorFollower?.style.setProperty('opacity', '1');
});

// Handle mobile devices (hide custom cursor)
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
    document.documentElement.style.cursor = 'auto';
}

// PDF Modal functionality
let currentZoom = 100;
let currentPDFUrl = '';

function openPDFModal(pdfUrl, title) {
    const modal = document.getElementById('pdfModal');
    const pdfEmbed = document.getElementById('pdfEmbed');
    const pdfFallback = document.getElementById('pdfFallback');
    const modalTitle = document.getElementById('pdfModalTitle');
    const fallbackDownload = document.getElementById('fallbackDownload');
    
    currentPDFUrl = pdfUrl;
    modalTitle.textContent = title;
    
    // Reset zoom
    currentZoom = 100;
    updateZoomDisplay();
    
    // Try to load PDF
    pdfEmbed.src = pdfUrl;
    pdfEmbed.style.display = 'block';
    pdfFallback.style.display = 'none';
    
    // Set up fallback download
    fallbackDownload.href = pdfUrl;
    fallbackDownload.download = pdfUrl.split('/').pop();
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Handle PDF load error
    pdfEmbed.onerror = function() {
        pdfEmbed.style.display = 'none';
        pdfFallback.style.display = 'flex';
    };
    
    // Setup download button
    const downloadBtn = document.getElementById('downloadPDF');
    downloadBtn.onclick = function() {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}

function closePDFModal() {
    const modal = document.getElementById('pdfModal');
    const pdfEmbed = document.getElementById('pdfEmbed');
    
    modal.classList.remove('active', 'fullscreen');
    document.body.style.overflow = 'auto';
    
    // Clear PDF source
    setTimeout(() => {
        pdfEmbed.src = '';
    }, 300);
}

function updateZoomDisplay() {
    document.getElementById('zoomLevel').textContent = currentZoom + '%';
}

// PDF Modal Controls
document.addEventListener('DOMContentLoaded', function() {
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const fullscreenBtn = document.getElementById('fullscreen');
    const pdfContainer = document.querySelector('.pdf-container');
    const modal = document.getElementById('pdfModal');
    
    // Zoom In
    zoomInBtn.addEventListener('click', function() {
        if (currentZoom < 200) {
            currentZoom += 25;
            updateZoomDisplay();
            applyZoom();
        }
    });
    
    // Zoom Out
    zoomOutBtn.addEventListener('click', function() {
        if (currentZoom > 50) {
            currentZoom -= 25;
            updateZoomDisplay();
            applyZoom();
        }
    });
    
    // Fullscreen Toggle
    fullscreenBtn.addEventListener('click', function() {
        modal.classList.toggle('fullscreen');
        const icon = fullscreenBtn.querySelector('i');
        
        if (modal.classList.contains('fullscreen')) {
            icon.className = 'fas fa-compress';
            fullscreenBtn.title = 'Exit Fullscreen';
        } else {
            icon.className = 'fas fa-expand';
            fullscreenBtn.title = 'Fullscreen';
        }
    });
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePDFModal();
        }
    });
    
    // Prevent modal from closing when clicking inside the content
    document.querySelector('.pdf-modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

function applyZoom() {
    const pdfEmbed = document.getElementById('pdfEmbed');
    const container = document.querySelector('.pdf-container');
    
    if (currentZoom === 100) {
        pdfEmbed.style.transform = 'none';
        pdfEmbed.style.width = '100%';
        pdfEmbed.style.height = '100%';
        container.style.overflow = 'hidden';
    } else {
        const scale = currentZoom / 100;
        pdfEmbed.style.transform = `scale(${scale})`;
        pdfEmbed.style.transformOrigin = 'top left';
        pdfEmbed.style.width = (100 / scale) + '%';
        pdfEmbed.style.height = (100 / scale) + '%';
        container.style.overflow = 'auto';
    }
}
