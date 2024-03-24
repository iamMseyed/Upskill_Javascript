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


//filter() : filters out values based upon conditon
const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log(evenNumbers);

//map() : performs actions on each element and produces new value for each element
const numbersMap = [1, 2, 3, 4, 5];
const squaredNumbers = numbersMap.map(num => num * num);
console.log(squaredNumbers); 

//reduce : produces just a single output
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

//foreach
const numbersForeach = [1, 2, 3, 4, 5];
numbersForeach.forEach(num => console.log(num)); 
numbersForeach.forEach(num=>console.log(num*2));

//find
const users = [
  {
     id: 1, name: 'Alice' 
  },
  { 
    id: 2, name: 'Bob' 
  },
  { 
    id: 3, name: 'Charlie' 
  }
];

const user = users.find(user => user.id === 2);
console.log(user); // Output: { id: 2, name: 'Bob' }


