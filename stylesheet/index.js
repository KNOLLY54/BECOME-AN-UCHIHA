// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // 1. Toggle Navbar (Bootstrap's collapse functionality is handled by Bootstrap JS already)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    
    // Check if the toggler and navbar exist to avoid errors
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    // 2. Handle Form Submission for Email and Password (Example)
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get values from the form
            const email = document.getElementById('floatingInput').value;
            const password = document.getElementById('floatingPassword').value;

            // Display an alert with the entered values (for demonstration)
            if (email && password) {
                alert('Form Submitted!\nEmail: ' + email + '\nPassword: ' + password);
            } else {
                alert('Please fill out both fields!');
            }

            // Optionally, you could clear the form fields after submission
            form.reset();
        });
    }

    // 3. Video Background Play/Pause Toggle (Optional)
    const video = document.querySelector('video');
    if (video) {
        // Play the video on page load (auto-play is already set in HTML, but for JS control)
        video.play();

        // Add an event listener to pause the video when clicking on the background (optional)
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    // 4. Scroll to Top Button (optional feature)
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    // Style for the button (inline CSS for simplicity)
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 15px';
    scrollToTopButton.style.fontSize = '20px';
    scrollToTopButton.style.backgroundColor = 'red';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.cursor = 'pointer';

    // Show or hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top functionality
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
