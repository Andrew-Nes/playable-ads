import './cta-button.css';

export function createCtaButton(rootElement: HTMLElement): void {
  const ctaButton = document.createElement('button');
  ctaButton.className = 'cta-button';
  ctaButton.textContent = 'Continue playing';
  ctaButton.addEventListener('click', () => {
    window.location.href = 'https://example.com';
  });
  rootElement.appendChild(ctaButton);
}
