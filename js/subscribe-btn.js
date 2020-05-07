let feedback = {
  empty: function() {
    alert("Please, fill in this text");
  },
  noAt: function() {
    alert("please, include an @ in the email address");
  },
  noDot: function() {
    alert("please, a dot is missing in the email address");
  },
  invalid: function() {
    alert("Please provide a valid email address");
  },
  success: function() {
    let submitBtns = document.querySelectorAll('.js-submit-btn');
    let submitBtnsArray = Array.from(submitBtns);

    submitBtnsArray.forEach(submitBtn => {
      let success = document.querySelector(".success-feedback");
      if (document.body.contains(success)) {
        success.remove();
      }
      submitBtn.insertAdjacentHTML("afterend", "<p class=\"success-feedback\">Thank you for subscribing! you\'ll receive a confirmation email shortly</p>")
    });
  },
  successRemove: function() {
    let success = document.querySelector(".success-feedback");
    if (document.body.contains(success)) {
      success.remove();
    }
  }
};




function showFeedback(event) {
  if (!event.target.matches('.js-submit-btn')) return;
  event.preventDefault()
  let submitBtn = event.target.closest('.js-submit-btn');



  let inputs = document.querySelectorAll('.input-email');
  let inputsArray = Array.from(inputs);

  // let success = document.querySelector(".success-feedback");

  inputsArray.forEach(input => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      }

      if (regex.test(input.value) == true) {
      feedback.success();
      emailList.push(input.value);
      emailList.push(midweek.checked);
      console.log(emails);
      // addEmail();
      return true;
    } else {
      feedback.invalid();
      feedback.successRemove();
      return false;
    }
  });
}

let emailList = [];




let parentElement = document.querySelector('body');
parentElement.addEventListener('click', showFeedback);
