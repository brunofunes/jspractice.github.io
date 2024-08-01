const $btnGanador = document.getElementById("btn-ganador");
const $player = document.getElementsByClassName("player");

$btnGanador.addEventListener("click", () => {
  alert(
    `El GANADOR es: ${
      $player[Math.floor(Math.random() * $player.length)].textContent
    } ✅`
  );
});
