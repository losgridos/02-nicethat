// Categories MENU
/////////////////////

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
  document.body.classList.toggle("no-scroll");
  nav.classList.add('nav-border');

  // Nav bottom border
  if (!categoriesMenu.classList.contains("u-hidden")) {
    nav.classList.remove('nav-border');
  }

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // do nothing
  } else {
    nav.classList.remove('nav-border');
  }

  // When burgerMenu is visible, click in Cat-Menu and burgerMenu is hidden
  if (document.querySelector('.burger-menu-grid').classList.contains("u-hidden")) {
    // do nothing
  } else {
    document.querySelector('.burger-menu-grid').classList.toggle("u-hidden");
    document.body.classList.add("no-scroll");
  }
}

 // MUSS FIX!

// click outside categories-menu
// document.body.addEventListener('click', catMenuOutsideClose);

// When clicking outside of the event target (catMenu), CLOSE
// function catMenuOutsideClose(event) {
//   if (event.target.matches('.categories-menu') || event.target.matches('.categories-row')
//     || event.target.matches('.navbar-categories') || event.target.matches('.navbar-categories-icon')
//     || event.target.matches('.burger-icon')) {
//     console.log("catMenuClose function here RETURN, doing nothing");
//     return; // Works!
//   } else {
//     document.querySelector('.categories-menu').classList.add("u-hidden");
//     document.querySelector('.navbar-categories-icon').classList.remove("is-rotated");
//     document.querySelector('.categories-bg-freeze').classList.add("u-hidden");
//     document.body.classList.remove("no-scroll");
//     console.log("removing no-scroll"); // Problem here, not allowing burgerMenuToggle adding a no-scroll class
//     // MUSS FIX!
//   }
// }


// Burger MENU
/////////////////////
const burgerIcon = document.querySelector('.burger-icon');
burgerIcon.addEventListener('click', burgerMenuToggle);

function burgerMenuToggle() {

  const burgerMenu = document.querySelector('.burger-menu-grid');
  burgerMenu.classList.toggle("u-hidden");

  document.body.classList.toggle("no-scroll"); // MUSS FIX!
  console.log("adding no-scroll");

  if (document.querySelector('.categories-menu').classList.contains("u-hidden")) {
    // do nothing
  } else {
    console.log("catMenu is visible");
    document.querySelector('.categories-menu').classList.toggle("u-hidden");
    document.querySelector('.navbar-categories-icon').classList.toggle("is-rotated");
    document.querySelector('.categories-bg-freeze').classList.toggle("u-hidden");
    document.body.classList.add("no-scroll");
  }
};












