function lastKNumbersSequence(sequenceLength, sumLength) {

    let result = [1];

    for (let sequenceNumber = 1; sequenceNumber < sequenceLength; sequenceNumber++) {

        let currentSum = result
            .slice(-sumLength)
            .reduce((total, currentValue) => total + currentValue);

        result.push(currentSum)
    }

    return result;

}

lastKNumbersSequence(6, 3)