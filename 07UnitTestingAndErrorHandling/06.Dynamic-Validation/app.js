function validate() {

    let emailPattern = /[a-z]+@[a-z]+.[a-z]+/g;
    let inputBox = document.getElementById('email');

    inputBox.addEventListener('change', onInputBoxChange);

    function onInputBoxChange(e) {
        if (!inputBox.value.match(emailPattern)) {
            inputBox.classList.add('error')
        } else {
            inputBox.classList.remove('error');
        }
    }
}