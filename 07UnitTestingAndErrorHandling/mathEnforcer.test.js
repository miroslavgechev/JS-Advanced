const { assert } = require('chai');
const mathEnforcer = require('./mathEnforcer');
//const { addFive, subtractTen, sum } = require('./mathEnforcer');

describe('Test Functionalities of mathEnforcer Function', () => {

    describe('Test Behavior of addFive Method With Valid And Invalid Arguments', () => {

        it('should return undefined if input parameter is not a number', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
            assert.equal(mathEnforcer.addFive('Kenov'), undefined);
            assert.equal(mathEnforcer.addFive({}), undefined);
            assert.equal(mathEnforcer.addFive(true), undefined);
            assert.equal(mathEnforcer.addFive([]), undefined);


        })

        it('should return correct result if input parameter is a number', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.closeTo(mathEnforcer.addFive(2.55), 7.55, 0.01);
            assert.equal(mathEnforcer.addFive(-3), 2);
        })
    })

    describe('Test Behavior of subtractTen Method With Valid And Invalid Arguments', () => {

        it('should return undefined if input parameter is not a number', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
            assert.equal(mathEnforcer.subtractTen('Kenov'), undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
            assert.equal(mathEnforcer.subtractTen(true), undefined);
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        })

        it('should return correct result if input parameter is a number', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.closeTo(mathEnforcer.subtractTen(2.55), -7.45, 0.01);
            assert.equal(mathEnforcer.subtractTen(-3), -13);
        })
    })

    describe('Test Behavior of sum Method With Valid And Invalid Arguments', () => {

        it('should return undefined if input parameter is not a number', () => {
            assert.equal(mathEnforcer.sum('5', 'A'), undefined);
            assert.equal(mathEnforcer.sum('Kenov',5), undefined);
            assert.equal(mathEnforcer.sum(5, {}), undefined);
            assert.equal(mathEnforcer.sum(true, {}), undefined);
            assert.equal(mathEnforcer.sum([], 5), undefined);
        })

        it('should return correct result if input parameter is a number', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(5, -5), 0);
            assert.equal(mathEnforcer.sum(10, -5), 5);
            assert.closeTo(mathEnforcer.sum(5.5, -5), 0.5, 0.01);
            assert.closeTo(mathEnforcer.sum(5.55, -5.65), -0.1, 0.01);
            assert.equal(mathEnforcer.sum(-3, -5), -8);
        })
    })
})