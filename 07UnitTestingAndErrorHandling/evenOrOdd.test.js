const {expect} = require('chai');
const {isOddOrEven} = require('./evenOrOdd');

describe('Test behavoir with invalid arguments', () => {
    it('should return undefined with invalid arguments', () => {
        expect(isOddOrEven(2)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    })
})

describe('Test behavoir with valid arguments', () => {
    it('should return correct output with valid string arguments', () => {
        expect(isOddOrEven('Kenov')).to.be.equal('odd');
        expect(isOddOrEven('Soft')).to.be.equal('even');
        expect(isOddOrEven('')).to.be.equal('even');
    })
})