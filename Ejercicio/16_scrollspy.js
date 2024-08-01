// const $observador = document.getElementById("id-aside-texto");
// const $cambiarColor = document.getElementsByClassName("titulos");

// let options = {
//   root: $observador,
//   rootMargin: "0px",
//   threshold: 0.4,
// };

// console.log($cambiarColor);

// function callback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(`${entry.target.id} es visible`);
//       // TODO ACTIVAR COLOR DE TITULO
//       console.log(entry);
//       $cambiarColor[entry.nodelist];
//     } else {
//       console.log(`${entry.target.id} no es visible`);
//       // TODO DESACTIVAR COLOR DE TITULO
//     }
//   });
// }

// let observer = new IntersectionObserver(callback, options);

// const $observado = document.querySelectorAll(".parrafos");
// //const $observado1 = document.getElementsByClassName("parrafos");

// $observado.forEach((el) => observer.observe(el));

const $observador = document.getElementById("id-aside-texto");
const $cambiarColor = document.getElementsByClassName("titulos");

let options = {
  root: $observador,
  rootMargin: "0px",
  threshold: 0.5,
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    const targetTitle = document.querySelector(
      `.titulos[data-target="${entry.target.id}"]`
    );
    if (entry.isIntersecting) {
      //console.log(`${entry.target.id} es visible`);
      // Activar color de título
      targetTitle.classList.add("active");
    } else {
      //console.log(`${entry.target.id} no es visible`);
      // Desactivar color de título
      targetTitle.classList.remove("active");
    }
  });
}

let observer = new IntersectionObserver(callback, options);

const $observado = document.querySelectorAll(".parrafos");

$observado.forEach((el) => observer.observe(el));
