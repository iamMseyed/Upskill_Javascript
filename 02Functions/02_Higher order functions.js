function higherOrder(fn) {
    fn();
  }
     
//calling higherOrder function
  higherOrder(function() 
    {
        console.log("Hello world") 
    });  

  function higherOrder2() {
    return function() {
      return "Do something";
    }
  }   
  
  //since higherorder2 internally return a function, storing that to a var x and printing that as a function
  var x = higherOrder2();
  console.log(x());   //Returns "Do something"