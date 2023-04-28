function sameNumbers(number) {

    let digitsArray = number.toString().split('').map(Number);

    let areDigitsSame = (currentValue) => currentValue === digitsArray[0];

    console.log(digitsArray.every(areDigitsSame));
    console.log(digitsArray.reduce((a, b) => a + b));

}

sameNumbers(2222222);
sameNumbers(1234);