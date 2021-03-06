/////////////////////////
// Controller imports
/////////////////////////
import {elements} from './view/base.js';
import * as tagsView from './view/tagsView.js';
import * as navModel from './model/Nav.js';
import * as smoothModel from './model/SmoothScroll.js';
import * as navBurgerModel from './model/NavBurgerMenu.js';
import * as navCatModel from './model/NavCatMenu.js';
// import * as navView from './view/navView.js';



/////////////////////////
// Tags Controller
/////////////////////////

document.addEventListener('click', event => {
  // if the click doesnt macht the css class, then return
  if (!event.target.matches('.js-tag-btn')) return;

  // select the tagBtn event
  const tagBtn = event.target.closest('.js-tag-btn');

  Array.from(tagBtn.children).forEach(tag => {
    tagsView.displayItem(tag, tagBtn);
  });

  tagsView.deleteItem(tagBtn);
});


/////////////////////////
// Nav Controller
/////////////////////////
window.addEventListener('scroll', navModel.checkPosition);
window.addEventListener('scroll', navModel.initNav);

// Nav / Burger Menu Controller
elements.burgerIcon.addEventListener('click', navBurgerModel.burgerMenuToggle);

// Nav / Categories Menu Controller
elements.catBtn.addEventListener('click', navCatModel.catMenuToggle);

document.body.addEventListener('click', navCatModel.outsideClose);


/////////////////////////
// Footer Logo Smooth-Scroll Controller
/////////////////////////

elements.footerLogo.addEventListener('click', () => {
  smoothModel.smoothScroll('body', 3000);
});



