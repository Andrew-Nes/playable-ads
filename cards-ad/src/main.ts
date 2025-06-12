import { setupLayout } from './components/layout/setup-layout/setup-layout';
import { faviconUrl } from './utils/constants';
import { setFavicon } from './utils/helpers';

import './style.css';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Game root element not found!');
}
setupLayout(appRoot);
setFavicon(faviconUrl);
