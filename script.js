// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation item on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
    
    // Add loading animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all analysis blocks and cards
    const animatedElements = document.querySelectorAll('.analysis-block, .overview-card, .reason-card, .finding-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects for interactive elements
    const interactiveCards = document.querySelectorAll('.overview-card, .reason-card, .finding-item, .risk-category');
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click-to-expand functionality for chart descriptions
    const chartDescriptions = document.querySelectorAll('.chart-description');
    
    chartDescriptions.forEach(description => {
        const fullText = description.textContent;
        const shortText = fullText.substring(0, 200) + '...';
        
        if (fullText.length > 200) {
            description.textContent = shortText;
            description.style.cursor = 'pointer';
            description.title = 'Click to read more';
            
            let isExpanded = false;
            
            description.addEventListener('click', function() {
                if (!isExpanded) {
                    this.textContent = fullText;
                    this.title = 'Click to read less';
                    isExpanded = true;
                } else {
                    this.textContent = shortText;
                    this.title = 'Click to read more';
                    isExpanded = false;
                }
            });
        }
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add counter animation for statistics
    const statNumbers = document.querySelectorAll('.stat-number, .metric-value');
     const animateCounter = function(element) {
        const originalText = element.textContent;
        const numericMatch = originalText.match(/(\$)?[\s]*([\d.]+)([A-Za-z%]*)/); // Capture optional '$', numeric part, and suffix
        
        if (!numericMatch) {
            element.textContent = originalText; // If no match, just display original text
            return;
        }

        const prefix = numericMatch[1] || ""; // Capture '$' if present
        let target = parseFloat(numericMatch[2]); // Numeric part
        const suffix = numericMatch[3] || ""; // Suffix (e.g., 'B', '%')

        const increment = target / 100;
        let current = 0;

        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            let formattedValue;
            // Determine decimal places from the original numeric part
            const originalNumericPart = numericMatch[2];
            const decimalPlaces = originalNumericPart.includes(".") ? originalNumericPart.split(".")[1].length : 0;
            formattedValue = current.toFixed(decimalPlaces);
            
            element.textContent = prefix + formattedValue + suffix;
        }, 20);
    };    
    // Trigger counter animation when elements come into view
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
    
    // Add mobile menu toggle functionality
    const createMobileMenu = function() {
        const navbar = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            // Create hamburger menu if it doesn't exist
            let hamburger = document.querySelector('.hamburger');
            if (!hamburger) {
                hamburger = document.createElement('div');
                hamburger.className = 'hamburger';
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                hamburger.style.color = 'white';
                hamburger.style.fontSize = '1.5rem';
                hamburger.style.cursor = 'pointer';
                
                const navContainer = document.querySelector('.nav-container');
                navContainer.appendChild(hamburger);
                
                hamburger.addEventListener('click', function() {
                    navMenu.classList.toggle('mobile-active');
                });
            }
            
            // Style mobile menu
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = '#667eea';
            navMenu.style.flexDirection = 'column';
            navMenu.style.padding = '1rem';
            navMenu.style.display = 'none';
            
            // Add mobile active class styles
            const style = document.createElement('style');
            style.textContent = `
                .nav-menu.mobile-active {
                    display: flex !important;
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Reinitialize on window resize
    window.addEventListener('resize', createMobileMenu);
    
    // Add scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add loading spinner for iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const container = iframe.parentElement;
        const loader = document.createElement('div');
        loader.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading chart...';
        loader.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #667eea;
            font-size: 1.2rem;
        `;
        
        container.style.position = 'relative';
        container.appendChild(loader);
        
        iframe.addEventListener('load', function() {
            loader.remove();
        });
    });
});

// Add CSS for active navigation state
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-link.active {
        background-color: rgba(255,255,255,0.3) !important;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(activeNavStyle);

