let playerScore = 0
let computerScore = 0

let buttons = document.querySelectorAll(".player-choice")
buttons.forEach((button) => button.addEventListener("click", playRound))

function randomNumber() {
  return Math.floor(Math.random() * 3) + 1
}
function computerSelection() {
  let choice = randomNumber()
  return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors"
}

function playRound() {
  let playerChoice = this.id
  let computerChoice = computerSelection()
  compareChoices(playerChoice, computerChoice)

  console.log(playerChoice, computerChoice)
}

// compare choices
function compareChoices(player, computer) {
  switch (player) {
    case "rock":
      if (computer === "rock") {
        break
      } else if (computer === "paper") {
        computerScore++
      } else {
        playerScore++
      }
      break
    case "paper":
      if (computer === "paper") {
        break
      } else if (computer === "scissors") {
        computerScore++
      } else {
        playerScore++
      }
      break
    case "scissors":
      if (computer === "scissors") {
        break
      } else if (computer === "rock") {
        computerScore++
      } else {
        playerScore++
      }
      break
  }

  console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
}
// check if a score of 5 has been reached
// reset scores for new game
function reset() {
  playerScore = 0
  computerScore = 0
}
