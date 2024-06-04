// https://www.origamid.com/slide/javascript-completo-es6/#/0801-function-expression

// Remova o erro
const priceNumber = n => Number(n.replace('R$', '').replace(',', '.'));
console.log(priceNumber('R$ 99,99'))

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function() {
  const instrumento = 'violão';
})();

// Como podemos utilizar
// a função abaixo.
const hello = () => console.log('gabriel')

const active = callback => callback();

active(hello)
