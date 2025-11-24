// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesanan Anda telah kami terima. Kami akan segera menghubungi Anda.');
        this.reset();
    });
}
// Product order buttons
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        document.getElementById('order').value = productName;
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Initialize animations when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .testimonial').forEach(el => {
    observer.observe(el);
});