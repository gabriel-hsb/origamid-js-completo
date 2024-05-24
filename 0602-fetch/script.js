// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.forms.cep;
const cepInput = document.querySelector("#cep");
const addressText = document.querySelector("#address");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  try {
    addressText.innerHTML = "Buscando dados...";
    e.preventDefault();
    const userCep = cepInput.value;

    const res = await fetch(`https://viacep.com.br/ws/${userCep}/json/`);
    const json = await res.json();

    console.log(json.logradouro);
  } catch (err) {
    addressText.innerHTML = "erro";

    console.error(err);
  } finally {
    addressText.innerHTML = "Abra o console para ver os dados";
  }
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

{
  const bitcoinPrice = document.querySelector("#btc");
  const btnBtc = document.querySelector("#get-btc");

  btnBtc.addEventListener("click", getBitcoinPrice);

  async function getBitcoinPrice() {
    try {
      const res = await fetch("https://blockchain.info/ticker");
      const json = await res.json();

      const btcBuyBRL = json.BRL.buy;

      bitcoinPrice.innerHTML = `Um Bitcoin custa ${btcBuyBRL.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )} `;
    } catch (err) {
      console.error(err);
    }
  }

  setInterval(() => {
    btnBtc.click();
  }, 30000);
}

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

{
  const chuckBtn = document.querySelector("#get-joke");
  const text = document.querySelector("#joke");

  chuckBtn.addEventListener("click", getRandomJoke);

  async function getRandomJoke() {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const json = await res.json();
      text.innerHTML = json.value;
      chuckBtn.innerHTML = "Me conte outra piada";
    } catch (err) {
      text = "Erro";
    }
  }
}
