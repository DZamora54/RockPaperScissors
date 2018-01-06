var rockPic = '<img src="assets/images/rock.jpg" alt="rock" id="chosenImage">';
var paperPic =
  '<img src="assets/images/paper.png" alt="paper" id="chosenImage">';
var scissorsPic =
  '<img src="assets/images/scissors.jpg" alt="scissors" id="chosenImage">';
var aiPic;
var aiChoice;
var userChoice;
var choices = ["rock", "paper", "scissors"];
var win = 0;
var loss = 0;
var tie = 0;

$("#rock").click(function() {
  document.querySelector("#userChoiceDiv").innerHTML = rockPic;
  userChoice = "rock";
  aiChooser();
  document.querySelector("#aiChoiceDiv").innerHTML = aiPic;
  whoWins();
  displayRecord();
});

$("#paper").click(function() {
  document.querySelector("#userChoiceDiv").innerHTML = paperPic;
  userChoice = "paper";
  aiChooser();
  document.querySelector("#aiChoiceDiv").innerHTML = aiPic;
  whoWins();
  displayRecord();
});

$("#scissors").click(function() {
  document.querySelector("#userChoiceDiv").innerHTML = scissorsPic;
  userChoice = "scissors";
  aiChooser();
  document.querySelector("#aiChoiceDiv").innerHTML = aiPic;
  whoWins();
  displayRecord();
});

function aiChooser() {
  var randomChoice = Math.floor(Math.random() * 3);
  aiChoice = choices[randomChoice];
  if (aiChoice == "rock") {
    aiPic = rockPic;
  } else if (aiChoice == "paper") {
    aiPic = paperPic;
  } else if (aiChoice == "scissors") {
    aiPic = scissorsPic;
  }
}

function whoWins() {
  if (userChoice === aiChoice) {
    tie++;
  } else if (userChoice == "rock" && aiChoice == "paper") {
    loss++;
  } else if (userChoice == "rock" && aiChoice == "scissors") {
    win++;
  } else if (userChoice == "paper" && aiChoice == "rock") {
    win++;
  } else if (userChoice == "paper" && aiChoice == "scissors") {
    loss++;
  } else if (userChoice == "scissors" && aiChoice == "paper") {
    win++;
  } else if (userChoice == "scissors" && aiChoice == "rock") {
    loss++;
  }
}

function displayRecord() {
  document.querySelector("#winCount").innerHTML = win;
  document.querySelector("#lossCount").innerHTML = loss;
  document.querySelector("#tieCount").innerHTML = tie;
}

$(document).ready(function() {
  $(".modal").modal();
  $("#modal1").modal("open");
});
