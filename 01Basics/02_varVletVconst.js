//var vs let vs const
/*
var:
var is function-scoped or globally-scoped, meaning it is visible throughout the function or globally
if declared outside of any function. var declarations are hoisted to the top of their scope during 
compilation, meaning they are processed before the code is executed. If you redeclare a variable 
with var within the same scope, it overrides the previous declaration.
*/

function exampleVar() {
    console.log("Printing value of x before declaring: "+x); // undefined, variable declaration is hoisted
    var x = 10;
    if (true) {
        var x = 20;
        var x = 40; // works
        console.log("Value of var x inside block: "+x); // Outputs 40
    }
    console.log("Value of var x outside block: "+x); // Outputs 40
}
exampleVar();

/*
let:
let is block-scoped, meaning it is only visible within the block it's declared in (including loops, 
conditionals, etc.). let declarations are also hoisted to the top of their block, but they are not 
initialized until the actual declaration is evaluated. You can't redeclare a variable within the 
same block scope.
*/

function exampleLet() {
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    if (true) {
        let x = 20;
        // let x = 30;// will throw error
        console.log("Value of let x inside block: "+x); // Outputs 20
    }
    console.log("Value of let x outside block: "+x); // Outputs 10
}
exampleLet();

/*
const:
const is also block-scoped like let.
It declares a constant whose value cannot be changed after initialization.
Similar to let, const declarations are also hoisted to the top of their block, but they are not 
initialized until the actual declaration is evaluated.
*/
function exampleConst() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    const x = 10;
    // x = 20; // This would throw an error because x is constant and cannot be reassigned
    console.log("Value of const x:"+x); // Outputs 10
}
exampleConst();