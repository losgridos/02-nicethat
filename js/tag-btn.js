// 1
// The tag-btn make an event delegation with the parent container
// of the article <main>. The event-target is on the "js-tag-btn" css class.
//
// 2
// The tags we want to show are inside the tag-icon with a "u-hidden" class
// We select then as children of the event-target, make an array and iterate
// them.
//
// 3
// In the iteration, whe remove the "u-hidden" class, move them outside the tagBtn
// into the tag container, where they became part of the container as a flex item.
//
// 4
// at the end, we remove the tagBtn.
//
// 5
// We select all mains (the parent element), convert them into an array and
// iterate over them with the addEventListener.

function hideAndShow(event) {
  // 1
  if (!event.target.matches('.js-tag-btn')) return;

  let tagBtn = event.target.closest('.js-tag-btn');
  // 2
  let arrayTags = Array.from(tagBtn.children);
  // 3
  arrayTags.forEach(tag => {
    tagBtn.before(tag);
    tag.classList.remove("u-hidden");
  });
  // 4
  tagBtn.remove();
}

let mains = document.querySelectorAll('main');
let mainsArray = Array.from(mains);

mainsArray.forEach(main => {
  main.addEventListener('click', hideAndShow);
});












