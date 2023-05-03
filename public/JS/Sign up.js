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

  if (validatePassword() && validateName(firstNameInput) && validateName(lastNameInput) && validateEmail() && validateID()) {
    window.location.href = "Home-page.html";
  }
  else (!validatePassword() || !validateName(firstNameInput) || !validateName(lastNameInput) || !validateEmail() || !validateID())
  {
 alert("Invalid details, Please check again your details");
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

function validateID() {
  const id = document.getElementById("ID").value;
const regex = /\b\d{8}\b/;
if (!regex.test(id)) {
    alert("ID must be 8 digits.");
    return false;
  }
  return true;
}