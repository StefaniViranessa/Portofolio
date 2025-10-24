// ANIMASI BAGIAN LANDING PAGE HERO
document.addEventListener('DOMContentLoaded', function() {
    // Konfigurasi Typed.js
    const options = {
        strings: ['develop websites.', 'manage database.', 'analyze data.'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };

    // Inisialisasi Typed.js
    const typed = new Typed('#typed-text', options);
});

// ANIMASI TECH STACK
const techItems = document.querySelectorAll('.tech-item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('visible', 'fade-in');
          observer.unobserve(entry.target); // hanya animasi sekali
        }
    });
}, { threshold: 0.3 });

// delay bertahap
techItems.forEach(item => observer.observe(item));

techItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});
