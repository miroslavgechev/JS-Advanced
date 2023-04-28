function biggestElement(input) {

    let result = []

    for (let el of input) {
        result.push(...el);
    }

    console.log(Math.max(...result))
}

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
)