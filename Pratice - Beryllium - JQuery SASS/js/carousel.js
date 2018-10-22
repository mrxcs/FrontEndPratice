var carouselIndex = 0;
$(function() {
  carousel();
});

window.addEventListener("resize", function () {
  carouselIndex = 0;
  carousel();
  /*setTimeout(carousel(), 250);*/
});

function carousel() {

  var items = $('.carousel__item');

  items.hide();

  ++carouselIndex;

  if (carouselIndex > items.length) {
    carouselIndex = 1;
  }

  //Muda compartamento de acordo com o VW

  if (window.matchMedia('screen and (max-width: 575px)').matches) {
    items.eq(carouselIndex - 1).fadeIn('slow');

    $('.carousel__dot').removeClass('carousel__dot--active');
    $('.carousel__dot').eq(carouselIndex - 1).toggleClass('carousel__dot--active');
  }

  else if (window.matchMedia('screen and (max-width: 1015px)').matches) {

    let n = carouselIndex * 2;

    items.eq(n - 2).fadeIn('slow');
    items.eq(n - 1).fadeIn('slow');

    let dots = Math.ceil($('.carousel__dot').length / 2);

    $('.carousel__dot').hide();
    $('.carousel__dot').removeClass('carousel__dot--active');

    for (let i = 0; i < dots; i++) {
      $('.carousel__dot').eq(i).show();
    }

    $('.carousel__dot').eq(carouselIndex - 1).toggleClass('carousel__dot--active');
  }

  else {

    let n = carouselIndex * 3;

    items.eq(n - 3).fadeIn('slow');
    items.eq(n - 2).fadeIn('slow');
    items.eq(n - 1).fadeIn('slow');

    let dots = Math.ceil($('.carousel__dot').length / 3);

    $('.carousel__dot').hide();
    $('.carousel__dot').removeClass('carousel__dot--active');

    for (let i = 0; i < dots; i++) {
      $('.carousel__dot').eq(i).show();
    }

    $('.carousel__dot').eq(carouselIndex - 1).toggleClass('carousel__dot--active');
  }

}

function currentImg(n) {
  carouselIndex = n - 1;
  carousel();
}
