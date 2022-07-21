// const img_1 = document.querySelector(".image:first-child");
// const img_2 = document.querySelector(".image:nth-child(2)");
// const img_3 = document.querySelector(".image:last-child");
// const images = [img_1, img_2, img_3];

// const chosenImage = `img_${Math.floor(Math.random() * images.length) + 1}`;
// console.log(chosenImage);
// img_1.classList.remove(HIDDEN_CLASSNAME);

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
