// Iteration 3: Creating variables required to make the game functional
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

const timerElem = document.getElementById("timer");

const buttonContainer = document.getElementById("buttons");

let timeRemaining = 20;
let interval;

let score = 0;
let currentOperation;

function randomNumbers() {
  return Math.floor(Math.random() * 100) + 1;
}

// Iteration 5: Creating a randomise function to make the game functional
function updateAnswer(num1, num2) {
  let ans;
  let index = Math.floor(Math.random() * 5);
  let operations = ["+", "-", "x", "/", "%"];
  currentOperation = operations[index];

  if (currentOperation == "+") ans = num1 + num2;
  else if (currentOperation == "-") ans = num1 - num2;
  else if (currentOperation == "x") ans = num1 * num2;
  else if (currentOperation == "/") ans = Math.floor(num1 / num2);
  else if (currentOperation == "%") ans = num1 % num2;

  return ans;
}

function gameOver() {
  clearTimer();
  localStorage.setItem("score", score);
  window.location.href = "./gameover.html";
}

function displayNumbers() {
  clearTimer();

  // Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
  let num1 = randomNumbers();
  let num2 = randomNumbers();

  // Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
  let num3 = updateAnswer(num1, num2);

  number1.innerText = num1;
  number2.innerText = num2;
  number3.innerText = num3;
  timer();
}

// Iteration 6: Making the Operators (button) functional
buttonContainer.addEventListener("click", (e) => {
  let selectOperation = e.target.id;
  if (
    (selectOperation == "mul" && currentOperation == "x") ||
    (selectOperation == "divide" && currentOperation == "/") ||
    (selectOperation == "plus" && currentOperation == "+") ||
    (selectOperation == "minus" && currentOperation == "-") ||
    (selectOperation == "modulus" && currentOperation == "-")
  ) {
    displayNumbers();
    score++;
  } else gameOver();
});

displayNumbers();

// Iteration 7: Making Timer functional
function timer() {
  interval = setInterval(() => {
    timeRemaining--;
    timerElem.innerText = timeRemaining;
    if (timeRemaining <= 0) gameOver();
  }, 1000);
}

function clearTimer() {
  timeRemaining = 20;
  timerElem.innerText = timeRemaining;
  clearInterval(interval);
}
