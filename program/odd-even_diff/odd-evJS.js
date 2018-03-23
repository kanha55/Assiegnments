function demo(){
var n=parseInt(document.getElementById("text1").value);
var len=0,num,oddNum=0,evenNum=0,r,evenMul=1,oddMul=1;

while(n>0){
r=n%10;
if(r%2==0){

evenNum=evenNum+r*evenMul;
evenMul=evenMul*10;
}
else{

oddNum=oddNum+r*oddMul;
oddMul=oddMul*10;
}
n=parseInt(n/10);

}
var ans;
if(oddNum>evenNum)
ans=oddNum-evenNum;
else
ans=evenNum-oddNum;

ans="Answer is "+ans;
document.getElementById("ans_txt").innerHTML=ans;
}


//Jquery code
