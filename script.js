
document.addEventListener('DOMContentLoaded', () => {
    // Project filtering
    const filterButtons = document.querySelectorAll('.project-filter button');
    const projects = document.querySelectorAll('.project-container .project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Set active class on button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projects.forEach(project => {
                const category = project.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // In a real application, you would send this data to a server.
        // For this prototype, we'll just show a success message.
        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
        formStatus.style.color = 'green';
        contactForm.reset();

        // You could use the fetch API to send the form data to a backend:
        /*
        const formData = new FormData(contactForm);
        fetch('/api/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'green';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Something went wrong. Please try again.';
                formStatus.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.textContent = 'Something went wrong. Please try again.';
            formStatus.style.color = 'red';
        });
        */
    });
});
