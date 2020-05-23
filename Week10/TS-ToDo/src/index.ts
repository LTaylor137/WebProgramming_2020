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
            var LIbox = document.createElement("div");
            LIbox.classList.add("listitembox");
            List.append(LIbox);
        

            if (UserInput == null) {
                alert("input not found");
            } else {
                var ListItem = document.createElement("li");
                LIbox.append(ListItem);
                ListItem.innerHTML = UserInput.value;
                ListItem.classList.add("listitem");
                ListItem.style.color = "#00d81d";

                //this is a cheat. couldnt work out how to justify content
                var spacer = document.createElement("x");
                ListItem.append(spacer);
                spacer.innerHTML = " . . . . . . ";
                spacer.style.color = "#FFFFFF";

                //change colour list item function
                ListItem.onclick = function CheckItem() {
                    console.log("listitemchecked")
                    ListItem.classList.add("check");
                    ListItem.style.color = "grey";
                }

                //adds the delete button
                var DeleteButton = document.createElement("text");
                spacer.append(DeleteButton);
                DeleteButton.classList.add("listdel");
                DeleteButton.innerHTML = "remove";
               

                //delete list item function
                DeleteButton.onclick = function Remove() {
                    ListItem.remove();
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
                            if (RemoveAll == null) return;
                            if (List == null) return;
                            List.innerHTML = "";
                        }
                    }
                }
            }
        }
    }
}



