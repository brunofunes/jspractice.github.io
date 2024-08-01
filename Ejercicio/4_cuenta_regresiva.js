const $contador = document.getElementById("id-countdown");
const $birthday = document.getElementById("id-birthday");
const $text = document.getElementById("b-date");
//ESTABLECER UNA FECHA FUTURA
const countdownDate = new Date("Jul 04, 2025 00:00:00").getTime();
//CADA 1S ACTUALIZA
let countDown = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  $contador.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (timeRemaining < 0) {
    clearInterval(countDown);
    $contador.innerHTML = "FELIZ CUMPLEAÑOS!!🎉🍰";
    $text.style.visibility = "hidden";
    $birthday.play();
  }
}, 1000);

