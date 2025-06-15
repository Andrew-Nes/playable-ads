import { playRound } from 'src/components/game/play-round/play-round';

import { createMessageWindow } from '../messages/messages';

import './table.css';

export function createTable(root: HTMLElement) {
  const table = document.createElement('div');
  table.className = 'game-table';

  const dealerZone = document.createElement('siction');
  dealerZone.className = 'zone dealer-zone';

  const dealerPlay = document.createElement('div');
  dealerPlay.className = 'card-slot play-slot';
  dealerPlay.id = 'dealer-play';
  dealerPlay.setAttribute('aria-label', 'Dealer play slot');
  dealerZone.appendChild(dealerPlay);

  const dealerDeck = document.createElement('div');
  dealerDeck.className = 'card-slot deck-slot';
  dealerDeck.id = 'dealer-deck';
  dealerDeck.setAttribute('aria-label', 'Dealer deck');
  dealerZone.appendChild(dealerDeck);

  const playerZone = document.createElement('section');
  playerZone.className = 'zone player-zone';

  const playerPlay = document.createElement('div');
  playerPlay.className = 'card-slot play-slot';
  playerPlay.id = 'player-play';
  playerPlay.setAttribute('aria-label', 'Player play slot');
  playerZone.appendChild(playerPlay);

  const playerDeck = document.createElement('div');
  playerDeck.className = 'card-slot deck-slot';
  playerDeck.id = 'player-deck';
  playerDeck.setAttribute('role', 'button'); 
  playerDeck.tabIndex = 0;
  playerDeck.setAttribute('aria-label', 'Player deck, click or press space to play a card');
  playerZone.appendChild(playerDeck);

  root.appendChild(table);
  table.appendChild(dealerZone);
  table.appendChild(playerZone);

  createMessageWindow(table);

  playerDeck.addEventListener('click', () => {
    playRound();
  });

  playerDeck.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    playRound();
  }
});
}
