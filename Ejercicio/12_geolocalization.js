const $logitud = document.getElementById("longitud-id");
const $latitud = document.getElementById("latitud-id");
const $acuracy = document.getElementById("acuracy-id");

function geoData(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let accuracy = position.coords.accuracy;

  $latitud.innerText = latitude;
  $logitud.innerText = longitude;
  $acuracy.innerText = `${parseInt(accuracy)} metros`;
  //console.log("Latitude: " + latitude + ", Longitude: " + longitude);
}

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(geoData, error, options);
}
