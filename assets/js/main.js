document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter buttons
    var filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            this.classList.add('active'); // Add active class to the clicked button
            // Retrieve filter value from data-filter attribute
            var filterValue = this.getAttribute('data-filter');
            // Apply filter
            mixer.filter(filterValue);
        });
    });

    // Initialize MixItUp for the .portfolio-container if it exists
    var container = document.querySelector('.portfolio-container');
    if (container) {
        var mixer = mixitup(container);
    }

    // Initialize AOS
    AOS.init({
        easing: 'ease-in-out',
        duration: 1000,
        once: true
    });

    // Progress bar width adjustments after AOS animations complete
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
        setTimeout(function() {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = value + '%';
        }, 800); // Adjust the timeout to sync with AOS animation
    });
});
