import { playRound } from 'src/components/game/play-round/play-round';
import { createMessageWindow } from '../messages/messages';

import './table.css';


export function createTable(root: HTMLElement) {

  const table = document.createElement('div');
  table.className = 'game-table';

  const dealerZone = document.createElement('div');
  dealerZone.className = 'zone dealer-zone';

  const dealerPlay = document.createElement('div');
  dealerPlay.className = 'card-slot play-slot';
  dealerPlay.id = 'dealer-play';
  dealerZone.appendChild(dealerPlay);

  const dealerDeck = document.createElement('div');
  dealerDeck.className = 'card-slot deck-slot';
  dealerDeck.id = 'dealer-deck'
  dealerZone.appendChild(dealerDeck);

  const playerZone = document.createElement('div');
  playerZone.className = 'zone player-zone';

  const playerPlay = document.createElement('div');
  playerPlay.className = 'card-slot play-slot';
  playerPlay.id = 'player-play';
  playerZone.appendChild(playerPlay);

  const playerDeck = document.createElement('div');
  playerDeck.className = 'card-slot deck-slot';
  playerDeck.id = 'player-deck';
  playerZone.appendChild(playerDeck);
  
  root.appendChild(table);
  table.appendChild(dealerZone);
  table.appendChild(playerZone);
  
  createMessageWindow(table);

  playerDeck.addEventListener('click', () => {
  playRound();
  });
}