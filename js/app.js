/////////////////////////
// View Controller
/////////////////////////

let view = (function() {

  const CSSClasses = {
    isHidden: 'u-hidden',
    showTagsBtn: '.js-tag-btn',
  };

  return {

    displayTags: function(event) {
      // if the click not macth with tagBtn, return
      if (!event.target.matches(CSSClasses.showTagsBtn)) return;

      let tagBtn = event.target.closest(CSSClasses.showTagsBtn);
      // select all hidden tags elements inside the target
      let arrayTags = Array.from(tagBtn.children);
      // putting the tag elements before the tagBtn
      // removing the class "u-hidden"
      arrayTags.forEach(tag => {
        tagBtn.before(tag);
        tag.classList.remove(CSSClasses.isHidden);
      });
      // removing the tagBtn
      tagBtn.remove();
    },

    getCSSClasses: function() {
      return CSSClasses;
    },

  };

})();



/////////////////////////
// App Controller
/////////////////////////

let app = (function(viewCtrl) {

  let setupEventListeners = function() {
    const classes = viewCtrl.getCSSClasses();

    // Show Tags Button
    document.addEventListener('click', viewCtrl.displayTags);
  }

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(view);

app.init();








