function sortAnArrayByTwoCriteria(input){

    input.sort((a,b) => a.length - b.length || a.localeCompare(b))

    console.log(input.join('\n'))
}

sortAnArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)