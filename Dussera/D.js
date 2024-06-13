// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');
// const slides = document.querySelectorAll('.slide');
// const numberOfSlides = slides.length;
// let slideNumber = 0;

// // slider next button 
// nextBtn.onclick = () => {
//     slides.forEach((slide) => {
//         slide.classlist.remove('active');
//     });

//     slideNumber++;

//     if (slideNumber > (numberOfSlides - 1)) {
//         slideNumber = 0;
//     }

//     slides[slideNumber].classlist.add('active');
// }

// // slider previous button 
// prevBtn.onclick = () => {
//     slides.forEach((slide) => {
//         slide.classlist.remove('active');
//     });

//     slideNumber--;

//     if (slideNumber < 0) {
//         slideNumber = numberOfSlides - 1;
//     }
    
//     slides[slideNumber].classlist.add('active');
// }



// G-O

const previousBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");

previousBtn.addEventListener("click", () => {
  const currentSlide = document.querySelector(".slide.active");
  const previousSlide = currentSlide.previousElementSibling;

  if (previousSlide) {
    previousSlide.classList.add("active");
    currentSlide.classList.remove("active");
  }
});

nextBtn.addEventListener("click", () => {
  const currentSlide = document.querySelector(".slide.active");
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    nextSlide.classList.add("active");
    currentSlide.classList.remove("active");
  }
});