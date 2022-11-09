const mostrador = document.querySelector("p");

setInterval(() => {
    let hora = new Date();
    mostrador.innerText = hora.toLocaleTimeString("pt-br");
}, 2000);
