function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
}
function onGeoError() {
  alert("Weather Unavailable");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
