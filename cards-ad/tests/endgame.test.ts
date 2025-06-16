import { showEndGameOverlay } from 'src/components/game/end-game/end-game';
import * as gameStateModule from 'src/components/game/game-state/game-state';
import { createEndGameOverlay } from 'src/components/layout/endgame-overlay/endgame-overlay';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('src/components/layout/cta-button/cta-button', () => ({
  createCtaButton: (root: HTMLElement) => {
    const button = document.createElement('button');
    button.className = 'button';
    root.appendChild(button);
  },
}));

describe('createEndgameOverlay', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('div');
    document.body.innerHTML = '';

    vi.clearAllMocks();
  });

  it('creates overlay structure and appends to root', () => {
    createEndGameOverlay(root);

    const classNames = [
      '.end-overlay',
      '.end-popup',
      '.end-title',
      '.end-result',
      '.button',
    ];

    classNames.forEach((className) => {
      const element = root.querySelector(className);
      expect(element).toBeTruthy();
    });
  });
});

describe('showEndGameOverlay', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="app"></div>
      <div class="end-overlay" style="display:none;">
        <h2 class="end-title"></h2>
        <p class="end-result"></p>
      </div>
    `;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('displays the correct winner and round info', () => {
    vi.spyOn(gameStateModule, 'getGameState').mockReturnValue({
      playerHand: [
        {
          suit: '♠',
          rank: '3',
          value: 3,
        },
        {
          suit: '♠',
          rank: '2',
          value: 2,
        },
        {
          suit: '♠',
          rank: '4',
          value: 4,
        },
      ],
      dealerHand: [
        {
          suit: '♠',
          rank: '5',
          value: 5,
        },
        {
          suit: '♠',
          rank: '6',
          value: 6,
        },
      ],
      round: 5,
      roundWinner: null,
      timer: 0,
      roundOngoing: false,
    });

    showEndGameOverlay();

    const overlayEl = document.querySelector('.end-overlay') as HTMLElement;
    const titleEl = document.querySelector('.end-title') as HTMLElement;
    const resultEl = document.querySelector('.end-result') as HTMLElement;

    expect(titleEl.textContent).toBe('Game Over');
    expect(resultEl.textContent).toBe('Rounds played: 4. Winner: PLAYER');
    expect(overlayEl.style.display).toBe('flex');
  });

  it('handles dealer winning scenario', () => {
    vi.spyOn(gameStateModule, 'getGameState').mockReturnValue({
      playerHand: [
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
      ],
      dealerHand: [
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
      ],
      round: 3,
      roundWinner: null,
      timer: 0,
      roundOngoing: false,
    });

    showEndGameOverlay();

    const resultEl = document.querySelector('.end-result')!;
    expect(resultEl.textContent).toContain('DEALER');
  });

  it('handles draw scenario', () => {
    vi.spyOn(gameStateModule, 'getGameState').mockReturnValue({
      playerHand: [
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
      ],
      dealerHand: [
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
        {
          suit: '♠',
          rank: '2',
          value: 0,
        },
      ],
      round: 2,
      roundWinner: null,
      timer: 0,
      roundOngoing: false,
    });

    showEndGameOverlay();

    const resultEl = document.querySelector('.end-result')!;
    expect(resultEl.textContent).toContain('DRAW');
  });
});
