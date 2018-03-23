
function demo(){
var a=Number(document.getElementById("text1").value);
var b=Number(document.getElementById("text2").value);
var c=Number(document.getElementById("text3").value);
if(a==b||b==c||a==c||a==b==c)
ans="please enter different value";
else{
var ans=(a>b)?(a>c?"a is greater":"c is greater"):(b>c?"b is greter":"c is greter");
}
document.getElementById("ans_txt").innerHTML=ans;

}
