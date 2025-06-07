import { GameState, gameTime } from "src/utils";


let state: GameState = {
  playerHand: [],
  dealerHand: [],
  round: 1,
  roundWinner: null,
  timer: gameTime,
  roundOngoing: false
};

export function getGameState(): Readonly<GameState> {
  return state;
}

export function updateGameState(partial: Partial<GameState>): void {
  state = { ...state, ...partial };
}