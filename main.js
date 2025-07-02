// Get variables
const itemList = document.querySelector(".item-list");
const filters = document.querySelector(".filters");
const addTaskBtn = document.querySelector(".add-btn");
const clearCompleted = document.querySelector(".clear-completed");
const itemLeft = document.querySelector(".items-left");
const taskInput = document.querySelector(".task-input");
const emptyList = document.querySelector(".empty-list")

let todo = [];
let currentFilter = "all";

addTaskBtn.addEventListener("click", (text) => {
  addTodo(taskInput.value);
});

taskInput.addEventListener("keydown", (e) => {
  if (e === "Enter") return addTodo();

 
});

addTodo.addEventListener("change", (text)=>{
if(text.trim() === "") return;


const todos = {
  id: Date.now(),
  text,
  completed: false,
};

todo.push(todos);
addTodo();
saveTodos();

console.log(addTodo());
})
function saveTodos() {
  localStorage.setItems("todos", json.Stringify("todos"));
  updateItems();
  emptyItems();
}

updateItems(){
    const unCompletedTodo = !todo.completed;
    itemLeft.textContent = `${unCompletedTodo.length} items ${
        unCompletedTodo === 1 ? "" : "s"
    } left`
}
emptyItems(){
    if(unCompletedTodo === 0) emptyList.classList.add("hidden")
}

clearCompletedBtn();
