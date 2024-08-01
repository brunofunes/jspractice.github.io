const $select = document.getElementById("selector-idiomas");
const $textarea = document.getElementById("text-area");
const $btnreading = document.getElementById("btn-leertexto");

let voices = [];
let textoCompleto = "";
let mensaje = new SpeechSynthesisUtterance(textoCompleto);

document.addEventListener("DOMContentLoaded", () => {
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    voices = window.speechSynthesis.getVoices();
    //console.log(voices);

    voices.forEach((voice) => {
      const $option = document.createElement("option");
      $option.value = voice.name;
      $option.textContent = `${voice.lang} - ${voice.name}`;

      $select.appendChild($option);
    });
  });
});

$select.addEventListener("change", (e) => {
  mensaje.voice = voices.find((voice) => voice.name === e.target.value);
});

function hablar() {
  if ($textarea.value === "") {
    mensaje.volume = 1;
    mensaje.text = "Añade un texto para poder narrarlo!";
    window.speechSynthesis.speak(mensaje);
  }

  mensaje.volume = 1;
  mensaje.text = textoCompleto;
  window.speechSynthesis.speak(mensaje);
}

function guardarTexto() {
  textoCompleto = $textarea.value;
  //console.log(textoCompleto);
}

$textarea.addEventListener("keyup", () => guardarTexto());
$btnreading.addEventListener("click", () => hablar());
