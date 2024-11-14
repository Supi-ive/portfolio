document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 71; // navbar height + 1
        
        document.querySelectorAll('section').forEach(section => {
            let id = section.getAttribute('id');
            let link = document.querySelector(`a[href="#${id}"]`);
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.style.background = 'rgba(230, 230, 250, 0.2)';
            } else {
                link.style.background = 'transparent';
            }
        });
    });

    // Hide scroll indicator when user starts scrolling
    let scrollIndicator = document.querySelector('.scroll-indicator');
    let hasScrolled = false;
    
    window.addEventListener('scroll', function() {
        if (!hasScrolled) {
            hasScrolled = true;
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease';
        }
    });
});