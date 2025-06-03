import { setupLayout } from './components/layout/table/table';
import { createCardElement } from './components/layout/card/card';

import './style.css';


const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Game root element not found!');
}
setupLayout(appRoot);
