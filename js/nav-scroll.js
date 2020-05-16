const nav = document.querySelector('nav');

let scrollPos = 0;


function checkPosition() {
  let windowY = window.scrollY;

  if (windowY < scrollPos) {
    console.log("1-UP-window", windowY);
    console.log("2-UP-scrollPos", scrollPos);
    console.log("body", document.body.offsetHeight)
    // Scrolling UP
    nav.classList.add('is-fixed');
    document.body.style.paddingTop = nav.offsetHeight + 'px';

  } else {
    // Scrolling DOWN
    nav.classList.remove('is-fixed');
    document.body.style.paddingTop = "0px";
    console.log("1-DOWN-window", windowY);
    console.log("2-DOWN-scrollPos", scrollPos);
    console.log("body-down", document.body.offsetHeight)
  }
  scrollPos = windowY;

}

window.addEventListener('scroll', checkPosition);



function initOnTop() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // do nothing
  } else {
    nav.classList.remove('is-fixed');
    // nav.classList.remove('nav-border');
    document.body.style.paddingTop = '0px';
  }
}

window.addEventListener('scroll', initOnTop);
