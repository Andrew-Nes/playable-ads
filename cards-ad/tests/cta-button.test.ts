import { createCtaButton } from 'src/components/layout/cta-button/cta-button';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Message Window Module', () => {
  let root: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);

    const mockLocation = {
      href: 'https://example.com',
    };

    vi.stubGlobal('location', mockLocation);
  });

  it('should create a cta button in the DOM', async () => {
    createCtaButton(root);

    const buttonEl = root.querySelector('.cta-button');

    expect(buttonEl).toBeTruthy();
    expect(buttonEl?.textContent).toBe('Continue playing');
    expect(location.href).toBe('https://example.com');
  });
});
