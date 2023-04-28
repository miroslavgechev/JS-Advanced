class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += Number(value);
    }

    decrease(value) {
        this.innerLength -= Number(value);

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString(){
        let printedString = this.innerString;
        let currentLength = this.innerLength;

        if(printedString.length > currentLength){
            return printedString.slice(0, currentLength) +'...';
        }

        return printedString;
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
