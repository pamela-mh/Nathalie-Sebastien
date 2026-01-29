let slides = document.querySelectorAll('.slide');
let current = 0;

function next() {
  slides[current].classList.remove('active');
  current++;
  if (current < slides.length) {
    slides[current].classList.add('active');
  }
}

// Optional: play music automatically on page load
window.onload = () => {
  const music = document.getElementById('bg-music');
  music.play().catch(() => {});
};
