const $inputSearch = document.getElementById("input-search");
const $titulo = document.getElementsByClassName("text-titulo");
const $card = document.getElementsByClassName("cards");

//Detecta el evento de input y guarda en un array (separado de letras) el inputFinal
$inputSearch.addEventListener("input", () => {
  //console.clear();
  for (let e = 0; e < $titulo.length; e++) {
    let textFinal = $titulo[e].textContent.toLowerCase().split("");
    //console.log(textFinal);
    let inputFinal = $inputSearch.value.toLowerCase().split("");
    //console.log(inputFinal);
    compararArrays(inputFinal, textFinal, e);
  }
  if ($inputSearch.value.trim() === "") {
    for (let i = 0; i < $card.length; i++) {
      $card[i].removeAttribute("hidden");
    }
    //console.log("vacioo");
  }
});

function compararArrays(arr1, arr2, index) {
  const minLength = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < minLength; i++) {
    if (arr1[i] !== arr2[i]) {
      $card[index].setAttribute("hidden", "");
      return;
    }
    {
      $card[index].removeAttribute("hidden");
    }
  }
}
