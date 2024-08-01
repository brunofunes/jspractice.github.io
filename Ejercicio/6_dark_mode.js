const $btndark = document.getElementById("btn-darkmode");
const $btnlight = document.getElementById("btn-lightmode");
const $body = document.getElementById("body");

// Guarda el tema en el localStorage
function guardarTema($tema) {
  localStorage.setItem("tema", $tema);
  //console.log($tema);
}

// Funcion para Aplicar el tema y esconcer botones que no se utilizan
function aplicarTema() {
  let temaGuardado = localStorage.getItem("tema");
  if (temaGuardado) {
    $body.className = temaGuardado;
    if (temaGuardado === "dark") {
      $btndark.style.visibility = "hidden";
      $btnlight.style.visibility = "visible";
    } else {
      $btnlight.style.visibility = "hidden";
      $btndark.style.visibility = "visible";
    }
  }
}

$btnlight.addEventListener("click", () => {
  $body.classList.replace("dark", "light");
  $btnlight.style.visibility = "hidden";
  $btndark.style.visibility = "visible";

  let $tema = $body.classList.value;
  guardarTema($tema);
});

$btndark.addEventListener("click", () => {
  $body.classList.replace("light", "dark");
  $btndark.style.visibility = "hidden";
  $btnlight.style.visibility = "visible";

  let $tema = $body.classList.value;
  guardarTema($tema);
});

// Aplica el tema al cargar la pagina
window.onload = aplicarTema;
