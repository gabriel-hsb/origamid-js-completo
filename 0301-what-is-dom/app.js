// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
console.log(document.querySelector(".ativo"));

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela
console.log(window.outerWidth);

// Selecione o primeiro H1 do seu HTML
const h1 = document.querySelector("h1");
console.log(h1.innerText);

// Adicione um EventListener ao H1 para dar um alert
// quando usuário clicar, e outro quando dar hover
h1.addEventListener("click", handleH1Click);

function handleH1Click() {
  window.alert(this.innerText);
}

// Adicione EventListener ao blockquote
const blockquote = document.querySelector("blockquote");
blockquote.addEventListener("mouseover", handleHover);

function handleHover() {
  window.confirm(this.innerText);
}
