
let mybutton = document.getElementById("mybutton") as HTMLButtonElement | null;

if (mybutton == null) {
    alert("button not found");
} else {
    
    mybutton.onclick = function () {
        if(mybutton == null) return;
        alert(mybutton.value);
    }
}






