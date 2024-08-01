const $cartelOnline = document.getElementById("cartel-green");
const $cartelOffline = document.getElementById("cartel-red");

window.addEventListener("online", function () {
  //console.log("Estás en línea");
  $cartelOnline.style.display = "flex";
  setTimeout(function () {
    $cartelOnline.style.display = "none"; // Oculta el cartel después de 8 segundos
  }, 8000);
});

window.addEventListener("offline", function () {
  //console.log("Estás desconectado");
  $cartelOffline.style.display = "flex";
  setTimeout(function () {
    $cartelOffline.style.display = "none"; // Oculta el cartel después de 8 segundos
  }, 8000);
});
