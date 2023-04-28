function listOfNames(listOfNames){

    listOfNames.sort((a,b) => a.localeCompare(b));
    
    for(let index = 0; index < listOfNames.length; index++){
        console.log(`${index+1}.${listOfNames[index]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);