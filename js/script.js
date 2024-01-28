// Get random number between 1 and 3
function randomNumber() {
  return Math.floor(Math.random() * 3) + 1
}
// Get computer choice
function getComputerChoice() {
  let choice = randomNumber();
  return choice === 1 ? 'Rock' : choice === 2 ? 'Paper' : 'Scissors';
}
// Input player choice
function playerChoice() {
  const choice = prompt('Rock, Paper, or Scissors?');
  return caseInsensitive(choice);
}
// Compare and return results
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  switch(playerSelection) {
    case computerSelection:
      return 'Tied! Try again.'
      break;
    case 'Rock':
      if (computerSelection === 'Paper') {
        return `You lose! Paper beats Rock.`
      } else {
        return `You win! Rock beats scissors.`
      }
      break;
    case 'Paper':
      if (computerSelection === 'Scissors') {
        return `You lose! Scissors beats Paper.`
      } else {
        return `You win! Paper beats Rock.`
      }
      break;
    case 'Scissors':
      if (computerSelection === 'Rock') {
        return `You lose! Rock beats Scissors.`
      } else {
        return `You win! Scissors beats Paper.`
      }
  }
}
// Format choices to be case-insensitive
function caseInsensitive(choice) {
  return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}
