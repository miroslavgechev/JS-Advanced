function printDeckOfCards(cards) {

    let result = [];
    let face = '';
    let suit = '';


    for (let card of cards) {
        suit = card.slice(-1);
        face = card.substring(0, card.length - 1);
        let currentResult = createCard(face, suit);

        if (currentResult === 'Error') {
            return
        }

        result.push(currentResult)
    }

    console.log(result.join(' '));

    function createCard(face, suit) {

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            console.log(`Invalid card: ${face + suit}`);
            return 'Error';
        }

        if (!validSuits.includes(suit)) {
            console.log(`Invalid card: ${face + suit}`);
            return 'Error';
        }

        switch (suit) {
            case 'S': suit = '\u2660'; break;
            case 'H': suit = '\u2665'; break;
            case 'D': suit = '\u2666'; break;
            case 'C': suit = '\u2663'; break;
        }

        return {
            face,
            suit,
            toString() {
                return this.face + this.suit;
            }
        }
    }
}


printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])

