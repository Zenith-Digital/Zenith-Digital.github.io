document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            this.classList.add('active'); // Add active class to the clicked button
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var container = document.querySelector('.portfolio-container');
        
        if(container) { // Only initialize MixItUp if .portfolio-container exists
            var mixer = mixitup(container);
        }
    });

    // Initialize AOS
    AOS.init({
        // AOS options here
        easing: 'ease-in-out',
        duration: 1000,
        once: true // Whether animation should happen only once - while scrolling down
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Trigger width adjustments after AOS animations complete
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
        // Use setTimeout to allow AOS animation to complete before filling the bar
        setTimeout(function() {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = value + '%';
        }, 800); // Adjust the timeout to match or exceed AOS animation duration
    });
});