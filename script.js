document.addEventListener('DOMContentLoaded', () => {
    // Setup generic section observer for Fade In effect
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05 // Trigger slightly earlier
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    // Observe Sections and List Items for a granular flow
    const animatedElements = document.querySelectorAll('.content-section, .timeline-item, .paper-list li, .award-item, .exp-item');

    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        // Optional: slight delay based on index within section could be complex,
        // but let's keep it simple: just observe them.
        observer.observe(el);
    });
});
