class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        let newAdditions = [];

        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');

            age = Number(age);
            playerValue = Number(playerValue);

            let currentPlayer = this.invitedPlayers.find(player => player.name === name);

            if (currentPlayer) {
                if (currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                })
            }

            if (!newAdditions.includes(name)) {
                newAdditions.push(name);
            }
        }
        return `You successfully invite ${newAdditions.join(', ')}.`;
    }

    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let currentPlayer = this.invitedPlayers.find(player => player.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (currentPlayer.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
        }

        currentPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {

        let currentPlayer = this.invitedPlayers.find(player => player.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (currentPlayer.age >= age) {
            return `${name} is above age limit!`
        } else {
            let ageDifference = age - currentPlayer.age;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
    }

    transferWindowResult() {

        let result = ['Players list:'];

        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name)).forEach(player => result.push(`Player ${player.name}-${player.playerValue}`));

        return result.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
