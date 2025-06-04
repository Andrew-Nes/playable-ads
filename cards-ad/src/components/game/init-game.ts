
import { gameTime } from "src/utils";
import { dealCards } from "../deck/deck";
import { updateGameState } from "./game-state/game-state";
import { startTimer } from "./timer/timer";

export function initGame(): void {
  const {playerHand, dealerHand} = dealCards();
  updateGameState({
    playerHand,
    dealerHand,
    round: 1,
    winner: null,
    timer: gameTime,
  });

  startTimer(gameTime);
}