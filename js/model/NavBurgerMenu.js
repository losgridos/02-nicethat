import {elements} from '../view/base.js';
import * as burgerView from '../view/navBurgerMenuView.js';
/////////////////


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


function initNavBorder() {
  // if the scrollTop of the body is in the start position, remove the navBorder
  if ((!document.body.scrollTop > 0) && (!document.documentElement.scrollTop > 0)) {
    burgerView.deleteNavBorder();
  }
}


function navColorToggle() {
  burgerView.displayColorChange();
  // if catMenu is-visible, remove navBorder
  if (!elements.catMenu.classList.contains("u-hidden")) {
    burgerView.deleteNavBorder();
  } else {
    // if nav do not have a border when catMenu is hidden, add a border.
    if (!elements.nav.classList.contains("nav-border")) {
      burgerView.addNavBorder();
    }
    initNavBorder();
  }
}
