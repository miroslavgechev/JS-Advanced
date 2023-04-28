const { expect } = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('Check For Symmetry Tests', () => {

    it('should take an array as argument', () => {
        expect(isSymmetric([])).to.be.true;
    })


    it('should return false for incorrect input type', () => {
        expect(isSymmetric(2)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(8.12)).to.be.false;
        expect(isSymmetric('Kenov')).to.be.false;
    })

    it('should return true if input is symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    }
    )

    it('should return false if input is symmetric non-array', () => {
        expect(isSymmetric('1, 2, 3, 2, 1')).to.be.false
    }
    )

    it('should return false if input is asymmetric', () => {
        expect(isSymmetric([1, 2, 3, 2])).to.be.false
        expect(isSymmetric([1, 2, 3, 1, 2])).to.be.false
        expect(isSymmetric([1, 'Kenov', 3, 2])).to.be.false
        expect(isSymmetric([1, 2, 'Kenov', 3, 2])).to.be.false
        expect(isSymmetric([1, 2, 3, '2', 1])).to.be.false;
    }
    )

})