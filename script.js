function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  
  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    <span>${taskInput.value}</span>
    <button onclick="markAsDone(this)">Done</button>
    <button onclick="moveUp(this)">Move Up</button>
    <button onclick="moveDown(this)">Move Down</button>
    <button onclick="removeTask(this)">Remove</button>
  `;
  
  taskList.appendChild(task);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentNode.remove();
}

function moveUp(button) {
  const task = button.parentNode;
  const taskList = task.parentNode;
  const taskIndex = Array.from(taskList.children).indexOf(task);
  
  if (taskIndex > 0) {
    taskList.insertBefore(task, taskList.children[taskIndex - 1]);
  }
}

function moveDown(button) {
  const task = button.parentNode;
  const taskList = task.parentNode;
  const taskIndex = Array.from(taskList.children).indexOf(task);
  
  if (taskIndex < taskList.children.length - 1) {
    taskList.insertBefore(taskList.children[taskIndex + 1], task);
  }
}

function markAsDone(button) {
  const task = button.parentNode;
  task.classList.add("done");
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  setTimeout(() => {
    task.remove();
  }, 2000);
}
