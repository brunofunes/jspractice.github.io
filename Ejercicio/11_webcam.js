let $camVideo = document.getElementById("cam-video");
let $waitCam = document.getElementById("wait-cam");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    $camVideo.srcObject = stream;
    $camVideo.play();
    $waitCam.innerText = "Cam:";
  })
  .catch((err) => {
    //console.log("ERRROOOOOOOOOOR", err);
    $waitCam.innerText = "Acceso a cámara denegado";
  });


  console