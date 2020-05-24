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
            let LIbox: HTMLDivElement = document.createElement("div");
            LIbox.classList.add("listitembox");
            List.append(LIbox);

            if (UserInput == null) {
                alert("input not found");
            } else {
                console.log("list item created.")
                let ListItem: HTMLDivElement = document.createElement("div");
                ListItem.classList.add("listitem");
                LIbox.append(ListItem);
                ListItem.innerHTML = UserInput.value;

                let checked = new Boolean(false);
                let RemoveButton: HTMLDivElement = document.createElement("div");

                //change colour of list item
                ListItem.onclick = function CheckItem() {
                    
                    //change to grey and checked
                    if (checked == false) {
                        checked = true;
                        console.log("listitem checked")
                        console.log("checked = " + checked)
                        ListItem.classList.remove("listitem");
                        ListItem.classList.add("checked");

                        //adds the delete button
                        LIbox.append(RemoveButton);
                        RemoveButton.classList.add("listdel");
                        RemoveButton.innerHTML = "remove";

                        //delete list item function
                        RemoveButton.onclick = function Remove() {
                            ListItem.remove();
                            RemoveButton.remove();
                            LIbox.remove();
                        }

                        //change back to green
                    } else if (checked == true) {
                        checked = false;
                        console.log("listitem unchecked")
                        console.log("checked = " + checked)
                        ListItem.classList.remove("checked");
                        ListItem.classList.add("listitem");

                        //removes the delete button again
                        RemoveButton.remove();
                    }
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



