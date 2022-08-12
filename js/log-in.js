const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

const savedUsername = localStorage.getItem(KEY_USERNAME);
const timeGreeting = () => {
  const date = new Date();
  let hours = date.getHours();
};

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(KEY_USERNAME, username);
  paintGreetings(username);
}
function paintGreetings(submittedName) {
  // *** 시간대에 따라 인사말이 다르도록 수정 !!!
  greeting.innerText = `Hello ${submittedName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername !== null) {
  paintGreetings(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
