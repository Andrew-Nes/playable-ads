import { describe, it, expect } from 'vitest';

import { compareCards } from 'src/components/game/compare-cards/compare-cards';

import { Card } from 'src/utils/types';

describe('compareCards', () => {
  it('should give win to player if player has 2 and dealer has A', () => {
    const playerCard: Card = { suit: '♠', rank: '2', value: 2 };
    const dealerCard: Card = { suit: '♥', rank: 'A', value: 14 };
    expect(compareCards(playerCard, dealerCard)).toBe('player');
  });

  it('should return dealer if dealer has higher value', () => {
    const playerCard: Card = { suit: '♠', rank: '4', value: 4 };
    const dealerCard: Card = { suit: '♥', rank: '8', value: 8 };
    expect(compareCards(playerCard, dealerCard)).toBe('dealer');
  });

  it('should return tie if values are equal and no special rule applies', () => {
    const playerCard: Card = { suit: '♠', rank: '9', value: 9 };
    const dealerCard: Card = { suit: '♥', rank: '9', value: 9 };
    expect(compareCards(playerCard, dealerCard)).toBe('tie');
  });
});
