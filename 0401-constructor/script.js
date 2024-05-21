// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome,
  this.idade = idade,
  this.andar = () => {
      console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element) {
  this.elements = document.querySelectorAll(element),

  this.addClass = (className) => {
    if(typeof className !==  'string') {
      throw new Error('apenas strings são aceitas')
    } else {
      this.elements.forEach((element) => {
        element.classList.add(className)
      })

    }
  }

  this.removeClass = (className) => {
    if(typeof className !== 'string') {
      throw new Error('Apenas strings são aceitas')
    } else {
      this.elements.forEach((element) => {
        element.classList.remove(className)
      })
    }
  }
}

const a = new Dom('a');
