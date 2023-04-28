function storeCatalogue(input) {

    let catalogue = {};

    input.forEach(line => {
        let [product, price] = line.split(' : ');
        catalogue[product] = Number(price);
    });

    let sortedKeys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    let currentLetter = '';

    for (let key of sortedKeys) {
        if (currentLetter !== key[0].toUpperCase()) {
            currentLetter = key[0].toUpperCase();
            console.log(currentLetter);
        }

        console.log(`  ${key}: ${catalogue[key]}`);
    }

}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)