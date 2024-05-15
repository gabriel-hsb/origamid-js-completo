const header = document.querySelector("header");

header.className; // string
header.classList; // lista de classes
header.classList.add("ativo");
header.classList.add("ativo", "mobile"); // duas classes
header.classList.remove("ativo");
header.classList.toggle("ativo"); // adiciona/remove a classe
header.classList.contains("ativo"); // true ou false
header.classList.replace("ativo", "inativo");

// attributes

const fox = document.querySelector('#fox')
console.log(fox.attributes[0]);