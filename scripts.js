let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function controller(imgCount) {
  slideIndex += imgCount;
  slideShow(slideIndex);
}

slideShow(slideIndex);
function slideShow(num) {
  if (num == slides.length) {
    slideIndex = 0;
    num = 0;
  }

  if (num < 0) {
    slideIndex = slides.length - 1;
    num = slides.length - 1;
  }

  // for (let i of slides) {
  //   i.style.display = "none";
  // }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[num].style.display = "block";
}
