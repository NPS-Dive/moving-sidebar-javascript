'use strict';

const sideBar = document.querySelector('.side-bar');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
   sideBar.classList.toggle('active');
   sideBar.style.visibility = 'visible';
});