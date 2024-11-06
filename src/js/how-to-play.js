const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  const randomDelay = Math.random() * 3;
  bubble.style.animationDelay = `${randomDelay}s`;
});

function animateBubbles(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bubble').forEach(bubble => {
        bubble.classList.add('active');
      });
    } else {
      entry.target.querySelectorAll('.bubble').forEach(bubble => {
        bubble.classList.remove('active');
      });
    }
  });
}

const observer = new IntersectionObserver(animateBubbles, {
  threshold: 0.5,
});

const howToPlaySection = document.querySelector('.how-to-play-container');
if (howToPlaySection) {
  observer.observe(howToPlaySection);
}
