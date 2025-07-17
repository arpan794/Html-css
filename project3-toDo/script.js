window.onload = function () {
    renderTasks();
};

function addTask() {
    const taskName = document.getElementById("taskName").value.trim();
    const taskDescription = document.getElementById("taskDescription").value.trim();
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const date = document.getElementById("date").value;

    if (!taskName || !startTime || !endTime || !date) {
        alert("Task name, start time, end time, and date are required.");
        return;
    }

    const tasks = getTaskFromStorage();
    
    tasks.push({
        name: taskName,
        description: taskDescription,
        start: startTime,
        end: endTime,
        date: date,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    clearInputs();
    renderTasks();
}

function clearInputs() {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("date").value = "";
}

function getTaskFromStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const tasks = getTaskFromStorage();

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            <div class="task-info">
                <label>
                    <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? "checked" : ""}/>
                    <strong>${task.name}</strong>
                    <p>${task.description || ""}</p>
                    <small>🕒 ${task.start} → ${task.end}</small><br>
                    <small>📅 ${task.date}</small>
                </label>
            </div>
            <div class="task-buttons">
                <span class="edit-btn" onclick="editTask(${index})">Edit</span>
                <span class="delete-btn" onclick="deleteTask(${index})">Delete</span>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    const tasks = getTaskFromStorage();
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    const tasks = getTaskFromStorage();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function editTask(index) {
    const tasks = getTaskFromStorage();
    const task = tasks[index];

    const newName = prompt("Edit Task Name:", task.name);
    const newDesc = prompt("Edit Description:", task.description);
    const newStart = prompt("Edit Start Time (HH:MM):", task.start);
    const newEnd = prompt("Edit End Time (HH:MM):", task.end);
    const newDate = prompt("Edit Task Date (dd-mm-yyyy):", task.date);

    if (newName && newStart && newEnd && newDate) {
        task.name = newName.trim();
        task.description = newDesc?.trim() || '';
        task.start = newStart;
        task.end = newEnd;
        task.date = newDate;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}
