// emailList store all the submissions
let emailList = [];

function subscribeBtn() {
  let parentElement = document.querySelector('body');
  parentElement.addEventListener('click', showFeedback);
};

subscribeBtn();


function showFeedback(event) {
  if (!event.target.matches('.js-submit-btn')) return;
  event.preventDefault()

  let submitBtn = event.target.closest('.js-submit-btn');
  let myInput = submitBtn.parentElement.firstElementChild;
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (myInput.value == "") {
    feedback.empty();
    feedback.successRemove();
    return
  } else if (!myInput.value.includes('@')) {
      feedback.noAt()
      feedback.successRemove();
      return false;
  } else if (!myInput.value.includes('.')) {
      feedback.noDot();
      feedback.successRemove();
      return false;
  } else if (regex.test(myInput.value) == true) {
      feedback.success();
      emailList.push(myInput.value);
      emailList.push(midweek.checked);
      console.log(emailList);
      return true;
  } else {
      feedback.invalid();
      feedback.successRemove();
      return false;
    }
}

let feedback = {
  alertFeedback: function(text) {
    let submitBtn = event.target.closest('.js-submit-btn');
    let form = submitBtn.parentElement;
    let successMessage = document.querySelector(".success-feedback");
    let alertMessage = document.querySelector(".alert-feedback");
    let alertText = `<div class=\"alert-feedback-container alert-feedback\"><span class=\"material-icons alert-icon\">warning</span><p>${text}<p></div>`;

    if (form.contains(successMessage)) {
      successMessage.remove();
    }
    if (form.contains(alertMessage)) {
      alertMessage.remove();
    }

    this.insertHtml(form, "beforeend", alertText);
    this.alertSetTimeout();
  },
  empty: function() {
    this.alertFeedback("Please, fill in this text");
  },
  noAt: function() {
    this.alertFeedback("Please, include an @ in the email address");
  },
  noDot: function() {
    this.alertFeedback("Please, a dot is missing in the email address");
  },
  invalid: function() {
    this.alertFeedback("Please provide a valid email address");
  },
  success: function() {
    let submitBtn = event.target.closest('.js-submit-btn');
    let form = submitBtn.parentElement;
    let successMessage = document.querySelector(".success-feedback");
    let alertMessage = document.querySelector(".alert-feedback");
    let successText = "<p class=\"success-feedback\">Thank you for subscribing! you\'ll receive a confirmation email shortly</p>";

    if (document.body.contains(successMessage)) {
      successMessage.remove();
    }

    feedback.insertHtml(form, "afterend", successText);
  },
  successRemove: function() {
    let successMessage = document.querySelector(".success-feedback");
    if (document.body.contains(successMessage)) {
      successMessage.remove();
    }
  },
  alertRemove: function() {
    let alertMessage = document.querySelector(".alert-feedback");
    alertMessage.remove()
  },
  alertSetTimeout: function() {
    setTimeout(feedback.alertRemove, 2800);
  },
  insertHtml: function(element, position, html) {
    element.insertAdjacentHTML(position, html);
  },
};
