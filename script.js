document.addEventListener('DOMContentLoaded', () => {
  const quickForm = document.querySelector('#quick-appointment-form');
  const fullForm = document.querySelector('#full-appointment-form');

  const handleFormSubmit = (event, form, successText) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = successText;
      form.reset();
    }, 800);
  };

  if (quickForm) {
    quickForm.addEventListener('submit', (event) => {
      handleFormSubmit(event, quickForm, 'Booked');
    });
  }

  if (fullForm) {
    fullForm.addEventListener('submit', (event) => {
      handleFormSubmit(event, fullForm, 'Appointment Sent');
    });
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('open');
    });
  }
});
