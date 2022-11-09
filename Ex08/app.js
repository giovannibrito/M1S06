const usersContainer = document.querySelector(".users-container");

function geraHTML(objetoUser) {
    const newUser = document.createElement("div");
    newUser.classList.add("user");
    newUser.innerHTML = `<img class="user-photo" src="${objetoUser.picture.large}" />
    <div class="user-info">
        <p>${objetoUser.name.title} ${objetoUser.name.first} ${objetoUser.name.last}</p>
        <p>${objetoUser.email}</p>
        <p>${objetoUser.location.street.name} - ${objetoUser.location.street.number} - ${objetoUser.location.city} - ${objetoUser.location.state} - ${objetoUser.location.country}</p>
    </div>`;
    usersContainer.appendChild(newUser);
}

async function getUsers() {
    const response = await fetch("https://randomuser.me/api/?results=4");
    const objeto = await response.json();
    const array = objeto.results;
    array.forEach((user) => {
        geraHTML(user);
    });
}

getUsers();
