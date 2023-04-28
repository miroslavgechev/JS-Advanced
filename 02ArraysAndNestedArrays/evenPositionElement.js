function evenPositionElement(input){

    let result = input.filter((el, index) => index % 2 === 0);
    console.log(result.join(' '));

}

evenPositionElement(['20', '30', '40', '50', '60'])