// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dev = {
  name: "Gabriel",
  lastName: "Henrique",
  fullName() {
    return `${this.name} ${this.lastName}`;
  },
  age: 21,
  country: "Brazil",
  introduce() {
    return `Hello! My name is ${this.fullName()}, and I'm ${
      this.age
    } old, current (and not for long, I hope) living in ${this.country}`;
  },
};

console.log(dev.introduce());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco); //3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  breed: "labrador",
  color: "black",
  age: 10,
  name: "rufus",
  isBarking(personSex) {
    if (personSex === "homem") {
      return true;
    } else {
      return false;
    }
  },
};

console.log(dog.isBarking("homem")); // true
console.log(dog.isBarking("mulher")); // false
