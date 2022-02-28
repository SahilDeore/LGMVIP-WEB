var tasks = document.getElementById("tasks");
function newTask() {
    var row = tasks.insertRow(0);

    var tasktext = row.insertCell(0);
    var removeBtn = row.insertCell(1);
    
    tasktext.innerHTML = document.getElementById("textInput").value;
    tasktext.className = "unchecked_task";

    removeBtn.innerHTML = "&#10006";
    removeBtn.className = "close";

    tasktext.addEventListener("click", function() {
        console.log("checking");
        if(this.className == "unchecked_task") {
            console.log("pahila");
            this.className = "checked_task";
        }
        else if(this.className == "checked_task") {
            this.className = "unchecked_task";
        }
    });
    removeBtn.addEventListener("click", function() {
        console.log("removed");
        var row = this.parentElement;
        row.style.display = "none";
    });
    document.getElementById("textInput").value = "";
}