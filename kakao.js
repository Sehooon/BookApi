const searchForm=document.querySelector(".search_form"),
    searchInput=searchForm.querySelector("input"),
    searchList=document.querySelector(".book-toDoList"),
    BookShelf=document.querySelector(".bookshelf");

    
    function Make_Book(BookObj){     
        BookShelf.innerHTML += 
        `<div class="BookContent" id="${BookObj.isbn}"><img src="${BookObj.thumbnail}">  <ul> <li><a href="${BookObj.url}"> <h1>✔${BookObj.title}</h1></a> </li>  <li> ✍글쓴이 : ${BookObj.authors} | 출판사 : ${BookObj.publisher} </li> <li>${BookObj.contents} </li> <button type="button" class="addListBtn" onclick='ClickBtn("${BookObj.title}","${BookObj.url}");'>🛒바구니에 담기</button></ul></div>`;
    }
    const loadBookList=()=>{
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: searchInput.value },
            headers: {Authorization: "KakaoAK 1f82605515de338a6a4d943966e2b0d5" }
          })
            .done((msg) => { 
                BookShelf.innerHTML="";
                for(BookObj of msg.documents){ Make_Book(BookObj);} })
        }
        function handleSubmit(event){
            event.preventDefault();     
            loadBookList(); 
            searchInput.value="";
        };

        
        function loadTd()
        {
            const loadedToDos=localStorage.getItem(TODOS_LS);
            if( loadedToDos !==null){  
                const parsedToDos = JSON.parse(loadedToDos);
                parsedToDos.forEach((toDo) => {
                    addBookList(toDo.text,toDo.url);
            });
        }
        }
  

function init(){ 
    loadTd();
    searchForm.addEventListener("submit", handleSubmit);};

init();
