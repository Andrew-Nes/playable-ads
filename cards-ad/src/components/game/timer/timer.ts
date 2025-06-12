import { updateGameState } from '../game-state/game-state';

let intervalId: number | null = null;

export function startTimer(duration: number): void {
  let timeLeft = duration;

  updateGameState({ timer: timeLeft });

  intervalId && clearInterval(intervalId);

  intervalId = window.setInterval(() => {
    timeLeft -= 1;
    updateGameState({ timer: timeLeft });
  }, 1000);
}

export function stopTimer(): void {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
