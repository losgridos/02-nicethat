import {elements} from '../view/base.js';
import * as burgerView from '../view/navBurgerMenuView.js';
import * as navView from '../view/navView.js';
/////////////////////


// Burger MENU
/////////////////////

export function burgerMenuToggle() {
  burgerView.displayBurgerMenu();
  // burger icon animation
  burgerView.burgerIconAnimation();
  // navbar colors toggle
  navColorToggle();
  // close the catMenu if already open
  if (!elements.catMenu.classList.contains("u-hidden")) {
    burgerView.closeCatMenu();
  };
}


export function navColorToggle() {
  burgerView.displayColorChange();
  // if catMenu is-visible, remove navBorder
  if (!elements.catMenu.classList.contains("u-hidden")) {
    navView.deleteNavBorder();
  } else {
    // if nav do not have a border when catMenu is hidden, add a border.
    if (!elements.nav.classList.contains("nav-border")) {
      navView.addNavBorder();
    }
    navView.initNavBorder();
  }
}
