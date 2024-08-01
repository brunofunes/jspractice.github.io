
const $btnSlice = document.getElementById("btn-slice");
const $start = document.getElementById("scroll-top");

function ocultarBtnSlice() {
  let desplazamiento = window.scrollY;
  if (desplazamiento > 500) {
    $btnSlice.style.visibility = "visible";
  } else {
    $btnSlice.style.visibility = "hidden";
  }
  //console.log(parseInt(desplazamiento));
}

addEventListener("scroll", ocultarBtnSlice);

// Cuando le soy click al boton llevar al principio de la pagina.
$btnSlice.addEventListener("click", function () {
  $start.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});
