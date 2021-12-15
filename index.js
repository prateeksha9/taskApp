const taskList = [];
const addTask = document.querySelector(".setTask");

function checkbox(value) {
  var checkBox = document.getElementById("checkbox");

  if (checkBox) {
    // alert("checked");
    document.getElementById("Edit-button").innerHTML = "Completed";
    const index = taskList.findIndex((taskat) => taskat.task == value);
    console.log("index from", index);
    taskList[index].completed = true;
    document.getElementById("checkbox").disabled = true;
  }
}
// edit a task from the array
edit = (value) => {
  const index = taskList.indexOf(task);
  taskList[index].task = addTask.task.value;
  document.getElementById.innerHTML = value;
  console.log("taskList", taskList);
};

// event to Delete a particular task
myList.addEventListener("click", (e) => {
  console.log("removing element");
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.parentElement.remove();
  }
});

// remove a task from the array
remove = (value) => {
  let newList = taskList.filter((task) => task != value);
  taskList.length = 0; // Clear contents
  taskList.push.apply(taskList, newList);

  console.log("taskList", newList);
  console.log("taskList", taskList);
};

// display new task on webpage
function showNewTask(newTask) {
  const html = `
    <li class = "task-list">   
        <input type="checkbox" id="checkbox"  onclick="checkbox(this.value)" value=${newTask.task}>     
        <span class="task" id="ok">${newTask.task}</span>
        <div>
        <button class="deleteTask task-control" id="delete-button" onclick = "remove(this.value)" value=${newTask.task}>Delete Task</button> 
        <button class="editTask task-control" id="Edit-button" onclick = "edit(this.value)" value=${newTask.task}>Edit Task</button>      
        </div> 
    </li>`;
  myList.innerHTML += html;
}

addTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = addTask.task.value;
  if (newTask === "0") {
    alert("Invalid Task");
  }

  if (isNaN(newTask)) {
    if (!taskList.includes(newTask)) {
      const pushTask = {
        task: newTask,
        completed: false,
      };
      taskList.push(pushTask);
      console.log(taskList);
      console.log(taskList.length);
      showNewTask(pushTask);
      addTask.reset();
    } else {
      alert(`Alarm for ${taskList} already set.`);
    }
  } else {
    alert("Invalid Time Entered");
  }
});
