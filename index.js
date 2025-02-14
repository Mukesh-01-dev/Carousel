let slideIndex = 1;
let slideshowInterval;
const delay = 3000;

showSlides(slideIndex);
startSlideshow();

function plusSlides(n) {
  clearInterval(slideshowInterval);
  showSlides(slideIndex += n);
  if (n < 0) {
    stopSlideshowTemporarily();
  } else {
    startSlideshow();
  }
}

function currentSlide(n) {
  clearInterval(slideshowInterval);
  showSlides(slideIndex = n);
  stopSlideshowTemporarily();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    plusSlides(1);
  }, delay);
}

function stopSlideshowTemporarily() {
  setTimeout(startSlideshow, delay);
}
