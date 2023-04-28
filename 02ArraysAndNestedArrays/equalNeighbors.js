function equalNumbers(matrix) {

    let sumOfMatches = 0;
    let matrixColLength = matrix[0].length;

    //Check vertical neighbors
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrixColLength; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                sumOfMatches++;
            }
        }
    }

    //Check horizontal neighbors
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrixColLength - 1; col++) {
            if (matrix[row][col] === matrix[row][col + 1]) {
                sumOfMatches++;
            }
        }
    }

    console.log(sumOfMatches);
}

equalNumbers([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
console.log('----');
equalNumbers([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)
console.log('----');
equalNumbers([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
);