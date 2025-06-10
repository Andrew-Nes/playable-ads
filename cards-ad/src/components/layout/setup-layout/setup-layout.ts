import { createEndGameOverlay } from "../endgame-overlay/endgame-overlay";
import { createTable } from "../table/table";
import { initGame } from "src/components/game/init-game/init-game";


export function setupLayout(root: HTMLElement) {
  const title = document.createElement('h1');
  title.className = 'main-title'
  title.textContent = '⚔️ Card Clash ⚔️';
  root.appendChild(title);
 
  createTable(root);

  createEndGameOverlay(root);

  initGame();
}