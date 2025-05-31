import './table.css';

export function setupLayout(root: HTMLElement) {
  const title = document.createElement('h1');
  title.textContent = 'Card Game';
  title.style.marginBottom = '16px';

  const table = document.createElement('div');
  table.className = 'game-table';

  const placeholder = document.createElement('p');
  placeholder.textContent = 'Game Table Area';
  placeholder.style.opacity = '0.6';

  table.appendChild(placeholder);
  root.appendChild(title);
  root.appendChild(table);
}