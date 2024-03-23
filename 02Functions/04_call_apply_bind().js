//call() ..apply()
//call() method takes arguments separately

function sayHello(){
    return "Hello " + this.name;
}         
var obj = {
    name: "Sandy"
};

console.log(sayHello.call(obj)); // call () invokes a method (function) by specifying the owner object.

var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
}        
var person2 = {age:  54};
console.log(person.getAge.call(person2));  //call() method allows an object to use the method (function) of another object.


function saySomething(message){
  return this.name + " is " + message;
}     
var person4 = {name:  "John"};     
console.log(saySomething.call(person4, "awesome")); //call() accepts arguments

//apply() ->>>>>   method takes arguments as an array.
function saySomething(message){
    return this.name + " is " + message;
  }      
  var person4 = {name:  "John"};
  saySomething.apply(person4, ["awesome"]);

  //bind  ->>> This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

  var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet