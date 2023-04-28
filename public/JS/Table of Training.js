// Get all buttons with the class "my-button"
const buttons = document.querySelectorAll(".my-button");

// Loop through each button and add a click event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Check if the button's text is "Click me!"
    if (button.textContent === "Click me!") {
      button.textContent = "Cancel"; // Change the button's text to "Cancel"
    } else {
      button.textContent = "Click me!"; // Change the button's text to "Click me!"
    }
  });
});




// var buttons = document.querySelectorAll(".register-link");
//
// function changeButton() {
//   if (this.innerHTML === "Register!") {
//     this.innerHTML = "Cancel Register";
//   } else {
//     this.innerHTML = "Register!";
//   }
// }
//
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("Register", changeButton);
// }
      //
      // function changeButton() {
      //   var button = document.getElementsByClassName('register-link');
      //   if (button.innerHTML === "Register!") {
      //     button.innerHTML = "Cancel Register";
      //   } else {
      //     button.innerHTML = "Register!";
      //   }
      //
      // }
