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


//Functions
function createPlayer(player, token){
    var newPlayer =  {
        player: player,
        token: token,
        wins: 0
    }
    return newPlayer
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

function countWins(player, playerWinsElement){ //refers to player and HTML element
    player.wins++; // counts the wins
    playerWinsElement.innerText = player.wins;  // updats the HTML
}

function increaseWins() {
    if (currentPlayer.token === 'x') {     // includes my function to count for player object and HTML
        countWins(player1, player1Wins);
        update.innerText = "Player 1 Wins!!";
    } else {
        countWins(player2, player2Wins);
        update.innerText = "Player 2 Wins!!";
    }
}

function changePlayer(){
   if (currentPlayer === player1){      //switching the value of the variable currentPlayer
    currentPlayer = player2;
    update.innerText = player2.player + "'s Turn";    
    } else {
        currentPlayer = player1;
        update.innerText = player1.player + "'s Turn";
    }
}

function draw(){
    if(!board.includes('')){   // check to see if the board has empty spots
        update.innerText = "It's a Draw!"
    }
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
}

function delayReset(){
    setTimeout(function(){
        resetBoard();
        changePlayer();
    },1500);
}

function startGame() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function(e) {
            var index = e.target.getAttribute('data-index');
            
            if (board[index] === '') {
                board[index] = currentPlayer.token; //updating the board internal (console.log(board[index]))
                e.target.innerText = currentPlayer.token; // updating the DOM
                if (checkWin()) {
                    increaseWins()
                    delayReset();
                } else {
                    changePlayer()
    
                    if (!board.includes('')) {
                        update.innerText = "It's a Draw!";
                        delayReset();
                     }
                     
    
                }
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    startGame();
}) 


    
   
    

    


