const $url = document.getElementById("input-url");
const $ancho = document.getElementById("input-ancho");
const $alto = document.getElementById("input-alto");
const $btnprobar = document.getElementById("btn-probar");
const $btncerrar = document.getElementById("btn-cerrar");
const $myForm = document.getElementById("myForm");

let ventana;

//Evita el envío del formulario por defecto
$myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log($alto.value, $ancho.value, $url.value);
});

$btnprobar.addEventListener("click", () => {
  if ($alto.value > 0 && $ancho.value > 0) {
    ventana = window.open(
      $url.value,
      "tester",
      `width=${$ancho.value},height=${$alto.value}`
    );
  }
});

document.addEventListener("click", (e) => {
  if (e.target === $btncerrar) {
    ventana.close();
    console.log("Se cerro la ventana");
  }
});
