const $video = document.getElementById("video-jon-id");
const $map = document.getElementById("map-id");
const $aMap = document.getElementById("a-map");
const $aVideo = document.getElementById("a-video");

let anchoViewport = window.innerWidth;
if (anchoViewport > 680) {
  $video.src = "https://www.youtube.com/embed/2SetvwBV-SU?si=y4uOQIrY_OdR8uYs";
  $map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54572.29659353082!2d-61.487783050000004!3d-31.2548303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae460db27c0f%3A0x8be1b926d473c17b!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1720390471778!5m2!1ses-419!2sar";
  $aVideo.setAttribute("hidden", "");
  $aMap.setAttribute("hidden", "");
} else {
  $video.src = "";
  $map.src = "";
  $aVideo.removeAttribute("hidden", "");
  $aMap.removeAttribute("hidden", "");
}

addEventListener("resize", () => {
  let anchoViewport = window.innerWidth;
  if (anchoViewport > 680) {
    $video.src =
      "https://www.youtube.com/embed/2SetvwBV-SU?si=y4uOQIrY_OdR8uYs";
    $map.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54572.29659353082!2d-61.487783050000004!3d-31.2548303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae460db27c0f%3A0x8be1b926d473c17b!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1720390471778!5m2!1ses-419!2sar";
    $aVideo.setAttribute("hidden", "");
    $aMap.setAttribute("hidden", "");
  } else {
    $video.src = "";
    $map.src = "";
    $aVideo.removeAttribute("hidden", "");
    $aMap.removeAttribute("hidden", "");
  }
});
