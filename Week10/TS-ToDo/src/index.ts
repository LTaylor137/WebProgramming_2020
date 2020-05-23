// variables
let List = document.getElementById("List") as HTMLElement | null;
let UserInput = document.getElementById("UserInput") as HTMLTextAreaElement | null;
let AddButton = document.getElementById("AddButton") as HTMLButtonElement | null;
let RemoveAll = document.getElementById("RemoveAll") as HTMLButtonElement | null;

//add list item function
if (AddButton == null) {
    alert("button not found");
} else {
    AddButton.onclick = function Add(event) {
        event.preventDefault();
        console.log(AddButton);
        if (AddButton == null) return;

        if (List == null) {
            alert("button not found");
        } else {
            var LIbox:HTMLDivElement = document.createElement("div");
            LIbox.classList.add("listitembox");
            List.append(LIbox);
        
            if (UserInput == null) {
                alert("input not found");
            } else {
                console.log("list item created.")
                var ListItem:HTMLDivElement = document.createElement("div");
                ListItem.classList.add("listitem");
                LIbox.append(ListItem);
                ListItem.innerHTML = UserInput.value;

                //change colour list item function
                ListItem.onclick = function CheckItem() {
                    console.log("listitemchecked")
                    ListItem.classList.add("checked");
                }

                //adds the delete button
                var DeleteButton:HTMLDivElement = document.createElement("div");
                LIbox.append(DeleteButton);
                DeleteButton.classList.add("listdel");
                DeleteButton.innerHTML = "remove";
               
                //delete list item function
                DeleteButton.onclick = function Remove() {
                    ListItem.remove();
                    DeleteButton.remove();
                    LIbox.remove();
                }

                //resets input text box
                if (UserInput == null) {
                    console.log("UserInput not found");
                } else {
                    UserInput.value = "";

                    //pauses event
                    if (event == null) {
                        console.log("event not found");
                    } else {
                        event.preventDefault();
                    }

                    // removes all items from list
                    if (RemoveAll == null) {
                        console.log("RemoveAll not found");
                    } else {
                        RemoveAll.onclick = function RemoveAll() {
                            if (List == null) return;
                            List.innerHTML = "";
                        }
                    }
                }
            }
        }
    }
}



