const menuToggle = document.querySelector('.menu-toggle');
const modalNav = document.querySelector('#modal-nav');

menuToggle.addEventListener('click', () => {
  modalNav.classList.toggle('open');
});
