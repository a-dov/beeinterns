
// Using "onkeydown" together with the "onkeyup" event:
function keydownFunction() {
  document.getElementById("demo").style.backgroundColor = "yellow";
}

function keyupFunction() {
  document.getElementById("demo").style.backgroundColor = "green";
}

// This example uses the addEventListener() method to attach a "keyup" event to an input element
document.getElementById("fname").addEventListener("keyup", myFunction1);

function myFunction1() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

// Reload this page, or click on the link below to invoke the onbeforeunload event.
function myFunction() {
  return "Yor are Genius!";
}