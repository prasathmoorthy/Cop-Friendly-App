var userName = document.getElementById("Uname");
var passWord = document.getElementById("Pass");
var loginBtn = document.getElementById("log");

loginBtn.addEventListener("click", function(){  
var us = userName.value;
var pw = passWord.value;
if(us==="prasath" && pw==="082")
{
    window.location="D:/PROJECT/JS/firstpage.html";
}
else if(us==="rahul" && pw==="088")
{
    window.location="D:/PROJECT/JS/firstpage.html";
}
else if(us==="kaviya" && pw==="084")
{
    window.location="D:/PROJECT/JS/firstpage.html";
}
else if(us==="jayasri" && pw==="073")
{
    window.location="D:/PROJECT/JS/firstpage.html";
}
else if(us==="admin" && pw==="admin")
{
    window.location="https://cop-friendly2811.firebaseio.com/";
}
else{
    alert("Incorrect username or Incorrect password");
}
  });

