const grid = document.getElementById("gameGrid");
const restartBtn = document.getElementById("restartButton");
const ctaBtn = document.getElementById("ctaButton");

const fieldSize = 5; 
const symbols = ['🍎', '🍌', '🍒', '🍇', '🍓', '🍍'];
let board = []; 

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
  }
}
createBoard();