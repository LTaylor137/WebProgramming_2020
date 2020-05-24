// variables
var List = document.getElementById("List");
var UserInput = document.getElementById("UserInput");
var AddButton = document.getElementById("AddButton");
var RemoveAll = document.getElementById("RemoveAll");
//add list item function
AddButton.onclick = function Add() {
    if (AddButton == null)
        return;
    var LIbox = document.createElement("div");
    List.append(LIbox);
    // this.parentNode.style.align = "right";
    var ListItem = document.createElement("li");
    LIbox.append(ListItem);
    ListItem.innerHTML = UserInput.value;
    ListItem.classList.add("list");
    ListItem.style.color = "#00d81d";
    //change colour list item function
    ListItem.onclick = function CheckItem() {
        ListItem.classList.add("check");
        ListItem.style.color = "grey";
    };
    //adds the delete button
    var DeleteButton = document.createElement("text");
    spacer.append(DeleteButton);
    DeleteButton.innerHTML = "remove";
    DeleteButton.style.color = "red";
    //delete list item function
    DeleteButton.onclick = function Remove() {
        ListItem.remove();
    };
    //resets input text box
    UserInput.value = "";
    //pauses event
    event.preventDefault();
};
// removes all items from list
RemoveAll.onclick = function RemoveAll() {
    List.innerHTML = "";
};
