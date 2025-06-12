import { describe, it, expect, vi, beforeEach } from 'vitest';

import { showMessage } from 'src/components/game/show-message/show-message';
import { createMessageWindow } from 'src/components/layout/messages/messages';

describe('Message Window Module', () => {
  let root: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);
    vi.useFakeTimers();
  });

  it('should create a hidden message window in the DOM', () => {
    createMessageWindow(root);
    const messageEl = root.querySelector('.message-window');

    expect(messageEl).toBeTruthy();
    expect(messageEl?.classList.contains('hidden')).toBe(true);
  });

  it('should show and hide the message with correct text and timing', async () => {
    createMessageWindow(root);

    const promise = showMessage('Test Message', 1000);

    const messageEl = document.querySelector('.message-window');

    expect(messageEl?.classList.contains('hidden')).toBe(false);
    expect(messageEl?.textContent).toBe('Test Message');

    vi.advanceTimersByTime(2000);
    await promise;

    expect(messageEl?.classList.contains('hidden')).toBe(true);
    expect(messageEl?.textContent).toBe('');
  });

  it('should resolve immediately if message element is not found', async () => {
    const result = await showMessage('No element', 1000);

    expect(result).toBeUndefined();
  });
});
