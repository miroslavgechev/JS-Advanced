function jansNotation(input) {

    let outputArray = [];

    let listOfNumbers = input.filter((el) => !isNaN(el));
    let listOfOperators = input.filter((el) => isNaN(el));

    let operations = {
        '*': (a, b) => (a * b),
        '/': (a, b) => (a / b),
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    if (listOfNumbers.length <= listOfOperators.length) {
        console.log('Error: not enough operands!');
        return;
    };

    if (listOfNumbers.length > listOfOperators.length + 1) {
        console.log('Error: too many operands!');
        return;
    };

    for (let el of input) {
        if (!isNaN(el)) {
            outputArray.push(el);
            continue;
        }
        let firstNumber = outputArray.pop();
        let secondNumber = outputArray.pop();

        outputArray.push(operations[el](secondNumber, firstNumber));

    }

    console.log(outputArray.join(''));

}

jansNotation([5,
    3,
    4,
    '*',
    '-']
)

console.log('-------------');

jansNotation([7,
    33,
    8,
    '-']
);

console.log('-------------');

jansNotation([15,
    '/']
)
