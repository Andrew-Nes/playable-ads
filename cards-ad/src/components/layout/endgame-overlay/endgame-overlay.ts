import { createCtaButton } from '../cta-button/cta-button';

import './endgame-overlay.css';

export function createEndGameOverlay(rootElement: HTMLElement): void {
  const overlay = document.createElement('div');
  overlay.className = 'end-overlay';

  const popup = document.createElement('div');
  popup.className = 'end-popup';

  const heading = document.createElement('h2');
  heading.className = 'end-title';

  const result = document.createElement('p');
  result.className = 'end-result';

  popup.append(heading, result);
  overlay.appendChild(popup);

  createCtaButton(popup);

  rootElement.appendChild(overlay);
}
