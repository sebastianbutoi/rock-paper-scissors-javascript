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

// With this function the computer has 90% of probability to win
// for each player's move the computer has different winning moves
// 'otherMoves' includes the draw and lose options
function getComputerMoveNinety(playerMove) {
  let plays = [
    (rock = {
      moveName: "rock",
      winningMoves: ["paper", "spock"],
      otherMoves: ["rock", "scissors", "lizard"], // draw + loses
    }),
    (paper = {
      moveName: "paper",
      winningMoves: ["lizard", "scissors"],
      otherMoves: ["paper", "rock", "spock"], // draw + loses
    }),
    (scissors = {
      moveName: "scissors",
      winningMoves: ["rock", "spock"],
      otherMoves: ["scissors", "lizard", "paper"], // draw + loses
    }),
    (spock = {
      moveName: "spock",
      winningMoves: ["paper", "lizard"],
      otherMoves: ["spock", "rock", "scissors"], // draw + loses
    }),
    (lizard = {
      moveName: "lizard",
      winningMoves: ["rock", "scissors"],
      otherMoves: ["lizard", "spock", "paper"], // draw + loses
    }),
  ];
  let number = Math.floor(Math.random() * 30);
  for (let i = 0; i < plays.length; i++) {
    if (playerMove === plays[i].moveName)
      if (number > 2 && number < 30) {
        // 27/30 chances to win = 90%
        let randomIndex = Math.floor(
          Math.random() * plays[i].winningMoves.length
        );
        return plays[i].winningMoves[randomIndex];
      } else {
        let randomIndex = Math.floor(
          Math.random() * plays[i].otherMoves.length
        );
        return plays[i].otherMoves[randomIndex];
      }
  }
}

// This function will get the player's name
function getName() {
  let username;
    let charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o",
    "p", "q", "r", "s", "t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O",
    "P", "Q", "R", "S", "T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];

  let isNotValid;
  do {
    isNotValid = true;
    username = prompt("Please type your name:");

    // If the Player's name is longer than 10 characters show him an alert
    if (username.length > 10) {
      alert("Your username is too long try again! (Max. 10 characteres)");
    }

    // Check if the first letter is a number or a symbol
    for (let index = 0; index < charArray.length; index++) {
      if (username.charAt(0) === charArray[index]) isNotValid = false;
    }
    // If the first letter is not valid then print a message
    if (isNotValid) alert("First character must be a letter");
  } while (username.length > 10 || isNotValid);

  // Return the username with only the first letter in capital
  return (
    username.charAt(0).toUpperCase() +
    username.substring(1, username.length).toLowerCase()
  );
}

// This function will check who is the winner
function getWinner(playerMove, computerMove) {
  let playerWin = 1;
  let computerWin = -1;
  let draw = 0;

  if (playerMove === computerMove) {
    return draw;
  }
  switch (playerMove) {
    case "rock":
      switch (computerMove) {
        case "spock":
          return computerWin;
        case "lizard":
          return playerWin;
        case "scissors":
          return playerWin;
        case "paper":
          return computerWin;
      }
    case "scissors":
      switch (computerMove) {
        case "spock":
          return computerWin;
        case "lizard":
          return playerWin;
        case "rock":
          return computerWin;
        case "paper":
          return playerWin;
      }
    case "paper":
      switch (computerMove) {
        case "spock":
          return playerWin;
        case "lizard":
          return computerWin;
        case "scissors":
          return computerWin;
        case "rock":
          return playerWin;
      }
    case "lizard":
      switch (computerMove) {
        case "spock":
          return playerWin;
        case "rock":
          return computerWin;
        case "scissors":
          return computerWin;
        case "papger":
          return playerWin;
      }
    case "spock":
      switch (computerMove) {
        case "rock":
          return playerWin;
        case "lizard":
          return computerWin;
        case "scissors":
          return playerWin;
        case "paper":
          return computerWin;
      }
  }
}
