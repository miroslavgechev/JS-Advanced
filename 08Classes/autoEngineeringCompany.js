function autoEngineeringCompany(input) {

    let producedCarsList = new Map();

    for (let line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');

        producedCars = Number(producedCars);

        if (!producedCarsList.has(carBrand)) {
            producedCarsList.set(carBrand, []);
        }

        if (producedCarsList.get(carBrand).filter(el => el.carModel === carModel).length > 0) {

            producedCarsList.get(carBrand).forEach(el => {
                if (el.carModel === carModel) { el.producedCars += producedCars }
            });
        } else {
            producedCarsList.get(carBrand).push({ carModel, producedCars })
        }
    }

    producedCarsList.forEach((value, key) => {
        console.log(key)
        for (let index = 0; index < value.length; index++) {
            console.log(`###${value[index].carModel} -> ${value[index].producedCars}`)
        }
    })

}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)