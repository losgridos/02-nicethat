let categoriesBtn = document.querySelector('.navbar-categories');
console.log(categoriesBtn);
categoriesBtn.addEventListener('click', menuToggle);

function menuToggle(event) {
  let categoriesMenu = document.querySelector('.categories-menu');
  let categoriesIcon = document.querySelector('.navbar-categories-icon');
  let categoriesBgFreeze = document.querySelector('.categories-bg-freeze');
  // console.log(categoriesMenu);
  categoriesMenu.classList.toggle("u-hidden");
  categoriesIcon.classList.toggle("is-rotated");
  categoriesBgFreeze.classList.toggle("u-hidden");
  nav.classList.toggle('nav-border');
  // document.body.style.overflow = 'hidden';
  document.body.classList.toggle("no-scroll");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // do nothing
  } else {
    nav.classList.remove('nav-border');
  }

}


// function closeMenu(event) {
//   // 1
//   if (event.target.matches('.categories-menu')) return;
//   // if (!event.target.matches('.categories-bg-freeze'));
//   console.log("hey how");
//   // document.body.classList.add("no-scroll");
//   // document.body.classList.remove("no-scroll");
// }


// document.body.addEventListener('click', closeMenu);
