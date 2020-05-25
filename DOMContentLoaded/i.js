window.onbeforeunload = function() {
  console.log('onbeforeunload');
  return false;
};

window.onunload = function() {
  return false;
};

window.addEventListener("unload", function() {
  alert('Pogodi');
});

window.addEventListener('load', (event) => {
  alert('resources loaded');
});

document.addEventListener('DOMContentLoaded', (event) => {
  alert('DOMContentLoaded');
});

alert('Just alert');
