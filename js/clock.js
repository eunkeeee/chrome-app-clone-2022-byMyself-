const clock = document.querySelector("#clock");
const regionClock = document.querySelector(".region-clock");

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
  clock.style.fontSize = "160px";
  clock.style.fontWeight = "500";
}

getClock();
setInterval(getClock, 1000);

const onRegionClock = () => {
  console.log("i'm on region clock");
};
regionClock.addEventListener("mouseover", onRegionClock);
