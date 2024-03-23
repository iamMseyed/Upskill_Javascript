let whoIsHere ='User'

if(whoIsHere=='user'){ //=== same object as well as string
 console.log('Hello User!'+ '\nYou are allowed to access all the courses')
}
else if(whoIsHere==='Teacher')
{ //=== same object as well as string
    console.log('Hello Teacher!'+ '\nYou are allowed to access all the courses')
}
else{
     console.log('You aren\'t authorized! ' +
     '\nPlease authorize via signing up or logging in first!')
}