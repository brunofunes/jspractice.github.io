const $horario = document.getElementById("horario");
const $btnIniciarReloj = document.getElementById("btn-iniciar-reloj");
const $btnDetenerReloj = document.getElementById("btn-detener-reloj");
const $btnIniciarAlarma = document.getElementById("btn-iniciar-alarma");
const $btnDetenerAlarma = document.getElementById("btn-detener-alarma");

// MI INTENTO SIN GOOGLEAR:
// Iniciar Reloj
// $btnIniciarReloj.addEventListener("click", () => {
//   setInterval(() => {
//     let fecha = new Date();
//     $horario.innerText = fecha.toLocaleTimeString();
//   }, 1000);
// });

// Detener Reloj

// $btnDetenerReloj.addEventListener("click", () => {
//   $horario.innerText = "-- --";
//   clearInterval();
// });

// Iniciar Reloj
let intervaloReloj = false; // Inicializa la variable a undefined

$btnIniciarReloj.addEventListener("click", () => {
  if (!intervaloReloj) {
    // El operador ! (negación lógica) convierte un valor verdadero en falso y viceversa
    intervaloReloj = setInterval(() => {
      let fecha = new Date();
      $horario.innerText = fecha.toLocaleTimeString();
    }, 1000);
  }
  $btnIniciarReloj.setAttribute("disabled", "");
});
// Detener Reloj
$btnDetenerReloj.addEventListener("click", () => {
  clearInterval(intervaloReloj); // Detiene el intervalo
  intervaloReloj = false; // Resetear la referencia
  $horario.innerText = "-- --";
  $btnIniciarReloj.removeAttribute("disabled", "");
});

// MI INTENTO SIN GOOGLEAR:
// // Iniciar alarma
// const $alarma = document.getElementById("miAudio");

// $btnIniciarAlarma.addEventListener("click", () => {
//   $alarma.play();
// });

// // Detener alarma
// $btnDetenerAlarma.addEventListener("click", () => {
//   $alarma.pause();
// });

const $alarma = document.getElementById("miAudio");

// Iniciar alarma
$btnIniciarAlarma.addEventListener("click", () => {
  if (!$alarma.paused) {
    $alarma.pause();
    $alarma.currentTime = 0; // Reiniciar el tiempo a 0
  }
  $alarma.play();
  $btnIniciarAlarma.setAttribute("disabled", "");
});

// Detener alarma
$btnDetenerAlarma.addEventListener("click", () => {
  $alarma.pause();
  $alarma.currentTime = 0; // Reiniciar el tiempo a 0
  $btnIniciarAlarma.removeAttribute("disabled", "");
});
