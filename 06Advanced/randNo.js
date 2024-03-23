 //random no generation 

let myRandom= Math.floor((Math.random()* 6) +1)
 
 console.log(myRandom)
 
//problem with this code is that the random values will 
//be from 1-6 only and if we want some other no.s we have 
//to change the code 


let upper= 7,lower= 1,myRand1

myRand1= Math.floor((Math.random()*(upper-lower)) + 1)
 console.log(myRand1) 

 //here by changing upper and lower we can get random values 
//accordingly