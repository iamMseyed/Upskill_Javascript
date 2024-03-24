const todos = [
    {
        title:'Eat',
        isDone:true
    },
    {
        title:'Code',
        isDone:true
    },
    {
        title:'Sleep', 
        isDone:false
    }
]

const thingDone = todos.filter((todo)=> todo.isDone === true)
//filter actually works with the callback function and returns only those properties which satisfies the condition
/*here we used arrow function, todo in the arrow fn argument actually is the element/object from the todos array.
Works just like forEach(). In the first iteration, first object and then on and on  */

console.log(thingDone);

//assignment part
/*Create todo with 6 elements 3 true and 3 false all randomly assigned
  also notDone use filter and figure to print only notdone. From that elements print just title */
console.log('New condition follows:')
  let imprtnc = 
  //array of important discussions, here array elements contain objects
  [
      {title:'Privacy', isDone:false},

      {title:'Cookies',isDone:true},

      {title:'Ads',isDone:true},
      
      {title:'Anonymity',isDone:false},
      
      {title:'Cache',isDone:false},
      
      {title:'Data Theft',isDone:true}
  ]

  let notDone = imprtnc.filter( (discus)=>discus.isDone===false )
   notDone.findIndex(function(todo){
            console.log('not done yet title is:  ' +todo.title+'\nFrom the Object')
            console.log(todo)
        })
    
//here we used findIndex() method to pop all the related item on display
//As we cant simply pop as elements here are objects


const phone = {
    price:'20k',
    Model:'iPhone 6s',
    phDes(){
         return `this apple ${this.Model} is for ${this.price}`
        }
}
console.log(phone.phDes());