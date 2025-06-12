const grid = document.getElementById("gameGrid");
const restartButton = document.getElementById("restartButton");
const score = document.getElementById("score");
const timer = document.getElementById("timer");
const popup = document.querySelector(".popup");

function createBoard() {
  board = [];
  grid.innerHTML = "";

  for (let i = 0; i < GAME_CONFIG.fieldSize * GAME_CONFIG.fieldSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("draggable", true);
    tile.dataset.index = i;
    const symbol = GAME_CONFIG.symbols[Math.floor(Math.random() * GAME_CONFIG.symbols.length)];
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
  setTimeout(() => removeMatches(matches), GAME_CONFIG.animationDelay + 100);
  setTimeout(refill, 1000);
}

createBoard();