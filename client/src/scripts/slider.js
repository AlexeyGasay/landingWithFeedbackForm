
// СЛАЙДЕР
let prevBtn = document.getElementById("sldier_btn--prev");
let nextBtn = document.getElementById("sldier_btn--next");

let slideTrack = document.getElementById("slider__track");

let sum = 3; // Длина массива (к примеру)

let count = 0;


function nextSlide(e) {

  if ( count < sum - 1 ) 
  {
    count++;
    return slideTrack.style.transform = `translate(-${slideTrack.offsetWidth * count}px)`;
  }

  if ( count == sum - 1 )
  {
    count = 0
    return slideTrack.style.transform = `translate(-${slideTrack.offsetWidth * count}px)`;
  }

}

function prevSlide(e) {
  if ( count > 0 ) 
  {
    count--;
    return slideTrack.style.transform = `translate(-${slideTrack.offsetWidth * count}px)`;
  }
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)
