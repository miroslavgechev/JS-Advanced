function solution() {

    let recepies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    let store = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    };

    return function inputHandler(input) {
        let commandHandler = commands();
        let [command, element, quantity] = input.split(' ');
        return commandHandler[command](element, quantity);
    }

    function commands() {

        return {
            restock: (microelement, quantity) => {
                store[microelement] += Number(quantity);
                return 'Success';
            },
            prepare: (element, quantity) => {
                let currentRecepie = recepies[element];
                let currentQuantity = Number(quantity);

                storeCopy = JSON.parse(JSON.stringify(store));

                for (let key of Object.keys(currentRecepie)) {

                    if (!store[key] || store[key] < currentRecepie[key] * currentQuantity) {
                        return `Error: not enough ${key} in stock`
                    }

                    storeCopy[key] -= currentRecepie[key] * currentQuantity;
                }

                store = storeCopy;

                return 'Success'

            },
            report: () => { return `protein=${store.protein} carbohydrate=${store['carbohydrate']} fat=${store['fat']} flavour=${store['flavour']}` }
        }
    };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); //Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager('report')); // protein=0 carbohydrate=4 fat=3 flavour=55


