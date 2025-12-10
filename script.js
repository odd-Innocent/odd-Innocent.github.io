document.addEventListener('DOMContentLoaded', () => {
    // Setup generic section observer
    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If this section has timeline items or list items, animate them too
                const childItems = entry.target.querySelectorAll('.timeline-item, .keyword, .award-item, .publication-list li');
                childItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible-item');
                    }, index * 100); // 100ms stagger
                });

                observer.unobserve(entry.target);
            }
        });
    }, sectionObserverOptions);

    const sections = document.querySelectorAll('.content-section, .hero-section, footer');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        sectionObserver.observe(section);
    });

    // Initialize items with opacity 0 class for staggering
    const animatableItems = document.querySelectorAll('.timeline-item, .keyword, .award-item, .publication-list li');
    animatableItems.forEach(item => {
        item.classList.add('slide-in-item');
    });
});
