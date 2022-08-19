const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const player1 = "X";
const player2 = "O";
let playerTurn = player1;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => {
  cell.addEventListener('click', playGame, {once: true});
});

function playGame(e) {
  e.target.innerHTML = playerTurn;

  if (checkWin(playerTurn)) {
    updateGameStatus("wins" + playerTurn);
    return endGame();
  } else if (checkDraw()) {
    updateGameStatus("draw");
    return endGame();
  }

  updateGameStatus(playerTurn);
  playerTurn == player1 ? playerTurn = player2 : playerTurn = player1;
}

function checkWin(playerTurn) {
  return winningPatterns.some(combination => {
    return combination.every(index => {
      return cells[index].innerHTML == playerTurn;
    })
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.innerHTML == player1 || cell.innerHTML == player2;
  })
}

function updateGameStatus(status) {
  let statusText;

  switch (status) {
    case 'X': 
      statusText = "Au tour du joueur 2 (0)";
      break;
    case 'O': 
      statusText = "Au tour du joueur 1 (X)";
      break;
    case 'winsX': 
      statusText = "Le joueur 1 (X) a gagné";
      break;
    case 'winsO': 
      statusText = "Le joueur 2 (O) a gagné";
      break;
    case 'draw': 
      statusText = "Égalité !";
      break;
  }

  gameStatus.innerHTML = statusText;
  endGameStatus.innerHTML = statusText;
}

function endGame() {
  document.getElementById('gameEnd').style.display = "block";
}

function reloadGame() {
  window.location.reload();
}