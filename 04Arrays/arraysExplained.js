const nos= ['one','two','three','four','five','six']

//we will perform operations on the start, middle and end
 
nos[1] = 2
console.log(nos)
//this will replace two with 2 at nos[2], At the start.

//start//

nos.shift()
console.log(nos) 
//by this first index will be shifted (or gone)

nos.unshift('zero')
console.log(nos)
//this will place element at the begining


//middle

nos.splice(2,1,'put this')
/* this replaces the element at position 2 after that 1 elememt
 will be deleted and last parameter will be added at the 2 position in array
.Remember array indexing start with 0 :P */
console.log(nos)

//end

nos.pop() //pops the last value in the array
console.log(nos)

nos.push('three') //this no will be pushed at last to the array 
console.log(nos)