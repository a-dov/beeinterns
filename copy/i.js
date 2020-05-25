document.addEventListener('copy', (event) => {
  event.preventDefault(); // prevent copying
  alert('SCUKO NE TROGAI TEXT');
  navigator.clipboard.writeText('ha loh!');
});
