import {elements} from './base.js';
export {displayNav, hideNav, initNavPosition};
console.log("nav View is connected");



const displayNav = () => {
  elements.nav.classList.remove('u-bg-white');
  elements.nav.classList.add('is-fixed', 'nav-border');
  document.body.style.paddingTop = elements.nav.offsetHeight + 'px';
}

const hideNav = () => {
  elements.nav.classList.remove('is-fixed', 'nav-border');
  document.body.style.paddingTop = "0px";
}

const initNavPosition = () => {
  elements.nav.classList.add('u-bg-white');
  hideNav();
}
