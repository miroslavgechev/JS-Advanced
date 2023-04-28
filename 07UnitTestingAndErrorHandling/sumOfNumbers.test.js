const { expect } = require('chai');
const { sum } = require('./sumOfNumbers');

describe('Sum', () => {

    it('shoud receive an array', () => {
        let input = [1, 2, 3];

        expect(input).to.be.an('array');
    })

    it('should sum all provided numbers correctly', () => {

        let input = [1, 2, 3, 4];
        let result = sum(input);
        expect(result).to.be.equal(10);

    })

    it('should return NaN if array contains incorrect data', () => {
        let input = ['1', 'Ivan', 3];
        let result = sum(input);
        expect(result).to.be.NaN;
    })

}
)