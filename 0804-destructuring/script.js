// https://www.origamid.com/slide/javascript-completo-es6/#/0804-destructuring

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);

// EXERCÍCIOS

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor, color, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log("ativo: " + cursoAtivo, "inativo: " + cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: cachorroCor} = cachorro;

console.log('cachorro é: ' + cachorroCor)


