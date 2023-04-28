function tickets(ticketsArray, sortingCriterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let ticket of ticketsArray) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);

        result.push(new Ticket(destination, price, status));
    }

    sortingCriterion === 'price' ?
        result.sort((a, b) => a[sortingCriterion] - b[sortingCriterion]) :
        result.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]))

    return result
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)

console.log('-----')

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'))