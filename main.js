// Query selectors

var player1Wins = document.querySelector('#player1Wins');  //display wins
var player2Wins = document.querySelector('#player2Wins'); //display wins
var squares = document.querySelectorAll('.square'); //node list collection of the squares
var update = document.querySelector('#statusText') //whos turn and win/loose/draw

var board = ['', '', '', '', '', '', '', '', ''];
var player1 = createPlayer("Player 1", "x"); // will be assigned to current player
var player2 = createPlayer("Player 2", "o"); // will be assigned to current player
var currentPlayer = player1;


console.log(player1.player);  // Outputs: "Player 1"
console.log(player1.token);   // Outputs: "x"
console.log(player1.wins);    // outpust: 0
console.log(board) // the array storing the clicks



function createPlayer(player, token){
    var newPlayer =  {
        player: player,
        token: token,
        wins: 0
    }
    return newPlayer
}
