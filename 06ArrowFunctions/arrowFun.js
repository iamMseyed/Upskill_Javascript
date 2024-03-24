const nonArwFun = function(name){
    console.log(`my name is ${name}`)
} 
nonArwFun('name')

const ArwFun = (name) => `my name is ${name}`
console.log(ArwFun('name'))
/*In the arrow function we skip the word 'function', return type  
and curly braces. In place of that we start straight with the function 
argument and then the arrow sign followed by the code which function is 
expected to do. Yeah that saves so much of our time */

