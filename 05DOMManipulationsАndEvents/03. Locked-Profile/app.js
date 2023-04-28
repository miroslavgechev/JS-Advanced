function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(button => button.addEventListener('click', profileManipulation));


    function profileManipulation(e) {

        let button = e.target;
        let profile = button.parentElement;
        let moreInformation = profile.getElementsByTagName('div')[0];
        let lockStatus = profile.querySelector('input[type=radio]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more'
            }
        }

    }
}