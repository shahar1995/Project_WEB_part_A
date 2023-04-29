const usersContainer = document.getElementById("Coachers-container");

fetch("../public/JSON/information.json")
  .then(response => response.json())
  .then(data => {
    const Coachers = data.Coachers;
    for (let i = 0; i < Coachers.length; i++) {
      const Coachers = Coachers[i];


    const userElement = document.createElement("div");
      userElement.classList.add("Coachers");


      const nameElement = document.createElement("h2");
      nameElement.textContent = Coachers.Name;
      userElement.appendChild(nameElement);

      const photoElement = document.createElement("img");
      photoElement.alt = Coachers.Name;
      photoElement.src = Coachers.photo;
      userElement.appendChild(photoElement);




      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = Coachers.description;
      userElement.appendChild(descriptionElement);

      usersContainer.appendChild(userElement);
    }
  });
