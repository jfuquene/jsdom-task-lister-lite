// document.addEventListener("DOMContentLoaded", () => {

// });

let taskForm = document.getElementById('create-task-form')
let taskList = document.querySelector('#task')

taskForm.addEventListener('submit', function(e){
  e.preventDefault()
  
  const newTask = document.getElementById("new-task-description").value


  const taskItem = document.createElement("li")
  taskItem.innerText = newTask
  
  taskList.append(taskItem)

  taskForm.reset()
})

