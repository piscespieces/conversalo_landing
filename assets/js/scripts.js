const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0');
      entry.target.classList.add('opacity-100');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Select the sections to observe
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email-input').value;

    fetch('https://hook.us2.make.com/34elbr8dy5uxwal6vilrk3k0s58f4of4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(response => {
        if (!response.ok) {
          const errorMessage = document.getElementById('error-message')
          errorMessage.toggle('hidden');
          throw new Error('Network response was not ok');
        }

        return response
      })
      .then(data => {
        document.getElementById('email-input').value = '';
        const button = document.getElementById('submit-button')
        button.textContent = 'Te enviamos el acceso por email!';

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
