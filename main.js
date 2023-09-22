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
console.log(player1.wins);    // outpusts: 0
console.log(board) // the array storing the clicks



function createPlayer(player, token){
    var newPlayer =  {
        player: player,
        token: token,
        wins: 0
    }
    return newPlayer
}

document.addEventListener('DOMContentLoaded', function() {
   


    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function(e) {
            var index = e.target.getAttribute('data-index');
    
    
            if (board[index] === '') {
                board[index] = currentPlayer.token; //updating the board internal (console.log(board[index]))
                e.target.innerText = currentPlayer.token; // updating the DOM
                if (checkWin()) {
                    if (currentPlayer.token === 'x') {
                        player1.wins++;
                        player1Wins.innerText = player1.wins
                        update.innerText = "Player 1 Wins!!";
                    } else {
                        player2.wins++
                        player2Wins.innerText = player2.wins
                        update.innerText = "Player 2 Wins!!";
                    }
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
                    update.innerText = currentPlayer.player + "'s Turn"
    
                    if (!board.includes('')) {
                        update.innerText = "It's a Draw!";
                        resetBoard();
                     }
                     
    
                }
            }
        });
    }
    
    function checkWin() {  //checking for winning conditions
        var winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (var i = 0; i < winConditions.length; i++) {
            var condition = winConditions[i];
            var a = condition[0]
            var b = condition[1]
            var c = condition[2]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    }
    
    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        for (var i = 0; i < squares.length; i++) {
            squares[i].innerHTML = '';
        }
    }
    
    });
    

