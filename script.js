// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name && email && message) {
            // In a real application, you would send this data to a server
            alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Scroll animations
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // Add shadow to header on scroll
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.social-card, .about-content, .contact form');
    
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const socialCards = document.querySelectorAll('.social-card');
    const aboutContent = document.querySelector('.about-content');
    const contactForm = document.querySelector('.contact form');
    
    // Set initial styles for animation
    socialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(20px)';
        aboutContent.style.transition = 'all 0.5s ease';
    }
    
    if (contactForm) {
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateY(20px)';
        contactForm.style.transition = 'all 0.5s ease';
    }
    
    // Trigger initial animations
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 300);
});