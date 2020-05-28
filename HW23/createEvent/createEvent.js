function myFunction(event) {
let x = document.createEvent("MouseEvent");
x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

document.getElementById("myDiv").dispatchEvent(x);
}
