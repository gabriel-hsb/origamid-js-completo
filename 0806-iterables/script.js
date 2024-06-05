// https://www.origamid.com/slide/javascript-completo-es6/#/0806-loops-e-iterable/1

// Crie 4 li's na página.
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li');
for(li of lis) {
  li.classList.add('uma-classe')
}

console.log(lis)


// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
console.log(window)

for(prop in window) {
  console.log(prop)
}
