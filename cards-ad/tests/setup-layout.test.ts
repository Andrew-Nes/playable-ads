import { describe, it, expect, vi, beforeEach } from 'vitest';

import { setupLayout } from 'src/components/layout/setup-layout/setup-layout';


vi.mock('src/components/layout/table/table', () => ({
  createTable: (root: HTMLElement) => {
    const p = document.createElement('p');
    p.textContent = 'table created';
    root.appendChild(p);
  }
}));

vi.mock('src/components/layout/endgame-overlay/endgame-overlay', () => ({
  createEndGameOverlay: (root: HTMLElement) => {
    const p = document.createElement('p');
    p.textContent = 'overlay created';
    root.appendChild(p);
  }
}));

vi.mock('src/components/game/init-game/init-game', () => ({
  initGame: vi.fn(),
}));

import { initGame } from 'src/components/game/init-game/init-game';


describe('setupLayout', () => {
  let root: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);

    vi.clearAllMocks();
  });

  it('adds the main title to the root', () => {
    setupLayout(root);

    const title = root.querySelector('.main-title') as HTMLElement;
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('⚔️ Card Clash ⚔️');
  });

  it('creates table,', () => {
    setupLayout(root);

    const p = root.querySelector('p');

    expect(p).toBeTruthy();
    expect(p?.textContent).toBe('table created');

  });

  it('creates EndGameOverlay', () => {
    setupLayout(root);

    const p = root.querySelector('p');

    expect(p).toBeTruthy();
    expect(p?.textContent).toBe('table created');

  });

  it('calls initGame', () => {
    setupLayout(root);

    expect(initGame).toHaveBeenCalled();
  });
});