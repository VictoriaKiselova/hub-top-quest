document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link a');

  function changeActiveLink() {
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const border = 120;

      if (
        scrollPosition >= sectionTop - border &&
        scrollPosition < sectionTop + sectionHeight - border
      ) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');

          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', changeActiveLink);
});
