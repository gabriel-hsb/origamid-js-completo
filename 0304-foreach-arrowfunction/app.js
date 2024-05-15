const imgs = document.querySelectorAll("img");
// console.log(imgs);

imgs.forEach((img, idx) => {
  // console.log(img, idx);
});

// Mostre no console cada parágrafo do site
const paragraphs = Array.from(document.querySelectorAll("p"));
paragraphs.forEach((paragraph) => {
  console.log(paragraph.innerHTML);
});

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll("img");

let i = 0;

imgs2.forEach((item, index) => {
  console.log(item, index);
});

imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => i++);
