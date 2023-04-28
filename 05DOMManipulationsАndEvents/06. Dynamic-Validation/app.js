function validate() {
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/gm;

    let input = document.getElementById('email');

    input.addEventListener('change', function (event) {
        let isMatch = input.value.match(pattern);

        if (isMatch) {
            event.target.classList.remove('error')
        } else {
            event.target.classList.add('error')
        }
    })
}