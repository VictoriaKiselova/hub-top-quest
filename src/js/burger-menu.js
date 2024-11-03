document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const modalNav = document.querySelector('#modal-nav');
  const closeModal = document.querySelector('.close-modal');
  const headerContent = document.querySelector('.header-content');
  const navLinks = document.querySelectorAll('.nav-link a');

  if (menuToggle && modalNav && closeModal && headerContent) {
    menuToggle.addEventListener('click', event => {
      event.stopPropagation();
      modalNav.classList.toggle('open');
      headerContent.classList.toggle(
        'header-content-blue-bg',
        modalNav.classList.contains('open')
      );
    });

    closeModal.addEventListener('click', () => {
      modalNav.classList.remove('open');
      headerContent.classList.remove('header-content-blue-bg');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        modalNav.classList.remove('open');
        headerContent.classList.remove('header-content-blue-bg');
      });
    });

    document.addEventListener('click', event => {
      if (
        modalNav.classList.contains('open') &&
        !modalNav.contains(event.target) &&
        event.target !== menuToggle
      ) {
        modalNav.classList.remove('open');
        headerContent.classList.remove('header-content-blue-bg');
      }
    });
  } else {
    console.warn(
      'Not all items are found on this page. Check the HTML structure.'
    );
  }
});
