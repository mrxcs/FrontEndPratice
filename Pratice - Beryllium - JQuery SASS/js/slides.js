var slideIndex = 0;
var interval;
$(function () {
  slideShow();
  interval = setInterval(slideShow,3000);
});

function slideShow() {

  var items = $('.slides-wrap__slide');

  items.hide();

  ++slideIndex;

  if (slideIndex > items.length) {
    slideIndex = 1;
  }

  else if (slideIndex <= 0) {
    slideIndex = items.length;
  }


  items.eq(slideIndex-1).fadeIn('slow');

  $('.dots__dot').removeClass('dots__dot--active');
  $('.dots__dot').eq(slideIndex-1).toggleClass('dots__dot--active');
}

function currentSlide (n) {
  slideIndex = n-1;
  clearInterval(interval);
  slideShow();
  interval = setInterval(slideShow,3000);
}

function plusSlides (n) {
  if (n < 0) {
    slideIndex = slideIndex - 2;
  }
  clearInterval(interval);
  slideShow();
  interval = setInterval(slideShow,3000);
}
