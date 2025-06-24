  function nextSlide(btn) {
    const carousel = btn.closest('.carousel');
    const images = carousel.querySelectorAll('img');
    let index = [...images].findIndex(img => img.classList.contains('active'));
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }

  function prevSlide(btn) {
    const carousel = btn.closest('.carousel');
    const images = carousel.querySelectorAll('img');
    let index = [...images].findIndex(img => img.classList.contains('active'));
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
  }

// Funções atuais (nextSlide, prevSlide) já estão ok

// Swipe detection para carrossel
document.querySelectorAll('.carousel').forEach(carousel => {
  let startX = 0;
  let endX = 0;

  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', e => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', e => {
    let diff = startX - endX;
    if (Math.abs(diff) > 50) { // mínima distância para considerar swipe
      if (diff > 0) {
        // swipe para esquerda -> próxima imagem
        nextSlide(carousel.querySelector('button[onclick="nextSlide(this)"]'));
      } else {
        // swipe para direita -> imagem anterior
        prevSlide(carousel.querySelector('button[onclick="prevSlide(this)"]'));
      }
    }
  });
});