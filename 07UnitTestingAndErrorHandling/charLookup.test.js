const { assert } = require('chai');
const { lookupChar } = require('./charLookup')

describe('Check Function Behavior With Invalid Input Parameters', () => {

    it('should return undefined if first param is not string and second param is not number', () => {
        assert.equal(lookupChar(4, 4), undefined);
        assert.equal(lookupChar('Kenov', 'Kenov'), undefined);
        assert.equal(lookupChar('Kenov', '4'), undefined);
        assert.equal(lookupChar('Kenov', 2.5), undefined);
        assert.equal(lookupChar([], 4), undefined);

    })

    it('should return Incorrect Index if index is out of bound', () => {
        assert.equal(lookupChar('Kenov', -1), 'Incorrect index');
        assert.equal(lookupChar('Kenov', 5), 'Incorrect index');
    })

})

describe('Check Function Behavior With Valid Input Parameters', () => {

    it('should return correct char value with valid arguments', () => {
        assert.equal(lookupChar('Kenov', 0), 'K');
        assert.equal(lookupChar('Kenov', 4), 'v');
    })
})