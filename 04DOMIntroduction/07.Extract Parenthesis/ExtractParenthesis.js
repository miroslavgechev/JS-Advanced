function extract(content) {
    let pattern = /\((.*?)\)/g;
    let text = document.getElementById(content).textContent;

    let matches = text.matchAll(pattern);
    let matchesArray = [];

    for(let el of matches){
        matchesArray.push(el[1])
    }

    return matchesArray.join(';')
}