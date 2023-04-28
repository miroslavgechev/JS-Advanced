function spiralMatrix(row, col) {

    let counter = 1;
    let startRow = 0;
    let startCol = 0;
    let endRow = row - 1;
    let endCol = col - 1;
    let matrix = [];

    for (let index = 0; index < row; index++) {
        matrix[index] = [];
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let index = startCol; index <= endCol; index++) {
            matrix[startRow][index] = counter;
            counter++;
        }

        startRow++;

        for (let index = startRow; index <= endRow; index++) {
            matrix[index][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let index = endCol; index >= startCol; index--) {
            matrix[endRow][index] = counter;
            counter++;
        }

        endRow--;

        for (let index = endRow; index >= startRow; index--) {
            matrix[index][startCol] = counter;
            counter++
        }

        startCol++;

    }

    matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);