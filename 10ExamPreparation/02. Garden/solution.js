class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){

        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(currentPlant.ripe){
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0){
            throw new Error('The quantity cannot be zero or negative.');
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;

        return quantity === 1 ? `${quantity} ${plantName} has successfully ripened.` : `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName){
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(!currentPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.storage.push({
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity
        });

        this.plants = this.plants.filter( plant => plant.plantName !== currentPlant.plantName);

        this.spaceAvailable += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport(){
        let reportArray = [];

        reportArray.push(`The garden has ${this.spaceAvailable} free space left.`);

        let plantBuff = 'Plants in the garden: ';
        let plantArray = [];

        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName)).forEach(plant => plantArray.push(plant.plantName));

        reportArray.push(plantBuff + plantArray.join(', '));

        let storageBuff = 'Plants in storage: ';
        let storageArray = [];

        this.storage.length === 0 ? 
        storageArray.push('The storage is empty') : 
        this.storage.forEach(plant => storageArray.push(`${plant.plantName} (${plant.quantity})`));

        reportArray.push(storageBuff + storageArray.join(', '));

        return reportArray.join('\n');

    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

