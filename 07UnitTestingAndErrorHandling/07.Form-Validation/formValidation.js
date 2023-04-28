function validate() {

    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    let passwordPattern = /^\w{5,15}$/g;
    let emailPattern = /@(\w)*\./g;

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('confirm-password');
    let checkbox = document.getElementById('company');

    let companyInfoFieldSet = document.getElementById('companyInfo');
    let isChecked = false;
    let companyNumber = document.getElementById('companyNumber');

    let valid = document.getElementById('valid');

    let submitBtn = document.getElementById('submit');

    checkbox.addEventListener('change', checkboxClick);
    submitBtn.addEventListener('click', fieldValidator);

    function checkboxClick() {
        if (checkbox.checked) {
            companyInfoFieldSet.style.display = 'block';
            isChecked = true;
        } else {
            companyInfoFieldSet.style.display = 'none';
            isChecked = false;
        }
    }

    function fieldValidator(e) {
        e.preventDefault()

        let allFieldsValid = true;

        validityCheck(username, usernamePattern);
        validityCheck(email, emailPattern);
        validityCheck(password, passwordPattern);
        validityCheck(passwordConfirm, passwordPattern);

        if (password.value !== passwordConfirm.value) {
            password.style.borderColor = 'red';
            passwordConfirm.style.borderColor = 'red';
            allFieldsValid = false;
        }

        if (isChecked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                allFieldsValid = false;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (allFieldsValid) {
            valid.style.display = 'block'
        } else {
            valid.style.display = 'none'
        }

        function validityCheck(value, pattern) {
            if (!value.value.match(pattern)) {
                value.style.borderColor = 'red';
                allFieldsValid = false;
            } else {
                value.style.borderColor = '';
            }
        }
    }
}
