function greatestCommonDivisor(a, b) {

    a > b ? compute(b, a) : compute(a, b);

    function compute(small, big) {
        for (let currentNumber = small; currentNumber > 0; currentNumber--) {
            if (big % currentNumber === 0) {
                if (small % currentNumber === 0) {
                    console.log(currentNumber);
                    return;
                }
            }
        }
    }

}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);