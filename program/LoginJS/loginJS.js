function demo(){
var userName=document.getElementById("text").value;
var password=document.getElementById("pwd").value;
if((userName==localStorage['user_id'])&&(password==localStorage['password']))
	{
	
	window.open("to_do_list.html");
	
	}

else
{
	alert("incorrect");
}

}

function demo1(){
document.getElementById("floating").setAttribute(
       "style", "top: 290px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}
function demo2(){
document.getElementById("floating2").setAttribute(
       "style", "top: 360px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}