// Query selectors

var player1Wins = document.querySelector('#player1Wins');  
var player2Wins = document.querySelector('#player2Wins'); 
var squares = document.querySelectorAll('.square'); 
var update = document.querySelector('#statusText') 

var board = ['', '', '', '', '', '', '', '', ''];
var player1 = createPlayer("Player 1", "x"); 
var player2 = createPlayer("Player 2", "o"); 
var currentPlayer = player1;

//Functions
function createPlayer(player, token){
    var newPlayer =  {
        player: player,
        token: token,
        wins: 0
    }
    return newPlayer
}

function checkWin() {  
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

function countWins(player, playerWinsElement){ 
    player.wins++; 
    playerWinsElement.innerText = player.wins;  
}

function increaseWins() {
    if (currentPlayer.token === 'x') {     
        countWins(player1, player1Wins);
        update.innerText = "Player 1 Wins!!";
    } else {
        countWins(player2, player2Wins);
        update.innerText = "Player 2 Wins!!";
    }
}

function changePlayer(){
   if (currentPlayer === player1){      
    currentPlayer = player2;
    update.innerText = player2.player + "'s Turn";    
    } else {
        currentPlayer = player1;
        update.innerText = player1.player + "'s Turn";
    }
}

function checkDraw(){
    return !board.includes('')
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
                board[index] = currentPlayer.token; 
                e.target.innerText = currentPlayer.token; 
                if (checkWin()) {
                    increaseWins();
                    delayReset();
                } else if (checkDraw()){
                    update.innerText = "It's a Draw!"
                    delayReset();
                     } else {
                      changePlayer();
    
                }
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    startGame();
}) 


    
   
    

    


