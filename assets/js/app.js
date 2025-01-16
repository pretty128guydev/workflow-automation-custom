let slideIndex = 1;
showSlides(slideIndex);

window.setInterval(function() {
  showSlides(slideIndex += 1);
}, 5000)


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}




let items = document.getElementsByClassName('card');
let itemCount = 8;
let currentIndex = 1;

function moveCard() {
  if (currentIndex > itemCount) currentIndex = 0;
  for (let i = 0; i < items.length; i++) {
    document.getElementsByClassName('card')[i].style.transition = 'transform linear .3s';
    const demo = -400 * currentIndex;
    if (currentIndex == 0) document.getElementsByClassName('card')[i].style.transition = 'none';
    document.getElementsByClassName('card')[i].style.transform = `translateX(${demo}px)`;
  }
  currentIndex++;
}

setInterval(function() {moveCard()}, 2200);



let items1 = document.getElementsByClassName('tool-card');
let itemCount1 = 4;
let currentIndex1 = 1;

function moveCard1() {
  if (currentIndex1 > itemCount1) currentIndex1 = 0;
  for (let i = 0; i < items1.length; i++) {
    document.getElementsByClassName('tool-card')[i].style.transition = 'transform linear .3s';
    const demo = -400 * currentIndex1;
    if (currentIndex1 == 0) document.getElementsByClassName('tool-card')[i].style.transition = 'none';
    document.getElementsByClassName('tool-card')[i].style.transform = `translateX(${demo}px)`;
  }
  currentIndex1++;
}

setInterval(function() {moveCard1()}, 3700);