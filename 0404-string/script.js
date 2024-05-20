// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
{
  const transacoes = [
    {
      descricao: "Taxa do Pão",
      valor: "R$ 39",
    },
    {
      descricao: "Taxa do Mercado",
      valor: "R$ 129",
    },
    {
      descricao: "Recebimento de Cliente",
      valor: "R$ 99",
    },
    {
      descricao: "Taxa do Banco",
      valor: "R$ 129",
    },
    {
      descricao: "Recebimento de Cliente",
      valor: "R$ 49",
    },
  ];

  let recebimentosArr = [];
  let taxasArr = [];

  transacoes.forEach((transacao) => {
    let transacaoValue = transacao.valor.replace("R$", "").trim();

    if (transacao.descricao.includes("Taxa")) {
      taxasArr.push(Number(transacaoValue));
    } else if (transacao.descricao.includes("Recebimento")) {
      recebimentosArr.push(Number(transacaoValue));
    }
  });

  function calcularTotal(arr) {
    return arr.reduce((acc, cur) => {
      return acc + cur;
    });
  }

  console.log("total de recebimentos: ", calcularTotal(recebimentosArr));
  console.log("total de taxas: ", calcularTotal(taxasArr));
}

// Retorne uma array com a lista abaixo
{
  const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

  console.log(transportes.split(";"));
}

// Substitua todos os span's por a's
{
  const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

  console.log(html.replace(/['span']+/g, "a"));
}

// Retorne o último caracter da frase
{
  const frase = "Melhor do ano!";

  console.log(frase.charAt(frase.length - 1)); // !
}

// Retorne o total de taxas
{
  const transacoes = [
    "Taxa do Banco",
    "   TAXA DO PÃO",
    "  taxa do mercado",
    "depósito Bancário",
    "TARIFA especial",
  ];

  let taxas = [];

  transacoes.forEach((transacao) => {
    if (transacao.toLowerCase().includes("taxa")) {
      taxas.push(transacao.trim().toLowerCase());
    }
  });

  console.log(taxas)
  console.log(taxas.length)
}
