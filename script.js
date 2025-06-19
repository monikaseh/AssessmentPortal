// JavaScript for Internship Assessment Portal

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all card elements
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Track assessment link clicks for analytics
function trackAssessmentClick(fieldName) {
    console.log(`Assessment clicked: ${fieldName}`);
    
    // You can add analytics tracking here
    trackEvent('Assessment', 'Click', fieldName);
    
    // Show confirmation message
    showNotification(`Opening ${fieldName} assessment form...`, 'info');
}

// Helper function to get field display name
function getFieldName(fieldId) {
    const fieldNames = {
        'content-creator': 'Content Creator',
        'graphic-designer': 'Graphic Designer',
        'data-analyst': 'Data Analyst',
        'website-designer': 'Website Designer'
    };
    return fieldNames[fieldId] || fieldId;
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`;
    
    // Set notification style based on type
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-500', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-500', 'text-black');
            break;
        default:
            notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-lg">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Form validation (if you add forms later)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile menu toggle (if you add mobile menu)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Analytics tracking (placeholder - replace with your analytics)
function trackEvent(category, action, label) {
    // Google Analytics example:
    // gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    // });
    
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Track assessment link clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href*="forms.google.com"]') || e.target.closest('a[href*="forms.google.com"]')) {
        const link = e.target.matches('a') ? e.target : e.target.closest('a');
        const href = link.getAttribute('href');
        
        // Determine field based on the form ID
        let fieldName = 'Unknown';
        if (href.includes('1FAIpQLSfDD8QkI--XGNvmFvMtt6TqnPRPgwnHiByN8WFyGZEg3R6QRQ')) {
            fieldName = 'Content Creator';
        } else if (href.includes('1FAIpQLSeEm-hRSpyZfNjRFa8xTWU2Eaa8KlDpX6peF4EOtrVe8Cxhaw')) {
            fieldName = 'Graphic Designer';
        } else if (href.includes('1FAIpQLSffSmNEFkSJV1ub-bjuRx8XGx5nVsakLk-oixdtBMVD4CBGhw')) {
            fieldName = 'Data Analyst';
        } else if (href.includes('1FAIpQLSem-v4UV97ufZLEU2JVHzE9JBdEuVkqS3NhXrYu56Jn9U8knw')) {
            fieldName = 'Website Designer';
        }
        
        trackEvent('Assessment', 'Start', fieldName);
        trackAssessmentClick(fieldName);
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close notifications
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.fixed.top-4.right-4');
        notifications.forEach(notification => notification.remove());
    }
    
    // Enter key on assessment cards
    if (e.key === 'Enter' && e.target.matches('.card-hover button')) {
        e.target.click();
    }
});

// Performance optimization: Lazy load images if any
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading on page load
document.addEventListener('DOMContentLoaded', lazyLoadImages);