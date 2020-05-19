// click in categories >
let categoriesBtn = document.querySelector('.navbar-categories');
categoriesBtn.addEventListener('click', menuToggle);

// click outside categories-menu
document.body.addEventListener('click', closeMenu);


function menuToggle() {
  let categoriesMenu = document.querySelector('.categories-menu');
  let categoriesIcon = document.querySelector('.navbar-categories-icon');
  let categoriesBgFreeze = document.querySelector('.categories-bg-freeze');

  categoriesMenu.classList.toggle("u-hidden");
  categoriesIcon.classList.toggle("is-rotated");
  categoriesBgFreeze.classList.toggle("u-hidden");
  nav.classList.toggle('nav-border');
  document.body.classList.toggle("no-scroll");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // do nothing
  } else {
    // nav.classList.remove('nav-border');
  }
}


function closeMenu(event) {
  if (event.target.matches('.categories-menu') || event.target.matches('.categories-row') || event.target.matches('.navbar-categories')){
    return;
  } else {
    if (document.querySelector('.navbar-categories-icon').classList.contains("is-rotated")) {
      menuToggle();
    }
  }
}



