function orbit(input) {

    let [rowsNumber, colsNumber, startRowIndex, startColIndex] = input;
    
    let matrix = [];

    for (let row = 0; row < rowsNumber; row++) {
        matrix[row] = [];
    }

    for (let row = 0; row < rowsNumber; row++) {
        for (let col = 0; col < colsNumber; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRowIndex), Math.abs(col - startColIndex)) + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
console.log('--------');
orbit([5, 5, 2, 2]);
console.log('--------');
orbit([3, 3, 2, 2]);
