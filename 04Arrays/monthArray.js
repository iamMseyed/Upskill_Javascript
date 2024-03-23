/*create array where we can have loop over entire months using forEach loop */

const months = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']

console.log('Months in a year follows:')
months.forEach(function(month,index){
    console.log(`Month no. ${index+1}: ${month}`)
})