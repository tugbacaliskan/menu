const navbar = document.querySelector('.navbar');
const btnToggle = document.querySelector('#menuToggle');

btnToggle.addEventListener('click', toggle);

function toggle() {
    if (navbar.style.transform == 'translateX(-100%)') {
        navbar.style.transform = 'translateX(0)';
    }
    else {
        navbar.style.transform = 'translateX(-100%)';
    }
}