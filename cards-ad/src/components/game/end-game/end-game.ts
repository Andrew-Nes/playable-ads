import { getGameState } from '../game-state/game-state';

export function showEndGameOverlay(): void {
  const { playerHand, dealerHand, round } = getGameState();
  let winner: 'player' | 'dealer' | 'draw';

  if (playerHand.length > dealerHand.length) {
    winner = 'player';
  } else if (dealerHand.length > playerHand.length) {
    winner = 'dealer';
  } else {
    winner = 'draw';
  }

  const overlayEl: HTMLElement | null = document.querySelector('.end-overlay');
  const titleEl: HTMLElement | null = document.querySelector('.end-title');
  const resultEL: HTMLElement | null = document.querySelector('.end-result');

  if (!overlayEl || !titleEl || !resultEL) {
    const app = document.getElementById('app');
    const message = document.createElement('h2');
    message.innerText = 'OOPS, something went wrong';
    app?.appendChild(message);
  } else {
    titleEl.textContent = 'Game Over';
    resultEL.textContent = `Rounds played: ${round - 1}. Winner: ${winner.toUpperCase()}`;
    overlayEl.style.display = 'flex';
  }
}
