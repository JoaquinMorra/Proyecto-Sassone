document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    let currentIndex = 0;
    let intervalId;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
  
      slides[index].classList.add('active');
    }
  
    function prev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      showSlide(currentIndex);
    }
  
    function next() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }
  
    prevSlide.addEventListener('click', prev);
    nextSlide.addEventListener('click', next);
  
    function startSlider() {
      intervalId = setInterval(function() {
        currentIndex++;
        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        showSlide(currentIndex);
      }, 3000);
    }
  
    function stopSlider() {
      clearInterval(intervalId);
    }
  
    showSlide(currentIndex); // Mostrar la primera diapositiva al cargar la página
  
    // Detener el slider al pasar el cursor sobre el slider
    document.querySelector('.slider').addEventListener('mouseenter', stopSlider);
  
    // Volver a iniciar el slider al quitar el cursor del slider
    document.querySelector('.slider').addEventListener('mouseleave', startSlider);
  });
  