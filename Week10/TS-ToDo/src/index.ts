        // variables
        var List = document.getElementById("List") as HTMLButtonElement | null;
        var UserInput = document.getElementById("UserInput") as HTMLButtonElement | null;
        var AddButton = document.getElementById("AddButton") as HTMLButtonElement | null;
        var RemoveAll = document.getElementById("RemoveAll") as HTMLButtonElement | null;


        //add list item function
        AddButton.onclick = function Add() {

            if(AddButton == null) return;

            var LIbox = document.createElement("div");
            List.append(LIbox);
            // this.parentNode.style.align = "right";

            var ListItem = document.createElement("li");
            LIbox.append(ListItem);
            ListItem.innerHTML = UserInput.value;
            ListItem.classList.add("list");
            ListItem.style.color = "#00d81d";

            //this is a cheat. couldnt work out how to justify content
            var spacer = document.createElement("x");
            ListItem.append(spacer);
            spacer.innerHTML = " . . . . . . ";
            spacer.style.color = "#FFFFFF";

            //change colour list item function
            ListItem.onclick = function CheckItem() {
                ListItem.classList.add("check");
                ListItem.style.color = "grey";
            }

            //adds the delete button
            var DeleteButton = document.createElement("text");
            spacer.append(DeleteButton);
            DeleteButton.innerHTML = "remove";
            DeleteButton.style.color = "red";
    


            //delete list item function
            DeleteButton.onclick = function Remove() {
                ListItem.remove();
            }

            //resets input text box
            UserInput.value = "";

            //pauses event
            event.preventDefault();

        }

        // removes all items from list
        RemoveAll.onclick = function RemoveAll() {
            List.innerHTML = "";
        }