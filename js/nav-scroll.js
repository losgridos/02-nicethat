const nav = document.querySelector('nav');

// let scrollPos = 0;

// function checkPosition() {
//   let windowY = window.scrollY;
//   if (scrollPos > 90) {
//     // Scrolling UP
//     nav.classList.remove('is-visible');
//     nav.classList.add('is-hidden');
//   } else if (windowY < scrollPos) {
//     // Scrolling DOWN
//     nav.classList.remove('is-hidden');
//     nav.classList.add('is-visible');
//   }
//   scrollPos = windowY;
//   console.log(scrollPos);
// }

// window.addEventListener('scroll', checkPosition);

//////////////








// WORKING CODE

let scrollPos = 0;

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    console.log(scrollPos);
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  }
  //console.log(windowY);
  scrollPos = windowY;
  //console.log(scrollPos);
  //console.log(scrollPos + 20);

}

window.addEventListener('scroll', checkPosition);


// ADD Border bottom but not from 0-50 scroll
window.onscroll = function() {noBorder()};

function noBorder() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    nav.classList.add('nav-border');
  } else {
    nav.classList.remove('nav-border');
  }
}
