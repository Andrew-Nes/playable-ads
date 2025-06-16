import { dealCards } from 'src/components/deck/deck';
import { gameTime } from 'src/utils/constants';
import { Messages } from 'src/utils/types';

import { updateGameState } from '../game-state/game-state';
import { showMessage } from '../show-message/show-message';
import { startTimer } from '../timer/timer';

export async function initGame(): Promise<void> {
  const { playerHand, dealerHand } = dealCards();
  updateGameState({
    playerHand,
    dealerHand,
    round: 1,
    roundWinner: null,
    timer: gameTime,
    roundOngoing: true,
  });

  await showMessage(Messages.rules, 10000);

  updateGameState({ roundOngoing: false });
  startTimer(gameTime);
}
