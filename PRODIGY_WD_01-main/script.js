document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(52, 73, 94, 0.9)'; // Darker background with opacity when scrolled
        } else {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)'; // Original background with opacity
        }
    });
});
