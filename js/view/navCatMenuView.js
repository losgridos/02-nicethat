import { elements } from '../view/base.js';
import * as navView from '../view/navView.js';
import * as burgerView from '../view/navBurgerMenuView.js';
import { navColorToggle } from '.././model/NavBurgerMenu.js';
/////////////////////

export function displayCatMenu() {
  elements.catMenu.classList.toggle("u-hidden");
  elements.catIcon.classList.toggle("is-rotated");
  elements.catBgFreeze.classList.toggle("u-hidden");
  elements.catBgFreeze.classList.toggle("is-visible");
  navView.addNavBorder();
  navView.scrollFreezeToggle();
}

export function closeBurgerMenu() {
  elements.burgerMenu.classList.toggle("u-hidden");
  navView.addScrollFreeze();
  burgerView.burgerIconAnimation();
  navColorToggle();
}

export function hideCatMenu() {
  elements.catMenu.classList.add("u-hidden");
  elements.catIcon.classList.remove("is-rotated");
  elements.catBgFreeze.classList.add("u-hidden");
  elements.catBgFreeze.classList.remove("is-visible");
  navView.deleteScrollFreeze();
}
