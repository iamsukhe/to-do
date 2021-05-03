var saveBtn = document.getElementById("save-btn");
showTodo();
showComp();
saveBtn.addEventListener("click" , function(){
    var todoText = document.getElementById("todo-text")
    var todo = localStorage.getItem("todo");
    if(todo===null){
        todoObj =[];
    }else{
        todoObj = JSON.parse(todo)
    }
    todoObj.push(todoText.value);
    console.log(todoObj);
    localStorage.setItem("todo", JSON.stringify(todoObj));
    todoText.value = "";
    showTodo();
})

function showTodo(){
    var todo = localStorage.getItem("todo");
    if(todo===null){
        todoObj = [];
    }else{
        todoObj = JSON.parse(todo)
    }
    var html = "";

    todoObj.forEach(function(value , index){
        html += `<li>${value}<i id="${index}" class="fas fa-trash-alt" onclick= "deleteList(this.id)"></i><input type="checkbox" class="task-comp" id="${index}" onclick="compTodo(this.id)"></li>`
    });
    var todoElm = document.getElementById("todo-list");
    if(todoObj.length != 0){
        todoElm.innerHTML = html;
    }else{
        todoElm.innerHTML = "<h4>Empty Todo</h4>";
    }
}

function deleteList(id){
    var todo = localStorage.getItem("todo");
    if(todo===null){
        todoObj = [];
    }else{
        todoObj = JSON.parse(todo)
    }
    todoObj.splice(id,1);
    localStorage.setItem("todo", JSON.stringify(todoObj));
    showTodo();

}

function compTodo(index){
    var todo = localStorage.getItem("todo");
    if(todo===null){
        todoObj = [];
    }else{
        todoObj = JSON.parse(todo)
    }
    var value = todoObj[index];

    var comp = localStorage.getItem("comp");
    if(comp===null){
        compObj =[];
    }else{
        compObj = JSON.parse(comp)
    }
    compObj.push(value);
    console.log(compObj);
    localStorage.setItem("comp", JSON.stringify(compObj));
    showComp();
    deleteList(index);
}

function showComp(){
    var comp = localStorage.getItem("comp");
    if(comp===null){
        compObj =[];
    }else{
        compObj = JSON.parse(comp)
    }
    var HTML = "";

    compObj.forEach(function(value , index){
        HTML += `<li>${value}<i id="${index}" class="fas fa-trash-alt" onclick= "deleteComp(this.id)"></i></li>`
    });
    var compElm = document.getElementById("comp-todo");
    if(compObj.length != 0){
        compElm.innerHTML = HTML;
    }else{
        compElm.innerHTML = "<h4>Nothing to show in Complete Todo</h4>";
    }
}

function deleteComp(ID){
    var comp = localStorage.getItem("comp");
    if(comp===null){
        compObj =[];
    }else{
        compObj = JSON.parse(comp)
    }
    compObj.splice(ID,1);
    localStorage.setItem("comp", JSON.stringify(compObj));
    showComp();
}