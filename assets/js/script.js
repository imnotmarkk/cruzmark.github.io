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