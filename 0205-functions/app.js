// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(12398872)); //true
console.log(isEven(1419765)); //false

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOfData(data) {
  return typeof data;
}

console.log(typeOfData(2)); // number
console.log(typeOfData("hello")); // string

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function logName() {
  console.log("gabriel henrique");
}

window.addEventListener("scroll", logName);

// Corrija o erro abaixo

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20)); // faltam 173 p/ visitar
console.log(jaVisitei(20)); // visitei 20 de 193
