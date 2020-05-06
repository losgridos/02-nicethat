function showFeedback(event) {
  // 1
  event.preventDefault()
  if (!event.target.matches('.js-submit-btn')) return;

  let submitBtn = event.target.closest('.js-submit-btn');
  // console.log(submitBtn);

  let inputs = document.querySelectorAll('.input-email');
  // console.log(inputs);

  let inputsArray = Array.from(inputs);
  // console.log(inputsArray);

  // function validateEmail(email)
  //   {
  //       var re = /\S+@\S+\.\S+/;
  //       re.test(email);
  //   };

  inputsArray.forEach(input => {
    // console.log(input);
    // console.log(input.value);
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value == "") {
      // console.log('Please, fill in this text');
      //return false;
      let emptyValue = false;
      // return emptyValue;
      console.log(emptyValue);
      return
    } else if (!input.value.includes('@')) {
        console.log('please, include an @ in the email adress');
        return false;
    } else if (!input.value.includes('.')) {
        console.log('please, include a dot is missing in the email adress');
        return false;
      }

      if (regex.test(input.value) == true) {
      console.log('Thank you for subscribing! you\'ll receive a confirmation email shortly')
      return true;
    } else {
      console.log('Please provide a valid email address.');
      return true;
    }
  });

  // atPosition = input.value.indexOf('@');


  // atpos = emailID.indexOf("@");
  //        dotpos = emailID.lastIndexOf(".");

  //        if (atpos < 1 || ( dotpos - atpos < 2 )) {
  //           alert("Please enter correct email ID")
  //           document.myForm.EMail.focus() ;
  //           return false;
  //        }
  // 2
  // let arrayTags = Array.from(tagBtn.children);
  // // 3
  // arrayTags.forEach(tag => {
  //   tagBtn.before(tag);
  //   tag.classList.remove("u-hidden");
  // });s
  // // 4
  // tagBtn.remove();
}


let at = '@';
let dot = '.';

let together = at.localeCompare(dot);
console.log(together);


let parentElement = document.querySelector('body');

parentElement.addEventListener('click', showFeedback);
