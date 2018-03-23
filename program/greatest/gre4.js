
function demo(){
var a=Number(document.getElementById("text1").value);
var b=Number(document.getElementById("text2").value);
var c=Number(document.getElementById("text3").value);
var d=Number(document.getElementById("text4").value);

var ans=(a>b)?(a>c)?(a>d)?a:d:  (c>d)?c:d:  (b>c)?(b>d)?b:d:   (c>d)?c:d;
ans+=" is greater";
document.getElementById("ans_txt").innerHTML=ans;


}
