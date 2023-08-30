const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(listItem);

        const deleteButton = listItem.querySelector("button");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        taskInput.value = "";
    }
}
