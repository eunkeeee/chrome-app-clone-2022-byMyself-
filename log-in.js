const loginInput = document.querySelector(".login-form__input");
const loginButton = document.querySelector(".login-form__btn");

function onLoginBtnClick(event) {
  const username = loginInput.value;
  console.log(`Hello ${username}`);
}

loginButton.addEventListener("click", onLoginBtnClick);
