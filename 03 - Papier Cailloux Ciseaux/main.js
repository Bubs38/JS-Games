let wins = 0;
let loses = 0;

const choices = ["papier", "caillou", "ciseaux"];
const gameStatus = document.getElementById('gameStatus');
const gameScore = document.getElementById('gameScore');
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');


function runGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  switch(userChoice + '_' + computerChoice){
    case "papier_ciseaux":
    case "caillou_papier":
    case "ciseaux_caillou":
      loses++;
      gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} => C wins !`;
      break;
    case "papier_caillou":
    case "caillou_ciseaux":
    case "ciseaux_papier":
      wins++;
      gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} => M wins !`;
      break;
    case "papier_papier":
    case "caillou_caillou":
    case "ciseaux_ciseaux":
      gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} => Égalité`;
      break;
  }

  gameScore.innerHTML = `Me: ${wins} | Computer: ${loses}`;
}


paper.addEventListener('click', () => runGame("papier"));
rock.addEventListener('click', () => runGame("caillou"));
scissors.addEventListener('click', () => runGame("ciseaux"));