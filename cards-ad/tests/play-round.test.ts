import { vi, describe, beforeEach, it, expect } from 'vitest';

import { Card } from 'src/utils';
import * as utils from 'src/utils';

import { playRound } from 'src/components/game/play-round/play-round';
import * as state from 'src/components/game/game-state/game-state';
import * as compare from 'src/components/game/compare-cards/compare-cards';
import * as message from 'src/components/game/show-message/show-message';
import * as animation from 'src/components/animations/flip-card/flip-card';


describe('playRound', () => {

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="player-deck"></div>
      <div id="dealer-deck"></div>
      <div id="player-play"></div>
      <div id="dealer-play"></div>
    `;
    
    vi.restoreAllMocks();
  });

  it('should play a round and update state correctly for player win', async () => {
    const mockPlayerCard: Card = { suit: '♠', rank: 'A', value: 14 };
    const mockDealerCard: Card = { suit: '♣', rank: 'K', value: 13 };

    const mockState = {
      playerHand: [mockPlayerCard],
      dealerHand: [mockDealerCard],
      round: 1,
      roundWinner: null,
      timer: 0,
      roundOngoing: false,
    };

    const updateGameStateSpy = vi.spyOn(state, 'updateGameState').mockImplementation(() => {});
    vi.spyOn(state, 'getGameState').mockReturnValue(structuredClone(mockState));
    vi.spyOn(compare, 'compareCards').mockReturnValue('player');
    vi.spyOn(animation, 'flipCardToPlayzone').mockResolvedValue();
    vi.spyOn(message, 'showMessage').mockImplementation(async () => {});
    vi.spyOn(utils, 'debounce').mockResolvedValue();
    
    await playRound();

    expect(updateGameStateSpy).toHaveBeenCalledWith(expect.objectContaining({
      playerHand: [mockPlayerCard, mockDealerCard],
      dealerHand: [],
      round: 2,
      roundOngoing: false
    }));
  });
});