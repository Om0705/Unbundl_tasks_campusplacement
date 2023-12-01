const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let currentIndex = 0;

  nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carousel.children.length - 1;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateValue}%)`;
  }

  function autoRotate() {
    setInterval(() => {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }, 3000); // Change the interval as needed (milliseconds)
  }

  autoRotate();