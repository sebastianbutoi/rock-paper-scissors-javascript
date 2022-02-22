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
