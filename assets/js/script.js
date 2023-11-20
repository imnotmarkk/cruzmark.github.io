document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in');
  
    function checkScroll() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.top <= window.innerHeight - 100);
        
        if (isVisible) {
          section.classList.add('active');
        }
      });
    }
  
    document.addEventListener('scroll', checkScroll);
    checkScroll();
});

$(document).ready(function () {
  function updateActiveSection() {
    const sections = $('section');
    const scrollPosition = $(window).scrollTop();

    sections.each(function () {
      const top = $(this).offset().top - 50;
      const bottom = top + $(this).outerHeight();

      if (scrollPosition >= top && scrollPosition < bottom) {
        const sectionId = $(this).attr('id');
        $('.nav-link').removeClass('active');
        $(`.nav-link[href="#${sectionId}"]`).addClass('active');
      }
    });
  }

  $(window).on('scroll', function () {
    updateActiveSection();
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
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
    });
});
