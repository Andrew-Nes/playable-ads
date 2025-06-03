import { TIME } from "../../utils";
import { dealCards } from "../deck/deck";
import { updateGameState } from "./game-state";
import { startTimer } from "./timer";

export function initGame(): void {
  const {playerHand, dealerHand} = dealCards();
  updateGameState({
    playerHand,
    dealerHand,
    round: 1,
    winner: null,
    timer: TIME,
  });

  startTimer(TIME);
}