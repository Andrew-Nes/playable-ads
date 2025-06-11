
export function debounce(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let sounds: Record<string, HTMLAudioElement> = {};

export async function preloadSounds() {
  const flipSound = new Audio(
    (await import('../../public/sounds/flip-card.mp3')).default
  );
  sounds.flip = flipSound;

  return sounds;
}

export function playSound(name: string) {
  const sound = sounds[name];
  if (sound) {
    sound.currentTime = 0;
    void sound.play();
  }
}