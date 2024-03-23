x = 10.0;  //initilized variable without decleration, once declared remember to use var not let else it will throw error
console.log(`value of x is ${x}`);
var x; //we declared already initilied variable as var. This is call variable hoisting

/*
    y = 20; //again tried to initilize the variable
    console.log(`value of y is ${y}`);
    let y; //it will generate error as y is of type let which doen't support variable hoisting
*/
//if we didn't use the type say var, let or const. js will automatically take var

let y = 30;
console.log(`value of y is ${y}`);

const a = 30;
// a=30;
console.log(`value of a is ${a}`);
// const a; //will generate error. Thus var will be taken by default 

y = 50;
console.log(`value of a is ${y}`);

var x = 20;
console.log(`value of a is ${x}`);

// a=40; //already of type var and const can't be changed

console.log(`value of a again is ${a}`);
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(a));






