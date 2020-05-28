//




// const textInput = document.querySelector('#text');
// const textInput = document.getElementById('text');
const textInput = text;


// focus/blur NOT bubbling

//
// textInput.addEventListener('focus', (event) => {
//   event.preventDefault(); // cancelable: false - so it won't work
//   console.log('hurraaaay!');
//   console.log(event)
//   // alert('ba'); // make blur with help of alert
// });
// //
// textInput.addEventListener('blur', (event) => {
//   console.log('not hurraaaay!');
//   console.log(event)
// });





// focusin/focusout ARE bubbling


// form1.addEventListener('focusin', (event) => {
//   event.preventDefault(); // cancelable: false - so it won't work
//   console.log('hurraaaay!');
//   console.log(event)
// });
//
// form1.addEventListener('focusout', (event) => {
//   console.log('not hurraaaay!');
//   console.log(event)
// });

// OR

// form1.addEventListener('focus', (event) => {
//   event.preventDefault(); // cancelable: false - so it won't work
//   console.log('hurraaaay!');
//   console.log(event)
// }, {capture: true});
//
// form1.addEventListener('blur', (event) => {
//   console.log('not hurraaaay!');
//   console.log(event)
// }, {capture: true});






// textInput.addEventListener('input', (event) => {
//   console.log('input');
//   console.log(event);
//   console.log(event.target.value)
// });
//
// textInput.addEventListener('change', (event) => {
//   console.log('change');
//   console.log(event);
//   console.log(event.target.value)
// });









// Add focus for next element

// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }
//
// textInput.focus();
//
// textInput.addEventListener('input', (event) => {
//   if (event.target.value.length === 4) {
//     const index = getKeyByValue(form1.elements, textInput);
//     form1.elements[+index + 1].focus();
//   }
// });
//
//
//
// button.addEventListener('click', () => {
//   textInput.focus();
// });
