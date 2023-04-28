function deleteByEmail() {
    let emailCells = document.querySelectorAll('#customers tr td:nth-child(2)');
    let email = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');
    let isFound = false;

    for(let cell of emailCells){
        if(cell.textContent === email){
            cell.parentElement.remove()
            isFound = true;
        }
    }

    if(isFound){
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }

}