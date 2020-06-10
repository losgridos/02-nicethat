import {elements} from '../view/base.js';
import * as catView from '../view/navCatMenuView.js';
import * as navView from '../view/navView.js';
/////////////////////
console.log("CatMenu is connected");

// Categories MENU
/////////////////////

export function catMenuToggle() {
  catView.displayCatMenu();

  // When CatMenu is-visible, navBorder is-hidden
  if (!elements.catMenu.classList.contains("u-hidden")) {
    navView.deleteNavBorder();
  };
  navView.initNavBorder();

  // Close burgerMenu if open when clicking in catMenu
  if (!elements.burgerMenu.classList.contains("u-hidden")) {
    catView.closeBurgerMenu();
  };
}


// When clicking outside of the event target (catMenu), CLOSE
export function outsideClose(event) {
  while (elements.catBgFreeze.classList.contains("is-visible")) {
    if (event.target.matches('.categories-menu') || event.target.matches('.categories-row')
      || event.target.matches('.navbar-categories') || event.target.matches('.navbar-categories-icon')
      || event.target.matches('.burger-icon')) {
      return;
    } else {
      catView.hideCatMenu();
      // if nav do not have a border when BGFreeze is hidden, add a border.
      if (!elements.nav.classList.contains("nav-border")) {
        navView.addNavBorder();
      }
      navView.initNavBorder();
    }
  }
}
