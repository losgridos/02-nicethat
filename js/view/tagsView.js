/////////////////////////
// Tags View
/////////////////////////
import { elements }  from './base.js';

console.log("tagsView is connected");


export const displayItem = (item, itemParent) => {
  // move the item outside the parent container
  itemParent.before(item);
  // show item
  item.classList.remove('u-hidden');
}

export const deleteItem = (item) => {
  item.remove();
}
