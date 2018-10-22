function openCloseMenu() {
  var element = $(".navbar__menu");


  if (element.hasClass("is-menu-close")) {
    element.show();
    element.removeClass("is-menu-close");
  }

  else {
    element.addClass("is-menu-close");
    setTimeout(function(){element.hide();}, 800);
  }
}

function showUl(sib) {
  $(sib).children('ul').slideDown();
  $(sib).children('i').css('transform','rotate(180deg)');
}

function hideUl(sib) {
  $(sib).children('ul').slideUp();
  $(sib).children('i').css('transform','rotate(0deg)');
}

function hideMenu() {
  if (!($(".navbar__menu").hasClass("is-menu-close"))) {
    openCloseMenu();
  }
}

document.addEventListener('scroll', hideMenu, true);
