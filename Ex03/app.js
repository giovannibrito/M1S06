const resultado = document.querySelector("h1");
const paragrafo = document.querySelector("p");

function aprovarDadosCadastrais(cliente) {
    return new Promise((resolve, reject) => {
        if (cliente.cpf === 11111111111) resolve(true);
        else reject(false);
    });
}

function aprovarValorSolicitado(cliente, valor) {
    return new Promise((resolve, reject) => {
        if (cliente.margem >= valor) resolve(true);
        else reject(false);
    });
}

const cliente = { cpf: 11111111111, nome: "Calleri", margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

Promise.all([aprovacaoCadastro, aprovacaoValor])
    .then(() => (resultado.innerText = "Empréstimo Aprovado"))
    .catch(() => (resultado.innerText = "Empréstimo Reprovado"))
    .finally(() => (paragrafo.innerText = "Fim do processamento"));
