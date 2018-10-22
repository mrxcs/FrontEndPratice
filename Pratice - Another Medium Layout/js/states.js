function isVisible() {

  var x = document.getElementsByClassName("is-visible");
  var i;
  var l = x.length;

  for (i = 0; i < l; i++) {
    x[i].style.display = "inline-block";
  }
}

window.onload = isVisible();

function isHidden() {
  var x = document.getElementsByClassName("is-hidden");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

window.onload = isHidden();
