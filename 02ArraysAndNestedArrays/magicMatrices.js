function magicMatrices(matrix) {

    let resultArray = [];

    for(let row = 0; row < matrix.length; row++){
        resultArray.push(matrix[row].reduce((previousValue, currentValue) => previousValue + currentValue));
        
        let sum = 0;

        for(let col = 0; col < matrix.length; col++){
            sum += matrix[row][col];
        }
        resultArray.push(sum);
    }

    console.log(resultArray.every(x => x === resultArray[0]));
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);

console.log('--------');

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);

console.log('--------');

magicMatrices([[11]]
);