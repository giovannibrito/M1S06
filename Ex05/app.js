function obterClienteNoBancoDeDados(idCliente) {
    return new Promise((resolve, reject) => {
        const cliente = { nome: "bruce wayne", id: idCliente };
        resolve(cliente);
    });
}

async function processar() {
    console.log(await obterClienteNoBancoDeDados(7));
}

processar();
