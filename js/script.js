// Get random number between 1 and 3
function randomNumber() {
  return Math.floor(Math.random() * 3) + 1
}
// Get computer choice
function getComputerChoice() {
  let choice = randomNumber();
  return choice === 1 ? 'rock' : choice === 2 ? 'paper' : 'scissors';
}
// Input player choice
// Compare and return results
