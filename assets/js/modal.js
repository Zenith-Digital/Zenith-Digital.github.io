document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-trigger="modal"]').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior

            // Fetch data attributes from the clicked item
            var title = this.getAttribute('data-title');
            var desc = this.getAttribute('data-desc');
            var img = this.getAttribute('data-img');

            // Ensure these selectors match your modal HTML structure
            var modalTitle = document.querySelector('.modal-title');
            var modalImg = document.querySelector('.modal-body img');

            // Populate modal elements with data
            modalTitle.textContent = title;
            modalImg.src = img;

            // Use innerHTML for desc to process HTML correctly
            var modalDesc = document.querySelector('.modal-body p');
            modalDesc.innerHTML = desc; // Correctly set HTML content

            // Show the modal
            var modalInstance = new bootstrap.Modal(document.getElementById('exampleModal'));
            modalInstance.show();
        });
    });
});
