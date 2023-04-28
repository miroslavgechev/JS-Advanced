function processOddPositions(input) {

    let result = input
        .filter((el, index) => index % 2 !== 0)
        .map(el => el * 2)
        .reverse();

    return result.join(' ');
}

processOddPositions([10, 15, 20, 25])