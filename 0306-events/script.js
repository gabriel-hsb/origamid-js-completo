const img = document.querySelector("img");

function handleImgClick(e) {
  console.log(this);
}

img.addEventListener("click", handleImgClick);

function handleKeydown({ key }) {
  if (key === "f") {
    document.body.classList.toggle("cream");
  }

  // console.log("pressionou tecla", key);
}

window.addEventListener("keydown", handleKeydown);

// -- EXERCÍCIOS -- \\

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
{
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  function handleLinkClick(e) {
    e.preventDefault();

    if (e.target.hash) {
      links.forEach((link) => {
        link.classList.remove("ativo");
      });

      this.classList.add("ativo");
    }
  }
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
{
  const body = document.querySelector("body");
  body.addEventListener("click", handleBodyClick);

  function handleBodyClick(e) {
    console.log(e.target);
  }
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
{
  const body = document.querySelector("body");
  body.addEventListener("click", handleBodyClick);

  function handleBodyClick({ target }) {
    target.remove();
  }
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// forma que eu fiz
// {
//   window.addEventListener("keydown", resizeFont);

//   function resizeFont({ key }) {
//     const body = document.querySelector("body");
//     const isOneRem = body.style.fontSize === "1rem";

//     if (key === "t") {
//       if (isOneRem) {
//         body.style.fontSize = "2rem";
//       } else {
//         body.style.fontSize = "1rem";
//       }
//     }
//   }
// }

// forma que o professor fez
{
  window.addEventListener("keydown", resizeFont);

  function resizeFont({ key }) {
    if (key === "t") {
      document.documentElement.classList.toggle("large-fontsize");
    }
  }
}
