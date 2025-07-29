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

// Audio System
class AudioSystem {
    constructor() {
        this.tracks = [
            'audio/Audiomachine - The Truth.mp3',
            'audio/Scott Buckley - Beautiful Oblivion.mp3',
            'audio/Scott Buckley - Discovery.mp3',
            'audio/Scott Buckley - This Too Shall Pass.mp3'
        ];
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.isMuted = false;
        this.audio = document.getElementById('ambientAudio');
        this.toggleButton = document.getElementById('toggleAudio');
        this.prevButton = document.getElementById('prevTrack');
        this.nextButton = document.getElementById('nextTrack');
        this.nowPlayingElement = document.getElementById('nowPlaying');
        this.playQueue = [];
        this.hasStarted = false;
        this.nowPlayingTimer = null; // Track the notification timer
        
        // Debug: Check if audio elements exist
        console.log('Audio system: Initializing...');
        console.log('Audio element found:', !!this.audio);
        console.log('Toggle button found:', !!this.toggleButton);
        console.log('Audio tracks:', this.tracks);
        
        this.init();
    }
    
    init() {
        // Check if audio element exists
        if (!this.audio) {
            console.error('Audio system: Audio element with ID "ambientAudio" not found! Make sure you have an <audio> element with id="ambientAudio" in your HTML.');
            return;
        }
        
        // Creates shuffled playlist
        this.createShuffledPlaylist();
        
        // Sets up our audio element
        this.audio.volume = 0.3; // we start at 30% volume
        this.audio.muted = false; // Ensure audio starts unmuted
        this.audio.loop = false; // Handles audio looping manually
        console.log('Audio system: Audio element configured - Volume:', this.audio.volume, 'Muted:', this.audio.muted);
        
        // Our event listeners
        this.audio.addEventListener('ended', () => this.playNext());
        this.audio.addEventListener('canplaythrough', () => this.handleCanPlay());
        this.audio.addEventListener('error', (e) => this.handleError(e));
        this.audio.addEventListener('play', () => {
            console.log('Audio system: Play event fired');
            this.isPlaying = true;
            this.updateToggleButton();
        });
        this.audio.addEventListener('pause', () => {
            console.log('Audio system: Pause event fired');
            this.isPlaying = false;
            this.updateToggleButton();
        });
        this.audio.addEventListener('loadstart', () => {
            console.log('Audio system: Loadstart event fired');
            // Ensures volume stays at 30% when loading new tracks
            this.audio.volume = 0.3;
        });
        
        // the control buttons
        this.toggleButton.addEventListener('click', () => this.toggleAudio());
        this.prevButton.addEventListener('click', () => this.playPrevious());
        this.nextButton.addEventListener('click', () => this.playNext());
        
        // Set initial button state
        this.updateToggleButton();
        
        // Auto-starts after user interaction
        this.setupAutoStart();
    }
    
