// https://www.origamid.com/slide/javascript-completo-es6/#/0407-array-e-iteracao/1

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
{
  const cursos = document.querySelectorAll(".curso");

  const obj = Array.from(cursos).map((curso) => {
    const titulo = curso.querySelector("h1").innerText;
    const descricao = curso.querySelector("p").innerText;
    const aulas = curso.querySelector(".aulas").innerText;
    const horas = curso.querySelector(".horas").innerText;

    return {
      titulo,
      descricao,
      aulas,
      horas,
    };
  });

  console.log(obj);
}

// Retorne uma lista com os
// números maiores que 100
{
  const numeros = [3, 44, 333, 23, 122, 322, 33];

  const maiores100 = numeros.filter((numero) => {
    return numero > 100;
  });

  console.log("Números maiores que 100: ", maiores100);
}

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

{
  const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

  const possuiBaixo = instrumentos.includes("Baixo");
  const possuiSaxofone = instrumentos.includes("Saxofone");

  console.log("Possui baixo:", possuiBaixo);
  console.log("Possui Saxofone:", possuiSaxofone);
}

// Retorne o valor total das compras
{
  const compras = [
    {
      item: "Banana",
      preco: "R$ 4,99",
    },
    {
      item: "Ovo",
      preco: "R$ 2,99",
    },
    {
      item: "Carne",
      preco: "R$ 25,49",
    },
    {
      item: "Refrigerante",
      preco: "R$ 5,35",
    },
    {
      item: "Quejo",
      preco: "R$ 10,60",
    },
  ];

  let precoTotal = 0;

  compras.map((compra) => {
    let preco = compra.preco;
    preco = preco.replace("R$ ", "");
    preco = preco.replace(",", ".");
    preco = Number(preco);

    precoTotal += preco;
  });
  console.log("Preço total: ", precoTotal);
}
