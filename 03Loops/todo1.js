const todo=[]

todo.push('Buy Bread')
todo.push('Record YT vid')
todo.push('Go to gym')

todo.forEach(function(todo,index){
    console.log(`Your task no. ${index+1} is ${todo}`)
})

//pushing elements from end side via for loop

console.log('Reversing the tasks:')
let j=1
for(let i=2;i>=0;i--){
    console.log(`Your task ${j} is ${todo[i]}`)
    j++
}