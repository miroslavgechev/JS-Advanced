window.addEventListener("load", solve);

function solve() {

    let descriptionField = document.getElementById('description');
    let clientNameField = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let productTypeDropDown = document.getElementById('type-product');
    let receivedOrdersSection = document.getElementById('received-orders');
    let completedOrdersSection = document.getElementById('completed-orders');


    let submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', submitForm);

    let clearButton = document.getElementsByClassName('clear-btn')[0];
    clearButton.addEventListener('click', clearForm);

    function submitForm(e) {
        e.preventDefault()

        if (!descriptionField.value || !clientNameField.value ||
            !clientPhone.value || !productTypeDropDown.value) {
            return
        }

        let orderElement = createOrder();

        receivedOrdersSection.appendChild(orderElement);

        descriptionField.value = '';
        clientNameField.value = '';
        clientPhone.value = '';
        //productTypeDropDown.value = '';
    }

    function createOrder() {

        let divElement = document.createElement('div')
        divElement.classList.add('container');

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${productTypeDropDown.value}`;

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${clientNameField.value}, ${clientPhone.value}`

        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${descriptionField.value}`;

        let startRepairButton = document.createElement('button');
        startRepairButton.classList.add('start-btn');
        startRepairButton.textContent = 'Start repair'
        startRepairButton.addEventListener('click', startRepair);

        let finishRepairButton = document.createElement('button');
        finishRepairButton.classList.add('finish-btn');
        finishRepairButton.textContent = 'Finish repair'
        finishRepairButton.disabled = true;

        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(startRepairButton);
        divElement.appendChild(finishRepairButton);

        return divElement;
    }

    function startRepair(e) {

        e.target.disabled = true

        let finishButton = e.target.parentElement.getElementsByClassName('finish-btn')[0];
        finishButton.disabled = false;
        finishButton.addEventListener('click', finishRepair);
    }

    function finishRepair(e) {

        let currentElement = e.target.parentElement;
        currentElement.getElementsByClassName('start-btn')[0].remove();
        currentElement.getElementsByClassName('finish-btn')[0].remove();

        completedOrdersSection.appendChild(currentElement);
    }

    function clearForm(e) {
        Array.from(e.target.parentElement.querySelectorAll('div')).forEach(div => div.remove())
    }
}