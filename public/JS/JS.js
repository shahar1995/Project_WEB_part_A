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
            alert("Please try again later");
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

//Valid inputs in sign in - for part 3 //

invalid values in the sign_up //

  const form = document.getElementsByClassName('sign-in-form');
const nameField = document.getElementById('name');

nameField.addEventListener('input', (event) => {
  const input = event.target.value;
  const regex = /^[a-zA-Z\s]*$/; // only allows letters and spaces
  if (!regex.test(input)) {
    nameField.setCustomValidity('Only letters and spaces are allowed for name');
  } else {
    nameField.setCustomValidity('');
  }
});

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
  }
});
