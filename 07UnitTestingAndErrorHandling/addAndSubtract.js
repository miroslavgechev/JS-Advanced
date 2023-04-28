function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let func = createCalculator();
func.add(1);
func.add([1]);
console.log(func.get())

module.exports = {createCalculator}