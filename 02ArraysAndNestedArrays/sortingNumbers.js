function sortingNumbers(input) {

    let smallestToLargest = input.slice(0).sort((a, b) => a - b);
    let largestToSmallest = input.slice(0).sort((a, b) => b - a);

    let result = [];

    for (let index = 0; index < input.length / 2; index++) {
        result.push(smallestToLargest[index]);
        result.push(largestToSmallest[index]);
    }

    if(result.length > input.length){
        result.pop();
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 66])