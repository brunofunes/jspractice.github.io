// Elementos para boton hamburguesa
const $btnhambur = document.getElementById("btn-hambur");
const $contenedor = document.getElementById("contenedor");
// Elementos para animacion de scroll
const $button1 = document.getElementById("s-1");
const $target1 = document.getElementById("e-1");

const $button2 = document.getElementById("s-2");
const $target2 = document.getElementById("e-2");

const $button3 = document.getElementById("s-3");
const $target3 = document.getElementById("e-3");

const $button4 = document.getElementById("s-4");
const $target4 = document.getElementById("e-4");

const $button5 = document.getElementById("s-5");
const $target5 = document.getElementById("e-5");

const $button6 = document.getElementById("s-6");
const $target6 = document.getElementById("e-6");

const $button7 = document.getElementById("s-7");
const $target7 = document.getElementById("e-7");

const $button8 = document.getElementById("s-8");
const $target8 = document.getElementById("e-8");

const $button9 = document.getElementById("s-9");
const $target9 = document.getElementById("e-9");

const $button10 = document.getElementById("s-10");
const $target10 = document.getElementById("e-10");

const $button11 = document.getElementById("s-11");
const $target11 = document.getElementById("e-11");

const $button12 = document.getElementById("s-12");
const $target12 = document.getElementById("e-12");

const $button13 = document.getElementById("s-13");
const $target13 = document.getElementById("e-13");
//Boton hamburguesa
$btnhambur.addEventListener("click", () => {
  if (
    $contenedor.style.display === "none" ||
    $contenedor.style.display === ""
  ) {
    $contenedor.style.display = "initial";
  } else {
    $contenedor.style.display = "none";
  }
});
//Animacion de scroll
$button1.addEventListener("click", function () {
  $target1.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button2.addEventListener("click", function () {
  $target2.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button3.addEventListener("click", function () {
  $target3.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button4.addEventListener("click", function () {
  $target4.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button5.addEventListener("click", function () {
  $target5.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button6.addEventListener("click", function () {
  $target6.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button7.addEventListener("click", function () {
  $target7.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button8.addEventListener("click", function () {
  $target8.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button9.addEventListener("click", function () {
  $target9.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button10.addEventListener("click", function () {
  $target10.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button11.addEventListener("click", function () {
  $target11.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button12.addEventListener("click", function () {
  $target12.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});

$button13.addEventListener("click", function () {
  $target13.scrollIntoView({ behavior: "smooth" });
  $contenedor.style.display = "none";
});
