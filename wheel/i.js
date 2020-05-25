const wheel = document.querySelector('.wheel');
let deg = 0;

document.addEventListener('wheel', (event) => {
    console.log(event);
    wheel.style.transform = 'rotate(' + deg + 'deg)';
    deg += 5;
})
