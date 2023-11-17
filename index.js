/* let a;
let b;
let c; */
/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("side C:", c);
/* */

/* document.getElementById("submitButton").onclick = function(){

    a = document.getElementByID("aTextBox").value;
    a = Number(a);
    
    b = document.getElementByID("bTextBox").value; 
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      
 //    document.getElementById("cLabel").innerHTML = "Side C: " + c;  
  document.getElementById('disp').innerHTML="side c :", a + b 
}  */
/* let add=()=>{
   
    var a=document.getElementById('alabel').value
console.log(a)
    return false
   
} */
let add=()=>{
 var a=document.getElementById('add').value
 var b=document.getElementById('adds').value
 var c=a-b
 console.log(c)
 document.getElementById('disp').innerHTML=c
 
 return false


}
