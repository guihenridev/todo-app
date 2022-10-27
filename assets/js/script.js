//Dark-mode function//

const btnMode = document.querySelector(".btn-mode");

btnMode.addEventListener('click', () => {
    const modeBody = document.querySelector('body');
    modeBody.classList.toggle('dark-body');
    const modeHeader = document.querySelector('header');
    modeHeader.classList.toggle('dark-header')
    const modeTask = document.querySelector('.task-list');
    modeTask.classList.toggle('dark-task-list');
    const modeInput = document.getElementById('input-task');
    modeInput.classList.toggle('dark-input');
    var modeImg = document.querySelector("#img-mode");
    
    if(modeImg.getAttribute('src', 'assets/img/icon-moon.svg') =="assets/img/icon-moon.svg"){
        modeImg.setAttribute('src', 'assets/img/icon-sun.svg');
    }else{
        modeImg.setAttribute('src', 'assets/img/icon-moon.svg');
    }   

});

const inputElement = document.querySelector("#input-task");
const addTaskButton = document.querySelector(".add-new-task");


// Funções

const addNewTask = () => {
    if(inputElement.value.trim().length > 0){
        const taskContainer = document.querySelector(".task-container");    
        taskContainer.innerHTML  += `
        <li>
            <div class="task-list-item">
                <div style="display: flex; align-items: center;">
                    <input type="checkbox" class="task-input-checkbox check-task" >
                    <p>${inputElement.value}</p>
                </div>
                <button class="delete-button"><img src="assets/img/icon-cross.svg"></img></button>
            </div>
        </li>`;

        inputElement.value = "";
    }  
};



// Eventos

addTaskButton.addEventListener('click', addNewTask);
inputElement.addEventListener('keypress', e => {
    if (e.key == 'Enter' && inputElement.value != '') {
        addNewTask()
  }});


document.addEventListener("click", (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("li");

    if(targetEl.classList.contains("check-task")){
        parentEl.classList.toggle("done");
    }
    if(targetEl.classList.contains("delete-button")){
        parentEl.remove();
    }
    
});


