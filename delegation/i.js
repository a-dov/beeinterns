function handleLinkClick(event) {
  // event.preventDefault();
  // event.stopPropagation();
  console.log(event.target);
  if (event.target.classList.contains('cube')) {
    event.target.classList.toggle("red");
  }
}

document.querySelector('.cube-container').addEventListener('click', handleLinkClick);











// document.addEventListener('click', () => {console.log('bubbling!')}, {capture: false});
//
// document.addEventListener('click', () => {console.log('capturing')}, {capture: true});
