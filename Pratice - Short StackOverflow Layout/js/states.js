function isAnswered() {

  var x = document.getElementsByClassName("answer__number");
  var i;
	
  for ( i = 0; i < x.length; i++ ) {
    var num = x[i].innerHTML;
    if (num > 0) {
      x[i].parentElement.classList.add('is-answered');
    }
  }
}

window.onload = isAnswered();
