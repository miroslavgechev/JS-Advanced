(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? `${this}` : str + this;
    }

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? `${this}` : this + str;
    }

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    }

    String.prototype.truncate = function (num) {

        if (this.length <= num) {
            return `${this}`
        }

        if (num < 4) {
            return '.'.repeat(num);
        }

        let words = this.split(' ');

        while ((words.join(' ') + '...').length > num) {
            if (words.length > 1) {
                words.pop();
            } else {
                words[0] = words[0].slice(0, num - 3)
            }
        }
        return words.join(' ').trim() + '...';

    }

    String.format = function (str, ...params) {
        let pattern = /{[0-9]+}/;
        let currentString = str;

        while (str.match(pattern)) {
            if (params.length === 0) {
                break;
            }

            currentString = currentString.replace(pattern, params.shift())
        }

        return currentString
    }

    // let str = '';
    // str = str.ensureStart('my');
    // console.log(str);
    // str = str.ensureStart('hello ');
    // console.log(str);
    // str = str.truncate(16);
    // console.log(str);
    // str = str.truncate(14);
    // console.log(str);
    // str = str.truncate(8);
    // console.log(str);
    // str = str.truncate(4);
    // console.log(str);
    // str = str.truncate(3);
    // console.log(str);
    // str = String.format('The {0} {1} fox', 'quick', 'brown');
    // console.log(str);
    // str = String.format('jumps {0} {1}', 'dog');
    // console.log(str);
})()

stringExtension()