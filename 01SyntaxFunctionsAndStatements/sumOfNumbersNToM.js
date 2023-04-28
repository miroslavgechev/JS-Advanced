function sumOfNumbersInInterval(startNumber, endNumber) {

    let result = 0;

    startNumber = +startNumber;
    endNumber = +endNumber;

    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        result += currentNumber;
    }

    console.log(result)

}

sumOfNumbersInInterval('1', '5')