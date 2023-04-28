let PaymentPackage = require('./paymentPackage');
let { assert } = require('chai');

describe('Test Name Getters and Setters', () => {

    it('should return correct properties with correct input', () => {
        let test = new PaymentPackage('Kenov', 30);
        assert.equal(test.name, 'Kenov');
        test.name = 'Ivan';
        assert.equal(test.name, 'Ivan');
    })

    it('should throw error if value is empty or not string', () => {
        assert.throw(() => new PaymentPackage('', 30), 'Name must be a non-empty string');
        assert.throw(() => new PaymentPackage(13, 30), 'Name must be a non-empty string');
        assert.throw(() => new PaymentPackage(['Kenov'], 30), 'Name must be a non-empty string');
    })

})

describe('Test Value Getters and Setters', () => {

    it('should return correct properties with correct input', () => {
        let test = new PaymentPackage('Kenov', 30);
        assert.equal(test.value, 30);
        test.value = 60;
        assert.equal(test.value, 60);
        test.value = 0;
        assert.equal(test.value, 0);
    })

    it('should throw error if value is negative or NaN', () => {
        assert.throw(() => new PaymentPackage('Kenov', '30'), 'Value must be a non-negative number');
        assert.throw(() => new PaymentPackage('Kenov',), 'Value must be a non-negative number');
        assert.throw(() => new PaymentPackage('Kenov', -30), 'Value must be a non-negative number');
        assert.throw(() => new PaymentPackage('Kenov', [31]), 'Value must be a non-negative number');

    })

})

describe('Test VAT Getters and Setters', () => {
    it('should return correct properties with correct input', () => {
        let test = new PaymentPackage('Kenov', 30);
        assert.equal(test.VAT, 20);
        test.VAT = 50;
        assert.equal(test.VAT, 50);
        test.VAT = 0;
        assert.equal(test.VAT, 0);
    })

    it('should throw error if value is negative or NaN', () => {
        let test = new PaymentPackage('Kenov', 30);
        assert.throw(() => test.VAT = -3, 'VAT must be a non-negative number');
        assert.throw(() => test.VAT = '23', 'VAT must be a non-negative number');
        assert.throw(() => test.VAT = true, 'VAT must be a non-negative number');
        assert.throw(() => test.VAT = [12], 'VAT must be a non-negative number');
    })

})

describe('Test Active Getters and Setters', () => {

    it('should return correct properties with correct input', () => {
        let test = new PaymentPackage('Kenov', 30);
        assert.equal(test.active, true);
        test.active = false;
        assert.equal(test.active, false);
    })

    it('should throw error if value is different than boolean', () => {
        let test = new PaymentPackage('Kenov', 30);
        assert.throw(() => test.active = 1, 'Active status must be a boolean');
        assert.throw(() => test.active = 0, 'Active status must be a boolean');
        assert.throw(() => test.active = 'boolean', 'Active status must be a boolean');
        assert.throw(() => test.active = 'true', 'Active status must be a boolean');
    })
})

describe('Test toString Method Based on Active Property', () => {

    it('should not print inactive if active property is true', () => {
        let test = new PaymentPackage('Kenov', 30);
        test.active = true;
        let result = test.toString();
        assert.equal(result, `Package: Kenov\n- Value (excl. VAT): 30\n- Value (VAT 20%): 36`);
    })

    it('should print inactive if active property is true', () => {
        let test = new PaymentPackage('Kenov', 30);
        test.active = false;
        let result = test.toString();
        assert.equal(result, `Package: Kenov (inactive)\n- Value (excl. VAT): 30\n- Value (VAT 20%): 36`);
    })
})