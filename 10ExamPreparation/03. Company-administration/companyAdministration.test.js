let companyAdministration = require('./companyAdministration');
let { assert } = require('chai');

describe('Testing the Functionalites of Company Administration', () => {
    describe('Testing the hiringEmployee Function', () => {

        it('should provide valid results with valid input', () => {
            assert.equal(companyAdministration.hiringEmployee('Kenov', 'Programmer', 3),
                'Kenov was successfully hired for the position Programmer.');
            assert.equal(companyAdministration.hiringEmployee('Kenov', 'Programmer', 25),
                'Kenov was successfully hired for the position Programmer.');
            assert.equal(companyAdministration.hiringEmployee('Kenov', 'Programmer', 2),
                'Kenov is not approved for this position.')
        });

        it('should throw an error if position is not Programmer', () => {
            assert.throw(() => companyAdministration.hiringEmployee('Kenov', 'Website Owner', 20),
                'We are not looking for workers for this position.');
            assert.throw(() => companyAdministration.hiringEmployee('Kenov', 'Website Owner', 3),
                'We are not looking for workers for this position.');
        });
    });

    describe('Testing the calculateSalary Functon', () => {

        it('should provide valid results with valid input', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0);
            assert.equal(companyAdministration.calculateSalary(10), 150);
            assert.equal(companyAdministration.calculateSalary(100), 1500);
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });

        it('should throw an eror if hours are NaN or negative', () => {
            assert.throw(() => companyAdministration.calculateSalary(-3), 'Invalid hours');
            assert.throw(() => companyAdministration.calculateSalary('3'), 'Invalid hours');
        })
    });

    describe('Testing the firedEmployee Function', () => {

        it('should prodive valid result with valid input', () => {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), 'Petar, George');
            assert.equal(companyAdministration.firedEmployee(["Petar"], 0), '');
        })

        it('should throw an error if array is not array or index is out of bound', () => {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1),
                'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3),
                'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2.5),
                'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee({}, 1), 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee('Petar, Ivan, George', 0),
                'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee([], 0),
                'Invalid input');
        })
    })
});
