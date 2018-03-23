function demo(){
var userName=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if((userName==localStorage.getItem("userName"))&&(password==localStorage.getItem("Password"))){
	alert("Welcome "+localStorage.getItem("fullname")+"!!!");
	window.open("PlacementGuide.html");
	}
	else
	alert("Please Enter Right Information!!");
	}

function demo1(){
document.getElementById("floating").setAttribute(
       "style", "top: 370px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}
function demo2(){
document.getElementById("floating2").setAttribute(
       "style", "top: 442px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}