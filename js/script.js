// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive element: Shrink boxes on mouseover
document.querySelectorAll('.sponsor').forEach(sponsor => {
    sponsor.addEventListener('mouseover', function () {
        this.style.transform = 'scale(0.95)';
    });

    sponsor.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});