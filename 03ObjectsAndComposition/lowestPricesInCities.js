function lowestPricesInCities(input) {

    let productList = {};

    for (let line of input) {

        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!productList.hasOwnProperty(product)) {
            productList[product] = { town, price };
            continue;
        }

        if (productList[product].price > price) {
            productList[product].price = price;
            productList[product].town = town;
        }
    }

    for (let product in productList) {
        console.log(`${product} -> ${productList[product].price} (${productList[product].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']

)