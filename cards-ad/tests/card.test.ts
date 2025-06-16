import { createCardElement } from 'src/components/layout/card/card';
import { Card } from 'src/utils/types';
import { describe, it, expect } from 'vitest';

describe('create card layout', () => {
  it('returns a div with class "card-container"', () => {
    const card: Card = { rank: 'A', suit: '♠', value: 12 };
    const el = createCardElement(card);
    expect(el).toBeInstanceOf(HTMLDivElement);
    expect(el.classList.contains('card-container')).toBe(true);
  });

  it('contains a child with class "card"', () => {
    const card: Card = { rank: 'A', suit: '♠', value: 14 };
    const el = createCardElement(card);
    const cardInner = el.querySelector('.card');
    expect(cardInner).toBeTruthy();
  });

  it('applies "red" class for hearts and diamonds', () => {
    const heartCard: Card = { rank: 'J', suit: '♥', value: 11 };
    const diamondCard: Card = { rank: 'J', suit: '♦', value: 11 };

    expect(
      createCardElement(heartCard)
        .querySelector('.card')!
        .classList.contains('red')
    ).toBe(true);
    expect(
      createCardElement(diamondCard)
        .querySelector('.card')!
        .classList.contains('red')
    ).toBe(true);
  });

  it('applies "black" class for spades and clubs', () => {
    const spadeCard: Card = { rank: 'Q', suit: '♠', value: 12 };
    const clubCard: Card = { rank: 'Q', suit: '♣', value: 12 };

    expect(
      createCardElement(spadeCard)
        .querySelector('.card')!
        .classList.contains('black')
    ).toBe(true);
    expect(
      createCardElement(clubCard)
        .querySelector('.card')!
        .classList.contains('black')
    ).toBe(true);
  });

  it('displays the rank and suit in corners and center', () => {
    const card: Card = { rank: '7', suit: '♣', value: 7 };
    const el = createCardElement(card);

    const topLeft = el.querySelector('.card__corner.top-left');
    const bottomRight = el.querySelector('.card__corner.bottom-right');
    const center = el.querySelector('.card__center');

    expect(topLeft?.textContent).toContain('7');
    expect(topLeft?.textContent).toContain('♣');

    expect(bottomRight?.textContent).toContain('7');
    expect(bottomRight?.textContent).toContain('♣');

    expect(center?.textContent).toBe('♣');
  });
});
