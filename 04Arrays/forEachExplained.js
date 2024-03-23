const days = ['mon','tue','wed','thr','fri','sat','sun']

let say = function(){
    console.log('this message will be printed till the elements in the days array thhat are '+days.length)
}

days.forEach(say)
/*this will print items in the say(). Here in say() we are displaying a messeage but days is an array with 7 elements. Thus 
 say() message will be printed 7 times*/

 /* Remeber when we are about to create any function, we declare that function with the name. Suppose if we didnt declare any function with the name
 and use that function. Yeah we can do that. same goes in the forEach loop. We are actually using the function without declaring its name  */

days.forEach(function(day,index){
    console.log(`Day ${index+1} is ${day}`)
})

/*Here days is an array and in the forEach we are creating a function and passing arguments day and index. Remember we can pass any parameter to this function
the first parameter refers to the individual elements in the array that we are using forEach with. Here we are using forEach with days, thus day in the function
parameter refers to the individual elements statring from the begining. Index gives the place of that element which is refered in the first parameter.
Thus while first iteration, day is 'mon'(which actually is first element of the days array) and index thus is 0 (array start from zero). As we are using forEach, this
loop will work till the last element.
FUNFACT: We can use any name in the function parameters, as day refers to the elements of the days array and index refers to their respective position   */
