document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".clickable-image");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            this.classList.toggle("enlarged");
        });
    });
});