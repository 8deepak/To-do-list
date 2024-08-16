const addbutton=document.getElementById('addtask');
const taskInput=document.getElementById('taskInput');
const taskList=document.getElementById('taskList');

function addtask(){
    const task = taskInput.value.trim();
    if(task){
        createtaskElement(task);
        taskInput.value ='';
    }else{
        alert('please enter task!')
    }


}

addbutton.addEventListener('click',addtask);

function createtaskElement(task){

    const listItem = document.createElement('li');

    listItem.textContent = task;

    taskList.appendChild(listItem);

}
