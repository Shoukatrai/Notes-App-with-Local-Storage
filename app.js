var inputNotes = document.querySelector("#inputNote")
var parent = document.querySelector("#parent");

var notesArray = [];
function notesApp(){
    //validation
    if(inputNotes.value.length < 3){
        alert("Enter corrent note...");
        return;
    }

    var getNotes = localStorage.getItem("notes");
    if(getNotes == null){
        var tempArray = [inputNotes.value];
        localStorage.setItem("notes" , JSON.stringify(tempArray))
    }else{
        var tempArray = JSON.parse(getNotes);
        tempArray.unshift(inputNotes.value);
        localStorage.setItem("notes" , JSON.stringify(tempArray))
    }







// notesArray.unshift(inputNotes.value);
// localStorage.setItem("notes" , JSON.stringify(notesArray))
// console.log(notesArray)

renderUI()

inputNotes.value = ""
}

function renderUI(){
 var notesArray = JSON.parse(localStorage.getItem("notes"));
    var cardUI = ""
    for(var i = 0; i < notesArray.length; i++){
        cardUI  += `<div class="notes">
                ${notesArray[i]}
                <div class="icons">
                    <button class=" btn btn-outline-warning btn-sm ms-3" id = "${i}" onclick = "editBtn(this)"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-outline-warning btn-sm ms-3"  id = "${i}" onclick = "dltBtn(this)"><i class="fa-sharp fa-solid fa-delete-left"></i></button>
                </div>
            </div>`;
    }
    parent.innerHTML = cardUI;
}


function dltBtn(ele){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var index = ele.id;
    notesArray.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(notesArray));
    renderUI();
}


function editBtn(ele){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var index = ele.id;
    var editPrompt = prompt("Enter edit value...");
    notesArray.splice(index , 1 , editPrompt);
    localStorage.setItem("notes" , JSON.stringify(notesArray));
    renderUI();
}