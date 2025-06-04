
import { playRound } from 'src/components/game/play-round/play-round';
import { initGame } from 'src/components/game/init-game/init-game';
import { createEndGameOverlay } from '../endgame-overlay/endgame-overlay';

import './table.css';


export function setupLayout(root: HTMLElement) {
  const title = document.createElement('h1');
  title.className = 'main-title'
  title.textContent = 'Card Game';

  const table = document.createElement('div');
  table.className = 'game-table';

  const dealerZone = document.createElement('div');
  dealerZone.className = 'zone dealer-zone';

  const dealerPlay = document.createElement('div');
  dealerPlay.className = 'card-slot play-slot';
  dealerZone.appendChild(dealerPlay);

  const dealerDeck = document.createElement('div');
  dealerDeck.className = 'card-slot deck-slot';
  dealerZone.appendChild(dealerDeck);

  const playerZone = document.createElement('div');
  playerZone.className = 'zone player-zone';

  const playerPlay = document.createElement('div');
  playerPlay.className = 'card-slot play-slot';
  playerZone.appendChild(playerPlay);

  const playerDeck = document.createElement('div');
  playerDeck.className = 'card-slot deck-slot';
  playerZone.appendChild(playerDeck);
  
  table.appendChild(dealerZone);
  table.appendChild(playerZone);
  root.appendChild(title);
  root.appendChild(table);
  
  createEndGameOverlay(root);

  playerDeck.addEventListener('click', () => {
  playRound();
  });

  initGame();
}