function solve() {


  let buttonGenerate = document.getElementsByTagName('button')[0];
  buttonGenerate.addEventListener('click', generateRows);

  let buttonBuy = document.getElementsByTagName('button')[1];
  buttonBuy.addEventListener('click', buyItems)

  function generateRows() {
    let rows = Array.from(JSON.parse(document.getElementsByTagName('textarea')[0].value));

    for (let row of rows) {

      let table = document.querySelectorAll('tbody')[0];

      table.innerHTML += `<tr><td><img src=${row.img}></td>
        <td><p>${row.name}</p></td>
        <td><p>${row.price}</p></td>
        <td><p>${row.decFactor}</p></td>
        <td><input type="checkbox"/></td></tr>`
    }
  }

  function buyItems() {
    let rows = document.querySelectorAll('tbody tr');
    let resultArea = document.getElementsByTagName('textarea')[1];

    let furniture = [];
    let totalPrice = 0;
    let decFactor = 0;

    for (let row of rows) {
      if (row.querySelector('input[type=checkbox]:checked')) {
        let tableData = Array.from(row.querySelectorAll('td'));

        furniture.push(tableData[1].children[0].textContent)
        totalPrice += Number(tableData[2].children[0].textContent)
        decFactor += Number(tableData[3].children[0].textContent)
      }
    }

    resultArea.value += `Bought furniture: ${furniture.join(', ')}`;
    resultArea.value += `\nTotal price: ${totalPrice.toFixed(2)}`;
    resultArea.value += `\nAverage decoration factor: ${decFactor / furniture.length}`

  }
}