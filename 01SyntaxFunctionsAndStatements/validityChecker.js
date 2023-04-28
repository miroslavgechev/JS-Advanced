function validityChecker(x1, y1, x2, y2) {

    validityComputation(x1, y1, 0, 0);
    validityComputation(x2, y2, 0, 0);
    validityComputation(x1, y1, x2, y2);

    function validityComputation(a1, b1, a2, b2) {
        let distance = Math.sqrt(Math.pow(a2 - a1, 2) + Math.pow(b2 - b1, 2))
        let status = '';

        if (distance % 1 !== 0) {
            status = 'invalid';
        } else {
            status = 'valid';
        }

        console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${status}`);
    }

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);