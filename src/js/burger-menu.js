document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const modalNav = document.querySelector('#modal-nav');
  const closeModal = document.querySelector('.close-modal');
  const headerContent = document.querySelector('.header-content');
  const navLinks = document.querySelectorAll('.nav-link a');

  function closeModalNav() {
    modalNav.classList.remove('open');
    headerContent.classList.remove('header-content-blue-bg');
  }

  if (menuToggle && modalNav && closeModal && headerContent) {
    menuToggle.addEventListener('click', event => {
      event.stopPropagation();
      modalNav.classList.toggle('open');
      headerContent.classList.toggle(
        'header-content-blue-bg',
        modalNav.classList.contains('open')
      );
    });

    closeModal.addEventListener('click', closeModalNav);

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        navLinks.forEach(link => link.parentElement.classList.remove('active'));

        link.parentElement.classList.add('active');

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const sectionPosition =
            targetSection.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth',
          });
        }

        closeModalNav();
      });
    });

    document.addEventListener('click', event => {
      if (
        modalNav.classList.contains('open') &&
        !modalNav.contains(event.target) &&
        event.target !== menuToggle
      ) {
        closeModalNav();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200) {
        closeModalNav();
      }
    });

    window.addEventListener('scroll', () => {
      navLinks.forEach(link => link.parentElement.classList.remove('active'));
    });
  } else {
    console.warn(
      'Not all items are found on this page. Check the HTML structure.'
    );
  }
});
