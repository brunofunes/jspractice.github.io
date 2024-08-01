const $next = document.getElementById("id-siguiente");
const $prev = document.getElementById("id-anterior");
const $imagenes = document.getElementsByClassName("imagen-carrusel");

//console.log($imagenes.length);
let numeroTotal = $imagenes.length - 1;
//console.log(numeroTotal);

let index = 0;

let next = function () {
  //console.log($imagenes[index].classList);
  $imagenes[index].classList.remove("active");
  index = index + 1;
  $imagenes[index].classList.add("active");
};

let prev = function () {
  //console.log(index);
  $imagenes[index].classList.remove("active");
  index = index - 1;
  $imagenes[index].classList.add("active");
};

$next.addEventListener("click", () => {
  if (index !== numeroTotal) {
    next();
    //console.log(index);
  } else {
    $imagenes[index].classList.remove("active");
    index = 0;
    $imagenes[index].classList.add("active");
    //console.log(index);
  }
});

$prev.addEventListener("click", () => {
  if (index === 0) {
    $imagenes[index].classList.remove("active");
    index = numeroTotal;
    //console.log(numeroTotal);
    $imagenes[index].classList.add("active");
  } else {
    prev();
  }
});
