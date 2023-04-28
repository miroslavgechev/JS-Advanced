function colorize() {

    let rows = document.querySelectorAll('table tr');

    for (let index = 0; index < rows.length; index++) {
        if (index % 2 === 1) {
            rows[index].style.background = 'teal';
        }
    }

}