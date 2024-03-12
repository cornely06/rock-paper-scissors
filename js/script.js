let buttons = document.querySelectorAll(".player-choice")
console.log(buttons)

function randomNumber() {
  return Math.floor(Math.random() * 3) + 1
}
function computerSelection() {
  let choice = randomNumber()
  return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors"
}
