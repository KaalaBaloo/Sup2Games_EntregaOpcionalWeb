

$( "#closeNav" ).on( "click", function() {
    var element = document.getElementById("Nav");
     element.classList.toggle("ClosedNav");
     var element = document.getElementById("Base");
     element.classList.toggle("ClosedNav");

  } );