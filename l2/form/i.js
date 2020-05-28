//
document.addEventListener('click', () => console.log('kek'));

document.removeEventListener('click', () => console.log('kek'));

















































// From HW
//
// const handleKek = () => {
//   document.querySelector('article[class="about__hero"]').style.opacity = 1;
// };
//
// document.addEventListener('click', handleKek);




// How fast is querySelector? and why you better use const

// const form = document.querySelector('.form');
//
// console.time('form');
//
// for (let i = 0; i < 10000000; ++i) {
//   document.querySelector('.form')
// }
//
// console.timeEnd('form');
//
//
// console.time('form');
//
// for (let i = 0; i < 10000000; ++i) {
//   form
// }
//
// console.timeEnd('form');






















// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const fd = new FormData(event.target);
//
//   console.log(event);
//
//   for (const [key, val] of fd.entries()) {
//     console.log(key, val);
//   }
// });

//
// console.time('getElementById');
// for (let i = 0; i < 1500000; ++i) {
//   document.getElementById('form');
// }
// console.timeEnd('getElementById');
//
//
// console.time('getElementsByClassName[0]');
// for (let i = 0; i < 1500000; ++i) {
//   document.getElementsByClassName('form')[0];
// }
// console.timeEnd('getElementsByClassName[0]');
//
//
// console.time('querySelector .form');
// for (let i = 0; i < 1500000; ++i) {
//   document.querySelector('.form');
// }
// console.timeEnd('querySelector .form');
//
//
// console.time('document.forms[0]');
// for (let i = 0; i < 1500000; ++i) {
//   document.forms[0];
// }
// console.timeEnd('document.forms[0]');
//
//
// console.time('document.forms.form');
// for (let i = 0; i < 1500000; ++i) {
//   document.forms.form;
// }
// console.timeEnd('document.forms.form');
//
//
// console.time('form');
// for (let i = 0; i < 1500000; ++i) {
//   form;
// }
// console.timeEnd('form');
