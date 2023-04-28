function argumentInfo(...params) {

    let resultObject = {};

    for (let param of params) {
        let type = typeof (param);

        console.log(`${type}: ${param}`)

        if (!resultObject.hasOwnProperty(type)) {
            resultObject[type] = 0;
        }

        resultObject[type]++
    }

    Object.keys(resultObject)
        .sort((a, b) => resultObject[b] - resultObject[a])
        .forEach(key => console.log(`${key} = ${resultObject[key]}`));

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })