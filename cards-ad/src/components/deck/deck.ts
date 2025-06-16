import { suits, ranks, rankValues } from 'src/utils/constants';
import { Card, Hands } from 'src/utils/types';

function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank, value: rankValues[rank] });
    }
  }
  return deck;
}

function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function dealCards(): Hands {
  const deck = shuffleDeck(createDeck());
  const half = Math.floor(deck.length / 2);
  const playerHand = deck.slice(0, half);
  const dealerHand = deck.slice(half);
  return { playerHand, dealerHand };
}
