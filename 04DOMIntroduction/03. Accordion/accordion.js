function toggle() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;
    let text = document.getElementById('extra');

    if(buttonText === 'Less'){
        text.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    } else {
        text.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }

}