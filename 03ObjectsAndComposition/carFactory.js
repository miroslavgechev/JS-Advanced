function carFactory(carRequirements) {

    let carEngineOptions = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    let car = {};
    car.model = carRequirements.model;

    if (carRequirements.power <= 90) {
        car.engine = carEngineOptions.small;
    } else if (carRequirements.power <= 120) {
        car.engine = carEngineOptions.normal;
    } else {
        car.engine = carEngineOptions.monster;
    }

    car.carriage = {};
    car.carriage.type = carRequirements.carriage;
    car.carriage.color = carRequirements.color;

    carRequirements.wheelsize % 2 === 0 ? carRequirements.wheelsize-- : carRequirements.wheelsize;
    car.wheels = Array(4).fill(carRequirements.wheelsize);

    return car;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)