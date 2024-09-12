//? ============================================= //
//? ===== all variables were declared here ===== //
//? =========================================== //
// ===== demo user email & password for login ===== //
const userEmail = "kawsar@gmail.com";
const userPassword = "kawsar1234";

// ===== find necessary elements ===== //
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let inputButton = document.querySelector('#button');
let errorMessageEmail = document.querySelector('p.email');
let errorMessagePassword = document.querySelector('p.password');
let eyeOff = document.querySelector('#eyeOff');

// ===== form validation ===== //
inputButton.addEventListener('click', function() {
    if (inputEmail.value === "") {
        errorMessageEmail.style.display = "block";
        inputEmail.focus();
        errorMessagePassword.style.display = "none";
    }
    else if (inputPassword.value === "") {
        errorMessagePassword.style.display = "block";
        errorMessagePassword.innerText = "Please enter your password";
        inputPassword.focus();
        errorMessageEmail.style.display = "none";
    }
    else if (inputEmail.value.length > 50) {
        errorMessageEmail.style.display = "block";
        errorMessageEmail.innerText = "The maximum number of characters for the email address is 50.";
        inputEmail.focus();
        errorMessagePassword.style.display = "none";
    }
    else if (inputPassword.value.length > 16 || inputPassword.value.length < 8) {
        errorMessagePassword.style.display = "block";
        errorMessagePassword.innerText = "The password should be between 8 and 16 characters long.";
        inputPassword.focus();
        errorMessageEmail.style.display = "none";
    }
    else {
        if (inputEmail.value !== userEmail) {
            errorMessageEmail.innerText = "Wrong email address.";
            errorMessageEmail.style.display = "block";
            inputEmail.focus();
            errorMessagePassword.style.display = "none";
        }
        else if (inputPassword.value !== userPassword) {
            errorMessagePassword.innerText = "Wrong password.";
            errorMessagePassword.style.display = "block";
            inputPassword.focus();
            errorMessageEmail.style.display = "none";
        }
        else {
            window.location.href = "play.html";
        }
    }
})

// ===== custom eye icon ===== //
var count = 2;
eyeOff.addEventListener('click', function() {
    count++;
    if(count % 2 == 0) {
        eyeOff.setAttribute("class", "fa-regular fa-eye");
        password.type = "password";
    } else {
        eyeOff.setAttribute("class", "fa-regular fa-eye-slash");
        password.type = "text";
    }
})