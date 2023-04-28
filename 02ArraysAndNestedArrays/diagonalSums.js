function diagonalSums(matrix) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let firstDiagonalIndex = 0;
    let secondDiagonalIndex = matrix.length - 1;

    for (let row of matrix) {
        firstDiagonalSum += row[firstDiagonalIndex++];
        secondDiagonalSum += row[secondDiagonalIndex--];
    }

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);

}

diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)