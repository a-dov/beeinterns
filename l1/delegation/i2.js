function f(event) {
  console.log(event.target);
  event.target.style.backgroundColor = 'red';
}

for (const cube of document.querySelectorAll('.cube')) {
  cube.addEventListener('click', f)
}
