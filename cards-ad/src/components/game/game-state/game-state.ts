import { gameTime } from "src/utils/constants";
import { GameState } from "src/utils/types";



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