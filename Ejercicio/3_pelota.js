const $cajaNegra = document.getElementById("cajacontenedora-negra");
const $pelota = document.getElementById("pelota");
let posicionPelotaY = parseInt(window.getComputedStyle($pelota).bottom); // Obtén el valor inicial
let posicionPelotaX = parseInt(window.getComputedStyle($pelota).right); // Obtén el valor inicial

let limitBal = $pelota.getBoundingClientRect();
let limitBox = $cajaNegra.getBoundingClientRect();

// POSIBLE MEJORA: 
// -En vez de utilizar "position" para mover la pelota, se puede usar el "transform" para un movimiento mas fluido.
// -Mover la pelota en X

addEventListener("keydown", (e) => {
  if ((e.key === "w" || e.key === "W") && posicionPelotaY < 168) {
    posicionPelotaY += 6;
    $pelota.style.bottom = posicionPelotaY + "px";
  }
});

addEventListener("keydown", (e) => {
  if ((e.key === "s" || e.key === "S") && posicionPelotaY > 0) {
    posicionPelotaY -= 6;
    $pelota.style.bottom = posicionPelotaY + "px";
  }
});

addEventListener("keydown", (e) => {
  if ((e.key === "a" || e.key === "A") && posicionPelotaX < 368) {
    posicionPelotaX += 6;
    $pelota.style.right = posicionPelotaX + "px";
  }
});
addEventListener("keydown", (e) => {
  if ((e.key === "d" || e.key === "D") && posicionPelotaX > 0) {
    posicionPelotaX -= 6;
    $pelota.style.right = posicionPelotaX + "px";
  }
});

// Alerta con Ctrl+a

addEventListener("keydown", (e) => {
  if ((e.key === "a" || e.key === "A") && e.altKey) {
    alert("Has lanzado una alerta");
  }
});

