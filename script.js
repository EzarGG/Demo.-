// Smooth scrolling for navigation links
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

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.md\\:hidden button');
const navigation = document.querySelector('nav .hidden.md\\:block');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        navigation.classList.toggle('hidden');
    });
}

// Add scroll effect to navigation
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add intersection observer for animations
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

// Observe all cards and sections
document.querySelectorAll('.bg-card-bg, .text-center.p-6').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('#home');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 51, 51, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s infinite linear;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .particle:nth-child(odd) {
        background: rgba(0, 191, 255, 0.5);
    }
    
    nav {
        transition: transform 0.3s ease;
    }
    
    .hover\\:scale-105:hover {
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Purchase button handlers
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Purchase') || button.textContent.includes('Get')) {
        button.addEventListener('click', function() {
            window.open('https://t.me/ZERIOSPEMILIKGRUB', '_blank');
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Discord and contact button handlers
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Telegram')) {
        button.addEventListener('click', () => {
            window.open('https://t.me/zeriosxmodz', '_blank');
        });
    }
    
    if (button.textContent.includes('Contact')) {
        button.addEventListener('click', () => {
            window.open('https://t.me/ZERIOSxMOZARELLA', '_blank');
        });
    }
    
    if (button.textContent.includes('Get Mods Now')) {
        button.addEventListener('click', () => {
            window.open('https://t.me/ZERIOSPEMILIKGRUB', '_blank');
        });
    }
    
    if (button.textContent.includes('Watch Demo')) {
        button.addEventListener('click', () => {
            window.open('https://youtu.be/yq0InUOa1t4?si=AiYLcOGMLeV-6emX', '_blank');
        });
    }
});

// Add testimonial carousel functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('#testimonials .bg-card-bg');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.opacity = i === index ? '1' : '0.5';
        testimonial.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
    });
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Initialize first testimonial
if (testimonials.length > 0) {
    showTestimonial(0);
}