const mouseMove = document.querySelector('.mousemove');
let deg = 0;

document.addEventListener('mousemove', (event) => {
    mouseMove.style.transform = 'rotate(' + deg + 'deg)';
    deg += 5;
})