    createShuffledPlaylist() {
        // creates a shuffled version of tracks
        this.playQueue = [...this.tracks];
        for (let i = this.playQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.playQueue[i], this.playQueue[j]] = [this.playQueue[j], this.playQueue[i]];
        }
        this.currentTrackIndex = 0;
    }
    
    setupAutoStart() {
        // Waits for any REAL user interaction to enable audio (clicks and key presses only)
        const enableAudio = (e) => {
            if (!this.hasStarted) {
                console.log('Audio system: Real user interaction detected (', e.type, '), starting in 2 seconds...');
                this.hasStarted = true;
                // Starts playing after 2 seconds of user interaction
                setTimeout(() => {
                    console.log('Audio system: Attempting to start playback...');
                    this.loadAndPlay();
                }, 2000);
                
                // Removes the listeners once audio is enabled
                document.removeEventListener('click', enableAudio);
                document.removeEventListener('keydown', enableAudio);
            }
        };
        
        // Only listens for clicks and key presses (browsers consider these valid user interactions)
        document.addEventListener('click', enableAudio);
        document.addEventListener('keydown', enableAudio);
    }
    
    loadAndPlay() {
        const currentTrack = this.playQueue[this.currentTrackIndex];
        console.log('Audio system: Loading track:', currentTrack);
        console.log('Audio system: Current audio src:', this.audio.src);
        console.log('Audio system: Expected src:', window.location.origin + '/' + currentTrack);
        
        // only loads new track if it's different from current
        if (this.audio.src !== window.location.origin + '/' + currentTrack) {
            console.log('Audio system: Setting new audio source...');
            this.audio.src = currentTrack;
            this.audio.load();
            this.showNowPlaying(currentTrack);
            
            // tries to play immediately after loading
            if (this.hasStarted) {
                console.log('Audio system: Attempting to play audio...');
                // waits a moment for the audio to be ready, then play
                setTimeout(() => {
                    // Ensure mute state is properly set
                    this.audio.muted = this.isMuted;
                    console.log('Audio system: Volume:', this.audio.volume, 'Muted:', this.audio.muted);
                    this.audio.play().then(() => {
                        console.log('Audio system: Play succeeded!');
                    }).catch(e => {
                        console.log('Audio system: Initial audio play failed:', e);
                        // if immediate play fails, wait for "canplaythrough" event
                    });
                }, 100);
            }
        } else {
            console.log('Audio system: Same track already loaded, skipping load');
        }
    }
    
    handleCanPlay() {
        console.log('Audio system: canplaythrough event fired, hasStarted:', this.hasStarted, 'isMuted:', this.isMuted, 'audio.muted:', this.audio.muted);
        if (this.hasStarted) {
            // Ensure mute state is properly set
            this.audio.muted = this.isMuted;
            this.audio.play().catch(e => {
                console.log('Audio play failed in handleCanPlay:', e);
            });
        }
    }
    
    handleError(e) {
        console.error('Audio error:', e);
        this.playNext(); // Skips to next track on error
    }
    
    playNext() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playQueue.length;
        
        // If we've finished all tracks, reshuffle the playlist
        if (this.currentTrackIndex === 0) {
            this.createShuffledPlaylist();
        }
        
        if (this.hasStarted) {
            this.loadAndPlay();
        }
    }
    
    playPrevious() {
        // If we're more than 3 seconds into the song, restart current song
        if (this.audio.currentTime > 3) {
            this.audio.currentTime = 0;
            return;
        }
        
        // Otherwise go to previous track
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playQueue.length) % this.playQueue.length;
        
        if (this.hasStarted) {
            this.loadAndPlay();
        }
    }
    
    toggleAudio() {
        console.log('Audio system: Toggle button clicked, hasStarted:', this.hasStarted, 'isMuted:', this.isMuted);
        
        if (!this.hasStarted) {
            // First time - start the system
            console.log('Audio system: Starting system manually via button click...');
            this.hasStarted = true;
            this.isMuted = false;
            this.loadAndPlay();
            return;
        }
        
        // Toggle mute/unmute - audio keeps playing in background
        this.isMuted = !this.isMuted;
        this.audio.muted = this.isMuted;
        console.log('Audio system: Toggled mute state to:', this.isMuted);
        
        this.updateToggleButton();
    }
    
    updateToggleButton() {
        if (!this.hasStarted) {
            // Show a play icon when audio hasn't started yet
            this.toggleButton.innerHTML = '<i class="fas fa-play"></i>';
            this.toggleButton.classList.remove('muted');
            this.toggleButton.title = 'Start ambient audio';
        } else if (this.isMuted) {
            this.toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
            this.toggleButton.classList.add('muted');
            this.toggleButton.title = 'Unmute audio';
        } else {
            this.toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            this.toggleButton.classList.remove('muted');
            this.toggleButton.title = 'Mute audio';
        }
    }
    
    showNowPlaying(trackPath) {
        const fileName = trackPath.split('/').pop();
        const nameWithoutExtension = fileName.replace('.mp3', '');
        
        let trackName, artistCredit;
        
        if (nameWithoutExtension.includes(' - ')) {
            const parts = nameWithoutExtension.split(' - ');
            artistCredit = parts[0];
            trackName = parts[1];
        } else {
            trackName = nameWithoutExtension;
            artistCredit = 'Unknown Artist';
        }
        
        const nowPlayingText = this.nowPlayingElement.querySelector('.now-playing-text');
        nowPlayingText.innerHTML = `
            <span class="track-name">Now playing: ${trackName}</span>
            <span class="artist-credit">Credits to ${artistCredit}</span>
        `;
        
        // Clear any existing timer
        if (this.nowPlayingTimer) {
            clearTimeout(this.nowPlayingTimer);
        }
        
        // Show notification
        this.nowPlayingElement.classList.add('show');
        
        // Hide after 4 seconds
        this.nowPlayingTimer = setTimeout(() => {
            this.nowPlayingElement.classList.remove('show');
            this.nowPlayingTimer = null;
        }, 4000);
    }
}

// Initialize audio system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Test if audio elements exist before creating AudioSystem
    const testAudio = document.getElementById('ambientAudio');
    const testToggle = document.getElementById('toggleAudio');
    
    console.log('DOM loaded - Audio element test:', !!testAudio);
    console.log('DOM loaded - Toggle button test:', !!testToggle);
    
    if (!testAudio) {
        console.error('CRITICAL: Audio element with ID "ambientAudio" not found in DOM!');
        return;
    }
    
    if (!testToggle) {
        console.error('CRITICAL: Toggle button with ID "toggleAudio" not found in DOM!');
        return;
    }
    
    // Create audio system if elements exist
    new AudioSystem();
});

// Add click sound effect to buttons and links
document.addEventListener('DOMContentLoaded', () => {
    // You can add click sound effects here if desired
    const clickableElements = document.querySelectorAll('a, button, .btn');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            // Optional: add a subtle click sound effect here
            // const clickSound = new Audio('audio/click.mp3');
            // clickSound.volume = 0.1;
            // clickSound.play().catch(() => {});
        });
    });
});
