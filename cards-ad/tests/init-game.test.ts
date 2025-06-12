import * as deck from 'src/components/deck/deck';
import * as gameState from 'src/components/game/game-state/game-state';
import { initGame } from 'src/components/game/init-game/init-game';
import * as message from 'src/components/game/show-message/show-message';
import * as timer from 'src/components/game/timer/timer';
import { gameTime } from 'src/utils/constants';
import { Hands, Messages } from 'src/utils/types';
import { vi, describe, it, expect } from 'vitest';

vi.mock('src/components/deck/deck');
vi.mock('src/components/game/game-state/game-state');
vi.mock('src/components/game/timer/timer');
vi.mock('src/components/game/show-message/show-message');

describe('initGame', () => {
  it('initializes the game properly', async () => {
    const mockHands: Hands = {
      playerHand: [{ suit: '♠', rank: 'A', value: 14 }],
      dealerHand: [{ suit: '♣', rank: 'K', value: 13 }],
    };
    const dealCardsSPy = vi.spyOn(deck, 'dealCards').mockReturnValue(mockHands);
    const updateGameStateSpy = vi
      .spyOn(gameState, 'updateGameState')
      .mockImplementation(() => {});
    const showMessageSpy = vi.spyOn(message, 'showMessage').mockResolvedValue();
    const startTimerSpy = vi
      .spyOn(timer, 'startTimer')
      .mockImplementation(() => {});

    await initGame();

    expect(dealCardsSPy).toHaveBeenCalled();
    expect(updateGameStateSpy).toHaveBeenCalledWith({
      playerHand: mockHands.playerHand,
      dealerHand: mockHands.dealerHand,
      round: 1,
      roundWinner: null,
      timer: gameTime,
      roundOngoing: true,
    });
    expect(showMessageSpy).toHaveBeenCalledWith(Messages.rules, 10000);
    expect(startTimerSpy).toHaveBeenCalledWith(gameTime);
  });
});
