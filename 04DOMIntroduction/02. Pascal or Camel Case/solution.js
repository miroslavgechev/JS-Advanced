function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let line = '';
  let textArray = text.split(' ');

  switch (namingConvention) {
    case 'Camel Case':
      textArray.forEach((el, index) => {
        if (index === 0) {
          line += `${el.toLowerCase()}`
        } else {
          line += `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`;
        }
      });
      break;
    case 'Pascal Case':
      textArray.forEach((el) => {
        line += `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`
      });
      break;
    default: line = 'Error!';
  }
  debugger
  document.getElementById('result').textContent = line;

}