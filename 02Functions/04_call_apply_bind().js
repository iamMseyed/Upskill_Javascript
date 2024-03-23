//call, apply and bind

let personOne={
  firstName:"firstOne",
  lastName:"lastOne"
}

let personTwo={
  firstName:"firstTwo",
  lastName:"lastTwo",
}

function printName(curAdr,perAdr){
  console.log(this.firstName+" "+this.lastName+ ", curArd "+curAdr+" & perAdr "+perAdr);
}


printName.call(personOne,"BLR","SXR"); 
printName.call(personTwo,"SXR","PUL");
/*call() used to invoke a method directly by passing in the reference which points to this varaible in side the method
and takes further arguments individually
*/

printName.apply(personOne,["BLR","SXR"])
printName.apply(personTwo,["SXR","PUL"]);
//apply() also does the same as call() but it takes second argument as an arraylist passed to printName()

let fullName = printName.bind(personOne,"SXR","PUL");
fullName();
//bind() method does not directly invoke the method but gives the copy of exactly same method which can be called later