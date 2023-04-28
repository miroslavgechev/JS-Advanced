function attachEventsListeners() {

    let buttons = document.querySelectorAll('input[type=button]');

    for (let button of buttons) {
        button.addEventListener('click', buttonCheck);
    }

    function buttonCheck(event) {

        let buttonClicked = event.target.id;
        let currentValue = Number(event.target.parentElement.children[1].value);
        let valueInSeconds = 0;

        switch (buttonClicked) {
            case 'daysBtn':
                valueInSeconds = currentValue * 60 * 60 * 24;
                break;
            case 'hoursBtn':
                valueInSeconds = currentValue * 60 * 60;
                break;
            case 'minutesBtn':
                valueInSeconds = currentValue * 60;
                break;
            case 'secondsBtn':
                valueInSeconds = currentValue;
                break;
        }

        populate(valueInSeconds, buttonClicked.slice(0, -3));

    }

    function populate(valueInSeconds, forbiddenID) {
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));

        for (let input of inputs) {
            if (input.id === forbiddenID) {
                continue;
            }

            switch (input.id) {
                case 'days':
                    input.value = valueInSeconds / 60 / 60 / 24;
                    break;
                case 'hours':
                    input.value = valueInSeconds / 60 / 60;
                    break;
                case 'minutes':
                    input.value = valueInSeconds / 60;
                    break;
                case 'seconds':
                    input.value = valueInSeconds;
                    break;
            }
        }
    }
}