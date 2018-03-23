var count=1;
var text=" ";
var Str;var c;
function demo(){
Str=document.getElementById("text12").value;
var a= Str.split(" "); 


document.getElementById("p1").innerHTML=a[0].length;

	for(i=0;i<a.length;i++){
		for(j=0;j<a[i].length;j++){
		if(j==1||(j==(a[i].length-1)&&a[i].length>1)){		
		c=a[i].charAt(j).toUpperCase();		
		c=c.fontcolor("red");
		text += c;
		}
		else {
		c=a[i].charAt(j);
		text +=c;		
			}		
		}
text += " ";
	}
document.getElementById("p1").innerHTML=text;
}