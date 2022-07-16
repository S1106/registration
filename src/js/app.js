// console.log('hello');

// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

// import Swiper, {Navigator, Pagination} from 'swiper';

// const swiper = new Swiper();

'use strict';

let wrap = document.querySelector('.wrapper');

console.log(wrap);

wrap.addEventListener('click',(event) => {
    let t = event.target;
    console.log(t);
    if(t.matches('.btn')) {
        wrap.querySelector('.wrapper__bg').classList.toggle('wrapper__bg--active');
        wrap.querySelector('.container1').classList.toggle('container1--active');
        wrap.querySelector('.container2').classList.toggle('container2--active');
    }
});