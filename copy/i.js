const mouseMove = document.querySelector('.mousemove');
let deg = 0;

document.addEventListener('copy', (event) => {
    event.preventDefault(); // prevent copying
    mouseMove.style.transform = 'rotate(' + deg + 'deg)';
    deg += 5;
    alert('SCUKO NE TROGAI TEXT');
    navigator.clipboard.writeText('ha loh!');
})
