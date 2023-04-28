let chooseYourCar = require('./chooseYourCar');
let { assert } = require('chai');

describe('Test The chooseYourCar App', () => {

    describe('Test The choosingType Functiion', () => {

        it("provides correct results with correct input", () => {

            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010),
                `This red Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2011),
                `This red Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2000),
                `This Sedan is too old for you, especially with that blue color.`);

            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 1900),
                `This Sedan is too old for you, especially with that blue color.`);
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2022),
                `This red Sedan meets the requirements, that you have.`);
        });

        it('throws errors with incorrect input', () => {

            assert.throw(() => chooseYourCar.choosingType('sedan', 'red', 2010),
                `This type of car is not what you are looking for.`);
            assert.throw(() => chooseYourCar.choosingType('sedan', 'red', 1899),
                `Invalid Year!`);
            assert.throw(() => chooseYourCar.choosingType('sedan', 'red', 2023),
                `Invalid Year!`);
        })
    });

    describe('Test The brandName Functiion', () => {

        it("provides correct results with correct input", () => {

            assert.equal(chooseYourCar.brandName(['BMW', 'VW', 'Nissan'], 1),
                `BMW, Nissan`);
            assert.equal(chooseYourCar.brandName(['BMW', 'VW', 'Nissan'], 0),
                `VW, Nissan`);
            assert.equal(chooseYourCar.brandName(['BMW', 'VW', 'Nissan'], 2),
                `BMW, VW`);
        });

        it('throws errors with incorrect input', () => {

            assert.throw(() => chooseYourCar.brandName('BMW', 'VW', 'Nissan', 1),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName('BMW', 'VW', 'Nissan', 2.5),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(['BMW', 'VW', 'Nissan'], 3),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(['BMW', 'VW', 'Nissan'], 2.1),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(['BMW', 'VW', 'Nissan'], -1),
                `Invalid Information!`);
        })
    });

    describe('Test The carFuelConsumption Functiion', () => {

        it("provides correct results with correct input", () => {

            assert.equal(chooseYourCar.carFuelConsumption(100, 5),
                `The car is efficient enough, it burns 5.00 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 7),
                `The car is efficient enough, it burns 7.00 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 7.01),
                `The car burns too much fuel - 7.01 liters!`);
        });

        it('throws errors with incorrect input', () => {

            assert.throw(() => chooseYourCar.carFuelConsumption('100', '7'),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(100, '7'),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption('100', 7),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 7),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(-100, 7),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(100, '0'),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(100, 0),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(100, -7),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(100),
                `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(),
                `Invalid Information!`);
        })
    });
});
