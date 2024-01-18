document.addEventListener('DOMContentLoaded', function() {
    var scrollLink = document.querySelector('.down[data-scroll]');

    scrollLink.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor behavior

        var targetId = this.getAttribute('href').substring(1); // Extract the target id (without #)
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
        }
    });
});
