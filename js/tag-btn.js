function hideIcon(event) {
  if (!event.target.matches('.tag-icon')) return;
  // if (event.target.className != 'tag-icon') return;

  // let tagBtn = document.querySelector(".tag-icon");
  let tagBtn = event.target.closest('.tag-icon');

  let icon = document

  // console.log(tagBtn);

  // tagBtn.nextElementSibling.classList.add("show");

  console.log(tagBtn);
  console.log(tagBtn.children);

  let arrayTag = Array.from(tagBtn.children);
  arrayTag.forEach(tag => {
    tag.classList.remove("hidden");
    tag.classList.add("show");
    tagBtn.before(tag);
  });


  tagBtn.remove();


  // WORKS!
  // tagBtn.firstElementChild.classList.remove("hidden");
  // tagBtn.firstElementChild.classList.add("show");
  // tagBtn.before(tagBtn.firstElementChild);
  // tagBtn.remove();


  // let pane = event.target.closest('.pane');
  // pane.remove();
}

// function showTags(event) {
//   if (!event.target.matches('.tag-icon')) return;
//   let tags = document.querySelectorAll('.hidden-tags')
//   let tag4 = document.getElementById("hidden4");
//   // console.log(tag4);
//   // console.log(event.target.id);
//   if (event.target.id === "span4") {
//     tag4.classList.add("show");
//   }

//   // tags.forEach(function(tag, index) {
//   //   tag.classList.add("show");
//   // });
// }



  // let tags = document.querySelectorAll('.hidden-tags');

  // tags[0].classList.remove('hidden')
  // tags[0].classList.add('show')

  // tags[1].classList.remove('hidden')
  // tags[1].classList.add('show')


  // tags.forEach(tag => {
  //   console.log(tag);

  // tag.classList.remove('hidden')[0];
  // tag.classList.add('show')[0];
  // });



  let container = document.querySelector('main');
  container.addEventListener('click', hideIcon);
  //container.addEventListener('click', showTags);

// console.log(container);

// let tagBtns = document.querySelectorAll(".tag-icon");
  // tagBtns.forEach(tagBtn => {
  //   console.log(tagBtn);
  //   tagBtn.remove();
  // });

// panes.forEach(pane => {
//     pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//     function removePane() {
//       pane.remove();
//     }
