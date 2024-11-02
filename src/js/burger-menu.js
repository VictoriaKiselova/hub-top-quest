const menuToggle = document.querySelector('.menu-toggle');
const modalNav = document.querySelector('#modal-nav');
const closeModal = document.querySelector('.close-modal');
const header = document.querySelector('.header');

// Функція для відкриття модального меню і зміни кольору хедера
menuToggle.addEventListener('click', event => {
  event.stopPropagation();
  modalNav.classList.toggle('open');
  header.classList.toggle('blue-bg', modalNav.classList.contains('open'));
});

// Закриває модальне вікно та змінює колір хедера на стандартний
closeModal.addEventListener('click', () => {
  modalNav.classList.remove('open');
  header.classList.remove('blue-bg');
});

// Закриття при кліку за межами модального вікна
document.addEventListener('click', event => {
  if (
    modalNav.classList.contains('open') &&
    !modalNav.contains(event.target) &&
    event.target !== menuToggle
  ) {
    modalNav.classList.remove('open');
    header.classList.remove('blue-bg');
  }
});
