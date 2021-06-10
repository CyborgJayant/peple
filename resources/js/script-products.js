/* Slideshow JavaScript */

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}


/* Slideshow JavaScript */