function largestNumber(...numbers) {

    let largestNum = Math.max(...numbers);

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16)