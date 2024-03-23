function higherOrder(fn) {
    fn();
  }
     
  higherOrder(function() 
    {
        console.log("Hello world") 
    });  

  function higherOrder2() {
    return function() {
      return "Do something";
    }
  }      
  var x = higherOrder2();
  console.log(x());   // Returns "Do something"