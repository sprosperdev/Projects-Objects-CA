const team = {
    _players: [
        { firstName: 'Kyrie', lastName: 'Irving', age: 24 },
        { firstName: 'Michael', lastName: 'Jordan', age: 29 },
        { firstName: 'Shelly', lastName: 'Ann', age: 32 }
    ],
    _games: [
        { opponent: 'Lakers', teamPoints: 79, opponentPoints: 76 },
        { opponent: 'Jazz', teamPoints: 83, opponentPoints: 81 },
        { opponent: 'Usa', teamPoints: 3, opponentPoints: 2 }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game);

    },
};


team.addPlayer('Sebastien', 'Prosper', 39);
console.log(team.players);

team.addGame('Heat', 101, 89);
console.log(team.games);