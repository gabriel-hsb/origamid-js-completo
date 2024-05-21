// Retorne um número aleatório
// entre 1050 e 2000

const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

console.log("número aleatório: ", randomNumber);

// Retorne o maior número da lista abaixo
let numeros = "4, 5, 20, 8, 9";

numeros = numeros.split(", ");

console.log(Math.max(...numeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparNumeros(arr) {
  let arrayLimpo = [];

  arr.forEach((item) => {
    let string = item.toLowerCase().replace("r$", "").replace(",", ".").trim();
    string = Number(string).toFixed(2);
    arrayLimpo.push(Number(string));
  });

  const somaTotal = arrayLimpo.reduce((acc, cur) => {
    return acc + cur;
  });

  const somaBRL = somaTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const somaUS = somaTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return { arrayLimpo, somaTotal, somaBRL, somaUS };
}

console.log("Preços limpos: ", limparNumeros(listaPrecos).arrayLimpo);
console.log(
  "Soma dos preços em number: ",
  limparNumeros(listaPrecos).somaTotal
);
console.log("Soma dos preços em pt-BR: ", limparNumeros(listaPrecos).somaBRL);
console.log("Soma dos preços em en-US: ", limparNumeros(listaPrecos).somaUS);
