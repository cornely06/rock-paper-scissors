// Initialize variables for score keeping
  let playerScore = 0;
  let computerScore = 0;

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
function getPlayerChoice() {
  const choice = prompt('Rock, Paper, or Scissors?');
  return caseInsensitive(choice);
}
// Compare and return results
function playRound() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log('Tied! Replaying...')
    return playRound();
  }
  switch(playerSelection) {
    case 'Rock':
      if (computerSelection === 'Paper') {
        computerScore++;
        return `You lose! Paper beats Rock.`
      } else {
        playerScore++;
        return `You win! Rock beats scissors.`
      }
      break;
    case 'Paper':
      if (computerSelection === 'Scissors') {
        computerScore++;
        return `You lose! Scissors beats Paper.`
      } else {
        playerScore++;
        return `You win! Paper beats Rock.`
      }
      break;
    case 'Scissors':
      if (computerSelection === 'Rock') {
        computerScore++;
        return `You lose! Rock beats Scissors.`
      } else {
        playerScore++;
        return `You win! Scissors beats Paper.`
      }
  }
  console.log('Invalid choice, please pick Rock, Paper, or Scissors')
      return playRound(getPlayerChoice(), getComputerChoice());
}
// Format choices to be case-insensitive
function caseInsensitive(choice) {
  return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}

// Run game for best of 5 rounds
function game() {
  playerScore = 0;
  computerScore = 0;

  while(playerScore < 3 && computerScore < 3) {
    console.log(playRound());
  }
}