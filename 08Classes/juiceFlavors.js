function juiceFlavors(input) {

    let juiceRaw = new Map();
    let juiceBottles = new Map();

    for (let line of input) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        juiceRaw.has(juice) ? juiceRaw.set(juice, juiceRaw.get(juice) + quantity) : juiceRaw.set(juice, quantity);

        while (juiceRaw.get(juice) >= 1000) {
            juiceRaw.set(juice, juiceRaw.get(juice) - 1000);

            juiceBottles.has(juice) ? juiceBottles.set(juice, juiceBottles.get(juice) + 1) : juiceBottles.set(juice, 1);
        }
    }

    juiceBottles.forEach((value, key) => console.log(`${key} => ${value}`))

}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

console.log('------------');

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)