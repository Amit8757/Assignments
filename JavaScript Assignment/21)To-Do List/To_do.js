// Get references to HTML elements
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Event listener for the add button
addButton.addEventListener("click", function() {
  // Get the value from the input field
  const task = todoInput.value;

  // Create a new list item
  const listItem = document.createElement("li");

  // Set the text of the list item to the task
  listItem.innerText = task;

  // Add the list item to the todoList
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = "";
});
