const { expect } = require('chai');
const { createCalculator } = require('./addAndSubtract')

describe('Test If createCalculator Function Internal Parameters Can Be Modified', () => {

    it('should return an object when calling the main function', () => {
        expect(createCalculator()).to.be.an('object')
    })

    it('should return all properties', () => {
        expect(createCalculator()).to.have.deep.property('add');
        expect(createCalculator()).to.have.deep.property('subtract');
        expect(createCalculator()).to.have.deep.property('get');
    })

    it('should NOT return an non-existing properties', () => {
        expect(createCalculator(2)).to.not.have.deep.property('sum');
    })

    it('should not be possible to modify the internal sum', () => {
        expect(createCalculator().value).to.equal(undefined);
    });

})

describe('Test createCalculator Function With Valid Inputs', () => {

    it('should add and subtract number inputs as Numbers and return a correct value', () => {
        let calculator = createCalculator();

        calculator.add(2)
        expect(calculator.get()).to.be.equal(2)

        calculator.add(3.2)
        expect(calculator.get()).to.be.equal(5.2)

        calculator.subtract(1)
        expect(calculator.get()).to.be.equal(4.2)
    })

    it('should add and subtract number inputs as Numbers and Strings and return a correct value', () => {
        let calculator = createCalculator();

        calculator.add(2)
        expect(calculator.get()).to.be.equal(2)

        expect(calculator.add('3.2')).to.be.undefined
        expect(calculator.get()).to.be.equal(5.2)

        expect(calculator.subtract(2)).to.be.undefined
        expect(calculator.get()).to.be.equal(3.2)
    })

    
    it('should return 0 if no params are provided', () => {
        let calculator = createCalculator();

        expect(calculator.get()).to.be.equal(0)
    })

})

describe('Test createCalculator Function With Invalid Inputs', () => {

    it('should add and subtract number inputs as Numbers and return a correct value', () => {
        let calculator = createCalculator();
        
        calculator.add({})
        expect(calculator.get()).to.be.NaN
    })

})