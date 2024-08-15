let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.mitsubishi-asx-1920x966-1-icon');
  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
  }
}

function changeSlide(n) {
  let slides = document.querySelectorAll('.mitsubishi-asx-1920x966-1-icon');
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  slides[slideIndex - 1].style.display = 'block';
}

// Initialize the slider
showSlides();
setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds
