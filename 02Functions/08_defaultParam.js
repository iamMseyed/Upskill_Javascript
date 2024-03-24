let myMul = function(num1,num2){
    return num1*num2
}
let res= myMul(3,4)
console.log(`Result is ${res}`)

let guestUser = function(name,courseCount){
    return 'Hello ' + name + ', your course count is '+ courseCount
}

console.log(guestUser())
/*here we didnt pass any value, thus by default javascript will assign 
undefined to name and courseCount*/

/*Actually to overcome this problem we use default parameters.
Say if name and courseCount are not passed still default parameters will
be called */

//lets elobrate via another function

let guestTeacher = function(tName='Newbie',cAssgned=0){
    return 'Hello ' + tName +', you are assigned to teach ' +cAssgned + ' course(s)'  
}

console.log(guestTeacher())
//here when this code will be executed default values will be passed to tName and cAssgned

console.log(guestTeacher('Joey',4))
//here when this function will be executed, these passed values will overtake default params