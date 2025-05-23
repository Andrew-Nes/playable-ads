const grid = document.getElementById("gameGrid");
const restartButton = document.getElementById("restartButton");
const ctaButton = document.getElementById("ctaButton");
const score = document.getElementById("score");
const timer = document.getElementById("timer");

const fieldSize = 5; 
const symbols = ['🍎', '🍌', '🍒', '🍇', '🍓', '🍍'];
const SCOREAMPLIFIER = 10;
const ANIMATIONDELAY = 300;
let board = []; 
let scoreCounter = 0;
let timeLeft = 20;
let timerInterval = null;

function createBoard() {
  board = [];
  grid.innerHTML = "";

  for (let i = 0; i < fieldSize * fieldSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("draggable", true);
    tile.dataset.index = i;
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    tile.textContent = symbol;
    tile.dataset.symbol = symbol;
    grid.appendChild(tile);
    board.push(tile);

    tile.addEventListener("dragstart", onDragStart);
    tile.addEventListener("dragover", onDragOver);
    tile.addEventListener("drop", onDrop);
    tile.addEventListener("dragend", onDragEnd);
  }
  startTimer();
}

restartButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  scoreCounter = 0;
  score.textContent = 0;
  ctaButton.classList.add("hidden");
  createBoard();
});

function onDragStart(e) {
  this.classList.add("dragging");
  e.dataTransfer.setData("text/plain", this.dataset.index);
}

function onDragOver(e) {
  e.preventDefault();
}

function onDragEnd() {
  this.classList.remove("dragging");
}

function onDrop(e) {
  e.preventDefault();
  const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
  const toIndex = parseInt(this.dataset.index);
  if (!areAdjacent(fromIndex, toIndex)) return;

  lastSwap = [fromIndex, toIndex];
  swapTiles(fromIndex, toIndex);
  const matches = new Set (findMatches(toIndex).concat(findMatches(fromIndex)));
  setTimeout(() => removeMatches(matches), ANIMATIONDELAY + 100);
  setTimeout(refill, 1000);
}

function areAdjacent(i1, i2) {
  const row1 = Math.floor(i1 / fieldSize);
  const col1 = i1 % fieldSize;
  const row2 = Math.floor(i2 / fieldSize);
  const col2 = i2 % fieldSize;
  return (
    (Math.abs(row1 - row2) === 1 && col1 === col2) ||
    (Math.abs(col1 - col2) === 1 && row1 === row2)
  );
}

function swapTiles(i1, i2) {
  [board[i1].dataset.symbol, board[i2].dataset.symbol] = [
    board[i2].dataset.symbol,
    board[i1].dataset.symbol
  ];
  [board[i1].textContent, board[i2].textContent] = [
    board[i2].textContent,
    board[i1].textContent
  ];
}

function findMatches(index) {
  const row = Math.floor(index / fieldSize); 
  const col = index % fieldSize; 
  const matches = new Set();

  let currentSymbol = null;
  let sequence = [];

  for (let c = 0; c < fieldSize; c++) {
    const i = row * fieldSize + c;
    const symbol = board[i].dataset.symbol;

    if (symbol === currentSymbol) {
      sequence.push(i);
    } else {
      if (sequence.length >= 3) {
        sequence.forEach(i => matches.add(i));
      }
      currentSymbol = symbol;
      sequence = [i];
    }
  }

  if (sequence.length >= 3) {
    sequence.forEach(i => matches.add(i));
  }

  currentSymbol = null;
  sequence = [];

  for (let r = 0; r < fieldSize; r++) {
    const i = r * fieldSize + col;
    const symbol = board[i].dataset.symbol;

    if (symbol === currentSymbol) {
      sequence.push(i);
    } else {
      if (sequence.length >= 3) {
        sequence.forEach(i => matches.add(i));
      }
      currentSymbol = symbol;
      sequence = [i];
    }
  }

  if (sequence.length >= 3) {
    sequence.forEach(i => matches.add(i));
  }
  return [...matches];
}

function removeMatches(matches){
  matches.forEach(i => {
    const tile = board[i];
    tile.classList.add("removing");
  });
    setTimeout(() => {
      matches.forEach(i => {
      const tile = board[i];
      tile.dataset.symbol = "";
      tile.textContent = "";
      tile.classList.remove("removing");
    });
  }, ANIMATIONDELAY)
   updateScore([...matches].length * SCOREAMPLIFIER);
   checkWin();
}

function refill() {
  for (let col = 0; col < fieldSize; col++) {
    let bottom = fieldSize - 1;
    for (let row = fieldSize - 1; row >= 0; row--) {
      const i = row * fieldSize + col;
      if (board[i].dataset.symbol !== "") {
        if (bottom !== row) {
          board[bottom * fieldSize + col].dataset.symbol = board[i].dataset.symbol;
          board[bottom * fieldSize + col].textContent = board[i].textContent;
        }
        bottom--;
      }
    }
    for (let row = bottom; row >= 0; row--) {
      const i = row * fieldSize + col;
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      board[i].dataset.symbol = symbol;
      board[i].textContent = symbol;
      board[i].classList.add("adding");
      setTimeout(() => {
        board[i].classList.remove("adding");
      }, ANIMATIONDELAY);
    }
  }
}

function updateScore(points) {
  scoreCounter += points;
  score.textContent = scoreCounter;
}

function startTimer() {
  timeLeft = 30;
  timer.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame(won = false) {
  clearInterval(timerInterval);
  ctaButton.classList.remove("hidden");
  ctaButton.textContent = won ? "🎉 You win! Click to try more" : "⏰ Time's up! Click to try more";
}

function checkWin() {
  if (scoreCounter >= 90) {
    endGame(true);
  }
}
createBoard();