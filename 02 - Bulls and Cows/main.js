let attempts = 0, bulls = 0, cows = 0;
let secretNumber = generateSecretNumber();

let roundStats = {
  round: 1,
  wins: 0,
  loses: 0
}

function checkGuess() {
  let guess = document.getElementById('guessInput').value;
  let secretString = secretNumber.join('');
  bulls = 0;
  cows = 0;

  const checkGuessLength = new Set(guess);
  
  if (guess.length !== checkGuessLength.size || guess.length !== 4) {
    document.getElementById('logsArea').value += `${guess} est invalide. Veuillez entrer un nombre composé de 4 chiffres différents \n`;
    return null;
  }

  attempts += 1;

  for (let i = 0; i < 4; i++) {
    if (secretString[i] === guess[i]) {
      bulls += 1;
    } else if (secretString.includes(guess[i])){
      cows += 1;
    } 
  }

  if (bulls === 4) {

    document.getElementById('logsArea').value += `${secretString} | Bravo vous avez gagné en ${attempts} essais.\n`;
    roundStats.wins += 1;
    return playAgain();

  } else if (attempts === 10) 
  {
    document.getElementById('logsArea').value += `${secretString} | Dommage, vous avez perdu.\n`;
    roundStats.loses += 1;
    return playAgain();
  }

  document.getElementById("logsArea").value += `${guess} - ${bulls}B - ${cows}C, try: ${attempts}\n`;
}



function playAgain() {
  roundStats.round += 1;
  printGameStats();
  attempts = 0, bulls = 0, cows = 0;
  secretNumber = generateSecretNumber();
}



function printGameStats() {
  const gameStats = document.getElementById('gameStats');
  gameStats.innerHTML = `R: ${roundStats.round} | V: ${roundStats.wins} | D: ${roundStats.loses}`;
}




function generateSecretNumber() {
  const numbers = Array.from({ length: 9 }, (v, k) => k + 1);
  let currentIndex = numbers.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
  }

    return numbers.slice(0,4);
}






function clearLogs() {
  document.getElementById('logsArea').value = "";
}



function printRule() {
  alert("Entrez un nombre composé de 4 chiffres différents dans la case à coté de 'guess'. L'ordinateur  le compare avec le code secret et vous donne deux indices : les numéros 'bulls' (B) et les cows (c). Un 'bull' est un chiffre qui est présent dans les deux codes à la même position. Un 'cows' est un chiffre présent dans les deux codes mais dans des positions différentes.  ")
}