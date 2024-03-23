//for arrays we use const

let one ='one'
let two = 'two'
//irrespective of this, we will follow array from now
const arrangWords = ['Iron Man','Spider Man', 1, 'two','hi','hello']
//added last two elemts after the 24th line of code

console.log('ELements in array:'+arrangWords)

console.log('First element in array:'+arrangWords[0])
console.log(arrangWords.length) //return length

//to print last element we use lenth()

console.log(arrangWords[arrangWords.length-1])

//So we print the length and that is 4
/*Now if we want to add more (as i did) to this array say another element
then if we print out the lenth that will show error*/

 //Working with tidle (`) sign over comes the problem 


console.log('length is:'+arrangWords.length)

//code 25 will change if we hard code the length 
//like 
console.log('length is 4 elements (initially)')

//to do the same we use tidle sign

console.log(`length is ${arrangWords.length} elements`)
