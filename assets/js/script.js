document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.fade-in');
  const form = document.querySelector("form");

  function checkScroll() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = (rect.top >= 0 && rect.top <= window.innerHeight - 100);

      if (isVisible) {
        section.classList.add('active');
      }
    });
  }

  function updateActiveSection() {
    const scrollPosition = $(window).scrollTop();

    $('section').each(function () {
      const top = $(this).offset().top - 50;
      const bottom = top + $(this).outerHeight();

      if (scrollPosition >= top && scrollPosition < bottom) {
        const sectionId = $(this).attr('id');
        $('.nav-link').removeClass('active');
        $(`.nav-link[href="#${sectionId}"]`).addClass('active');
      }
    });
  }

  function submitForm(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;

    const confirmationMessage = `Message sent:
      Name: ${name}
      Email: ${email}
      Message: ${message}`;
    alert(confirmationMessage);

    form.reset();
  }

  $(window).on('scroll', function () {
    updateActiveSection();
  });

  form.addEventListener("submit", submitForm);
  document.addEventListener('scroll', checkScroll);

  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  checkScroll();
  updateActiveSection();
});
