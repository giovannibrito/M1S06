function sleep(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, valor);
    });
}

sleep("teste").then((data) => console.log(data));
sleep(507).then((data) => console.log(data));
