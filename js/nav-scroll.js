const nav = document.querySelector('nav');

let scrollPos = 0;


function checkPosition() {
  let windowY = window.scrollY;

  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('is-fixed');
    nav.classList.add('nav-border');
    document.body.style.paddingTop = nav.offsetHeight + 'px';

  } else {
    // Scrolling DOWN
    nav.classList.remove('is-fixed');
    nav.classList.remove('nav-border');
    document.body.style.paddingTop = "0px";
  }
  scrollPos = windowY;

}

window.addEventListener('scroll', checkPosition);


function initOnTop() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // do nothing
  } else {
    nav.classList.remove('is-fixed');
    nav.classList.remove('nav-border');
    document.body.style.paddingTop = '0px';
  }
}

window.addEventListener('scroll', initOnTop);
