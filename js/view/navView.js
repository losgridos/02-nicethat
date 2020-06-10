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


// Function for the MENUS
/////////////////////

export function initNavBorder() {
  // if the scrollTop of the body is in the start position, remove the navBorder
  if ((!document.body.scrollTop > 0) && (!document.documentElement.scrollTop > 0))
    deleteNavBorder();
}

export function addNavBorder() {
  elements.nav.classList.add('nav-border'); // function in navView
}

export function deleteNavBorder() {
  elements.nav.classList.remove('nav-border'); // function in navView
}

export function scrollFreezeToggle() {
  document.body.classList.toggle("no-scroll");
}

export function addScrollFreeze() {
  document.body.classList.add("no-scroll");
}

export function deleteScrollFreeze() {
  document.body.classList.remove("no-scroll");
}

















