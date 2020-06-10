import {elements} from '../view/base.js';
/////////////////

export function displayBurgerMenu() {
  elements.burgerMenu.classList.toggle("u-hidden");
  document.body.classList.toggle("no-scroll");
}

export function displayColorChange() {
  elements.nav.classList.toggle("nav-color-toggle");
}

export function addNavBorder() {
  elements.nav.classList.add('nav-border');
}

export function deleteNavBorder() {
  elements.nav.classList.remove('nav-border');
}

export function burgerIconAnimation() {
  elements.burgerIcon.classList.toggle('burger-animate')
}

export function closeCatMenu() {
  elements.catMenu.classList.toggle("u-hidden");
  elements.catIcon.classList.toggle("is-rotated");
  elements.catBgFreeze.classList.toggle("u-hidden");
  elements.catBgFreeze.classList.remove("is-visible");
  document.body.classList.add("no-scroll");
}




