//Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
//For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).


function multiply(a,b){
    return a*b;
  }
  
  function currying(fn){
    return function(a){
      return function(b){
        return fn(a,b);
      }
    }
  }
  
  var curriedMultiply = currying(multiply);
  
  multiply(4, 3); // Returns 12
  
  curriedMultiply(4)(3); // Also returns 12