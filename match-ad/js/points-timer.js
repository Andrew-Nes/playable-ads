let timerInterval = null;
let scoreCounter = 0;

function updateScore(points) {
  scoreCounter += points;
  score.textContent = scoreCounter;
}

function startTimer() {
  timer.textContent = GAME_CONFIG.timeLimit;
  let timeLeft = GAME_CONFIG.timeLimit;
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}