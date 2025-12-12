
document.addEventListener('DOMContentLoaded', () => {

    // Typing animation
    const typingElement = document.querySelector('.typing');
    const text = "Rakesh Khushal Sahu";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        } else {
            // Optional: restart typing animation after a delay
            // setTimeout(() => {
            //     typingElement.textContent = '';
            //     index = 0;
            //     type();
            // }, 5000);
        }
    }

    type();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form submission
        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
        formStatus.style.color = 'green';
        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });
});
