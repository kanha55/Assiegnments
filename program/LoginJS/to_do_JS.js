function demo(){
	var input_task=document.getElementById("add_text").value;
	var input_date=document.getElementById("date").value;
if(input_task=="")
	alert("please insert value")
else{
	var node = document.createElement("LI");
    
//close button
 var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);


//value..
    var textnode = document.createTextNode(input_task+"  "+input_date);
    document.getElementById("date").value="";
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("add_text").value="";

//function close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

 }
}
function demo1(){
	document.getElementById("o").innerHTML="welcome "+localStorage.getItem("full_name")+"!!!";
}