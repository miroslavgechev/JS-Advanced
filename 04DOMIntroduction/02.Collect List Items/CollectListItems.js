function extractText() {
    let elements = document.querySelectorAll('ul#items li');

    let result = document.querySelector('#result');
    result.value = '';

    for(let el of elements){
        result.value += el.textContent + '\n'
    }
}