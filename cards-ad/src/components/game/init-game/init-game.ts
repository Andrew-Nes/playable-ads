
import { dealCards } from "src/components/deck/deck";
import { updateGameState } from "../game-state/game-state";
import { startTimer } from "../timer/timer";
import { showMessage } from "../show-message/show-message";

import { gameTime } from "src/utils/constants";
import { Messages } from "src/utils/types";


export async function initGame(): Promise<void> {
  const {playerHand, dealerHand} = dealCards();
  updateGameState({
    playerHand,
    dealerHand,
    round: 1,
    roundWinner: null,
    timer: gameTime,
  });

  await showMessage(Messages.rules, 10000);

  startTimer(gameTime);
}