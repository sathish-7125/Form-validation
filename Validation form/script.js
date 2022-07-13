function valid() {
// for name  
var v1=document.getElementById("box1");
var e1=document.getElementById("error1");
var exp1=/^[a-zA-Z ]{3,20}$/;
if(v1.value== "")
{
    e1.innerHTML="Please enter your name";
    v1.focus();
    return false;
}
else if (exp1.test(v1.value)===false) 
{
    e1.innerHTML="Please enter valid name";
    v1.focus();
    return false;
}
else
{
    e1.innerHTML="";
}
// for phone number
var v2=document.getElementById("box2");
var e2=document.getElementById("error2");
var exp2=/^[6-9]{1}[0-9]{9}$/;
if(v2.value== "")
{
    e2.innerHTML="Please enter your phone number";
    v2.focus();
    return false;
}
else if(exp2.test(v2.value)===false)
{
    e2.innerHTML="Please enter valid mobile number";
    v2.focus();
    return false;
}
else
{
    e2.innerHTML="";
}
//gender
var v3=document.getElementsByName("gender");
var e3=document.getElementById("error3");
if(v3[0].checked==false && v3[1].checked==false)
{
    e3.innerHTML="Please select your gender";
    return false;
}
else
{
    e3.innerHTML="";
}
//skills
var v4=document.getElementsByName("skills");
var e4=document.getElementById("error4");
var count=0;
for(i=0;i<v4.length;i++)
{
    if(v4[i].checked==true)
    {
        count++;
    }
}
if(count<2)
{
    e4.innerHTML="Please choose minimum 2 skills";
    return false;
}
else
{
    e4.innerHTML="";
}
//department
var v5=document.getElementById("box5");
var e5=document.getElementById("error5");
var sel=v5.selectedIndex;
if(sel==0)
{
    e5.innerHTML="Please select your department";
    return false;
}
else {
    e5.innerHTML="";
  }
}