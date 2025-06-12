import { Card } from 'src/utils/types';

export function compareCards(
  playerCard: Card,
  dealerCard: Card
): 'player' | 'dealer' | 'tie' {
  if (playerCard.rank === '2' && dealerCard.rank === 'A') return 'player';

  if (playerCard.rank === 'A' && dealerCard.rank === '2') return 'dealer';

  if (playerCard.value > dealerCard.value) return 'player';

  if (dealerCard.value > playerCard.value) return 'dealer';

  return 'tie';
}
