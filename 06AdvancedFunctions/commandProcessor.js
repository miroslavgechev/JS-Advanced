function solution() {

    let str = '';

    return {
        append: (s) => str += s,
        removeStart: (num) => str = str.slice(num),
        removeEnd: (num) => str = str.slice(0, str.length - num),
        print: () => console.log(str)
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
