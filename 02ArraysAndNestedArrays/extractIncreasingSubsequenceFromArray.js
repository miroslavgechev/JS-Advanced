function extractIncreasingSubsequenceFromArray(input) {

    let result = [];
    result.push(input.shift())

    for (number of input) {
        if (number >= result[result.length - 1]) {
            result.push(number);
        }
    }

    return result;
}

extractIncreasingSubsequenceFromArray(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
);