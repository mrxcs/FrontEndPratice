function isNew() {

    var x = document.getElementsByClassName("is-new");
    var i;

    for ( i = 0; i < x.length; i++ ) {
        x[i].style.display = "inline-block";
    }
  }

    window.onload = isNew();
