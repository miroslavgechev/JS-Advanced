function circleArea(parameter) {

    let parameterType = typeof parameter;

    if (parameterType !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${parameterType}.`);
        return;
    }

    let circleArea = Math.PI * parameter * parameter;

    console.log(circleArea.toFixed(2));

}

circleArea(5)
circleArea('name')