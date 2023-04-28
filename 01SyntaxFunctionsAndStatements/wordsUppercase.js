function wordsUppercase(input) {

    let pattern = /\w+/gm;
    let foundArray = input.match(pattern).map(el => el.toUpperCase());

    console.log(foundArray.join(', '));

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');