function generateReport() {

    let tableHeader = document.querySelectorAll('thead tr th');
    let tableRows = document.querySelectorAll('tbody tr');

    let report = [];

    for (let rowIndex = 0; rowIndex < tableRows.length; rowIndex++) {
        let rowData = tableRows[rowIndex].cells;
        let currentObj = {};

        for (let cellIndex = 0; cellIndex < rowData.length; cellIndex++) {

            let headerCellName = tableHeader[cellIndex].childNodes;

            if (headerCellName[1].checked) {
                currentObj[headerCellName[0].textContent.trim().toLocaleLowerCase()] = rowData[cellIndex].textContent;
            }

        }

        report.push(currentObj);
    }


    document.getElementById('output').textContent = JSON.stringify(report)

}