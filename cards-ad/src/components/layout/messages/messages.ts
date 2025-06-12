import './messages.css';

export function createMessageWindow(root: HTMLElement): void {
  const messageElement = document.createElement('p');
  messageElement.classList.add('message-window');
  messageElement.classList.add('hidden');
  root.appendChild(messageElement);
}
