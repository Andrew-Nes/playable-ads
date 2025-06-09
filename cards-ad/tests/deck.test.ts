import { describe, it, expect } from 'vitest';

import { dealCards } from 'src/components/deck/deck';

describe('dealCards', () => {

  it('returns two hands with equal length', () => {
    const { playerHand, dealerHand } = dealCards();
    expect(playerHand.length).toBe(dealerHand.length);
  });

  it('returns a full deck split in half', () => {
    const { playerHand, dealerHand } = dealCards();
    const totalCards = playerHand.length + dealerHand.length;
    expect(totalCards).toBe(52);
  });

  it('returns no duplicate cards between hands', () => {
    const { playerHand, dealerHand } = dealCards();
    const allCards = [...playerHand, ...dealerHand];

    const uniqueCards = new Set(
      allCards.map(card => `${card.rank}-${card.suit}`)
    );

    expect(uniqueCards.size).toBe(52);
  });

  it('includes only valid cards', () => {
    const { playerHand, dealerHand } = dealCards();
    const allCards = [...playerHand, ...dealerHand];

    allCards.forEach(card => {
      expect(card.rank).toBeTypeOf('string');
      expect(card.suit).toBeTypeOf('string');
      expect(card.value).toBeTypeOf('number');
    });
  });

  it('shuffles the deck', () => {

    const dealOne = dealCards();
    const dealTwo = dealCards();

    const oneString = dealOne.playerHand.map(card => `${card.rank}-${card.suit}`).join(',');
    const twoString = dealTwo.playerHand.map(card => `${card.rank}-${card.suit}`).join(',');

    expect(oneString).not.toBe(twoString);
  });
});