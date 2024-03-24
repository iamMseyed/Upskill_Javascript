/*
A callback is a function that will be executed after another function gets executed.
 In javascript, functions are treated as first-class citizens, they can be used as an 
 argument of another function, can be returned by another function, and can be used as 
 a property of an object.
*/

function divideByHalf(sum){
    console.log(Math.floor(sum / 2));
  }
  
  function multiplyBy2(sum){
    console.log(sum * 2);
  }
  
  function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
  }
  
  // operationOnSum(3, 3, divideByHalf); // Outputs 3
  
  // operationOnSum(5, 5, multiplyBy2); // Outputs 20



  function fun1(a, b){
    console.log (a+b);
  }

  function fun2(a,b){
    console.log(a-b);
  }

  function fun3(a,b,op){
    let n1=a; //10 //1
    let n2=b; //20 //3
    op(n1,n2); //fun1(10,20) //fun2(1,3)
  }

  fun3(10,20,fun1); //3
  fun3(1,3,fun2); //20























