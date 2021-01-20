const TODOS_LS='toDos';
let toDos = [];

function saveToDos(){ localStorage.setItem(TODOS_LS,JSON.stringify(toDos));}
function deleteBook(event){
    const List=document.querySelector(".book-toDoList");
    const btn= event.target;
    const li=btn.parentNode;
    List.removeChild(li);
    const cleanToDos = toDos.filter((toDo)=>{
        return toDo.id!==parseInt(li.id);
    });
    toDos= cleanToDos;
    saveToDos();
} 

function addBookList (text,url){
    const List=document.querySelector(".book-toDoList");
    const li = document.createElement("li");
    const delBtn = document.createElement("button",deleteBook);
    const span = document.createElement("span");
    const a=document.createElement("a");
    const newId= toDos.length+1;
    a.setAttribute("href",url);
    li.setAttribute("class","BoookList"); 
    delBtn.setAttribute("id","DelBtn")
    delBtn.innerHTML ="❌";
    delBtn.addEventListener('click',deleteBook);
    span.innerText ="📖" +text;
    a.append(span);
    li.appendChild(a);
    li.appendChild(delBtn);
    li.id = newId;
    List.appendChild(li);
    const toDoObj={
        text:text,
        url:url,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

};
        
function ClickBtn(text,url){
    addBookList(text,url);
    swal({
        title: "추가 완료!",
        text,
        icon: "success",
        button: "확인",
    });
    
}
