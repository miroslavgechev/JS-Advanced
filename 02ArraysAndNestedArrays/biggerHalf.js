function biggerHalf(input) {

    let result = input.sort((a, b) => a - b);
    let resultLength = Math.ceil(result.length / 2);

   return result.slice(-resultLength);

}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);