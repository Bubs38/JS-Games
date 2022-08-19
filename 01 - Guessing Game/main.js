function guessNumber () {
  let playerGuess;
  const numberToGuess = Math.ceil(Math.random() * 10);
  
  playerGuess = prompt('Devinez le nombre entre 1 et 10 inclus.')
  
  while (playerGuess != numberToGuess) {

  if (playerGuess < numberToGuess) {
    playerGuess = prompt('Essayez plus grand !');
  } 
  else if (playerGuess > numberToGuess) {
    playerGuess = prompt('Essayez plus petit !');
  } 
}
  

  alert(`Félicitations! le nombre était ${numberToGuess}`);
}
guessNumber();