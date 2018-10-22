$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      615: {
        items: 2,
        nav: false
      },
      1016: {
        items: 3,
        nav: false,
        loop: false
      }
    }
  });
});
