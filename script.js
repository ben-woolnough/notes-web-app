var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main");
var textModal = document.getElementById("textModal");
var myTextarea = document.getElementById("myTextarea");
var noteContainer = document.getElementById("noteContainer")

var currentNote;
var sidebarOn = true;
var createNote = false; // affects behaviour of submit button

function toggleSidebar() {
    if (sidebarOn == true) {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "20%";
        main.style.marginLeft = "20%";
    }
    sidebarOn = !sidebarOn; // switch boolean
}

function closeModal() {
    textModal.style.display = "none";
    createNote = false;
}

function newNote() {
    createNote = true;
    myTextarea.value = ""; // empty text area
    textModal.style.display = "block"; // open modal
}

function editNote(obj) {
    var content = obj.innerHTML;
    myTextarea.value = content; // load content into editor
    textModal.style.display = "block"; // open modal
    currentNote = obj;
}

function submitChanges() {
    var content = myTextarea.value;
    if (createNote == false) { // update note being edited
        currentNote.innerHTML = content; // fill note div
    } else { // add new note if createNote == true
        var note = "<div class='note' onclick='editNote(this)'>" + 
        content + "</div>";
        noteContainer.innerHTML += note; // add note
        createNote = false; // reset variable
    }
    textModal.style.display = "none"; // close modal
}

function deleteNote() {
    currentNote.remove();
    textModal.style.display = "none"; // close modal
}
