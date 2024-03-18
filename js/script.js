let playerScore = 0
let computerScore = 0
let scoreboard = document.querySelector(".scoreboard")
let roundResults = document.querySelector(".roundResults")
let matchResults = document.querySelector(".matchResults")

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
  matchResults.innerHTML = ""
  roundResults.textContent = ""
  compareChoices(playerChoice, computerChoice)
  if (playerScore >= 5) {
    matchResults.innerHTML = `You win! ${playerScore} - ${computerScore}
    <br>
    Press any button to start a new game`
    reset()
  } else if (computerScore >= 5) {
    matchResults.innerHTML = `You lose. ${playerScore} - ${computerScore}
    <br>
    Press any button to start a new game`
    reset()
  }
}

// compare choices
function compareChoices(player, computer) {
  switch (player) {
    case "rock":
      if (computer === "rock") {
        roundResults.textContent = `Draw`
        break
      } else if (computer === "paper") {
        roundResults.textContent = `Paper beats Rock`
        computerScore++
      } else {
        roundResults.textContent = `Rock beats Scissors`
        playerScore++
      }
      break
    case "paper":
      if (computer === "paper") {
        roundResults.textContent = `Draw`
        break
      } else if (computer === "scissors") {
        roundResults.textContent = `Scissors beats Paper`
        computerScore++
      } else {
        roundResults.textContent = `Paper beats Rock`
        playerScore++
      }
      break
    case "scissors":
      if (computer === "scissors") {
        roundResults.textContent = `Draw`
        break
      } else if (computer === "rock") {
        roundResults.textContent = `Rock beats Scissors`
        computerScore++
      } else {
        roundResults.textContent = `Scissors beats Paper`
        playerScore++
      }
      break
  }
  scoreboard.textContent = `Player: ${playerScore}
  Computer: ${computerScore}`
}
function reset() {
  playerScore = 0
  computerScore = 0
}
