function calorieObject(input) {

    let calorieList = {};

    for (let index = 0; index < input.length; index += 2) {
        calorieList[input[index]] = Number(input[index + 1]);
    }

    console.log(calorieList);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])