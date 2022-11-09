const paragrafo = document.querySelector("p");

async function bitcoin() {
    const response = await fetch("https://api.coincap.io/v2/assets/bitcoin");
    const objeto = await response.json();
    console.log(objeto.data);
    paragrafo.innerText = `O preço do Bitcoin - ${objeto.data.symbol} em dólares hoje é $ ${Number(
        objeto.data.priceUsd
    ).toFixed(2)}`;
}

bitcoin();
