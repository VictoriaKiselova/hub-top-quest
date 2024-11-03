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
      link.addEventListener('click', closeModalNav);
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
  } else {
    console.warn(
      'Not all items are found on this page. Check the HTML structure.'
    );
  }
});
