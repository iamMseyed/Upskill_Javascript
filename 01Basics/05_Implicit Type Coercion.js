var x = 3;
var y = "3";
x + y // Returns "33" 


var x = 24;
var y = "Hello";
x + y   // Returns "24Hello"; 

var name = "Vivek";
var surname = " Bisht";
name + surname     // Returns "Vivek Bisht" 


var x = 3;
var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type


var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)


var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

var a = 226;
var b = "226";

a === b // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.

let val1 = 10;
let val2 = 20;
let total = val1+val2;
console.log("Value of c is :"+total);