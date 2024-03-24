let dailySchedule={
    day:'Monday',
    meetingsLeft:0,
    meetDone:0,
    addMeeting:function(){
        console.log('i am inside function')
    }
}

let dailySchedule1={
    day:'Monday1',
    meetingsLeft:'01',
    meetDone:'01',
    addMeeting:function(){
        console.log(this)
/*this -> what ever the properties inside this object display those and via this
 other properties can be accessed*/
    }
}

console.log(dailySchedule)
dailySchedule.addMeeting() 
//accessing addMeeting() which is present inside dailySchedule Object

console.log(dailySchedule1)
dailySchedule1.addMeeting()

//usefullness of this

let dailySchedule3={
    day:'Mondler',
    meetingsLeft:'01',
    meetDone:3,
    addMeeting:function(num){
        this.meetingsLeft = this.meetingsLeft +num
    },
    summary: function(){
        return `${this.meetingsLeft}`
        //here 'this' has all the acces to the properties of object
    }
}

dailySchedule3.addMeeting(3)
console.log(dailySchedule3.summary())
dailySchedule.day //this way we access property
dailySchedule.addMeeting()// this wway we access function