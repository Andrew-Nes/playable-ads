import { GameState, TIME } from "src/utils";


let state: GameState = {
  playerHand: [],
  dealerHand: [],
  round: 1,
  winner: null,
  timer: TIME,
};

export function getGameState(): Readonly<GameState> {
  return state;
}

export function updateGameState(partial: Partial<GameState>): void {
  state = { ...state, ...partial };
}