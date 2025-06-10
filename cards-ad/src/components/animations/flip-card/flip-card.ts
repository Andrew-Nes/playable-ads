import { createCardElement } from "src/components/layout/card/card";

import { Card } from "src/utils/types";


export async function flipCardToPlayzone (
  cardData: Card,
  fromSlot: HTMLElement,
  toSlot: HTMLElement
): Promise<void> {
  return new Promise((resolve) => {
    const cardContainer = createCardElement(cardData);
    document.body.appendChild(cardContainer);

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
      cardContainer.children[0].classList.add('flipped');
      cardContainer.style.left = `${toRect.left}px`;
      cardContainer.style.top = `${toRect.top}px`;

      setTimeout(() => {
        cardContainer.remove();
        resolve();
      }, 1000); 
    });
  });
}