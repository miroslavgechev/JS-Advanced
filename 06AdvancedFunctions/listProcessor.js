function listProcessor(input) {

    let processor = (function () {
        let innerCollection = [];

        return {
            add: (item) => innerCollection.push(item),
            remove: (item) => innerCollection = innerCollection.filter(x => x !== item),
            print: () => console.log(innerCollection.join(',')),
        }
    })();

    for (let entry of input) {
        let [command, item] = entry.split(" ");
        processor[command](item);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])