function fruit(fruit, weightInGrams, pricePerKilogram) {

    let weightInKilograms = weightInGrams / 1000;
    let totalSum = pricePerKilogram * weightInKilograms;

    console.log(`I need $${totalSum.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`)

}

fruit('orange', 2500, 1.80)