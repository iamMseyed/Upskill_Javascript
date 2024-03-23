/*take two inputs total and current marks via function, then calculate percentage 
and assign grade */

let grade = function(num1,num2){
    console.log(`Marks Obtained ${num1} out of ${num2}`)
    let per= (num1/num2)*100

    if(per>=90)
    {
        console.log(`You got A Grade with ${per}% in your paper`)
    }
    else if(per>=80){
        console.log(`You got B Grade with ${per}% in you paper`)
    }
    else if(per>=70){
        console.log(`You got C Grade with ${per}% in your paper`)
    }
    else if(per>=60){
        console.log(`You got D Grade with ${per}% in your paper`)
    }
    else if(per>=50){
        console.log(`You got E Grade with ${per}% in your paper`)
    }
    else if(per>=40){
        console.log(`Oh! You merely cleared this subject with D Grade having ${per}% in your paper.\nTime to work hard from now!`)
    }
    else if (per>=10){
        console.log(`alas! You are failing in this subject.\nYou got just ${per}% with E Grade!. Well try again next time and yeah don't lose any hope`)
    }
    else if (per===0) {
        console.log(`Are you nuts! What where you doing the whole sem ? You scored nothing i.e ZERO(0) in this paper \nWell i cant calculate your percentage in here. \nYou needs lots and lots of hard work!`)
    }
    else if(per<0){
        console.log('Whom are you kidding? Who scores negative marks :P Please enter normal values ')
    }
    else{
        console.log(`Work Hard, this is what i will recommend to you. Just ${num1} marks you got !`)
    }
}
grade(-1,100)

// marks out of 