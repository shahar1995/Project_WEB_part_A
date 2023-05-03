//Take a values from information json for sign in //

const form_sign = document.querySelector('.sign-in-form');
    const customerID = document.querySelector("#ID");
    const customerPassword = document.querySelector("#password");
    form_sign.addEventListener("submit",function(event) {
    event.preventDefault();

    const ID = customerID.value;
    const password= customerPassword.value;
    Valid_user(ID, password)
        .then(result => {
            if (result) {

                Go_to_Home_Page();
            } else {
                alert("Invalid details, Please check again your ID and password");
            }
        })
            .catch(error => {
            // alert("Please try again later");
            console.error(error);
        });
    });

    function Go_to_Home_Page() {
    window.location.href = "Review.html";
}

async function Valid_user(ID, password) {
    const response = await fetch("../public/JSON/trainers.json");
    console.log(response)
    const data =await response.json();
    const found = data.trainers.find(trainer => trainer.ID === ID && trainer.password === password);
    console.log('Customer found:', found);
    return found !== undefined;

}

//invalid values in the sign_up //

// Get references to the form and the inputs
const form = document.querySelector('.sign-in-form');
const passwordInput = document.querySelector('#password');
const firstNameInput = document.querySelector('#First Name');
const lastNameInput = document.querySelector('#Last Name');
const emailInput = document.querySelector('#Email');

// Define regular expressions for validation
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add event listeners for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting if validation fails
  if (!validatePassword() || !validateName(firstNameInput) || !validateName(lastNameInput) || !validateEmail()) {
    event.preventDefault();
  }
});

// Validate password input
function validatePassword() {
  const passwordValue = passwordInput.value;
  if (!passwordRegex.test(passwordValue)) {
    alert('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
    passwordInput.focus();
    return false;
  }
  return true;
}

// Validate name inputs
function validateName(nameInput) {
  const nameValue = nameInput.value;
  if (!nameRegex.test(nameValue)) {
    alert('Please enter a valid name using only letters.');
    nameInput.focus();
    return false;
  }
  return true;
}

// Validate email input
function validateEmail() {
  const emailValue = emailInput.value;
  if (!emailRegex.test(emailValue)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }
  return true;
}