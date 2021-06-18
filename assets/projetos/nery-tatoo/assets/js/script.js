/*Slide*/
import {SlideNav} from './modules/slide.js';
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
/*
slide.changeSlide(0);
slide.activePrevSlide();
*/


/*Header-animation*/
import Header from './modules/header.js'
Header()


/*menuMobile*/
import menuMobile from './modules/menuMobile.js';
menuMobile();