const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const KEY_TODOS = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // console.log(toDos);

  // 필터의 조건에 걸리는거만 빼고 나머지로 새로은 array를 만듦
  toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  // console.log(toDos);
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // delete을 위해 겹치지 않는 id 부여
  };

  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(KEY_TODOS);
if (savedToDos !== null) {
  // if there is something inside, load todos
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
