'use strict';

let burger = document.querySelector('.header__hamburger');
let ull = document.querySelector('.user-list__link');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    burger.classList.toggle('hidden');
}

ull.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);