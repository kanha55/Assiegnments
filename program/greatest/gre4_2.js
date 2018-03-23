
function demo(){
var a=Number(document.getElementById("text1").value);
var b=Number(document.getElementById("text2").value);
var c=Number(document.getElementById("text3").value);
var d=Number(document.getElementById("text4").value);

var t1,t2,ans;

t1=(a>b?a:b);
t2=(c>d?c:d);
ans=(t1>t2?t1:t2);
ans+=" is greater";
document.getElementById("ans_txt").innerHTML=ans;


}
