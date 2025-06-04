import { GameState, gameTime } from "src/utils";


let state: GameState = {
  playerHand: [],
  dealerHand: [],
  round: 1,
  winner: null,
  timer: gameTime,
};

export function getGameState(): Readonly<GameState> {
  return state;
}

export function updateGameState(partial: Partial<GameState>): void {
  state = { ...state, ...partial };
}