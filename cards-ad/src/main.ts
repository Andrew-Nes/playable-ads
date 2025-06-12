import { setupLayout } from './components/layout/setup-layout/setup-layout';

import './style.css';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Game root element not found!');
}
setupLayout(appRoot);
