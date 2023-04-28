function aggregateElements(numbers) {

    let sum = numbers.reduce((a, b) => a + b);

    let inversedNumbers = numbers.map(x => 1 / x)
    let inverseSum = inversedNumbers.reduce((a, b) => a + b);

    let concat = numbers.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);

}

aggregateElements([1, 2, 3])