

const usersContainer = document.getElementById("users-container");

fetch("../public/JSON/trainers.json")
  .then(response => response.json())
  .then(data => {
    const Training = data.Training;
    for (let i = 0; i < Training.length; i++) {
      const user = Training[i];
      const card = document.createElement("div");
      userElement.classList.add("user");

      const photoElement = document.createElement("img");
      photoElement.src = user.photo;
      photoElement.alt = user.name;
      userElement.appendChild(photoElement);

      const nameElement = document.createElement("h2");
      nameElement.textContent = user.name;
      userElement.appendChild(nameElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = user.description;
      userElement.appendChild(descriptionElement);

      usersContainer.appendChild(userElement);
    }
  });