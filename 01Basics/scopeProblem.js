let case0=2
if(case0==1){

    let case1= true

    if(case1)
    {
            let king= 'King 1One'

        if(true)
        {
            let king = 'King 1Two'
            if(true){
                let king ="king 1Three"
                console.log(king) //this will print the last known value of king i.e king three
            }
        }
        if (true){
            console.log('i am outside1:'+ king) //global value
        }

    }
let case2=true
     if(case2)
     {
            let king= 'King 2One'

        if(true){
            let king = 'King 2Two'

            if(true){
               //let king ="king Three"
                console.log(king) //this will print the last known value of king i.e king Two
            }
        }
        if (true){
            console.log('i am outside2:'+ king) //global value
        }

     }
let case3=true

     if(case3)
     {
            let king= 'King 3One'

        if(true){
           // let king = 'King Two'

            if(true){
               //let king ="king Three"
                console.log(king) //this will print the last known value of king i.e king One
            }
        }
        if (true){
            console.log('i am outside3:'+ king) //global value
        }

     }

//Now comes the real problem    

let case4=true
     if(case4)
     {
           // let king= 'King One'

        if(true){
           // let king = 'King Two'

            if(true){
                king ="king 4Three"
                console.log(king) //this is what is main problem with js!
                //neither we decleared king nor are we but still that will be printed
            }
        }
        if (true){
            console.log('i am outside4:'+ king) //not global value but last known value

            //king three will be printed ! that is error in js. 
            /* If we havent declared the variable and we want to access it, 
            you will be globally declaring it....Source-> js documentation*/
            //thus it is imp to declare variable
        }

     }

let case5=true
     if(case5)
     {
           // let king= 'King One'

        if(true){
           // let king = 'King Two'

            if(true){
               let king ="king 5Three"
                console.log(king) //this is what is main problem with js!
                //neither we decleared king nor are we but still that will be printed
            }
        }
        if (true){
            console.log('i am outside5:'+ king) //this will print last known global king variable present
        }

     }

}
else
{
    let case6=true
    if(case6)
    {
          // let king= 'King One'

       if(true){
          // let king = 'King Two'

           if(true){
              let king ="king 6Three"
               console.log(king) //this is what is main problem with js!
               //neither we decleared king nor are we but still that will be printed
           }
       }
       if (true){
           console.log('i am outside6:'+ king) //this will throw an error as global variable king is not present

           //king three will be printed ! that is error in js. 
           /* If we havent declared the variable and we want to access it, 
           you will be globally declaring it....Source-> js documentation*/
           //thus it is imp to declare variable
       }

    } 
}