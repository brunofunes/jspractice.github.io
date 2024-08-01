const $userAgent = document.getElementById("id-useragent");
const $plataforma = document.getElementById("id-plataforma");
const $navegador = document.getElementById("id-navegador");

document.addEventListener("DOMContentLoaded", () => {
  $userAgent.innerText = navigator.userAgent;
  if (navigator.userAgentData === undefined) {
    $plataforma.innerText = navigator.platform;
    $navegador.innerText = navigator.appCodeName;
  }
  else{
    $plataforma.innerText = navigator.userAgentData.platform;
    $navegador.innerText = navigator.userAgentData.brands[2].brand;
  }
});

//console.log(navigator.userAgent);
//console.log(navigator.userAgentData.brands[2].brand);
//console.log(navigator.userAgentData.platform);
