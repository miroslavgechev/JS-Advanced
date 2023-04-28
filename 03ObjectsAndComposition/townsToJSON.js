function townsToJSON(input) {

    let catalogue = [];
    let regex = new RegExp(/\s*\|\s*/);

    input.shift();

    for (let line of input) {
        let [town, latitude, longitude] = line.split(regex).filter(Boolean);
        catalogue.push({
            'Town': town,
            'Latitude': Number(Number(latitude).toFixed(2)),
            'Longitude': Number(Number(longitude).toFixed(2))
        });
    }

    console.log(JSON.stringify(catalogue))

}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552           | 23.32601 |               ',
    '| Beijing | 39.913818 | 116.363625 |']
)