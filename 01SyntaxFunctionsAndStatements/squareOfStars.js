function squareOfStars(size = 5) {

    for (let row = 0; row < size; row++) {
        console.log('* '.repeat(size));
    }

}

squareOfStars(1);
console.log('');
squareOfStars(5);
console.log('');
squareOfStars(7);
console.log('');
squareOfStars();