function cookingByNumbers(...input) {

    let number = Number(input.shift());

    for (let operation of input) {

        switch (operation) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= (number * 0.2); break;
        }

        console.log(number);
    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('----');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');