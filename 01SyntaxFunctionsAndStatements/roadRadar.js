function roadRadar(currentSpeed, areaType) {

    let rules = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    if (currentSpeed <= rules[areaType]) {
        console.log(`Driving ${currentSpeed} km/h in a ${rules[areaType]} zone`);
        return;
    }

    let speedingValue = currentSpeed - rules[areaType];
    let status = '';

    if (speedingValue <= 20) {
        status = 'speeding';
    } else if (speedingValue <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(`The speed is ${speedingValue} km/h faster than the allowed speed of ${rules[areaType]} - ${status}`)

}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');