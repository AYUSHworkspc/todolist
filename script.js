//var btn=document.querySelector("button");
//btn.addEventListener("click",function(){
//const newTask=document.createElement('li');
//const listGenerated=document.getElementsByClassName('listoftasks');
//listGenerated[0].appendChild("newTask");
//
//}) 



function addTask(){
    const newTask=document.createElement('li');
 const listGenerated=document.getElementsByClassName('listoftasks');
 listGenerated[0].appendChild(newTask);
 newTask.textContent=document.getElementById("input").value;
 document.getElementById("input").value="";
 deleteTask(newTask)
}

function deleteTask(newTask){
    var deleteBtn=document.createElement("button");
    deleteBtn.textContent="DELETE";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick=function(){
        newTask.remove();
    }
}