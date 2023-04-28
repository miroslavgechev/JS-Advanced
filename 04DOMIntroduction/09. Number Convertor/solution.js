function solve() {

    let selectElement = document.getElementById('selectMenuTo');

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';

    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';

    selectElement.appendChild(optionHexadecimal);
    selectElement.appendChild(optionBinary);

    document.querySelector('#container button').addEventListener('click', convertOnClick);

    function convertOnClick() {

        let number = Number(document.getElementById('input').value);
        let result = document.getElementById('result');

        if (selectElement.value === 'binary') {
            result.value = number.toString(2);
        }

        if (selectElement.value === 'hexadecimal') {
            result.value = number.toString(16).toUpperCase();
        }

    }
}