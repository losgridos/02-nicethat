import {elements} from '../view/base.js';
import * as navView from '../view/navView.js';
/////////////////

console.log("nav model is connected");
console.log("nav View is connected to nav model");

let scrollPos = 0;

function checkPosition() {
  let windowY = window.scrollY;

  if (windowY < scrollPos) {
    // Scrolling UP
    navView.displayNav();
  } else {
    // Scrolling DOWN
    navView.hideNav();
  }
  scrollPos = windowY;
}


function initNav() {
  if ((!document.documentElement.scrollTop > 0) && (!document.body.scrollTop > 0))
    navView.initNavPosition();
}

export {checkPosition, initNav};
