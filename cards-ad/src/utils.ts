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
  roundWinner: 'player' | 'dealer' | 'draw' | null;
  timer: number;
  roundOngoing: boolean;
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

export enum Messages {
  rules = 'Take a card from your deck and compare with dealers card, whose card is elder takes both, and two beats ace. Take as many dealers card as you can to win. click on your deck to play a round.',
  player = 'Player wins round',
  dealer = 'Dealer wins round', 
  tie = 'It is a tie'
}

export function debounce(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}