let off = document.querySelector('h1');
let overlay = document.querySelector('.overlay');
let nav = document.querySelector('.nav')

off.addEventListener('click', () => {
    if (off.textContent === 'Power Off') {
        off.textContent = 'Power On';
        // overlay.style.display = 'block';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        nav.style.zIndex = -3;
        overlay.classList.toggle('overlay-display');
    } else {
        off.textContent = 'Power Off';
        nav.style.zIndex = 1;
        overlay.style.opacity = '0';
        // overlay.style.display = 'none';
        overlay.style.visibility = 'hidden';
    }

})

console.log(overlay);