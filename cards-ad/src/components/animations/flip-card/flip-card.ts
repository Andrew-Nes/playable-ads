import { createCardElement } from 'src/components/layout/card/card';
import { playSound } from 'src/utils/helpers';
import { Card } from 'src/utils/types';

export async function flipCardToPlayzone(
  cardData: Card,
  fromSlot: HTMLElement,
  toSlot: HTMLElement
): Promise<void> {
  return new Promise((resolve) => {
    const cardContainer = createCardElement(cardData);
    document.body.appendChild(cardContainer);

    const cardShowTime = fromSlot.id === 'player-deck' ? 2500 : 1500;

    const fromRect = fromSlot.getBoundingClientRect();
    const toRect = toSlot.getBoundingClientRect();

    cardContainer.style.position = 'fixed';
    cardContainer.style.left = `${fromRect.left}px`;
    cardContainer.style.top = `${fromRect.top}px`;
    cardContainer.style.zIndex = '1000';
    cardContainer.style.width = `${fromRect.width}px`;
    cardContainer.style.height = `${fromRect.height}px`;

    void cardContainer.offsetWidth;

    requestAnimationFrame(() => {
      playSound('flip');
      cardContainer.children[0].classList.add('flipped');
      cardContainer.style.left = `${toRect.left}px`;
      cardContainer.style.top = `${toRect.top}px`;

      setTimeout(() => {
        cardContainer.remove();
        resolve();
      }, cardShowTime);
    });
  });
}
