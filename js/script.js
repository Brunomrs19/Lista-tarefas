//adicionando tarefa


function addEventTask() {
    
    const textInput = document.getElementById("text-tasks").value;
    
    if(textInput) {

        //clona template

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo

        newTask.querySelector(".tasks-title").textContent = textInput;

        //removendo classes desnecessarias

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista    

        const list = document.querySelector("#tasks-list");
        list.appendChild(newTask);

        //limpar texto
        
        document.querySelector("#text-tasks").value = "";

        //adicionar evento de remover
        const removeBtn = newTask.querySelector(".cancel-btn").addEventListener("click", function() { 

            removeTask(this);
        });

        //adicionar evento de confirmar

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {   

            doneTask(this);
        });

    };
};


//funçao de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
};

//funão de concluir tarefa

function doneTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
};


//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn"); 

addBtn.addEventListener ("click", function(e) {
   
    e.preventDefault();
    addEventTask()
});


