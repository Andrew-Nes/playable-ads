import { setupLayout } from './components/layout/board/table';
import { createCardElement } from './components/layout/card/card';

import './style.css';


const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Game root element not found!');
}
setupLayout(appRoot);

const layout = document.querySelector('.game-table');

const card = createCardElement({
  suit: '♥',
  rank: 'A',
  value: 1
})

if (!layout) {
  throw new Error('table not found!');
}
layout.appendChild(card);