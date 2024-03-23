//Create todo list and look through them

const todoArr=[]

todoArr.push('This is Muzafar Seyed')
todoArr.push('Let me tell you few things')
todoArr.push('Privacy Sucks!')
todoArr.push('You cant be truelly annyonomus')
todoArr.push('Never share your personal details online. Well not many ')
todoArr.push('Never click on suspecious links')
todoArr.push('Suspecious in the manner if you think that may be not genuinue link, then i recommend not to follow that link')
todoArr.push('And yeah Programming is Love')

console.log('Read these sentences carefully:\n')
todoArr.forEach(function(todo,index){
    console.log(` ${index+1}-> ${todo}`)
})