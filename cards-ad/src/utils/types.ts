export type Suit = '♠' | '♥' | '♦' | '♣';
export type Rank =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';

export interface Card {
  suit: Suit;
  rank: Rank;
  value: number;
}

export interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
  round: number;
  roundWinner: 'player' | 'dealer' | 'draw' | null;
  timer: number;
  roundOngoing: boolean;
}
export interface Hands {
  playerHand: Card[];
  dealerHand: Card[];
}

export enum Messages {
  rules = 'Take a card from your deck and compare with dealers card, whose card is elder takes both, and two beats ace. Take as many dealers card as you can to win. Click on your deck to play a round.',
  player = 'Player wins round',
  dealer = 'Dealer wins round',
  tie = 'It is a tie',
}
