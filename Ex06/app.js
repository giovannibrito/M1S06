const urlAPI = "https://api.agify.io/?country_id=BR&name=giovanni";
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");

async function buscar() {
    const response = await fetch(urlAPI);
    const objeto = await response.json();
    nome.innerText += objeto.name;
    idade.innerText += objeto.age;
}

buscar();
