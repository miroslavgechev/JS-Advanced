function printEveryNthElementFromAnArray(input, step) {

    let result = input.filter((el, index) => index % step === 0);

    return result;
}

printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)