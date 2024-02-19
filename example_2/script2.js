'use strict';

let filterMenu = document.querySelector('.filter__menu');
let filterLabel = document.querySelector('.filter-global__label');
let filtersGlobal = document.querySelector('.filters-global');
let filterImg = document.querySelector('.filter-global__img');

filtersGlobal.addEventListener('click', function() {
    filterMenu.classList.toggle('hidden');
    filterLabel.classList.toggle('filter-pink');
    filterImg.classList.toggle('filter-pink-img');

    if (filterImg.getAttribute('src') === 'images/filter.svg') {
        filterImg.setAttribute('src', 'images/filter-active.svg');
    } else {
        filterImg.setAttribute('src', 'images/filter.svg');
    }
});

let filterSizes = document.querySelector('.filter__sizes');
let filterMiniSize = document.querySelector('.filter-mini__size');
filterMiniSize.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});