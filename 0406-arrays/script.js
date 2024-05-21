// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

{
  const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

  const primeiraComida = comidas.shift();
  console.log("primeira comida: ", primeiraComida);

  const ultimaComida = comidas.pop();
  console.log("ultima comida: ", ultimaComida);

  comidas.push("Arroz");
  comidas.unshift("Peixe", "Batata");
  console.log(comidas);
}

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

{
  const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

  estudantes.sort();

  estudantes.reverse();

  console.log(estudantes);

  console.log("tem Joana: ", estudantes.includes("Joana"));
  console.log("tem Juliana: ", estudantes.includes("Juliana"));
}

// Substitua section por ul e div com li,
// utilizando split e join

let elemento = `<section>
                  <div>Sobre</div>
                  <div>Produtos</div>
                  <div>Contato</div>
                </section>`;

elemento = elemento.split("section");
elemento = elemento.join("ul");

elemento = elemento.split("div");
elemento = elemento.join  ("li");

console.warn(elemento);

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros = ["Ford", "Fiat", "VW", "Honda"];

const cloneCarros = carros.slice();
carros.pop();
console.log("carros original", carros);
console.log("carros clone", cloneCarros);
