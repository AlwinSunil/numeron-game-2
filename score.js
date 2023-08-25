// Iteration 8: Making scoreboard functional
const gameBoard = document.getElementById("score-board");
const playAgainBtn = document.getElementById("play-again-button");

gameBoard.innerText = localStorage.getItem("score");

playAgainBtn.onclick = function () {
  window.location.href = "./index.html";
};
