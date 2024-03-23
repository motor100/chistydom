import Swiper, { Navigation } from 'swiper';
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


// Set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
  let cookieNote = document.querySelector('#cookie_note');
  let cookieBtnAccept = cookieNote.querySelector('#cookie_accept');

  // Если куки we-use-cookie нет или она просрочена, то показываем уведомление
  if (!getCookie('we-use-cookie')) {
    cookieNote.classList.add('show');
  }

  // При клике на кнопку устанавливаем куку we-use-cookie на один год
  cookieBtnAccept.addEventListener('click', function () {
    setCookie('we-use-cookie', 'true', 365);
    cookieNote.classList.remove('show');
  });
}

checkCookies();


// Testimonials slider
const testimonialsSlider = document.querySelector('.testimonials-slider')

const slider = new Swiper('.testimonials-slider', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// FAQ accordeon
const accordeonItems = document.querySelectorAll('.accordeon .item');

accordeonItems.forEach((item) => {
  const title = item.querySelector('.title');
  title.onclick = function() {
    item.classList.toggle('active');
  }

});


