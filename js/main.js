'use strict';

var mobileBtn = document.querySelector('#mobile-menu-button');
var mainNav = document.querySelector('body');


function toggleMenu() {
    document.body.classList.toggle('open');
    if (document.body.classList.contains('open')) {
        mobileBtn.innerHTML = 'X';
    } else {
        mobileBtn.innerHTML = '☰';
    }
}

function toggleModal() {
    var elModal = document.querySelector('.modal');
    elModal.classList.toggle('show');
}