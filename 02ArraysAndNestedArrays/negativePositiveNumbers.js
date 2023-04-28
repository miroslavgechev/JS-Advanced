function negativePositivieNumbers(input) {

    let result = [];

    for (let el of input) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join("\n"));

}

negativePositivieNumbers([7, -2, 8, 9])