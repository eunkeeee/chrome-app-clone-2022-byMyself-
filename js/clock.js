const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  let AMPM = "AM";
  let hours = date.getHours();
  // if (hours < 12) {
  //   AMPM = "AM";
  //   hours = String(hours).padStart(2, "0");
  // } else {
  //   AMPM = "PM";
  //   hours = String(hours - 12).padStart(2, "0");
  // }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
function getGreetings() {}

getClock();
setInterval(getClock, 1000);
getGreetings();
