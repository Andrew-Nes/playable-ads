import { describe, it, expect, vi, beforeEach } from 'vitest';

import { createEndGameOverlay } from 'src/components/layout/endgame-overlay/endgame-overlay';


vi.mock('src/components/layout/cta-button/cta-button', () => ({
  createCtaButton : (root: HTMLElement) => {
     const button = document.createElement('button');
      button.className = 'button';
      root.appendChild(button);
  }
}));

describe('createEndGameOverlay', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('div');
    document.body.innerHTML = ''; 

    vi.clearAllMocks();
  });

  it('creates overlay structure and appends to root', () => {
       
    createEndGameOverlay(root);
 
    const classNames = ['.end-overlay', '.end-popup', '.end-title', '.end-result', '.button'];
    
    classNames.forEach((className) => {
       const element = root.querySelector(className);
       expect(element).toBeTruthy();
    })
  });
})