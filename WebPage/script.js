// Scroll button functionality
document.getElementById('scrollButton').addEventListener('click', function() {
  window.scrollTo({
    top: document.getElementById('about').offsetTop,
    behavior: 'smooth'
  });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting us!');
});
