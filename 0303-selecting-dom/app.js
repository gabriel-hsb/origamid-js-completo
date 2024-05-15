// Retorne no console todas as imagens do site
const images = document.querySelectorAll("img");
console.log(Array.from(images));

// Retorne no console apenas a imagem da fox, porém sem utilizar seleção por id
const foxImage = document.querySelector("[src*='fox']");
console.log(foxImage);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');
console.log(Array.from(internalLinks));

// Selecione o primeiro h2 dentro da section
const h2 = document.querySelector("h2");
console.log(h2.innerHTML);
