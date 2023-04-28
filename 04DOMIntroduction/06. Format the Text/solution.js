function solve() {
  let text = document.getElementById('input').value;
  let output = document.getElementById('output');
  output.innerHTML = '';

  text = text.split('.').filter(x => x.length > 0);

  for (let index = 0; index < text.length; index += 3) {
    let buffer = '';

    for (let pIndex = 0; pIndex < 3; pIndex++) {
      if (text[pIndex + index]) {
        buffer += `${text[pIndex].trim()}. `
      }
    }
    buffer = buffer.slice(0, buffer.length - 1);

    output.innerHTML += `<p>${buffer}</p>`;
  }
}