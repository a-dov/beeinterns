
function mouseDown() {
  document.getElementById("myP").style.color = "blue";
}

function mouseUp() {
   document.getElementById("myP").style.color = "yellow";
}


// This example is for touch devices only.
function myFunction(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById("demo").innerHTML = x + ", " + y;
}