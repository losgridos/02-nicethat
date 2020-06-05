/////////////////////////
// Controller imports
/////////////////////////
import * as tagsView from './view/tagsView.js';
import {elements} from './view/base.js';


/////////////////////////
// Tags Controller
/////////////////////////

document.addEventListener('click', event => {
  // if the click doesnt macht the css class, then return
  if (!event.target.matches('.js-tag-btn')) return;

  // select the tagBtn event
  const tagBtn = event.target.closest('.js-tag-btn');

  Array.from(tagBtn.children).forEach(tag => {
    tagsView.displayItem(tag, tagBtn);
  });

  tagsView.deleteItem(tagBtn);
});
