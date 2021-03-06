// Categories MENU
/////////////////////

const nav = document.querySelector('nav'); // will be change with elements.nav from base

// click in categories >
let categoriesBtn = document.querySelector('.navbar-categories');
categoriesBtn.addEventListener('click', catMenuToggle);


function catMenuToggle() {
  let categoriesMenu = document.querySelector('.categories-menu');
  let categoriesIcon = document.querySelector('.navbar-categories-icon');
  let categoriesBgFreeze = document.querySelector('.categories-bg-freeze');

  categoriesMenu.classList.toggle("u-hidden");
  categoriesIcon.classList.toggle("is-rotated");
  categoriesBgFreeze.classList.toggle("u-hidden");
  categoriesBgFreeze.classList.toggle("is-visible");
  nav.classList.add('nav-border');
  document.body.classList.toggle("no-scroll");

  // Nav bottom border
  if (!categoriesMenu.classList.contains("u-hidden")) {
    nav.classList.remove('nav-border');
  };
  noNavBorder();

  // When burgerMenu is visible, click in Cat-Menu and burgerMenu will hide
  if (!document.querySelector('.burger-menu-grid').classList.contains("u-hidden")) {
    // do nothing
    document.querySelector('.burger-menu-grid').classList.toggle("u-hidden");
    document.body.classList.add("no-scroll");
    burgerIconAnimation();
    navColorToggle()
  };
}


// click outside categories-menu Event
document.body.addEventListener('click', catMenuOutsideClose);

// When clicking outside of the event target (catMenu), CLOSE
function catMenuOutsideClose(event) {
  if (document.querySelector('.categories-bg-freeze').classList.contains("is-visible")) {
    if (event.target.matches('.categories-menu') || event.target.matches('.categories-row')
      || event.target.matches('.navbar-categories') || event.target.matches('.navbar-categories-icon')
      || event.target.matches('.burger-icon')) {
      return;
    } else {
      document.querySelector('.categories-menu').classList.add("u-hidden");
      document.querySelector('.navbar-categories-icon').classList.remove("is-rotated");
      document.querySelector('.categories-bg-freeze').classList.add("u-hidden");
      document.querySelector('.categories-bg-freeze').classList.remove("is-visible");
      document.body.classList.remove("no-scroll");
      // if nav do not have a border when BGFreeze is hidden, add a border.
      if (!nav.classList.contains("nav-border")) {
        nav.classList.add('nav-border');
      }
      noNavBorder();
    }
  }
}

// Burger MENU
/////////////////////
const burgerIcon = document.querySelector('.burger-icon');
burgerIcon.addEventListener('click', burgerMenuToggle);

function burgerMenuToggle() {
  const burgerMenu = document.querySelector('.burger-menu-grid');
  burgerMenu.classList.toggle("u-hidden");
  document.body.classList.toggle("no-scroll");
  // burger icon animation
  burgerIconAnimation();
  // navbar colors toggle
  navColorToggle();
  // close the catMenu if already open
  if (!document.querySelector('.categories-menu').classList.contains("u-hidden")) {
    document.querySelector('.categories-menu').classList.toggle("u-hidden");
    document.querySelector('.navbar-categories-icon').classList.toggle("is-rotated");
    document.querySelector('.categories-bg-freeze').classList.toggle("u-hidden");
    document.querySelector('.categories-bg-freeze').classList.remove("is-visible");
    document.body.classList.add("no-scroll");
  };
}

function noNavBorder() {
  // if the scrollTop of the body is in the start position, remove the navBorder
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // do nothing
  } else {
    nav.classList.remove('nav-border');
  }
}

function burgerIconAnimation() {
  burgerIcon.classList.toggle('burger-animate')
}

function navColorToggle() {
  nav.classList.toggle("nav-color-toggle");
  // if catMenu is-visible, remove navBorder
  if (!document.querySelector('.categories-menu').classList.contains("u-hidden")) {
    nav.classList.remove('nav-border');
  } else {
    // if nav do not have a border when catMenu is hidden, add a border.
    if (!nav.classList.contains("nav-border")) {
      nav.classList.add('nav-border');
    }
    noNavBorder();
  }
}
