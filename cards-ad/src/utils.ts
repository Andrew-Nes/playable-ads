export type Suit = '♠' | '♥' | '♦' | '♣';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface Card {
  suit: Suit;
  rank: Rank;
  value: number; 
  side?: string;
}

export interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
  round: number;
  winner: 'player' | 'dealer' | 'draw' | null;
  timer: number;
  }

export const suits: Suit[] = ['♠', '♥', '♦', '♣'];
export const ranks: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const gameTime: number = 30;

export const rankValues: Record<Rank, number> = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14, 
};