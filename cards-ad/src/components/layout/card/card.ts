import { Card } from 'src/utils';

import './card.css';



export function createCardElement(card: Card, faceDown = false): HTMLDivElement {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  if (faceDown) cardEl.classList.add('is-face-down');
  ['♥', '♦'].includes(card.suit) ? cardEl.classList.add('red') : cardEl.classList.add('black');

  cardEl.innerHTML = `
    <div class="card__front">
      <div class="card__corner top-left">
        <span class="rank">${card.rank}</span>
        <span class="suit">${card.suit}</span>
      </div>
      <div class="card__center">${card.suit}</div>
      <div class="card__corner bottom-right">
        <span class="rank">${card.rank}</span>
        <span class="suit">${card.suit}</span>
      </div>
    </div>
    <div class="card__back"></div>
  `;

  return cardEl;
}