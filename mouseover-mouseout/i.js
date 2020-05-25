const kek = document.querySelector('.mouseover');

kek.addEventListener('mouseover', (event) => {
  console.log(event);
  event.target.style.backgroundColor = 'blue';
})

kek.addEventListener('mouseout', (event) => {
  console.log(event);
  event.target.style.backgroundColor = 'red';
})
