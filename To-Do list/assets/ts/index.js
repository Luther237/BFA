
function ajouter(){
var name = document.getElementById("add-task").value;
var resp = document.getElementById("add-user").value;
var time = document.getElementById("add-time").value;

document.getElementById("task41").innerHTML=name;
document.getElementById("resp42").innerHTML=resp;
document.getElementById("time43").innerHTML=time;

document.getElementById("tache6").style.display="table-row";
}