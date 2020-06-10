import {elements} from '../view/base.js';
import * as navView from '../view/navView.js';

/////////////////

export function displayBurgerMenu() {
  elements.burgerMenu.classList.toggle("u-hidden");
  navView.scrollFreezeToggle();
}

export function displayColorChange() {
  elements.nav.classList.toggle("nav-color-toggle");
}

export function burgerIconAnimation() {
  elements.burgerIcon.classList.toggle('burger-animate')
}

export function closeCatMenu() {
  elements.catMenu.classList.toggle("u-hidden");
  elements.catIcon.classList.toggle("is-rotated");
  elements.catBgFreeze.classList.toggle("u-hidden");
  elements.catBgFreeze.classList.remove("is-visible");
  navView.addScrollFreeze();
}
