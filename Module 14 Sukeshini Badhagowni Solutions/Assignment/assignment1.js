const signupForm = document.querySelector('#signup');
const msg = document.querySelector('#final-msg')
const nameErr = document.querySelector('#nameError')
const emailErr = document.querySelector('#emailError');
const passwordErr = document.querySelector('#passwordError');
const confirmPErr = document.querySelector('#CpasswordError');
function validate(formValues){
    let error = {};
    if (!formValues.fullName) {
        error.fullName = "Name cannot be empty"
        
    }
    else if (formValues.fullName.length < 3 || formValues.fullName.length > 20) {
        error.fullName = "Name characters should be between 3 to 20 characters"
    }
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.emailId ) {
        error.emailId = "Email Id cannot be empty";
    }
    
    else if (!emailRegex.test(formValues.emailId )) {
        error.emailId = "Kindly enter a valid email";
    }
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if (!formValues.password ) {
        error.password = "Password cannot be empty";
    }
    else if (!passwordRegex.test(formValues.password)) {
        error.password = "Password need to contain min 6 to max 20 charcaters which should include atleast one number,one uppercase, one lowercase and one special character ";
    }
    if(formValues.confirmPassword !== formValues.password){
        error.confirmPassword = "Passwords does not match"
    }
    return error;
}

signupForm.addEventListener('submit', (e) => {
    // let fullName;
    // let emailId;
    // let password;
    // let confirmPassword;
    e.preventDefault();
    const values = Array.from(e.target);
  

    const formValues = {
        fullName : values[0].value,
        emailId :values[1].value,
        password : values[2].value,
        confirmPassword : values[3].value
    };
    const errors = validate(formValues)
    if(Object.keys(errors).length > 0){
        nameErr.innerText = errors.fullName || "";
        emailErr.innerText = errors.emailId || "";
        passwordErr.innerText = errors.password || "";
        confirmPErr.innerText = errors.confirmPassword || "";
    } else {
        // msg.innerText = "You have successfully signed up!!"
        // nameErr.innerText =  "";
        // emailErr.innerText =  "";
        // passwordErr.innerText = "";
        // confirmPErr.innerText =  "";
        window.location.href = "./signup.html"
    }
});
// const formInputs = document.querySelectorAll("form input");
document.addEventListener('DOMContentLoaded', function () {
const inputField = document.querySelectorAll("input")
inputField.forEach((input, index) => {
  input.addEventListener("keydown", function (event) {
    
    if (event.key === "Enter") {
     event.preventDefault();
    const nextInput = inputField[index+1];
    if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
      }
    }
  });
});
})

















//const formInputs = document.querySelectorAll('form-input');

values.forEach((input, index) => {
  input.addEventListener('keydown', function (event) {
    
    if (event.keyCode === 13) {
     event.preventDefault();
     if(index < values.length -1) {
        formInputs[index+1].focus()
     }

    //   const nextInput = input.nextElementSibling;
    //   if (nextInput) {
    //     nextInput.focus();
    //   }
    }
  });
});

