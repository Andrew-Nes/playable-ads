
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { stopTimer, startTimer } from 'src/components/game/timer/timer';
import * as gameState from 'src/components/game/game-state/game-state';
import * as endGame from 'src/components/game/end-game/end-game';

describe('timer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(gameState, 'updateGameState').mockImplementation(() => {});
    vi.spyOn(endGame, 'showEndGameOverlay').mockImplementation(() => {});
  });

  afterEach(() => {
    stopTimer(); 
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should call updateGameState with initial time and decrement it every second', () => {
    startTimer(3);

    expect(gameState.updateGameState).toHaveBeenCalledWith({ timer: 3 });

    vi.advanceTimersByTime(1000);
    expect(gameState.updateGameState).toHaveBeenCalledWith({ timer: 2 });

    vi.advanceTimersByTime(1000);
    expect(gameState.updateGameState).toHaveBeenCalledWith({ timer: 1 });

    vi.advanceTimersByTime(1000);
    expect(gameState.updateGameState).toHaveBeenCalledWith({ timer: 0 });
  });

  it('should stop timer when stopTimer is called', () => {
    startTimer(10);
    stopTimer();

    vi.advanceTimersByTime(5000);

    expect(gameState.updateGameState).toHaveBeenCalledTimes(1); 
    expect(endGame.showEndGameOverlay).not.toHaveBeenCalled();
  });

  it('should clear previous timer when starting a new one', () => {
    const clearSpy = vi.spyOn(global, 'clearInterval');

    startTimer(5);
    const previousCalls = clearSpy.mock.calls.length;

    startTimer(10);
    expect(clearSpy.mock.calls.length).toBeGreaterThan(previousCalls);
  });
});