
// Big letters flow

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



// auto-flow
const viewportWidth = window.innerWidth;
const style = document.createElement('style');
document.head.appendChild(style);
const moveWidth = -6750 + viewportWidth;
style.sheet.insertRule(`
  @keyframes moveCard {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(${moveWidth}px, 0px, 0px);
    }
  }
`, 0);



// links

function toStart() {
  location.href = "#header";
}

function toSmallStart() {
  location.href = "#small-header";
  document.getElementById('mobile-navbar').style.transform = 'translateX(100%)';
}

function toHowWork() {
  location.href = "#works-board";
  document.getElementById('mobile-navbar').style.transform = 'translateX(100%)';
}

function toAboutMe() {
  location.href = "#me-board";
  document.getElementById('mobile-navbar').style.transform = 'translateX(100%)';
}

function toReview() {
  location.href = "#review";
  document.getElementById('mobile-navbar').style.transform = 'translateX(100%)';
}




// faq display
document.getElementById('q1').addEventListener('click', function() {
  event.stopPropagation();
  document.getElementById('a1').style.display = 'block';
  document.querySelector('#q1 .dropdown-symbol').style.transform = 'rotate(90deg)';
})
document.getElementById('body').addEventListener('click', function() {
  document.getElementById('a1').style.display = 'none';
  document.querySelector('#q1 .dropdown-symbol').style.transform = 'rotate(0deg)';
})




// small navbar display
document.getElementById('small-header').addEventListener('click', function() {
  document.getElementById('mobile-navbar').style.transform = 'translateX(calc(100% - 250px))';
})

document.getElementById('mobile-navbar-close').addEventListener('click', function() {
  document.getElementById('mobile-navbar').style.transform = 'translateX(100%)';
})