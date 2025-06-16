import { Card } from 'src/utils/types';

import './card.css';

export function createCardElement(card: Card): HTMLDivElement {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  const cardEl = document.createElement('div');
  cardEl.classList.add('card');

  cardContainer.appendChild(cardEl);

  if (['♥', '♦'].includes(card.suit)) {
    cardEl.classList.add('red');
  } else {
    cardEl.classList.add('black');
  }

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

  return cardContainer;
}
