// https://www.origamid.com/slide/javascript-completo-es6/#/0508-settimeout-e-setinterval/10

// NÃO USAR ASSIM
function espera(texto) {
  console.log(texto);
}
// setTimeout(espera, 1000, "Depois de 1s");

//  USAR ASSIM

setTimeout(() => {
  // console.log("passou 2s");
}, 2000);

// const contarAte10 = setInterval(callback, 1000);

// let i = 0;
// function callback() {
//   // console.log(i++);
//   if (i > 10) {
//     clearInterval(contarAte10);
//   }
// }

// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// const bodyStyle = document.body.style;

// function isEven(number) {
//   return number % 2 === 0;
// }

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     isEven(i)
//       ? (bodyStyle.background = "blue")
//       : (bodyStyle.background = "red");
//   }, 2000 * i);
// }

// -------------------------

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const btnStart = document.querySelector('[data-btn="start"]');
const btnStop = document.querySelector('[data-btn="stop"]');
const timerText = document.querySelector("[data-timer]");
const userInput = document.querySelector("[data-timer='user-input']");

console.log(userInput.value);

btnStop.addEventListener("click", stopTimer);
btnStop.addEventListener("dblclick", resetTimer);

btnStart.addEventListener("click", startTimer);

let timer;
let i = 0;

function stopTimer() {
  clearInterval(timer);
  btnStart.disabled = false;
}

function resetTimer() {
  i = 0;
  timerText.innerHTML = 0;
}

function startTimer() {
  if (userInput.value) {
    btnStart.disabled = true;
    timer = setInterval(() => {
      timerText.innerText = i++;
    }, userInput.value);
  }
}
