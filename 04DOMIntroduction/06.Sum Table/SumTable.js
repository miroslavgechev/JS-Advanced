function sumTable() {
    let tableRows = document.querySelectorAll('table tr');

    let sum = 0;

    for(let index = 1; index < tableRows.length; index++) {

        let cols = tableRows[index].children;
        let currentValue = cols[cols.length - 1].textContent;

        sum += Number(currentValue);
    }

    document.getElementById('sum').textContent = sum;
}