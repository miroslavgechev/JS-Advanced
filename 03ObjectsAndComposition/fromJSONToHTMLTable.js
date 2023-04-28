function fromJSONToHTMLTable(input) {

    let inputArray = JSON.parse(input)

    let columnNames = Object.keys(inputArray[0]);
    let values = inputArray.map(obj => Object.values(obj))

    let result = '<table>\n';

    appendHeaders(columnNames);
    appendValues(values);

    result += '</table>'

    function appendHeaders(columnNames) {
        result += '    <tr>'

        for (let columnName of columnNames) {
            result += `<th>${escape(columnName)}</th>`;
        }
        result += '</tr>\n'
    }

    function appendValues(values) {

        for (let value of values) {
            result += '    <tr>'
            let counter = value.length;

            for (let index = 0; index < counter; index++) {
                result += `<td>${escape(value[index])}</td>`;
            }

            result += '</tr>\n'
        }
    }

    function escape(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log(result)

}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)