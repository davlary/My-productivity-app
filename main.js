// const { json } = require("stream/consumers");

// Get variables
const todoList = document.querySelector(".todo-list");
const filters = document.querySelector(".filters");
const addTaskBtn = document.querySelector(".add-btn");
const clearCompleted = document.querySelector(".clear-completed");
const itemLeft = document.querySelector(".items-left");
const taskInput = document.querySelector(".task-input");
const emptyList = document.querySelector(".empty-list");

let todo = [];
let currentFilter = "all";

addTaskBtn.addEventListener("click", () => {
  addTodo(taskInput.value);
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo(taskInput.value);
});

function addTodo(text) {
  if (text.trim() === "") return;

  const todos = {
    id: Date.now(),
    text,
    completed: false,
  };

  todo.push(todos);

  console.log(todos);
  saveTodos();

  renderTodo();
}
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify("todos"));

  console.log(saveTodos());
  updateItems();
  emptyItems();
}

function updateItems() {
  const unCompletedTodo = todos.filter((todo) => !todo.completed);
  itemLeft.textContent = `${unCompletedTodo.length} items ${
    unCompletedTodo !== 1 ? "s" : ""
  } left`;
}
function emptyItems() {
  // const filteredTodos = filterTodos(currentFilter);
}
function filterTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}
function renderTodo() {
  todoList.innerHTML = "";

  const filteredTodos = filterTodos(currentFilter);
  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) todoItem.classList.add("completed");

    const checkBoxContainer = document.createElement(label);
    checkBoxContainer.classList.add("checkbox-container");

    const checkbox = document.createElement(input);
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    checkBoxContainer.appendChild(checkbox);
    checkBoxContainer.appendChild(checkmark);

    const todoText = document.createElement(span);
    todoText.classList.add("todo-text-input");
    todoText.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-times"><i>';
    deleteBtn.addEventListener("click", deleteTodo(todo.id));

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    todoItem.appendChild(checkBoxContainer);

    todoList.appendChild(todoItem);
  });
}
// function clearCompleted() {}
function toggleTodo(id) {}
function deleteTodo(id) {}
