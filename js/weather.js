const weather = document.querySelector(".current_weather");
const city = document.querySelector(".current_city");

const API_KEY = "468de432391fc4dc7d55c1f7787de6ec";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Weather Unavailable");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
