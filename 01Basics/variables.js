// variable->let
// constant-> const
let num=34
let name='iammseyed'

console.log(num)
console.log(num=23)

let score='100',bonus='102',totalScore
totalScore=score+bonus
console.log(totalScore)
/*here comes the problem, we stored 100 as string in score
'100' and added this string value to another string value
stored in bonus. Remember storing numbers as in '' are stored as 
string rather than number. Add on the next line when we did addition
via + we are actually concatinating those two strings.
This result will be 100102 not 202.SO to do so lets write the proper code */
score=100, bonus= 102, totalScore=score+bonus
console.log(totalScore)
// and remember when variable is declared, we dont need to use let again.

let firstName='Muzafar',lastName='Seyed',fullName;
console.log(fullName=firstName+lastName)
//here no space will be placed

console.log(firstName+' '+lastName)
/*this will add space via ' ', remember to 
place (space) between '' */
firstName='Aabid',lastName='Syed'
console.log(firstName +' '+lastName)
//here lastName and firstName are overwritten 

firstName='Jimmya',lastName='Syed'

console.log(lastName+' '+ firstName)
