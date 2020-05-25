

































//
//
// document.addEventListener('click', () => {console.log('bubbling!')}, {once: true});



//
document.addEventListener('click', () => {console.log('bubbling!')}, {capture: false});

document.addEventListener('click', () => {console.log('capturing')}, {capture: true});
