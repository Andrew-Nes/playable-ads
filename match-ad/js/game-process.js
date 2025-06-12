

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

function areAdjacent(i1, i2) {
  const row1 = Math.floor(i1 / GAME_CONFIG.fieldSize);
  const col1 = i1 % GAME_CONFIG.fieldSize;
  const row2 = Math.floor(i2 / GAME_CONFIG.fieldSize);
  const col2 = i2 % GAME_CONFIG.fieldSize;
  return (
    (Math.abs(row1 - row2) === 1 && col1 === col2) ||
    (Math.abs(col1 - col2) === 1 && row1 === row2)
  );
}

function findMatches(index) {
  const row = Math.floor(index / GAME_CONFIG.fieldSize); 
  const col = index % GAME_CONFIG.fieldSize; 
  const matches = new Set();

  let currentSymbol = null;
  let sequence = [];

  for (let c = 0; c < GAME_CONFIG.fieldSize; c++) {
    const i = row * GAME_CONFIG.fieldSize + c;
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

  for (let r = 0; r < GAME_CONFIG.fieldSize; r++) {
    const i = r * GAME_CONFIG.fieldSize + col;
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
  }, GAME_CONFIG.animationDelay)
   updateScore([...matches].length * GAME_CONFIG.scoreAmplifier);
   checkWin();
}

function refill() {
  for (let col = 0; col < GAME_CONFIG.fieldSize; col++) {
    let bottom = GAME_CONFIG.fieldSize - 1;
    for (let row = GAME_CONFIG.fieldSize - 1; row >= 0; row--) {
      const i = row * GAME_CONFIG.fieldSize + col;
      if (board[i].dataset.symbol !== "") {
        if (bottom !== row) {
          board[bottom * GAME_CONFIG.fieldSize + col].dataset.symbol = board[i].dataset.symbol;
          board[bottom * GAME_CONFIG.fieldSize + col].textContent = board[i].textContent;
        }
        bottom--;
      }
    }
    for (let row = bottom; row >= 0; row--) {
      const i = row * GAME_CONFIG.fieldSize + col;
      const symbol = GAME_CONFIG.symbols[Math.floor(Math.random() * GAME_CONFIG.symbols.length)];
      board[i].dataset.symbol = symbol;
      board[i].textContent = symbol;
      board[i].classList.add("adding");
      setTimeout(() => {
        board[i].classList.remove("adding");
      }, GAME_CONFIG.animationDelay);
    }
  }
}


function checkWin() {
  if (scoreCounter >= 90) {
    endGame(true);
  }
}

function endGame(won = false) {
  clearInterval(timerInterval);
  ctaButton.textContent = won ? "🎉 You win! Click to try more" : "⏰ Time's up! Click to try more";
  popup.classList.remove("hidden");
}

