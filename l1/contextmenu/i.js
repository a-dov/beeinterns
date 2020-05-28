let ctxMenu;
const container = document.querySelector('.container');
const handleCtxClick = (event) => {
  event.preventDefault();
};

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  console.log(event);

  if (ctxMenu) {
    container.removeChild(ctxMenu);
  }

  const menu = document.createElement('div');

  menu.style.position = 'absolute';
  menu.style.width = '200px';
  menu.style.height = '100px';
  menu.style.backgroundColor = 'white';
  menu.style.top = `${event.offsetY}px`;
  menu.style.left = `${event.offsetX}px`;
  menu.innerText = 'Kontextnoe menu';

  container.appendChild(menu);

  menu.addEventListener('click', handleCtxClick);
  ctxMenu = menu;
});

document.addEventListener('click', () => {
  if (ctxMenu) {
    container.removeChild(ctxMenu);
    ctxMenu.removeEventListener('click', handleCtxClick);
    ctxMenu = undefined;
  }
});
