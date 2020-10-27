$(function(){
  $('.photo__slider').slick({
    prevArrow: '<button class="slider-arrow slider-prev" type="button"><img src="images/slider-arrow-left.svg"></button>',
    nextArrow: '<button class="slider-arrow slider-next" type="button"><img src="images/slider-arrow-right.svg"></button>',
    autoplay: true
  });
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('menu__btn--pressed');
  menuList.classList.toggle('menu__list--active');
});



const footerBtnFirst = document.querySelector('.footer__item-btn--first');
const footerBtnSecond = document.querySelector('.footer__item-btn--second');
const footerBtnThird = document.querySelector('.footer__item-btn--third');
const footerBtnFourth = document.querySelector('.footer__item-btn--fourth');

const footerListFirst = document.querySelector('.footer__item-list--first');
const footerListSecond = document.querySelector('.footer__item-list--second');
const footerListThird = document.querySelector('.footer__item-list--third');
const footerListFourth = document.querySelector('.footer__item-list--fourth');

footerBtnFirst.addEventListener('click', function() {
  footerBtnFirst.classList.toggle('footer__item-btn--pressed');
  footerListFirst.classList.toggle('footer__item-list--active');
});

footerBtnSecond.addEventListener('click', function() {
  footerBtnSecond.classList.toggle('footer__item-btn--pressed');
  footerListSecond.classList.toggle('footer__item-list--active');
});

footerBtnThird.addEventListener('click', function() {
  footerBtnThird.classList.toggle('footer__item-btn--pressed');
  footerListThird.classList.toggle('footer__item-list--active');
});

footerBtnFourth.addEventListener('click', function() {
  footerBtnFourth.classList.toggle('footer__item-btn--pressed');
  footerListFourth.classList.toggle('footer__item-list--active');
});