let userName='muza123', userPass='12345678'

//console.log(userPass.length)//this will gice the length of the userpass and will help us check if user entered the reasonable lenth or not

let userCheck= function(user){
    if( (user.length>5) && (user.includes('123')))
      return user
       
      return false
} 

let passCheck = function(pass){
    if( (pass.length>7) && (pass.include('123')))
      return pass
       
      return false
}

console.log(userCheck(userName)) //this will print userName when conditions are meet
console.log(userCheck(userPass)) //this will print userPass when conditions are meet