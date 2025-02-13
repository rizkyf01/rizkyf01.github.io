const nav = document.getElementById('nav')

window.addEventListener('scroll', function(){
    scrollposition = window.scrollY

    if( scrollposition >=60) {
        nav.classList.add('nav-dark')
    } else if (scrollposition <=60){
        nav.classList.remove('nav-dark')
    }
})

let slideIndex = 0;
let slideTimeout;

showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Sembunyikan semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("show");
  }

  // Pindah ke slide berikutnya
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Tampilkan slide saat ini
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("show");

  // Update dot aktif
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");

  // Atur timeout untuk slide berikutnya
  slideTimeout = setTimeout(showSlides, 3000);
}

function currentSlide(n) {
  clearTimeout(slideTimeout);
  slideIndex = n - 1;
  showSlides();
}

function changeSlide(n) {
  clearTimeout(slideTimeout);
  slideIndex += n;

  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  showSlides();
}