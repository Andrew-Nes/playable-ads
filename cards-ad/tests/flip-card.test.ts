import { describe, it, expect, vi, beforeEach } from 'vitest';

import { flipCardToPlayzone } from 'src/components/animations/flip-card/flip-card';

import { Card } from 'src/utils/types';

vi.mock('src/components/layout/card/card', () => ({
  createCardElement: vi.fn(() => {
    const container = document.createElement('div');
    container.className = 'card-container';
    const card = document.createElement('div');
    container.appendChild(card);
    return container;
  }),
}));

describe('flipCardToPlayzone', () => {
  const card: Card = { suit: '♠', rank: 'A', value: 14 };
  let fromSlot: HTMLElement;
  let toSlot: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    fromSlot = document.createElement('div');
    toSlot = document.createElement('div');

    Object.assign(fromSlot, {
      getBoundingClientRect: () => ({
        left: 10,
        top: 20,
        width: 100,
        height: 150,
      }),
    });

    Object.assign(toSlot, {
      getBoundingClientRect: () => ({
        left: 200,
        top: 300,
        width: 100,
        height: 150,
      }),
    });

    document.body.appendChild(fromSlot);
    document.body.appendChild(toSlot);

    vi.useFakeTimers();
  });

  it('animates card and removes it after timeout', async () => {
    const promise = flipCardToPlayzone(card, fromSlot, toSlot);

    const container = document.body.querySelector(
      '.card-container'
    ) as HTMLDivElement;
    expect(container).not.toBeNull();

    await vi.runAllTimersAsync();

    expect(container!.style.left).toBe('200px');
    expect(container!.style.top).toBe('300px');

    await promise;
    expect(document.body.contains(container!)).toBe(false);
  });
});
