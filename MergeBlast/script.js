// MergeBlast Website Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .tool-card, .reason-card, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check for elements in view on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effects to tool icons
    const toolIcons = document.querySelectorAll('.tool-icon');
    
    toolIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add pulse animation to CTA text in footer
    const ctaText = document.querySelector('footer h3');
    
    if (ctaText) {
        setInterval(() => {
            ctaText.classList.add('pulse');
            
            setTimeout(() => {
                ctaText.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
    
    // Add typing animation to hero subtitle
    const heroSubtitle = document.querySelector('.hero p');
    
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        };
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add number counter animation to step numbers
    const stepNumbers = document.querySelectorAll('.step-number');
    
    stepNumbers.forEach(number => {
        const finalNum = number.textContent;
        number.textContent = '0';
        
        setTimeout(() => {
            let currentNum = 0;
            const interval = setInterval(() => {
                currentNum++;
                number.textContent = currentNum;
                
                if (currentNum >= parseInt(finalNum)) {
                    clearInterval(interval);
                }
            }, 100);
        }, 1000);
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add email validation for contact form (if added later)
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small animation when clicking email link
            this.classList.add('email-click');
            
            setTimeout(() => {
                this.classList.remove('email-click');
            }, 300);
        });
    });
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .animated {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .pulse {
        animation: pulse 1s ease-in-out;
    }
    
    .email-click {
        animation: bounce 0.3s ease;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes bounce {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;

document.head.appendChild(style);