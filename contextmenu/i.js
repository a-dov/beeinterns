let ctxMenu;
const kek = document.querySelector('.kek')
const handleCtxClick = (event) => {
    event.preventDefault();
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log(event);

    if (ctxMenu) {
        kek.removeChild(ctxMenu);
    }

    const menu = document.createElement('div');

    menu.style.position = 'absolute';
    menu.style.width = '200px';
    menu.style.height = '100px';
    menu.style.backgroundColor = 'white';
    menu.style.top = `${event.offsetY}px`;
    menu.style.left = `${event.offsetX}px`;
    menu.innerText = 'kek';

    kek.appendChild(menu);
    menu.addEventListener('click', handleCtxClick)
    ctxMenu = menu;
})

document.addEventListener('click', () => {
    if (ctxMenu) {
        kek.removeChild(ctxMenu);
        ctxMenu.removeEventListener('click', handleCtxClick)
        ctxMenu = undefined;
    }
})
