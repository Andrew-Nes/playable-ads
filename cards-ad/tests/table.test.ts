import { playRound } from 'src/components/game/play-round/play-round';
import { createTable } from 'src/components/layout/table/table';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('src/components/layout/messages/messages', () => ({
  createMessageWindow: (root: HTMLElement) => {
    const p = document.createElement('p');
    p.className = 'message-window';
    p.textContent = 'message window created';
    root.appendChild(p);
  },
}));

vi.mock('src/components/game/play-round/play-round', () => ({
  playRound: vi.fn(),
}));

describe('createTable', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('div');
  });

  it('creates and appends the table structure correctly', () => {
    createTable(root);

    const table = root.querySelector('.game-table');
    expect(table).not.toBeNull();

    const dealerPlay = root.querySelector('#dealer-play');
    expect(dealerPlay).not.toBeNull();

    const dealerDeck = root.querySelector('#dealer-deck');
    expect(dealerDeck).not.toBeNull();

    const playerPlay = root.querySelector('#player-play');
    expect(playerPlay).not.toBeNull();

    const playerDeck = root.querySelector('#player-deck');
    expect(playerDeck).not.toBeNull();
  });

  it('creates messages window,', () => {
    createTable(root);

    const p = root.querySelector('.message-window');

    expect(p).toBeTruthy();
    expect(p?.textContent).toBe('message window created');
  });

  it('adds click listener to player deck that triggers playRound', () => {
    createTable(root);

    const playerDeck = root.querySelector('#player-deck');
    expect(playerDeck).not.toBeNull();

    playerDeck?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(playRound).toHaveBeenCalled();
  });
});
