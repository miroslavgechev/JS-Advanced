function diagonalAttack(inputMatrix) {

    let matrix = [];

    inputMatrix.forEach(row => matrix.push(row.split(' ').map(x => Number(x))));

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let diagonalCellsCoordinates = new Set();

    for (let index = 0; index < matrix.length; index++) {
        firstDiagonalSum += matrix[index][index];
        secondDiagonalSum += matrix[index][matrix.length - index - 1];

        diagonalCellsCoordinates.add(`${index}${index}`);
        diagonalCellsCoordinates.add(`${index}${matrix.length - index - 1}`);
    }

    if (firstDiagonalSum !== secondDiagonalSum) {
        printMatrix(matrix);
    } else {
        fillMatrix(matrix, diagonalCellsCoordinates, firstDiagonalSum);
        printMatrix(matrix);
    }

    function fillMatrix(matrix, bannedCoordinates, replaceValue) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                let currentCoordinate = `${row}${col}`;

                if (bannedCoordinates.has(currentCoordinate)) {
                    continue;
                }

                matrix[row][col] = replaceValue;
            }
        }
        return matrix;
    }

    function printMatrix(matrix) {
        for (let row of matrix) {
            console.log(row.join(' '));
        }
    }
}

diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
)

console.log('----');

diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0']
)