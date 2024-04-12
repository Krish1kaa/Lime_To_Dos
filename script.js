function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskText + '<div><button onclick="moveUp(this)">Up</button><button onclick="moveDown(this)">Down</button><button onclick="removeTask(this)">Remove</button></div>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    button.parentNode.parentNode.remove();
}

function moveUp(button) {
    var item = button.parentNode.parentNode;
    if (item.previousElementSibling !== null) {
        item.parentNode.insertBefore(item, item.previousElementSibling);
    }
}

function moveDown(button) {
    var item = button.parentNode.parentNode;
    if (item.nextElementSibling !== null) {
        item.parentNode.insertBefore(item.nextElementSibling, item);
    }
}
