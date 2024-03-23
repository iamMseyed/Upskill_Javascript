let dailySchedule={
    day:'Monday',
    meetingsLeft:0,
    meetDone:0
}
console.log(`Initiall values`)
console.log(dailySchedule)
let addMeeting=function(dsObj,meet=0){
    dsObj.meetingsLeft =dsObj.meetingsLeft + meet //here meetings:2
    var totalMeet= dsObj.meetingsLeft
    console.log('After adding meetings\nYou have '+dsObj.meetingsLeft+' meetings today')
}
addMeeting(dailySchedule,8)

let meetingDone = function(dsObj,meet=0){
    if(meet<=dsObj.meetingsLeft) //check meetDone to be less or equal to meetings
    {
        dsObj.meetDone= meet;
        dsObj.meetingsLeft = dsObj.meetingsLeft - meet
        console.log('You appeared in your '+dsObj.meetDone+' meetings and now have '+ dsObj.meetingsLeft +' meetings left')
    }else{
        console.log('Wrong input details!')
    }
}    
meetingDone(dailySchedule,5) 

 let dailySummary = function(dsObj){
    let ttt= dsObj.meetingsLeft
        dsObj.meetingsLeft=dsObj.meetDone
        dsObj.meetDone=ttt
        return `Summary: Appeared in ${dsObj.meetingsLeft} meeting(s) and ${dsObj.meetDone} meeting(s) left today!`
 }
console.log(dailySchedule)
console.log(dailySummary(dailySchedule));


let resetDay=function(dsObj){
    dsObj.meetingsLeft=0
    dsObj.meetDone=0
    console.log(`Reseted mettings left to ${dsObj.meetingsLeft} and meeting appeared to ${dsObj.meetDone}`)
}

resetDay(dailySchedule)
console.log(dailySchedule)


