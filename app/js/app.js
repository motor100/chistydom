// import Swiper, { Navigation } from 'swiper';
// import AirDatepicker from 'air-datepicker';
// import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import IMask from 'imask';

import ImageCompare from "image-compare-viewer";


// Image compare
// https://image-compare-viewer.netlify.app/
// https://github.com/kylewetton/image-compare-viewer
const viewers = document.querySelectorAll(".image-compare");
  
viewers.forEach((element) => {
  let view = new ImageCompare(element).mount();
});




// Footer year
let footerCurrentYear = document.querySelector('.footer-current-year');
const now = new Date();

footerCurrentYear.innerText = now.getFullYear();