//&& ->each condition need to be true
//|| -> any of the codition should be true

let num1=23,num2=24,num3=2

if(num1<num2 && num1<num3 )
console.log(num1+' is lesser than '+num2 +' and ' +num3)
else
console.log(num1+' isnt lesser than '+num2 +' or ' +num3)

let isVerified = true, isLoggedIn=true, hasPaymentToken=true, isGuest= true
if(isVerified && isLoggedIn && hasPaymentToken)
{
    console.log('Greetings User! \nAll access granted, enjoy!')
}
else if(isVerified || isGuest){
    console.log('Sorry, free Previews only!')
}
else{
    console.log('Some error occured, contact admin!')
}
isVerified=false

if(!isVerified){
    console.log('Not Verified!. Click to verify your profile')
}