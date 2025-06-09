
export function showMessage(text: string, duration: number): Promise<void> {
  return new Promise ((resolve) => {
    const messageElement: HTMLElement | null = document.querySelector('.message-window');
  if (!messageElement) return resolve();
  
  hideMessage(messageElement);

  messageElement.textContent = text;
  messageElement.classList.remove('hidden');

  setTimeout(() => {
    hideMessage(messageElement);
    resolve();
  }, duration);
  })
  
}

function hideMessage(element: HTMLElement) {
  element.textContent = '';

  if (!element.classList.contains('hidden'))  {
    element.classList.add('hidden');
  } 
}