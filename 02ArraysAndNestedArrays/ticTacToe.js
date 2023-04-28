function ticTacToe(input) {

    let dashboard =
        [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let markerTurn = true; // true = X; false = O;

    for (let index = 0; index < input.length; index++) {
        let [rowTurn, colTurn] = input[index].split(' ');

        let marker = markerTurn ? 'X' : 'O';

        if (dashboard[rowTurn][colTurn]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[rowTurn][colTurn] = marker;

        if (hasAWinner()) {
            console.log(`Player ${marker} wins!`);
            break;
        }

        if (!isFreeSpaceAvailable()) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        function hasAWinner() {
            for (let row = 0; row < dashboard.length; row++) {
                for (let col = 0; col < dashboard[row].length; col++) {
                    if (dashboard[row][0] === marker &&
                        dashboard[row][1] === marker &&
                        dashboard[row][2] === marker) {
                        return true;
                    } else if (dashboard[0][col] === marker &&
                        dashboard[1][col] === marker &&
                        dashboard[2][col] === marker) {
                        return true;
                    } else if (dashboard[0][0] === marker &&
                        dashboard[1][1] === marker &&
                        dashboard[2][2] === marker) {
                        return true;
                    } else if (dashboard[0][2] === marker &&
                        dashboard[1][1] === marker &&
                        dashboard[2][0] === marker) {
                        return true;
                    }
                }
            }
            return false;
        }

        function isFreeSpaceAvailable() {
            for (let row = 0; row < dashboard.length; row++) {
                for (let col = 0; col < dashboard[row].length; col++) {
                    if (!dashboard[row][col]) {
                        return true;
                    };
                }
            }
            return false;
        }

        markerTurn = !markerTurn;
    }

    for (let row of dashboard) {
        console.log(row.join('\t'))
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)

console.log('-----------')

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]

)

console.log('-----------')

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);
