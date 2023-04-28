function addItem() {
    let itemToAdd = document.getElementById('newItemText');

    if (itemToAdd.value === '') {
        return
    }

    let field = document.createElement('li');
    field.textContent = itemToAdd.value;

    document.getElementById('items').appendChild(field);
    itemToAdd.value = '';
}