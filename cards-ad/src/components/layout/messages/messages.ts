import './messages.css';

export function createMessageWindow(root: HTMLElement): void {
  const messageElement = document.createElement('p');
  messageElement.classList.add('message-window');
  messageElement.classList.add('hidden');
  messageElement.setAttribute('role', 'status');
  messageElement.setAttribute('aria-atomic', 'true');
  messageElement.setAttribute('aria-live', 'polite');
  root.appendChild(messageElement);
}
