class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        let vegetablesAdded = [];

        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let currentTypeReference = this.availableProducts.find(el => el.type === type);

            if (currentTypeReference) {
                currentTypeReference.quantity += quantity;

                if (currentTypeReference.price < price) {
                    currentTypeReference.price = price;
                }

            } else {
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                })
            }

            if (!vegetablesAdded.includes(type)) {
                vegetablesAdded.push(type);
            }
        }

        return `Successfully added ` + vegetablesAdded.join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            let currentTypeReference = this.availableProducts.find(el => el.type === type);

            if (!currentTypeReference) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (currentTypeReference.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += currentTypeReference.price * quantity;
            currentTypeReference.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let currentTypeReference = this.availableProducts.find(el => el.type === type);

        if (!currentTypeReference) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (currentTypeReference.quantity <= quantity) {
            currentTypeReference.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            currentTypeReference.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {

        let revisionArray = [];

        revisionArray.push('Available vegetables:');

        this.availableProducts
            .sort((a, b) => (a.price - b.price))
            .forEach(veg => revisionArray.push(`${veg.type}-${veg.quantity}-$${veg.price}`));

        revisionArray.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return revisionArray.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());




