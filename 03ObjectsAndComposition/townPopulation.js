function townPopulation(input) {

    let registry = {};

    for (let el of input) {
        let [city, population] = el.split(' <-> ');

        if (registry.hasOwnProperty(city)) {
            registry[city] += +population;
        } else {
            registry[city] = +population;
        }
    }

    for (let key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }

}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)