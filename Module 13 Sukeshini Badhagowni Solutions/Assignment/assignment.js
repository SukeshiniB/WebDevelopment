const todoList = document.getElementById('todoList');
const todoItem = document.getElementById('todoItem');
function getDiv()  {
    const div = document.createElement('div')
   div.style.display="flex"
    const li = document.createElement('li');
   li.innerText = todoItem.value;
    const complete = document.createElement('button');
    complete.textContent = 'Completed';
    complete.style.marginLeft = "0.5%"
    complete.addEventListener('click', () => {
              li.style.opacity = '0.3';
              });
    const deleteItem = document.createElement('button');
    deleteItem.textContent = 'Delete';
    deleteItem.style.marginLeft = "0.5%"
    deleteItem.addEventListener('click', () => {
        li.remove();
        complete.remove();
        deleteItem.remove();
        }); 
    div.appendChild(li);
    div.appendChild(complete);
    div.appendChild(deleteItem);
    todoItem.value = '';
    return div;
}

document.getElementById('addTask').addEventListener('click', () => {
    if(todoItem.value !== "") {
    const div = getDiv()
    todoList.appendChild(div);
    }
  });
  document.getElementById('addPriorityTask').addEventListener('click', () => {
    if(todoItem.value != "") {
        const div = getDiv()
        todoList.prepend(div);
    }
  });
  document.getElementById('deleteAllTasks').addEventListener('click', () => {
    todoList.innerHTML = '';
  });


