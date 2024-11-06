// document.addEventListener('DOMContentLoaded', function () {
//   const headerOffset = 120;
//   const sections = document.querySelectorAll('section');
//   const navLinks = document.querySelectorAll('.nav-link a');

//   function scrollToSectionOnClick(event) {
//     const targetId = event.currentTarget.getAttribute('href').slice(1);
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//       event.preventDefault();
//       window.scrollTo({
//         top: targetSection.offsetTop - headerOffset,
//         behavior: 'smooth',
//       });
//     }
//   }

//   navLinks.forEach(link => {
//     link.addEventListener('click', scrollToSectionOnClick);
//   });

//   function changeActiveLink() {
//     let scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;

//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       if (
//         scrollPosition >= sectionTop - headerOffset &&
//         scrollPosition < sectionTop + sectionHeight - headerOffset
//       ) {
//         const id = section.getAttribute('id');
//         navLinks.forEach(link => {
//           link.classList.remove('active');
//           if (link.getAttribute('href') === `#${id}`) {
//             link.classList.add('active');
//           }
//         });
//       }
//     });
//   }

//   window.addEventListener('scroll', changeActiveLink);
// });

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link a');

  function changeActiveLink() {
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - windowHeight / 3 &&
        scrollPosition < sectionTop + sectionHeight - windowHeight / 3
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

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - window.innerHeight / 4,
        behavior: 'smooth',
      });
    });
  });
});
