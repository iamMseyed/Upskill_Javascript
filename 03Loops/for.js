const days= ['sun','mon','tue','wed','thr','fri','sat']

//console.log(days[0])

console.log('lenght of array here is ' +days.length) //actual length

//for loop

for(let index = 0; index < days.length; index++){
    const element = days[index]
    console.log(`at index ${index+1}, value is ${days[index]}`)

}