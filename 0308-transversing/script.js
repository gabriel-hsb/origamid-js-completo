// https://www.origamid.com/slide/javascript-completo-es6/#/0308-traversing-e-manipulacao/5

const firstTitle = document.querySelector("h1");

console.log(firstTitle.innerHTML); // Animais Fantásticos
console.log(firstTitle.outerHTML); // <h1 class="title">Animais Fantásticos</h1>

console.log(firstTitle.innerText); // Animais Fantásticos
console.log(firstTitle.outerText); // Animais Fantásticos

// firstTitle.innerHTML = "<p>Novo Título</p>"; // <h1 class="title"><p>Novo Título</p></h1>  // Adiciona DENTRO do h1

// ------------------------------------------------------------------------------

const lista = document.querySelector(".animals-list");

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho

// EXERCÍCIOS \\

// Duplique o menu e adicione ele em copy
{
  const menu = document.querySelector(".menu");
  const menuClone = menu.cloneNode(true);
  const copy = document.querySelector(".copy");
  
  copy.appendChild(menuClone);
}

// Selecione o primeiro DT da dl de Faq
{
  const faq = document.querySelector(".faq");
  const dl = faq.querySelector("dl");
  const firstDt = dl.querySelector("dt:first-child");

  console.log(firstDt);
}

// Selecione o DD referente ao primeiro DT
{
  const faq = document.querySelector(".faq");
  const dl = faq.querySelector("dl");
  const firstDt = dl.querySelector("dt:first-child");

  console.log(firstDt.nextElementSibling);
}

// Substitua o conteúdo html de .faq pelo de .animais
{
  const faqContent = document.querySelector(".faq-list");
  const animalsContent = document.querySelector(".animals-description");

  faqContent.innerHTML = animalsContent.outerHTML;

  console.log(faqContent)

}
