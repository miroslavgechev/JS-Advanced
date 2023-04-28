function createSortedList() {

    class List {
        constructor() {
            this.sortedList = [];
            this.size = this.sortedList.length;
        }


        add(number) {
            if (!Number.isNaN(number) && (!Number.isNaN(parseFloat(number)))) {
                this.sortedList.push(Number(number))
                this.sortedList.sort((a, b) => a - b);
                this.size = this.sortedList.length
            }
        };

        remove(index) {
            index = Number(index)

            if (index < this.sortedList.length && index >= 0 && Number.isInteger(index)) {
                this.sortedList.splice(index, 1);
                this.size = this.sortedList.length;
            }
        };

        get(index) {
            index = Number(index)

            if (index < this.sortedList.length && index >= 0 && Number.isInteger(index)) {
                return this.sortedList[index];
            }
        };
    }

    return new List()
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
