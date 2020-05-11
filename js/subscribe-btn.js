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

  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let submitBtn = event.target.closest('.js-submit-btn');
  let inputs = document.querySelectorAll('.input-email');
  let inputsArray = Array.from(inputs);

  inputsArray.forEach(input => {
    if (input.value == "") {
      feedback.empty();
      feedback.successRemove();
      return
    } else if (!input.value.includes('@')) {
        feedback.noAt()
        feedback.successRemove();
        return false;
    } else if (!input.value.includes('.')) {
        feedback.noDot();
        feedback.successRemove();
        return false;
    } else if (regex.test(input.value) == true) {
        feedback.success();
        emailList.push(input.value);
        emailList.push(midweek.checked);
        console.log(emailList);
        return true;
    } else {
        feedback.invalid();
        feedback.successRemove();
        return false;
      }
  });
}



let feedback = {
  alertFeedback: function(text) {
    let successMessage = document.querySelector(".success-feedback");
    let alertMessage = document.querySelector(".alert-feedback");
    let forms = document.querySelectorAll('.newsletter-form');
    let formsArray = Array.from(forms);
    let htmlText = `<div class=\"alert-feedback-container alert-feedback\"><span class=\"material-icons alert-icon\">warning</span><p>${text}<p></div>`;

    formsArray.forEach(form => {
      if (document.body.contains(successMessage)) {
        successMessage.remove();
      }
      if (document.body.contains(alertMessage)) {
        alertMessage.remove();
      }

      feedback.insertHtml(form, "beforeend", htmlText);
      feedback.alertSetTimeout()
    });
  },
  empty: function() {
    feedback.alertFeedback("Please, fill in this text");
  },
  noAt: function() {
    feedback.alertFeedback("Please, include an @ in the email address");
  },
  noDot: function() {
    feedback.alertFeedback("Please, a dot is missing in the email address");
  },
  invalid: function() {
    feedback.alertFeedback("Please provide a valid email address");
  },
  success: function() {
    let successMessage = document.querySelector(".success-feedback");
    let alertMessage = document.querySelector(".alert-feedback");
    let forms = document.querySelectorAll('.newsletter-form');
    let formsArray = Array.from(forms);
    let htmlText = "<p class=\"success-feedback\">Thank you for subscribing! you\'ll receive a confirmation email shortly</p>";

    formsArray.forEach(form => {
      if (document.body.contains(successMessage)) {
        successMessage.remove();
      }

      feedback.insertHtml(form, "afterend", htmlText);
    });
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

