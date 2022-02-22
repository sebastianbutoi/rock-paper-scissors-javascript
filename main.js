function getGameMode() {
  let choice;
  while (true) {
    choice = prompt(
      "Please select the game difficulty: 1 for normal, 2 for impossible"
    );
    if (choice === "1" || choice === "2") {
      return choice;
    } else alert("Wrong input! Please insert 1 or 2");
  }
}

// This function will update the scoreboard using the winner value
function updateScoreboard(scoreboard, winner) {
  switch (winner) {
    case 1:
      scoreboard.playerScore++;
      break;
    case 0:
      scoreboard.drawScore++;
      break;
    case -1:
      scoreboard.computerScore++;
      break;
  }
  return scoreboard;
}

// This function will ask the player if he wants to keep playing
// If the player will insert something different than 'y' then the game will stop
function getConfirmation() {
  let confirmation = prompt("Press Y to play again or anything else to exit:");
  confirmation = confirmation.toLowerCase();
  if (confirmation !== "y") {
    alert("Thank you for playing!");
    return false;
  } else return true;
}

// Take input from the user and check for errors
function getPlayerMove() {
  while (true) {
    let playerMove = prompt(
      "Choose between Rock, Paper, Scissors, Spock, or Lizard"
    );
    playerMove = playerMove.toLowerCase();
    // Check if the input is right, otherwise keep asking
    if (
      playerMove === "rock" ||
      playerMove === "paper" ||
      playerMove === "scissors" ||
      playerMove === "spock" ||
      playerMove === "lizard"
    )
      return playerMove;
    else
      alert(
        "Wrong input - Please insert rock, paper, scissors, spock or lizard."
      );
  }
}

// Generate a choice for the computer
function getComputerMove() {
  number = Math.floor(Math.random() * 5);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "spock";
    case 4:
      return "lizard";
  }
}
