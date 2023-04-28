function addItem() {
    let itemToAdd = document.getElementById('newItemText');
    let items = document.getElementById('items')

    if (itemToAdd.value === '') {
        return
    }

    let field = document.createElement('li');
    field.textContent = itemToAdd.value;
    items.appendChild(field);

    let deleteTag = document.createElement('a');
    deleteTag.textContent = '[Delete]';
    deleteTag.href = '#';
    deleteTag.addEventListener('click', onDelete);
    field.appendChild(deleteTag);

    itemToAdd.value = '';

    function onDelete(){
        field.remove();
    }
}