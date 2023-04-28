function attachEventsListeners() {

    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convert)

    function convert(){
        let inputUnit = document.getElementById('inputDistance').value;
        let inputUnitMeasure = document.getElementById('inputUnits').value;

        let transformInputUnitToMeters = {
            'km': inputUnit * 1000,
            'm': inputUnit,
            'cm': inputUnit * 0.01,
            'mm': inputUnit * 0.001,
            'mi': inputUnit * 1609.34,
            'yrd': inputUnit * 0.9144,
            'ft': inputUnit * 0.3048,
            'in': inputUnit * 0.0254
        }

        let inputUnitInMeters = transformInputUnitToMeters[inputUnitMeasure];
        let outputUnitMeasure = document.getElementById('outputUnits').value;

        let transformToOutPutUnit = {
            'km': inputUnitInMeters / 1000,
            'm': inputUnitInMeters,
            'cm': inputUnitInMeters / 0.01,
            'mm': inputUnitInMeters / 0.001,
            'mi': inputUnitInMeters / 1609.34,
            'yrd': inputUnitInMeters / 0.9144,
            'ft': inputUnitInMeters / 0.3048,
            'in': inputUnitInMeters / 0.0254
        }

        let outputValue = transformToOutPutUnit[outputUnitMeasure]

        let outputArea = document.getElementById('outputDistance');

        outputArea.value = outputValue;
    }
    
}